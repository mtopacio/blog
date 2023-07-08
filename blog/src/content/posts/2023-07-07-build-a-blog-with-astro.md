---
layout: ../../layouts/PostLayout.astro
title: Build a Blog with Astro
description: ""
createDate: 2023-07-08T05:31:30.314Z
date: 2023-07-08T05:31:30.314Z
preview: ""
draft: true
tags: ['Astro', 'Tailwind', 'Vercel']
categories: []
img: 
    url: /wilhelm-gunkel-6bibCUj3lfA-unsplash.jpg
    alt: The Best Way is Just to Start
---

We're going to run through the basics of what the Astro metaframework was really made to do: create content-focused sites. We'll employ basic HTML/CSS to build to pages, TailwindCSS to provide a little bit of styling, and Vercel to host our app. It is worthy mentioning one of the starting templates is a blog which includes here and then some.

## Installation
Change into whatever directory you want to start in and lets begin.

```bash
$ npm create astro@latest
$ npx astro add tailwind
```
![Installation](/images/2023-07-07-build-a-blog-with-astro/00_installation.png)

We're going to start from scratch for this walkthrough to go over some of the fundamental building blocks. Since we selected the minimum (i.e. Empty) template, the Astro CLI populated our project with the bare minimum to launch a dev server. 

## Structure

The organization of your project directories and files plays an important role in how Astro builds your site. Everything under `/public` will be accessible at the root, so it is here unprocessed files like images and icons can be placed. Javscript and CSS files can be placed here; however, it is important to note these will not be optimized/bundled in the final build. `/src` is where you store all your files that *will* be processed, like our `.astro` and `.md` files. There is an additional `astro.config.mjs`, which is your Astro configuration file, and `tsconfig.json`, which are your TypeScript configurs.

Under `/src`, you'll find the directory `/pages` which contains our first page `index.astro`. Each directory under source has a special meaning during the build process. Please take some time to go over all the [recommended subdirectories](https://docs.astro.build/en/core-concepts/project-structure/). For our project and in addition to `/pages`, we'll make use of `components`, `content`, and `layouts`.



