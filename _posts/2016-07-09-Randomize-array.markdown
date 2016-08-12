---
layout: post
title:  "Randomized array"
date:   2016-07-09 11:29:04 -0400
categories: blog
---

<script type="text/javascript">
      var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'];
        $('html').css({'background-image': 'url(../images/home/' + images[Math.floor(Math.random() * images.length)] + ')'
          
        });
  </script>