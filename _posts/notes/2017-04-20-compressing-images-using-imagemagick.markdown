---
layout: post
comments: true
title:  "Compressing Images Using ImageMagick"
date:   2017-04-20T09:00:00Z
categories: notes
tags: images optimization web
---
[Google Page Insights](https://developers.google.com/speed/pagespeed/insights/) is a nice tool to review your websites performance. But you may end up realizing that you need to make some changes to your website. One of those changes Google might want you to make is optimize your images. To do so, we can use a cool little tool call ImageMagick. The instructions apply to users on a Mac computer.

First we need to install ImageMagick. I strongly recommend installing it with Homebrew.

```

brew update

brew install imagemagick

```

Once that is done you are ready to convert images. To do so here are basic commands that you can run from the terminal. Feel free to tweak them and suggest even better optimizations!

```
# Convert a jpeg

convert -strip -interlace Plane -gaussian-blur 0.05 -quality 50% image.jpg image.jpg


# Convert a png

convert image.png -resize 50x50 -quality 95 -depth 8 image_50x50.png

```
 
That's all! Now go test your website with [Google Page Insights](https://developers.google.com/speed/pagespeed/insights/) again.