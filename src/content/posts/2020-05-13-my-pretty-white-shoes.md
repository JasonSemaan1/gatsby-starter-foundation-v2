---
template: blog-post
title: Creating a  Choose Your Own Adventure Game in Python
slug: /cyoag-python
date: 2023-03-28 00:21
description: Creating a choose your own adventure game in python
featuredImage: /assets/dice-python-fun-bigger.png
---
<!DOCTYPE html>

<html>
<head>
	<title>Table of Contents</title>
</head>
<body>
	<h1>Table of Contents</h1>
	<ol>
		<!-- Link to section 1: Beginning The Boa -->
		<li><a href="#section1">Beginning The Boa</a></li>
		<!-- Link to section 2:  I'm Going To Need A Slithering Storyboard -->
		<li><a href="#section2">I'm Going To Need A Slithering Storyboard</a></li>
		<!-- Link to section 3: Charming The Cobra -->
		<li><a href="#section3">Charming The Cobra</a></li>
		<!-- Link to section 4: Scale-ing This Story Into My Narrative -->
		<li><a href="#section4">Scale-ing This Story Into My Narrative</a></li>
	</ol>

<!--StartFragment-->

<!-- Section 1: Beginning The Boa --> 

<h2 id="section1">Beginning The Boa</h2> 

<p>

The next step of my career dev journey was to tame the terrific Python and savor the swift, slithering satisfaction of solving complex coding needs.

![](/assets/python-dev-plan.png)

A﻿s a hobby I am a Dungeon Master in the co-operative tabletop roleplaying game Pathfinder which traces its roots back to the classic Dungeons & Dragons.

The game involves imagination, improv and a group of your best friends to not laugh too hard while you put on silly voices. The aim of the game is for the players to interact with the world and narrative the Game Master creates, allowing them the agency to make a choice which will impact the world in meaningful ways.

Coupling this hobby with learning Python seemed like a no-brainer.

The idea was simple enough - allow the player to input commands which would influence the flow of the story.

By combining my passion for storytelling and ambition to learn Python my next project idea was born: a classic Choose your own adventure game!



<!--StartFragment-->

<!-- Section 2: I'm Going To Need A Slithering Storyboard --> 

<h2 id="section2">I'm Going To Need A Slithering Storyboard </h2> 

<p>

 *"﻿The scariest moment is always just before you start" -* Stephen King

F﻿irst thing I needed was a story - the writing wouldn't be too much of a challenge as I'd lean on my experience writing fantasy to cook up something with a bit of depth that didn't take itself too seriously.

However writing a branching narrative was challenging as I'd have to be able to keep track of all the paths and options leading onto the next choice. After a bit of googling I found the helpful online tool Twinery. It allowed me to create paths with many different choices, displaying it in a clear visual format, which helped plan out the big picture of the story.

Ironically enough once I had laid out my paths and choices, I realised Twinery had the option to proof read and even play it straight away with no additional work required! However it was javascript-based and my eyes were on the prize with Python. Perhaps I'll save javascript for another day...



![](/assets/storyboard.png)

<!--StartFragment-->

<!-- Section 3: Charming The Cobra --> 

<h2 id="section3">Charming The Cobra </h2> 

<p>

M﻿y story was set and I could finally begin writing out the Python code.

M﻿y IDE of choice was vscode so I opened up a new python file and began the learning journey.

O﻿n one screen a black void opened up endlessly before me - the other screen a man patiently walking through a tutorial on how to make your own adventure game.

W﻿ith the help of a few video tutorials I picked up some best practices when handling user text inputs, such as the lower() and strip() functions which standardised what the user entered to ensure the story could continue successfully. I also learnt of the 'time' module in Python to add a bit of dramatic flair to the story outputs. An essential tip was the use of loops via 'while True' and nested if/elif functions to ensure certain choices would start from the beginning and allow the player to use their new found knowledge to try a different path from the beginning.

T﻿he main code logic I settled on was to define every story choice and then return any other connected story choice based on user input. This resulted in an interweaved web of story choices leading to a next step, conclusion or new beginning.

![](/assets/total_code_size.png)

7﻿26 lines of code and a long period of testing later and my game was complete.

<!--StartFragment-->

<!-- Section 4: Scale-ing This Story Into My Narrative --> 

<h2 id="section4">Scale-ing This Story Into My Narrative</h2> 

<p>



**R﻿esources**

[W﻿riting a Text-Based Adventure Game in Python](https://youtu.be/miuHrP2O7Jw)

[C﻿hoose Your Own Adventure Game in Python (Beginners](https://youtu.be/DEcFCn2ubSg)

<https://inventwithpython.com/invent4thed/chapter5.html>

https://twinery.org/

C﻿hatGPT