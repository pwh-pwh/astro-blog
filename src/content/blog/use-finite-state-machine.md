---
title: 有限状态机简要使用
author: coderpwh
pubDatetime: 2024-02-18T09:37:51.521Z
slug: use-finite-state-machine
featured: false
draft: false
tags:
  - Kotlin
  - Finite-State-Machine
  - AdventOfCode
description:
  "有限状态机简单题目案例."
---

> 在使用kotlin刷adventofcode的时候遇到一道简单的关于有限状态机的题目，很久没有接触了，故记录一下.

相信有接触过编译原理的多多少少对有限状态机有过了解，当在实际应用中比较少，而它的思想又比较重要，不只是一种数学模型。。。

## Table of contents

## 介绍

有限状态机多用于对对象行为进行建模，说白了和人的一生差不多，How to choose很重要，人的一系列行为选择会导致或者发生结果。以下是对比人的建模
* 状态：人的某些现状或者条件，如 长得帅，缺钱，会编程
* 事件：人的某些行为或者做法，如 表白，借钱，找it工作
* 动作：人的行为或者做法在某些条件下发生的动作， 如 表白失败再次成为单身贵族，借钱投资发财，找到工作
* 变换：条件满足后，人的新状态， 如 负翁，单身贵族

## Tech Stack

This project is a frontend project without any backend codes. The UI/UX part is designed in Figma. For the frontend user-interface, I chose React over pain JavaScript and NextJS. Why?

- Firstly, I want to write declarative code. Managing HTML DOM using JavaScript imperatively is really tedious.
- Secondly, because it is React!!! It is fast, and reliable.
- Lastly, I don’t need much of the SEO features, routing and image optimization provided by NextJS.

And of course there's TypeScript for type checking.

For styling, I took a different approach than what I usually do. Instead of choosing Pure CSS, Sass, or Utility CSS Framework like TailwindCSS, I chose the CSS-in-JS way (Styled-Components). Although I’ve known about Styled-Components for some time, I’ve never tried it out. So, the writing style and structures of Styled-Components in this project may not be very organized or very good.

This project doesn’t need very complex state management. I just use ContextAPI in this project for multiple theming and to avoid prop drilling.

Here’s a quick recap for the tech stack.

- Frontend: [ReactJS](https://reactjs.org/ "React Website"), [TypeScript](https://www.typescriptlang.org/ "TypeScript Website")
- Styling: [Styled-Components](https://styled-components.com/ "Styled-Components Website")
- UI/UX: [Figma](https://figma.com/ "Figma Website")
- State Management: [ContextAPI](https://reactjs.org/docs/context.html "React ContextAPI")
- Deployment: [Netlify](https://www.netlify.com/ "Netlify Website")

## Features

Here are some features of the project.


