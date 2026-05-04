---
title: "How to Setup Network-Wide blocking with AdGuard"
date: 2022-12-10 00:00:00 +0530
categories: 
  - "homelab"
  - "network-concept"
tags: 
  - "adguard-default-password"
  - "adguard-dns"
  - "adguard-home-dns"
  - "adguard-home-router-setup"
  - "adguard-home-vs-adguard-dns"
  - "adguard-home-windows"
  - "install-adguard-home-raspberry-pi"
  - "install-adguard-home-ubuntu"
image:
  path: /assets/img/posts/How-to-Setup-Network-Wide-blocking-with-AdGuard.png
---

Ad sucks!

I know you will say on your website there are ads but still, you are criticizing that. Yeah, But on some websites, we get annoying ads and they are everywhere. There should be some moderation for that. But Ads are the new home page of the internet. There are lots of ways in which you can block these ads.

The best thing is to use an ad blocker. But sometimes you cannot enable the adblocker in android TV and the apps. So now you need an ad blocker that is network-wide. So you need to install it once and it will work everywhere.

If you are interested to learn how network-wide adblocker works you can check out my article by [clicking here](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/).

This article will talk about how to install the adgaurd over [proxmox](https://www.proxmox.com/en/). The reason why I am using [proxmox](https://www.proxmox.com/en/) is that it is fun to use. But you can install the adgaurd anywhere, Even in the cloud.

## Requirement

- Good Internet

- Bit experience in the Linux terminal.

- And most of all patience

## Create a Container in proxmox

You can run the [adgaurd](https://github.com/AdguardTeam/AdGuardHome) in VM also but due to low resource utilization will go with the [container](https://www.proxmox.com/en/).

- login to the proxmox.

- Hit on "Create CT"

- Give the hostname and password.

- Click on next and select your ubuntu template

- Click on next - next until network and give this container a static IP.

- Click finish and you have your adgaurd container ready.

## Install Adgaurd in your Container

There are lots of ways in which you install the [adgaurd](https://github.com/AdguardTeam/AdGuardHome). But my favorite one is using the script. This is a single-line script that you can get on the [adgaurd official GitHub page](https://github.com/AdguardTeam/AdGuardHome).

- log in to container and update using the below command:
    - sudo apt update && sudo apt upgrade

- Run the below command to install the adgaurd in the container
    - curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v

- Great now you have your adgaurd container running.

<figure>

![](/assets/img/posts/screely-1670408555473-1024x575.png)

<figcaption>

Adgaurd Container in Proxmox

</figcaption>

</figure>

## Setting up Adgaurd

- Login to adgaurd using the below IP.
    - x.x.x.x:3000

- Select the interface usually eth0

- After that set the username and password

- After that, you will lot of options to enable the adgaurd as a DNS in your devices. I suggest you set it up at the router level.

- Great now you have your adgaurd setup.

<figure>

![](/assets/img/posts/screely-1670408629712-1024x562.png)

<figcaption>

Setting up Adgaurd

</figcaption>

</figure>

## Enabling the DNS-Over-HTTPs

- login to adgaurd web page

- Click setting > DNS setting

- You will find an option called "[Upstream DNS servers](https://corpit.org/what-is-dns-over-https-doh/)"

- There you can add DNS, Above that block, you will find one line stating " list of known DNS providers". Select the DNS that you find interesting

- Click save and your ADgaurd is good to go.

<figure>

![](/assets/img/posts/screely-1670408669183-1024x561.png)

<figcaption>

Enabling the DNS-Over-HTTPs

</figcaption>

</figure>

## Upstream DNS servers, I am using

- https://dns10.quad9.net/dns-query

- https://family.adguard-dns.com/dns-query

- https://doh.cleanbrowsing.org/doh/adult-filter

- https://doh.cleanbrowsing.org/doh/security-filter/

## How to Setup Network-Wide blocking with AdGuard (Video)

<figure>

https://youtu.be/Jeo-V9e4\_-A

<figcaption>

AdGuard

</figcaption>

</figure>

## Conclusion

Hope you like this article, In the coming time will release more awesome and fun-to-read articles for our viewers. If you having any issues while implementing feel free to reach out to us in the comment section. If you have some suggestions for the next article feel free to let us know on the contact us page.
