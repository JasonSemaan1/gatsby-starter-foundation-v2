---
template: blog-post
title: "Overwatch 2: Using Kafka Topics to Retrieve Player Details"
slug: /overwatch2_kafka_python
date: 2024-01-10 14:21
description: Using an AWS EC2 instance hosted kafka topic to retrieve Overwatch
  2 data from the OverFast API and display in a python powered streamlit
  dashboard.
featuredImage: /assets/project_picv4.png
---
<!DOCTYPE html>

<html>
<head>
	<title>Table of Contents</title>
</head>
<body>
	<h1>Table of Contents</h1>
	<ol>
		<!-- Link to section 1: Reality bends to my will -->
		<li><a href="#section1">Reality bends to my will</a></li>
		<!-- Link to section 2: Oh let's break it down! -->
		<li><a href="#section2">Oh let's break it down!</a></li>
		<!-- Link to section 3: Wingin' it! -->
		<li>
            <a href="#section3">Wingin' it!</a>
            <ul>
                <!-- Subheadings under section 3 -->
                <li><a href="#section3Sub0">Local Deployment</a></li>
                <li><a href="#section3Sub1">AWS</a></li>
                <li><a href="#section3Sub2">Docker</a></li>
                <li><a href="#section3Sub3">Kafka</a></li>
                <li><a href="#section3Sub4">Streamlit</a></li>
            </ul>
        </li>
		<!-- Link to section 4: Troubleshooting from the hip -->
		<li><a href="#section4">Troubleshooting from the hip</a></li>
		<!-- Link to section 5: Designing the Dashboard -->
		<li><a href="#section5">Designing the Dashboard</a></li>
	</ol>            

<!--StartFragment-->

<!-- Section 1: Reality bends to my will --> 

<h2 id="section1">Reality bends to my will</h2> 

<p>

Recently two things have been on my mind.

**A﻿t work:** explaining data pipelines to non-technical teams who require support in understanding how to use them to achieve their business objectives. Enabled by Kafka (not the Lebanese minced lamb dish).

**N﻿ot at work:** Overwatch 2. Nothing beats after a long day jumping into Discord with your friends to join a 5v5 deathmatch where you fight until your fingers hurt and you need a new keyboard to gloriously...lose?

![](/assets/screenshot-2024-03-14-205258.png)

N﻿ow that can't be right! Everyone was warmed up and ready to perform...was our timing off? Did we push too aggressively? Was it me?

A﻿ll normal thoughts when in the love/hate relationship that is Overwatch 2. After a bout of poor performance the thought crossed my mind - I had been looking for an engaging use case to get familiarity with Kafka to enable real-time data streaming, what if I could leverage game analytics to see how I've performed?

</p> 

<!--StartFragment-->

<!-- Section 2: Oh let's break it down! --> 

<h2 id="section2">Oh let's break it down!</h2> 

<p>

G﻿ame plan time - I want to be able to scrape game data, more specifically player stats and then display them in a visually friendly way to review how I've done. Breaking it down into steps I would need to:

1. **Identify a source of game performance metrics:** A big shout toValentin "TeKrop" PORCHET for creating the [OverFast API](https://overfast-api.tekrop.fr/) which scrapes data from official Blizzard pages to obtain the data suitable to power my experiment.
2. F﻿ind a suitable tech stack that will enable me to run a Kafka cluster to stream data from the API call to my reporting solution
3. Assess a reporting solution that can ingest from the Kafka topic and display the necessary visualisations
4. H﻿ost this dashboard somewhere and allow users to input any player name to retrieve their performance

S﻿ounds pretty straightforward right? 

I﻿ was a sweet summer child before I started this project - soon I found myself hopping between software faster than a kangaroo on coals. Which brings me to my High Level Solution Diagram:

![](/assets/hlsd_kafka_ow2.drawio-8-.png)

M﻿y HLSD seems pretty simple when looking back at it now but the road to it was paved with plenty of learnings.

</p> 

<!--StartFragment-->

<!-- Section 3: Wingin' it! --> 

<h2 id="section3">Wingin' it!</h2> 

<p>

T﻿his was my first project incorporating AWS, Docker, Kafka and Streamlit and some of the learnings I gained for each:

<!-- Subheading 3.1 --> <h3 id="section3Sub0">Local Deployment</h3> 

<p>

Before jumping into the cloud I wanted to test the underlying components of Python facilitating the hops between systems on my local Windows machine. My scripts had to:

1. A﻿ct as a producer by calling an API
2. P﻿ass it to a Kafka Topic
3. C﻿onvert json to csv 
4. H﻿ave streamlit script read csv and format as required

I﻿t was also my first time deploying Zookeeper & Kafka and I learnt that Kafka on Windows requires shortened file paths. Multiple installation errors of trying to locate dependent files taught me this the hard way. I created a flowchart detailing each of the commands to run & what each command was doing while also documenting learnings along the way.

![](/assets/local_deployment_overview.drawio-1-.png)

L﻿ocal deployment was a success - it was now time to get my head in the cloud.

</p>

<!-- Subheading 3.1 --> <h3 id="section3Sub1">AWS</h3> 

<p>

I﻿ had to learn a lot about AWS - I started by googling how to spin up a virtual machine 24/7 through AWS and learnt that ec2 was the way to go. I was eligible for AWS' free tier so could use a t2.micro with 30gbs of storage for next to no cost. Next was security groups, where I had to create configurations that would allow different systems to send traffic to, from and within each other within my ec2 instance. I knew I had to open ports for the following:

* **s﻿sh** to allow for remote access of my ec2
* **z﻿ookeeper** to support in managing my kafka deployment
* **k﻿afka** so it could receive incoming json payloads
* **s﻿treamlit** to allow anyone access to input battletags and search

O﻿nce my ec2 was up and running I had to learn how to ssh into it from my local machine to upload my python scripts and begin installing zookeeper, kafka and Docker.

I﻿ also learnt about using .pem files that would allow for securely ssh'ing in by first navigating to the file path location containing my .pem before being granted access.

W﻿ith my ec2 now up and running I ssh'ed in and began transferring files and installing the necessary software.

```shell
#navigate to my .pem file
cd "C:\path\to\my\pem\dashboard.pem"

#ssh into my ec2
ssh -i dashboard.pem ec2-user@my-instance-public-dns

#xfer files from local to ec2
scp -i "C:\path\to\my\pem\dashboard.pem" "C:\path\to\my\local\files\aws_python_scripts" ec2-user@my-instance-public-dns:/home/ec2-user/

#if i need to download copies of files if changes have been made in ec2
scp -r -i "C:\path\to\my\pem\dashboard.pem" ec2-user@my-instance-public-dns:/home/ec2-user/ "C:\path\to\my\local\files\aws_python_scripts"

#ensure ec2 package repo is updated
sudo yum update -y

#install java
sudo yum install java-1.8.0-openjdk -y

#get kafka
wget https://archive.apache.org/dist/kafka/2.13-3.1.0/kafka_2.13-3.1.0.tgz
#extract latest kafka
tar -xzf kafka_2.13-3.1.0.tgz

#install python
sudo yum install python3
```

H﻿owever as I started to install all of these I was quickly realising that all of these libraries and softwares could be tricky if I had to deal with different dependencies across them. I had learnt at work that python venvs were best practice to avoid conflicts but I was starting to think I wanted each contributing service to have its own containerised instance where they could interact with each other.

T﻿his brought me to...

</p>

<!-- Subheading 3.2 --> <h3 id="section3Sub2">Docker</h3> 

<p>

![](/assets/docker_cert.png)

Where would I be without [Fireship](https://www.youtube.com/watch?v=rIrNIzy6U_g)? This video was a great help when I started on the Docker journey.

</p>

<!-- Subheading 3.3 --> <h3 id="section3Sub3">K﻿afka</h3> 

<p>

Details for Kafka

</p>

<!-- Subheading 3.4 --> <h3 id="section3Sub4">S﻿treamlit</h3> 

<p>

Details for S﻿treamlit

</p>

</p> 

<!--StartFragment-->

<!-- Section 4: T﻿roubleshooting from the hip --> 

<h2 id="section3">T﻿roubleshooting from the hip</h2> 

<p>

</p> 

<!--StartFragment-->

<!-- Section 5: Designing the Dashboard --> 

<h2 id="section5">Designing the Dashboard</h2> 

<p>



</p>