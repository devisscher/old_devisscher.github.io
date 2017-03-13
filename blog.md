---
layout: page
title: Blog
permalink: /blog/
menu: main
---
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'blog' %}
        <li>
          <span class="post-meta">{{ post.date | date_to_long_string }}</span>
          <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h2>
          <p>{{ post.excerpt  | strip_html | truncatewords:15 }}</p>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>