---
title: "My work"
layout: splash
permalink: /my-work/
author_profile: false

header:
  video:
    id: i9Qfi1E0naM
    provider: youtube

feature_row2:
  - image_path: assets/images/thumbnails/general_articles.jpg
    title: "Articles for the General Public"
    excerpt: 'My articles for the general about Economics and Data Science.'
    url: "/general-articles/"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row3:
  - image_path: assets/images/thumbnails/academic_articles.jpg
    title: "Academic Articles"
    excerpt: 'List of my academic articles and current work in progress.'
    url: "/academic-articles/"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row4:
  - image_path: assets/images/thumbnails/birthdays.png
    title: "Data Science Projects"
    excerpt: 'Some public code, mostly on statistical modelling, data visualization etc.'
    url: "/data-science-projects/"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row5:
  - image_path: assets/images/thumbnails/animation_example.gif
    title: "Presentations and visualizations"
    excerpt: 'Here you can find my public presentations and dynamic visualizations, like the one in the banner of this page.'
    url: "/presentations/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="left" %}

{% include feature_row id="feature_row5" type="right" %}
