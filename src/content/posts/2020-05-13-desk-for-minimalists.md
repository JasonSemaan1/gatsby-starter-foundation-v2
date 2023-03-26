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

Here, we'll cover how to set up and enable the database, including selecting the appropriate technology, designing the schema, and creating queries.

</p> 

<!-- Section 4: Navigating a front-end form --> 

<h2 id="section4">Navigating a front-end form</h2> 

<p>

This section will explain how to navigate and interact with the front-end form, including how to input and submit data, as well as any validation or error handling mechanisms in place.



```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expandable SQL Text Box</title>
<style>
  .sql-code-container {
    position: relative;
  }
  
  textarea {
    width: 100%;
    min-height: 100px;
    overflow: hidden;
    resize: none;
  }
  
  .toggle-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: lightgray;
    padding: 4px 8px;
    cursor: pointer;
    user-select: none;
  }
</style>
<script>
  function toggleFullCode() {
    var textarea = document.getElementById("sqlCode");
    var toggleBtn = document.getElementById("toggleBtn");
    
    if (textarea.style.maxHeight === "180px") {
      textarea.style.maxHeight = "none";
      toggleBtn.innerHTML = "Click here to see only the first 10 lines";
    } else {
      textarea.style.maxHeight = "180px";
      toggleBtn.innerHTML = "Click here to see full code block";
    }
    
    autoResize(textarea);
  }
  
  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }
</script>
</head>
<body>
  <h1>Final SQL Query with Javascript injections</h1>
  <div class="sql-code-container">
    <textarea id="sqlCode" oninput="autoResize(this)" style="max-height: 180px;">WITH
  letters AS (
    SELECT
      unnest(
        ARRAY[
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
  letter_counts AS (
    SELECT
      letter,
      COUNT(*) AS count
    FROM
      letters
    GROUP BY
      letter
  )
SELECT
  "Actual_Word",
  "Value"
FROM
  scrabble_Sql
  JOIN letter_counts ON (
    LENGTH("Actual_Word") - LENGTH(REPLACE("Actual_Word", letter_counts.letter, ''))
  ) <= letter_counts.count
WHERE
  LENGTH("Actual_Word") <= (
    SELECT
      COUNT(*)
    FROM
      letters
  )
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
GROUP BY
  "Actual_Word",
  "Value"
HAVING
  COUNT(*) = (
    SELECT
      COUNT(DISTINCT letter)
    FROM
      letters
  )
ORDER BY
  "Value" DESC;</textarea>
    <div id="toggleBtn" class="toggle-btn" onclick="toggleFullCode()">Click here to see full code block</div>
  </div>
</body>
</html>

```

</p> 

<!-- Section 5: Uplifting Home Page to showcase SQL --> 

<h2 id="section5">Uplifting Home Page to showcase SQL</h2> 

<p>

Here, we'll discuss how to enhance the home page to showcase SQL data, including visualizations, analytics, and other interactive elements.</p> <!-- Section 6: Deploying via Netlify --> <h2 id="section6">Deploying via Netlify</h2> <p>In this final section, we'll cover how to deploy the project via Netlify, including any necessary configurations, settings, and optimizations.

</p> 

</body> 

</html>

<!--EndFragment-->