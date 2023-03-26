---
template: blog-post
title: Creating a SQL Powered Scrabble Quick List
slug: /scrabble-quick-list
date: 2023-03-25 16:16
description: sdasd
featuredImage: /assets/sql-icons.png
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
		<!-- Link to section 3: Enabling the Database -->
		<li><a href="#section3">Enabling the Database</a></li>
		<!-- Link to section 4: Navigating a front-end form -->
		<li><a href="#section4">Navigating a front-end form</a></li>
		<!-- Link to section 5: Uplifting Home Page to showcase SQL -->
		<li><a href="#section5">Uplifting Home Page to showcase SQL</a></li>
		<!-- Link to section 6: Deploying via Netlify -->
		<li><a href="#section6">Deploying via Netlify</a></li>
	</ol>

<!--StartFragment-->

<!-- Section 1: Origin of the idea --> 

<h2 id="section1">Origin of the idea</h2> 

<p>

A﻿fter spending time on various Excel and Tableau projects my next personal dev goal was to move onto the next tool in any data analyst's toolkit: SQL.

![](/assets/image001.png)

M﻿y first step was to find an idea that would provide a simple enough use case case to flex my SQL skills in a presentable way. I took to the subreddit /r/SQL for some inspiration where I was fortunate to find a comment that planted the seed of my project. 

![](/assets/origin_of_idea.png)

![](/assets/origin_of_idea_v2.png)

W﻿ith my above-head-lightbulb at full brightness, I unpacked stiff's comment focusing on the Scrabble aspect. I extracted requirements I wanted to solve for:

1. A﻿ column with all words approved as per Scrabble guidelines ([thanks StackOverflow!](https://boardgames.stackexchange.com/questions/38366/latest-collins-scrabble-words-list-in-text-file))
2. A﻿ column with each words' score value (Excel to the rescue!)
3. User's ability to enter any combination of letters, re-arranging to return all letters that can be made
4. A﻿ front-end method of capturing inputs, passing this to the database and returning it in a visually appealing way.

A﻿fter documenting all of my requirements I realised I was going to need a pipeline.

</p> 

<!-- Section 2: Plotting out the pipeline --> 

<h2 id="section2">Plotting out the pipeline</h2> 

<p>

![](/assets/data-pipeline.drawio.png)

F﻿irst came the data- thanks to a helpful stackoverflow post I was able to download a .txt file which listed all valid Scrabble words. A few Excel formulas helped calculate the score value of each word.

N﻿ow where do I store this data?

</p> 

<!-- Section 3: Enabling the Database --> 

<h2 id="section3">Enabling the Database</h2> 

<p>

My searching for database solutions returned Supabase as a viable solution - it had robust API documentation and used postgres in the background which was great as I had uploaded my word list to a local instance to practice queries.

</p> 

<!-- Section 4: Navigating a front-end form --> 

<h2 id="section4">Navigating a front-end form</h2> 

<p>

W﻿ith my back-end database in place I needed to somehow figure out how to have it talk to a front-end form that would capture user input and feed a custom query based on this input to return relevant values.

M﻿y front-end knowledge is limited so this posed a challenge. As fate (or overlistening devices ready to personalise my ads) would have it, while scrolling Facebook one day I was presented with Retool. It was an app which supported an api to connect to Supabase AND allow for javascript functions to inject variable fields into a SQL query.

Working in a data field, I﻿ usually deplore my invasion of privacy to personalise my ad experience but in this case I'll make an exception.



I﻿t's alive! My query was behaving as expected and returned an an output where the highest scoring words were presented first and only instances of <= all letters were present in a word.

N﻿ow all that was left was to spruce up the front-end with a fresh coat of paint to the form design.

![](/assets/sql_final_result.png)

</p> 

<!-- Section 5: Uplifting Home Page to showcase SQL --> 

<h2 id="section5">Uplifting Home Page to showcase SQL</h2> 

<p>

W﻿ith my app in a good state my next task was to embed it into my website. My initial attempt involved looking at Retool's Embed functionality which required self-hosting to create a personal access token and use the api to connect app to website. Unfortunately pursuing AWS deployment using their one-click deploy option continuously threw up errors, so I opted for the shortcut approach of simply creating a shareable public URL.

T﻿he final piece of the puzzle was to create a SQL icon on my home page that would serve as a hyperlink to the app site hosted via Retool.

I﻿f you've come this far thank you for coming along with this learning journey with me.

</p> 

</body> 

</html>

<!--EndFragment-->

**R﻿esources:**

<https://www.reddit.com/r/SQL/comments/g4ct1l/comment/fnx11mc/>

<https://boardgames.stackexchange.com/questions/38366/latest-collins-scrabble-words-list-in-text-file>

ChatGPT

<https://supabase.com/docs>

<https://docs.retool.com/docs>