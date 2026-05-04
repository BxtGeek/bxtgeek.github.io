---
title: "Linux Utility - Ping Master Script"
date: 2022-05-30 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "bash-scripting"
  - "linux"
  - "linux-utility"
image:
  path: /assets/img/posts/Linux-Utility-Ping-Master-Script.png
---

So today I will talk about my first Linux utility that I created. Here I tell you about my journey how I created this Utility and how I created that. Also the region behind that why I created that. What is the next plan for that for that Utility. So let start.

## Introduction

I created a Ping Master Script using which you ping multiple server at once and check weather they are up or not. So there are lots of Utility like this already available but as I am learning bash script so I thought why not create something from scratch. So I created this. Later on this article I will discuss about this Script and how I got a Idea about that.

## Why I created this

I am staying with my roommate and I saw him one time pining multiple server and checking weather they are up or not. So I ask him is there any tool or utility that you are using to do that. But he denied stating that he is doing like that. So I ask him if I build something for him that will test and let you know the report at the end. he is so excited for that and ask me to build something. So I got my idea.

## How I created this

So at currently I am learning bash scripting and I have a prior knowledge of the programing that I use in understanding the bash concept. That how I created this script. Later on this article I will let you know how exactly this is working and what can I add in this script in future.

## Working of Ping Master Script

Working of this script is so simple I just created a small script that will take IP or hostname form a file specific text file. Name of the file is server.txt and it will try to ping it. After that it will check what is output of last command from the $?. That will return return value of the last executed command. It generate a output in a Boolean format. If it is 0 Mean server is pingable and if value is not 0 then server is not pingable. If you are interested in the script you can download and use form the below link. If you have some idea you can add and push the code in GitHub or you can also share you idea in comment. In the upcoming version will surely add those.

[DOWNLOAD PING MASTER SCRIPT](https://github.com/BxtGeek/PingMaster)

## What is the future of the Ping Master Script

So there are lots of thing that I can add in this script and definitely I will add those. Few are listed below:

- Try to reduce the ICMP request.
- Result should be more clear
- Resulted output should be in text format
- Resulted output send over a email at a certain interval of time.

## Conclusion

I created this script out of fun and learning. By creating such utility will learn and improve my shell skills. Like this I also write lots of similar article in tech you can also see in my [website](https://corpit.org/). if you have some suggestion or have some article request please let me know me in comment. In upcoming article will cover those.
