---
layout: post
title:  "Creating a pm2 process file"
date:   2016-12-08 9:29:04 -0400
categories: notes
---

Often times when maintaining your server or making new deployments you need to restart your application. Luckily, pm2 is a process manager which can accelerate your app startup process.

You will need to create a file called ecosystem.js. You can put this file anywhere, I suggest putting it just outside the folder you keep all your apps in.

<script src="https://gist.github.com/devisscher/f17aaf2873507b5af984f276b194f7a5.js"></script> 

```
pm2 start ecosystem.json

```