---
layout: ../../layouts/PostLayout.astro
title: Interactive Dashboards in Python 2023
description: ""
createDate: 2023-07-08T10:47:30.796Z
date: 2023-07-08T10:47:30.796Z
preview: ""
draft: false
tags: ['Dashboards', 'Python']
categories: []
img: 
    url: '/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg'
    caption: Photo by Stephen Dawson on Unsplash
    captionLink: https://unsplash.com/@dawson2406?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    alt: Dashboard
---

Interactive dashboards are revolutionizing the way data is explored, analyzed, and presented. In the world of data-driven decision-making, these powerful tools provide an intuitive and engaging interface for users to interact with complex data sets and gain valuable insights. Python, being one of the most popular programming languages for data analysis and visualization, offers a range of libraries and frameworks to create interactive dashboards. In this post, we will explore some of the top Python libraries for building interactive dashboards. Whether you are a data scientist, a business analyst, or a developer, these Python libraries will empower you to create compelling visualizations and drive data-driven decision-making.

# Streamlit

[Streamlit]((https://streamlit.io/)) has garnered a lot of attention since they were purchased by Snowflake a little over a year ago, and rightly so. It occupies the space right above Jupyter Notebooks in going from code to plots, forms, and widgets relatively easily with minimal code. Compared to the other libraries on this list, the API is extremely simple and intuitive. Knowledge of [React](https://react.dev/) is needed to create custom components since it's used under the hood. If you don't want to go that route, just pick one from [many](https://streamlit.io/components) built from a very active community. They also have [Community Cloud](https://streamlit.io/cloud) where you can deploy, manage, and share your apps for free.

![Streamlit](/images/2023-07-08-interactive-dashboards-for-python-2023/00_streamlit.png)

The biggest drawbacks when using Streamlit. 
- There is limited customization, specifically styling things with CSS. You can hijack styling some of the elements by using their id; however, that may not be the best form.
- Streamlit is mainly a server-side application. There is a custom component that accepts a string of Javascript. 
- Data changes trigger a whole page rerun. There are ways to mitigate this though.

That said, I still use it to prototype since it offers the fastest development time.

# Solara

[Solara](https://solara.dev/) is another Python library using React under the hood. However, unlike Streamlit which renders each React component independent and ties it to a Streamlit call, Solar is based on [Reacton](https://reacton.solara.dev/en/latest/), which is a Python wrapper around the React framework. This benefits this framework by allowing the rerun of only affected components versus the whole page in Streamlit.

![Solara](/images/2023-07-08-interactive-dashboards-for-python-2023/01_solara.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Solara has a syntax with a simplicity and intuitiveness comparable to Streamlit.</sub>
</div>

![Solara Example](/images/2023-07-08-interactive-dashboards-for-python-2023/09_solara_example.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Example Solara app</sub>
</div>

# Plotly Dash

[Plotly Dash](https://dash.plotly.com/) is an interactive dashboard framework built on [Flask](https://flask.palletsprojects.com/en/2.3.x/), [Plotly.js](https://plotly.com/javascript/), and React.js. It provides a high-level declarative syntax and supports interactive components like graphs, tables, and dropdowns. There is an enterprise edition that offers additional features; however, the active community provides a number of additional components [libraries](https://github.com/ucg8j/awesome-dash). Dash mainly uses server-side rendering like the previous entries, but it also includes the ability to ship Javascript in what they refer to as *clientside-callbacks*. This allows you to save the back-and-forth latency between data transformations by allowing your client to handle all the manipulations and filterings. It can even open your dashboard to use other Javascript libraries without creating a custom component. Like Streamlit, creating components requires an understanding of the React lifecycle. In general, though, callbacks are how Dash creates its reactive elements. 

![Dash Code](/images/2023-07-08-interactive-dashboards-for-python-2023/04_dash_code.png)
<div class="flex flex-row justify-center pb-10">
    <sub>The class HTML allows you to structure your markup as if you were developing in HTML.</sub>
</div>

![Dash App](/images/2023-07-08-interactive-dashboards-for-python-2023/05_dash_app.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Simple example of a Dash app</sub>
</div>

![Another Dash App](/images/2023-07-08-interactive-dashboards-for-python-2023/08_dash_app_2.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Another example of a more involved Dash app</sub>
</div>

Notice the pseudo-HTML in the first image made available by the HTML class. One of the parameters is `style` which lets you add in-line styling if need be. Part of that is the ability to use classes that you can take from [TailwindCSS](https://tailwindcss.com/). The only thing I wish is the plots had more customization. You can when using Plotly.js directly; however, it's lacking some options when creating plots in Python.

# Shiny 

Yup, Posit (formerly RStudio) has made available their dashboard software in Python.

![Shiny](/images/2023-07-08-interactive-dashboards-for-python-2023/06_shiny.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Minus the whole R vs Python nuances, the syntax project structure feel very similar if you've used it in R.</sub>
</div>

I haven't had the chance to use this in Python as this and Dash occupy very similar spaces. Instead of React, however, Shiny uses jQuery to create its reactive values. I also like that their HTML interface allows the use of CSS files, which lets me use Tailwind.

![Shiny Example](/images/2023-07-08-interactive-dashboards-for-python-2023/07_shiny_example.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Example of a Shiny app</sub>
</div>

# Datasette-Dashboards

[Datasette](https://datasette.io/) is a tool for exploring and publishing data. I've never had the chance to use this tool; however, their approach is really interesting. It aims to make the whole ordeal of interacting with data streamlined and accessible. Like the other tools in this list, it allows the user to take data, analyze it, and publish it as an interactive website. Where it differs is that it not only opens the data sets as API endpoints, but also lets you edit the queries that influence the visualizations. The [datasette-dashboards](https://datasette.io/plugins/datasette-dashboards) plugin is still an experimental feature; however, it stays true to its approach by using YAML to simplify the code needed to create these plots.

![yaml for plot](/images/2023-07-08-interactive-dashboards-for-python-2023/02_datasette_yaml.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Example YAML used to create a dashboard.</sub>
</div>

![Alt text](/images/2023-07-08-interactive-dashboards-for-python-2023/03_datasette_dash.png)
<div class="flex flex-row justify-center pb-10">
    <sub>Example dashboard.</sub>
</div>

The underlying visualization libraries are [Vega](https://vega.github.io/vega/)/[Vega-Lite](https://vega.github.io/vega-lite/). Datasette can be deployed to traditional and serverless hosting platforms.

# Web Frameworks

The last option is a catch-all for all the available web frameworks like [Django](https://www.djangoproject.com/), Flask, and all their async derivatives. These work by either developing a complete web page in HTML/CSS/JS or using that markup along [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) to create a template. This is the current method I prefer alongside Astro, which opens up the door to both Javascript visualization libraries like [Echarts.js](https://echarts.apache.org/en/index.html) and client-side data manipulation and computation. 

# Conclusion

My tooling went full circle to arrive back at Flask, which was my first introduction to creating dashboards with Python. Easier tooling like Streamlit and Dash made it possible to side-step all that development time to a deliverable at the cost of some customization and client-side computation. The look largely feels the same since it's either built on React one way or another, or it uses the more common component libraries that are ported over to Python. My endgame as of late has been the use of Astro in combination with Echarts to easily create these static sites I can integrate with an API. 

# Honorable Mentions

Another avenue to create interactive visualizations is to use [Jupyter Notebook](https://jupyter.org/) alongside a visualization package. Some Python libraries that might help you out here are:
- [Bokeh](https://docs.bokeh.org/en/latest/)
- [ipywidgets](http://jupyter.org/)
- [pyecharts](https://pyecharts.org/#/)
- [vega-altair](https://altair-viz.github.io/)


