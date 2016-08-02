---
layout: page
title: Notes
permalink: /notes/
---
<p>These are some notes that I collect as I am working on different projects.</p>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'notes' %}
        <li>
          <span class="post-meta1">{{ post.duration }}</span>
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