---
title: Games
layout: page
---
{% assign projects = site.projects | sort: 'sequence' %}
{% for project in projects %}
<h3><a href="{{ project.url }}">{{ project.name }}</a></h3>
<p class="project-short">{{ project.short }}</p>
<div class="more-link">
  <a href="{{ project.url }}">More</a>
</div>
{% endfor %}
