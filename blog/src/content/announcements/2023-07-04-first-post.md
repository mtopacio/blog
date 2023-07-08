---
layout: ../../layouts/PostLayout.astro
title: First Post
description: ""
date: 2023-07-04T08:56:55.425Z
preview: ""
draft: false
tags: ['Astro', 'Vercel']
categories: []
img:
    url: /maxime-horlaville-CSWllKT9wPw-unsplash-cropped.jpg
    caption: Photo by Maxime Horlaville on Unsplash
    captionLink: https://unsplash.com/@mxhpics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    altText: The Journey is On Neon Sign
---

A year ago I was given an oppurtunity to develop the backend for one of our processes at work; however, my frontend experience was limited to libraries in Python, like Streamlit, Dash, and Flask. The limitation of that was quickly realized as part of the backend requirements for work include real-time. Though some of those can do it, the experience was much preferred when using Flask, which is where the need to better my frontend experience started.

I'm starting this blog as a means to track a couple of side-projects, their progress, and lessons learned from these and from work.

## Astro

The first item of business is the showcase the stack for this site. This blog is made with the meta-framework [Astro](https://astro.build/) and hosted through [Vercel](https://vercel.com/).

A little late to the game, I only found Astro within this last year. I already have an [article](https://medium.com/@marktopacio/supercharging-web-dev-with-astro-9c1b7356da11) on Medium going into how I use it at work. There are so many features, it'd be easy to go into other use cases. It's designed to help create content-oriented websites (like a blog) by building your site into vanilla HTML, CSS, and Javascript. By building your project into these vanilla files, it can also reduce the code needed to only the essentials.It's whole MO is to ship less to the client. All of this translates to a performant product you can build by implementing any front-end language. This helps me side-step introducing a larger framework and creating technical debt by letting me build with vanilla HTML/JS. I also use TailwindCSS for my stylings since their utility classes were much easier to learn than CSS. The nuances for Astro are easy to learn and the strategy is much like what I was doing by templating in Jinja files to be uploaded by Flask. The difference here is that Astro also comes with many integrations depending on your use case, like for both Tailwind and Vercel.

There were a couple of hosting services I wanted to try, with Vercel bing one of them. The others were [Netlify](https://www.netlify.com/) and [Cloudflare Pages](https://pages.cloudflare.com/) which will probably both be used at a later date. The Astro docs also have a page for deployments listing a lot more than these three. A lot of which have a free teir which is plenty for hosting a static site. 

## Algorithmic Trading

The first side-project for this blog is within the realm of algorithmic trading. To start, I'd highly recommend [Alpaca](https://alpaca.markets/) which has a developer-first platform if interested in managing basic equities. I am, however, interested in trading options which is something they do not currently support. So to this end, I'll be using [Robinhood](https://robinhood.com/us/en/). 

They do not release their API endpoints, but there are a few projects on Github aimed at making these available. It should also be noted that *trading through the API is against their customer agreement*, so if they suspect you are using an API, they will ask you to provide some supporting documents. They specifically mention transact, so making the trades manually is within the realm of possibilities. The main goal is to use their data to estimate option prices and plan out [low-risk moves](https://www.investopedia.com/trading/options-strategies/) like strangles and straddles on a weekly basis. Estimations will only be produced once before end of day to determine if I need to leave a position, so speed is not a priority. 
 
## Generative Art

Another hobby I've recently picked up is generative art through the Processing library mainly in Java. I aim to include some renders as well; however, they will not be looked at as in-depth nor have the code displayed due to the NFT movement. 

---

So this the intent, but we'll see how well I can stick to what I've planned out.