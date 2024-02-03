---
template: blog-post
title: Creating a SQL Powered Scrabble Quick List
slug: /scrabble-quick-list
date: 2023-03-25 16:16
description: sql, scrabble
featuredImage: /assets/sql-icons-big.png
---
**U﻿pdate 2024/02/03:** With IPv4 addresses becoming more scarce, I had to modify the connection string to a IPv6 version. Thankfully Supabase made it pretty easy so all I had to do was login to the retool app and update the connection config. Scrabble away!

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

F﻿irst came the data - thanks to a helpful stackoverflow post I was able to download a .txt file which listed all valid Scrabble words. A few Excel formulas helped calculate the score value of each word.

N﻿ow where do I store this data?

</p> 

<!-- Section 3: Enabling the Database --> 

<h2 id="section3">Enabling the Database</h2> 

<p>

My searching for database solutions returned Supabase as a viable solution - it had robust API documentation and used postgres in the background. This was great as earlier I had uploaded my word list to a local postgres instance to practice queries, so I was familiar with the postgres syntax.

</p> 

<!-- Section 4: Navigating a front-end form --> 

<h2 id="section4">Navigating a front-end form</h2> 

<p>

W﻿ith my back-end database in place I needed to somehow figure out how to have it talk to a front-end form that would capture user input and feed a custom query based on this input to return relevant values.

M﻿y front-end knowledge is limited so this posed a challenge. As fate (or overlistening devices ready to personalise my ads) would have it, while scrolling Facebook one day I was presented with Retool. It was an app which supported an api to connect to Supabase AND allow for javascript functions to inject variable fields into a SQL query.

Working in a data field, I﻿ usually deplore my invasion of privacy to personalise my ad experience but in this case I'll make an exception.

<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expandable SQL Text Box</title>
<style>
  .sql-code-container {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
  }

  textarea {
    width: 100%;
    min-height: 156px; / *Adjusted to display first 8 lines* /
    max-width: 500%; / *Adjusted to be 5 times wider* /
    resize: vertical;
    font-family: monospace;
    white-space: pre-wrap;
  }
</style>

</head>
<body>
  <h1>Final SQL Query with Javascript injections</h1>
  <div class="sql-code-container">
    <textarea readonly>-- Create a temporary table 'letters' with the input values
WITH
  letters AS (
    SELECT
      unnest(
        ARRAY\\\\\[
          {{textInput1.value.toUpperCase()}},
          {{textInput2.value.toUpperCase()}},
          {{textInput3.value.toUpperCase()}},
          {{textInput4.value.toUpperCase()}},
          {{textInput5.value.toUpperCase()}},
          {{textInput6.value.toUpperCase()}},
          {{textInput7.value.toUpperCase()}},
          {{textInput8.value.toUpperCase()}},
          {{textInput9.value.toUpperCase()}},
          {{textInput10.value.toUpperCase()}},
          {{textInput11.value.toUpperCase()}},
          {{textInput12.value.toUpperCase()}},
          {{textInput13.value.toUpperCase()}},
          {{textInput14.value.toUpperCase()}},
          {{textInput15.value.toUpperCase()}}
        ]
      ) AS letter
  ),
  -- Count occurrences of each letter in 'letters'
  letter_counts AS (
    SELECT
      letter,
      COUNT(\\\\\*) AS count
    FROM
      letters
    GROUP BY
      letter
  )
-- Main query to find valid words
SELECT
  "Actual_Word",
  "Value"
FROM
  scrabble_Sql
  -- Join with 'letter_counts' to match words containing input letters
  JOIN letter_counts ON (
    LENGTH("Actual_Word") - LENGTH(REPLACE("Actual_Word", letter_counts.letter, ''))
  ) <= letter_counts.count
WHERE
  -- Filter words with length less than or equal to the count of input letters
  LENGTH("Actual_Word") <= (
    SELECT
      COUNT(\\\\\*)
    FROM
      letters
  )
  -- Exclude words with characters not in the input letters
  AND NOT EXISTS (
    SELECT
      1
    FROM
      regexp_split_to_table("Actual_Word", '') char
    WHERE
      char NOT IN (
        SELECT
          letter
        FROM
          letters
      )
  )
-- Group by 'Actual_Word' and 'Value'
GROUP BY
  "Actual_Word",
  "Value"
-- Filter words that use all input letters
HAVING
  COUNT(*) = (
    SELECT
      COUNT(DISTINCT letter)
    FROM
      letters
  )
-- Order by the word value in descending order
ORDER BY
  "Value" DESC;</textarea>
  </div>
</body>
</html>

I﻿t's alive! My query was behaving as expected and returned an an output where the highest scoring words were presented first and only instances of <= all letters were present in a word.

N﻿ow all that was left was to spruce up the front-end with a fresh coat of paint to the form design.

![](/assets/sql_final_result.png)

</p> 

<!-- Section 5: Uplifting Home Page to showcase SQL --> 

<h2 id="section5">Uplifting Home Page to showcase SQL</h2> 

<p>

W﻿ith my app in a good state my next task was to embed it into my website. My initial attempt involved looking at Retool's Embed functionality which required self-hosting to create a personal access token and use the api to connect app to website. Unfortunately pursuing AWS deployment using their one-click deploy option continuously threw up errors, so I opted for the shortcut approach of simply creating a shareable public URL.

T﻿he final piece of the puzzle was to create a SQL icon on my home page that would serve as a hyperlink to the app site hosted via Retool.

After a long journey of trial, error and a whole lot of learning my app was born. Check it out below or available [here](https://jasonsemaan1.retool.com/embedded/public/cc3e87c8-fc2d-4ec5-971e-e4bc661964b4).

<iframe src="https://jasonsemaan1.retool.com/embedded/public/cc3e87c8-fc2d-4ec5-971e-e4bc661964b4" width="800" height="750" />

I﻿f you've come this far thank you for coming along on this learning journey with me.

</p> 

</body> 

</html>

<!--EndFragment-->

**R﻿esources:**

<https://www.reddit.com/r/SQL/comments/g4ct1l/comment/fnx11mc/>

<https://boardgames.stackexchange.com/questions/38366/latest-collins-scrabble-words-list-in-text-file>

<https://supabase.com/docs>

<https://docs.retool.com/docs>

<https://chat.openai.com/chat?model=gpt-4>