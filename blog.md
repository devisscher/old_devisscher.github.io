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
          <ul class="tag_list" style="margin-left:0px;">
            {% for tag in post.tags %}
            <li class="inline archive_list"><a class="badge badge-default" href="/tag/{{ tag }}">{{ tag }}</a></li>
            {% endfor %}
          </ul>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>