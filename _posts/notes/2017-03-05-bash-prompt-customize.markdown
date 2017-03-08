---
layout: post
comments: true
title:  "Customize your bash prompt"
date:   2017-01-13T09:00:00Z
categories: notes
---

You can change your bash prompt in terminal by editing the ```.bash_profile``` file.

if you want a short nickname and your current folder location add the following:

```
// this will display td:current_folder_fullpath in terminal
export PS1="td:\w $ "

```

Restart terminal and your prompt will be changed. There are many different profile configurations available.