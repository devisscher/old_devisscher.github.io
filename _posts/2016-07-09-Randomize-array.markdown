---
layout: post
title:  "Randomized array"
date:   2016-07-09 11:29:04 -0400
categories: blog
---



A function that randomizes an array of image paths. Yup.


```
var images = ['image1.jpg', ... ];

	$('html').css({'background-image': 'url(../images/home/' + images[Math.floor(Math.random() * images.length)] + ')'

});

```