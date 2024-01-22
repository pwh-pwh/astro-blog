---
title: My Third Blog Post
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "Thumbnail of Astro rays."
pubDate: 2023-01-19
tags: ["astro", "learning in public", "setbacks", "community"]
---

博客0成本部署记录

## astro项目部署
使用github账号登录[netlify](www.netlify.com),该站可以导入github项目，并自动ci

## 免费域名申请
这个平台[cloudns](https://www.cloudns.net/)可以免费申请域名

## 自定义域名并添加ssl
注册[cloudflare](https://dash.cloudflare.com)账号，并添加在cloudns申请的域名站点，在cloudns去掉原有ns服务器配置，添加cloudflare提供的，两个站都添加cname配置，
，ssl配置完成严格模式，最后在netlify开启https
