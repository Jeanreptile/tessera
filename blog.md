---
layout: page
title: Blog
category: Blog
permalink: /blog/
---

<div class="container">

{% for post in site.posts %}
  <div class="row">
    <div class="col-md-2 col-md-offset-3">
      <h3 class="post-date">{{ post.date | date: "%b %-d, %Y" }}</h3>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags %}
        <span class="badge badge-default">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    <div class="col-md-7">
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </div>
  </div>
{% endfor %}

</div>