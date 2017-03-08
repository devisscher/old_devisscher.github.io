---
layout: post
comments: true
title:  "Use Sublime over SSH"
date:   2017-03-06T09:00:00Z
categories: notes
---

You can easily use Sublime over ssh with the help of rsub. 

First install rsub package in sublime. ``` ctrl + shift + p ``` and search ```rsub```. Then go to your terminal on your local machine and open your ssh config ``` nano ~/.ssh/config ```. Inside of it, add the following block.

```
Host your_server_hostname.com
    RemoteForward 52698 127.0.0.1:52698
```

Save that file and now ssh into your remote server to install rsub/rmate.

``` 
sudo wget -O /usr/local/bin/rsub https://raw.github.com/aurora/rmate/master/rmate 

```

Make the script you just downloaded executable:

``` sudo chmod +x /usr/local/bin/rsub ```

Now when you want to edit a file at your server you can simply type: 

``` rsub ~/home/my-project/my-file.html ```

Works like a charm and you get to use Sublime instead of Nano or Vim. 😆