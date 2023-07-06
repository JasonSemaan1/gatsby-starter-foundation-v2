---
template: blog-post
title: Designing a D&D Dashboard
slug: /designing-D&D-Dashboard
date: 2023-04-16 01:41
description: Building a D&D Dashboard
featuredImage: /assets/thehiddentalon-pic.png
---
<!DOCTYPE html>

<html>
<head>
	<title>Table of Contents</title>
</head>
<body>
	<h1>Table of Contents</h1>
	<ol>
		<!-- Link to section 1: Origin of the idea -->
		<li><a href="#section1">Origin of the idea</a></li>
		<!-- Link to section 2: Plotting out the pipeline -->
		<li><a href="#section2">Plotting out the pipeline</a></li>
		<!-- Link to section 3: Securing the data source -->
		<li><a href="#section3">Securing the data source</a></li>
		<!-- Link to section 4: Practicing my Python Parser-tongue-->
		<li><a href="#section4">Practicing my Python Parser-tongue</a></li>
		<!-- Link to section 5: Designing the Dashboard-->
		<li><a href="#section5">Designing the Dashboard</a></li>
	</ol>

<!--StartFragment-->

<!-- Section 1: Origin of the idea --> 

<h2 id="section1">Origin of the idea</h2> 

<p>

M﻿y last few projects involved SQL & Python and it had been a while since I created anything in Tableau, so I decided to venture back into visualisation. I wanted to combine Python & Tableau to take a raw data set, transform it and then feed into Tableau to allow my players a chance at data-driven self-reflection.

L﻿ike any good adventuring party moments before a heist, I created a plan.

</p> 

<!-- Section 2: Plotting out the pipeline --> 

<h2 id="section2">Plotting out the pipeline</h2> 

<p>

![](/assets/drawio_dashboard_plan.drawio.png)

T﻿he plan of attack was to extract the chat log from within Foundry VTT, my group's preferred method of playing Table Top Role Playing games online. Once I had this as a text file I needed to create a Python text parser which was capable of recognising patterns within my dataset for each of my character's many, many, many (and I mean many) actions within the game and write this to a csv which would be ingested by Tableau.

L﻿ike any good heist movie it became easier said than done.

</p> 

<!-- Section 3: Securing the data source --> 

<h2 id="section3">Securing the data source</h2> 

<p>

I﻿n order to extract my data as raw text I tried to manually copy & paste over 2 years of chat log entries by highlighting and scrolling up but soon realised this was not feasible as it was beyond boring. Next I realised that there was a handy little export chat log option however the output was not what I was expecting.

![](/assets/inbuilt_text_export.png)

So I decided to scour the internet for the help of the amazing Foundry VTT community (filled with plenty of Javascript geniuses) and voila! A nice & neat, fit for purpose macro that extracted all of the text I needed in a parser-able format.

![](/assets/redditmacro.png)

</p> 

<!-- Section 4: Practicing my Python Parser-tongue --> 

<h2 id="section4">Practicing my Python Parser-tongue</h2> 

<p>

</p> 

<!-- Section 5: Designing the Dashboard --> 

<h2 id="section5">Designing the Dashboard</h2> 

<p>

## R﻿esources

https://www.reddit.com/r/FoundryVTT/comments/t2zwx3/converting_chat_log_to_readable_html/

https://app.diagrams.net/