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
            <ol>
                <!-- Subheadings under section 3 -->
                <li><a href="#section3Sub1">AWS</a></li>
                <li><a href="#section3Sub2">Docker</a></li>
                <li><a href="#section3Sub2">Kafka</a></li>
                <li><a href="#section3Sub2">Streamlit</a></li>
            </ol>
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

![](/assets/hlsd_kafka_ow2.drawio-7-.png)

M﻿y HLSD seems pretty simple when looking back at it now but the road to it was paved with plenty of learnings.

</p> 

<!--StartFragment-->

<!-- Section 3: Wingin' it! --> 

<h2 id="section3">Wingin' it!</h2> 

<p>

T﻿his was my first project incorporating AWS, Docker, Kafka and Streamlit and some of the learnings I gained for each:

<!-- Subheading 3.1 --> <h3 id="section3Sub1">AWS</h3> 

<p>

Details for AWS

</p>

<!-- Subheading 3.1 --> <h3 id="section3Sub2">Docker</h3> 

<p>

Details for Docker

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

<iframe src="https://d385mfa5ih9aaj.cloudfront.net" width="1400" height="1200" />

</p>