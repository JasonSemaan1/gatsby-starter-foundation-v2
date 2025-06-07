---
template: blog-post
title: "Comfy & Stable: The Flux-uating progress of AI Image Generation"
slug: ai-image-gen
date: 2024-12-22 15:50
description: Using comfyui workflows and flux diffusion models to create AI
  images of yourself
featuredImage: /assets/jason_4way.jpg
---

<!DOCTYPE html>

<html>
<head>
        <title>Table of Contents</title>
</head>
<body>
        <h1>Table of Contents</h1>
        <ol>
                <!-- Link to section 1: Flux and the Selfieverse -->
                <li><a href="#section1">Flux and the Selfieverse</a></li>
                <!-- Link to section 2: Comfy Connections -->
                <li><a href="#section2">Comfy Connections</a></li>
                <!-- Link to section 3: Prompt Control to Major Flux -->
                <li><a href="#section3">Prompt Control to Major Flux</a></li>
        </ol>

<!--StartFragment-->

<!-- Section 1: Flux and the Selfieverse -->

<h2 id="section1">Flux and the Selfieverse</h2>

<p>
When I first heard about <strong>FluxGym</strong>, I was intrigued by the promise of cloud-based LoRA training with almost zero setup. After a quick sign-up, I uploaded a mix of selfies—some candid, some carefully lit. FluxGym's UI guided me through tagging each image and setting basic hyperparameters. Watching the logs scroll by as my facial features slowly emerged in the model felt like watching a digital mirror being built from scratch.
</p>

<!--StartFragment-->

<!-- Section 2: Comfy Connections -->

<h2 id="section2">Comfy Connections</h2>

<p>
With the LoRA downloaded, it was time to put <strong>ComfyUI</strong> through its paces. I built a simple workflow that loads the base model, injects my new LoRA, and gives me immediate previews. Tinkering with different nodes and samplers taught me how small adjustments can dramatically change the final render. Seeing my training data come to life inside ComfyUI was the moment it all clicked.
</p>

<!--StartFragment-->

<!-- Section 3: Prompt Control to Major Flux -->

<h2 id="section3">Prompt Control to Major Flux</h2>

<p>
The last step was mastering prompt crafting. Combining my LoRA with FluxGym's base models opened up a playground of styles. I experimented with keywords like <em>cinematic lighting</em> and <em>illustration</em> to nudge the AI in new directions. Each prompt was a conversation with the model: the better I described the scene, the closer it aligned with my creative vision. After plenty of trial and error, I found a handful of prompts that consistently generated images that felt uniquely “me.”
</p>

</body>
</html>