---
layout: post
comments: true
title:  "Randomized array"
date:   2016-07-09T09:00:00Z
categories: notes
---



A function that randomizes an array of image paths. Yup.


```
var images = ['image1.jpg', ... ];

	$('html').css({'background-image': 'url(../images/home/' + images[Math.floor(Math.random() * images.length)] + ')'

});

```