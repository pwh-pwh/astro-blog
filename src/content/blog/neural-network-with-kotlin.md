---
author: coderpwh
pubDatetime: 2024-02-23T08:02:00.827Z
title: kotlin实现简易神经网络入门
slug: neural-network-with-kotlin
featured: false
draft: false
tags:
  - Neural-Network
  - Kotlin
description: "使用kotlin实现简单神经网络入门案例."
---

偶然刷到一篇关于神经网络的文章，刚好是入门的内容，所以就看下来了。收获很大，就补充了相关资料，并用kotlin简单写了个案例，现在在这里记录一下。


## Table of contents

## Features & Changes

### Astro v3 Integration

<video autoplay loop="loop" muted="muted" plays-inline="true">
  <source src="https://github.com/satnaing/astro-paper/assets/53733092/18fdb604-1ca3-41a0-8372-1367759091ff" type="video/mp4">
  <!-- <source src="/assets/docs/astro-paper-v3-view-transitions-demo.mp4" type="video/mp4"> -->
</video>

AstroPaper now fully supports [Astro v3](https://astro.build/blog/astro-3/), offering improved performance and rendering speed.

Besides, we've added support for Astro's [ViewTransitions API](https://docs.astro.build/en/guides/view-transitions/), allowing you to create captivating and dynamic transitions between views.

In the "Recent Section", only non-featured posts will be displayed to avoid duplications and better support for ViewTransitions API.

### Update OG Image Generation Logic

![Example OG Image](https://user-images.githubusercontent.com/40914272/269252964-a0dc6735-80f7-41ed-8e74-4d4d70f96891.png)

We've updated the logic for automatic OG image generation, making it even more reliable and efficient. Besides, it now supports special characters in post titles, ensuring accurate, flexible and eye-catching social media previews.

`SITE.ogImage` is now optional. If it is not specified, AstroPaper will automatically generate an OG image using `SITE.title`, `SITE.desc` and `SITE.website`

### Theme meta tag

The theme-color meta tag has been added to dynamically adapt to theme switches, ensuring a seamless user experience.

> Notice the difference at the top

**_AstroPaper v2 theme switch_**

<video autoplay loop="loop" muted="muted" plays-inline="true">
  <source src="https://github.com/satnaing/astro-paper/assets/53733092/3ab5a1e8-1891-4264-a5bb-0ded69143c1a" type="video/mp4">
</video>

**_AstroPaper v3 theme switch_**

<video autoplay loop="loop" muted="muted" plays-inline="true">
  <source src="https://github.com/satnaing/astro-paper/assets/53733092/8ac9deb8-d1f8-4029-86bd-6aa0def380b4" type="video/mp4">
</video>

## Other Changes

### Astro Prettier Plugin

Astro Prettier Plugin is installed out-of-the-box in order to keep the project tidy and organized.

### Minor Style Changes

The single-line code block wrapping issue has been solved, making your code snippets look pristine.

Update nav style CSS to allow adding more nav links to the navigation.

## Upgrade to AstroPaper v3

> This section is only for those who want to upgrade AstroPaper v3 from the older versions.

This section will help you migrate from AstroPaper v2 to AstroPaper v3.

Before reading the rest of the section, you might also want to check [this article](https://astro-paper.pages.dev/posts/how-to-update-dependencies/) for upgrading dependencies and AstroPaper.


