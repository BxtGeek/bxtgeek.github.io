---
title: "How to Change the Timezone on Linux"
date: 2022-11-14 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "change-timezone-ubuntu"
  - "how-to-change-time-in-linux"
  - "how-to-check-timezone-in-linux-command"
  - "how-to-set-utc-timezone-in-linux"
  - "linux-timezone"
  - "timedatectl-set-timezone"
  - "timedatectl-set-timezone-utc"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

How to Change the Timezone on Linux.

Proper time and timezone play an important role in Linux. It is easy to check time in your geo format. If you have the proper time and timezone. It will help you in monitoring events easily.

## Prerequisite to fix Timezone on Linux

- The physical connection to the server.

- Bit experience in the Linux terminal.

- The notepad of your choice Here will use the nano. You can also go with the Vi editor.

- And most of all patience

## How to fix Timezone on Linux

- Run the below command to find out all the timezone

```
timedatectl list-timezones
```

![](/assets/img/posts/1-1024x634.png)

- After that run the below command and pass any timezone that you want to change. Here I want to go with the Asia/Calcutta

```bashsudo timedatectl set-timezone Asia/Calcutta
```

![](/assets/img/posts/2-1024x641.png)

- Run the below command to check the current timezone

```
timedatectl
```

![](/assets/img/posts/3-1024x639.png)

## Conclusion

This is a short and useful article to change the timezone in your Linux machine.
