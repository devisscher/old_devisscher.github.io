---
layout: page
title: Projects
permalink: /projects/
---
<span class="post-meta1">Fruition time</span>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'project' %}
        <li>
          <span class="post-meta1"></span>
          <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h2>
          <p>{{ post.excerpt }}</p>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>