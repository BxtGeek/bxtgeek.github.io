---
title: "Linux Utility – Boring Internet"
date: 2022-11-15 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-3.png
---

Having an Internet monitoring setup is so important. For home, it is not that important but for big organizations and data centers, it is so critical. In this post, I will talk about my [internet](https://corpit.org/category/linux/) monitoring setup. How I did it.

## Why I created this

In my area, the internet is not so stable so I got the Idea to monitor it. I checked online and the best solution that I found is [geerlingguy/internet-pi](https://github.com/geerlingguy/internet-pi). It is easy to set up and one of the best. But I checked the basics of that project and created my own version of it. I know mine is not visually appealing compared or internet-pi. But it worked as intended.

## How I created this

So I started with the basics. So the idea is very simple. Run the [speedtest](https://www.speedtest.net/apps/cli) every 5 min and capture that output in a text file.

speedtest is an online utility using which you can check the internet speed. I just filter out the output of that command. Added with the date output and added into a file.

## Working on Ping Master Script

This script is taking speedtest -- simple and date data and stores that in a file name speedtest.txt and date.txt That data is now further cleaned and added to the result.txt file.

## How to install this script

- Install the speedtest from the below command:

```bashsudo apt-get install curl
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.deb.sh 
sudo bash sudo apt-get install speedtest
```

- Download the script.sh and result.txt in /tmp dir

- Give executable permission to the script.sh using the below command sudo chmod+x script.sh

- Add a crontab entry using the below command:

```
*/5 * * * * /tmp/script.sh
```

## What is the future of the Ping Master Script

1. Add more automation so the user does not need to create the result and crontab entry.

3. If the speed test server is busy then it will skip that test and try again.

5. Rounding off the number to make the more clean output

7. Adding this data to Grafana

## Download the script from the below link

[Download from here](https://github.com/BxtGeek/internet-boring)

## Script screenshot

<figure>

![](/assets/img/posts/screely-1668548716990.png)

<figcaption>

Linux Utility – Boring Internet

</figcaption>

</figure>

## Conclusion

You can try this script on your own and let me know if there is any issue you find. I will more than happy to listen to your opinion and work on those in my future iteration.
