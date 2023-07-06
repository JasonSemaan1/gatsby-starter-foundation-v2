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

L﻿ike any good heist adventure it became easier said than done.

</p> 

<!-- Section 3: Securing the data source --> 

<h2 id="section3">Securing the data source</h2> 

<p>

I﻿n order to extract my data as raw text I tried to manually copy & paste over 2 years of chat log entries by highlighting and scrolling up but soon realised this was not feasible as it was beyond boring. Next I realised that there was a handy little export chat log option however the output was not what I was expecting.

![](/assets/inbuilt_text_export.png)

So I decided to scour the internet for the help of the amazing Foundry VTT community (filled with plenty of Javascript geniuses) and voila! A nice & neat, fit for purpose macro that extracted all of the text I needed in a parser-able format.

![](/assets/redditmacro.png)

Like the climax of any good heist adventure I﻿ had successfully gotten to the vault of treasures - now I needed to slither inside and claim those precious insights.

</p> 

<!-- Section 4: Practicing my Python Parser-tongue --> 

<h2 id="section4">Practicing my Python Parser-tongue</h2> 

<p>

</p> 

I﻿ began carefully combing through my text file data source looking for recognisable patterns to parse, like a safe cracker listening for clicks as they slowly turn the dial of a combination lock. It was at this point I had to consider what data attributes I wanted to extract and aggregate on for my final product. I decided on:

* \# of critical hits
* t﻿otal amount of damage taken
* b﻿iggest hit taken
* h﻿ealing received
* h﻿ighest skill check roll
* \#﻿ of skill checks completed

W﻿ith my desired data points in mind I began identifying patterns common to each statistic that I needed Python to look for. After some time I identified patterns inherent with every type of roll that I could code Python to look for and aggregate a certain numerical value. However as I went through more and more examples, I realised that the structure of the data was dynamic based on the character that was rolling, as well as their circumstances at the time of rolling which would impact the row the final answer would appear.

![](/assets/identifying_parse_patterns.png)

My assembled crew of google, stackoverflow and chatGPT guided me as I continued to iterate on my Python code until it was able to identify each of the data points I was interested in. My code then generated a csv with the results. All looked well, however I had pasted the entire text file to a separate google sheet and completed some sanity checks to ensure the values were true.

M﻿y business verification testing was a success! W﻿ith my crew of tech assistants at my back I stared at the simple csv that I had generated with a level of confidence that the figures were accurate.

![](/assets/final_csv_output.png)

L﻿ike any good aftermath portion of a heist movie, I now had to figure out how I'd spend my valuable data treasures.

<!-- Section 5: Designing the Dashboard --> 

<h2 id="section5">Designing the Dashboard</h2> 

<p>

I﻿ opened Tableau with the eagerness of an artist in front of a blank canvas and began creating the structure of my dashboard. Using all of my data elements plus a few floating heads of my character's portraits I was able to create filters that dynamically showed the character with the highest stat per filter selection, as well as their number of rolls.

A﻿ few design choices to make it seem more fantasy themed and I was done.

T﻿o check it out yourself check it out below or visit it [here](https://public.tableau.com/views/DND_DASHBOARD_TEST/TheExposedTally?:language=en-GB&:display_count=n&:origin=viz_share_link) (feedback welcome!)

<iframe src="https://public.tableau.com/views/DND_DASHBOARD_TEST/TheExposedTally?:showVizHome=no&embed=true"width="1200" height="800"

\></iframe>

L﻿ike any good heist adventure I decided to share the spoils with my crew as a reminder of many years filled with goofs, ridiculousness and a heartfelt moment every now and then.

![](/assets/sharing_treasures.png)

## R﻿esources

https://www.reddit.com/r/FoundryVTT/comments/t2zwx3/converting_chat_log_to_readable_html/

https://app.diagrams.net/