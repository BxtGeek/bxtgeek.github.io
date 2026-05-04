---
title: "What is DNS over HTTPS (DoH)?"
date: 2022-11-28 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "dns-over-https-android"
  - "dns-over-https-chrome"
  - "dns-over-https-cloudflare"
  - "dns-over-https-list"
  - "dns-over-https-providers"
  - "dns-over-https-test"
  - "how-does-dns-over-https-work"
  - "should-i-use-dns-over-https"
image:
  path: /assets/img/posts/1-1.png
---

[DNS](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/) is one of the important pillars of the internet. It acts like a phonebook of the internet. If helps in resolving the domain name to the IP address and vice versa.

By default, the DNS queries and responses are sent over the UDP. We all know that UDP is require lossless data transmission. That means someone can do a man-in-the-middle attack.

We need some solution to overcome this issue. This article will discuss that only.

## Why Move from Traditional DNS to DNS over HTTPS?

As we discuss Traditional [DNS](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/) work on the UDP. UDP is not a secure data transmission connection. That can be easily intercepted.

When we use the DNS over HTTPS it encrypts our data. So no one can intercept our data and change our data in middle.

## Enabling DoH

Now we understand why we need to have [DNS over HTTPS](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/). Now let's discuss how we can enable that. There are lots of ways to do that. But this article will discuss two popular methods.

### Enabling DoH in the Windows 10 Registry

- log in to your window machine and open [Registry Editor](https://support.microsoft.com/en-us/windows/how-to-open-registry-editor-in-windows-10-deab38e6-91d6-e0aa-4b7c-8878d9e07b11)

- Find the below:

- HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Dnscache\\Parameters

<figure>

![](/assets/img/posts/screely-1669621088308.png)

<figcaption>

Enabling DoH in the Windows 10 Registry

</figcaption>

</figure>

- Create the new DWORD name “EnableAutoDoh” and give it a value of 2.

- Once done reboot the machine.

- Now change your primary and alternate DNS in the internet setting. You can select anyone from the list:

1. Cloudflare — Primary: 1.1.1.1, Alternate: 1.0.0.1

3. Google — Primary:8.8.8.8, Alternate: 8.8.4.4

5. Quad9 — Primary: 9.9.9.9, Alternate: 149.112.112.112

<figure>

![](/assets/img/posts/screely-1669621261053.png)

<figcaption>

internet setting

</figcaption>

</figure>

### Enabling DoH in the over network

If you are a bit advanced user then you can do this in an advanced way. In the previous video, we teach you how to create the docker host. You can create this docker host locally or you can run a cloud instance also. For this tutorial, I am using the local instance. I spin an Adgaurd docker instance.

- log in to your [Adgaurd docker instance](https://hub.docker.com/r/adguard/adguardhome).

- Go to settings and then DNS settings

<figure>

![](/assets/img/posts/screely-1669621332353-1024x580.png)

<figcaption>

Enabling DoH in the over network

</figcaption>

</figure>

- There you can add the name, a few names are already added you can use those also.

- Once updated, log in to your router using 192.168.0.1 or 192.168.1.1, go to the advance option, and change the DNS value as Ip of your adgaurd docker instance

- Now all your home have DNS over HTTPS enabled.

## What is DNS over HTTPS (DoH) Video?

https://www.youtube.com/watch?v=ZEXj6uTne9E

## FAQ DNS over HTTPS (DoH)

### What is DNS over HTTPS?

A protocol called DNS over HTTPS (DoH) enables remote Domain Name System (DNS) resolution using the HTTPS protocol.

### Should I use DNS over HTTPS?

Bypassing censorship, enhancing network traffic security, and boosting network privacy are all possible when DoH is enabled.

### Is DNS over HTTPS enabled by default?

No, you must manually enable it via Registry or on your workstation.

### How do I enable HTTPS over DNS?

You can use any of the methods that is suggested ove
