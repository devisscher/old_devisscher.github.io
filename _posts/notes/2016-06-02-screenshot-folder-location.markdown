---
layout: post
comments: true
title:  "Send screenshots to a different location."
date:   2016-06-02T09:00:00Z
categories: notes
---

On a Mac, by default screenshots are sent towards your Desktop. This can become cluttered so if you ever want to change the folder location here is what you can do: 


In terminal, write the following command, with the path to your desired screenshot folder.

```
defaults write com.apple.screencapture location /Users/username/pictures/screenshots
```
Then to apply the changes, run the following command.

```
killall SystemUIServer
```
Your screenshots will now go towards the folder you chose!