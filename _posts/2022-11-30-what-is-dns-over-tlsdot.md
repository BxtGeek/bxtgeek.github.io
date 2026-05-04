---
title: "What is DNS over TLS(DOT)?"
date: 2022-11-30 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "best-dns-over-tls"
  - "dns-over-tls-android"
  - "dns-over-tls-cloudflare"
  - "dns-over-tls-list"
  - "dns-over-tls-pfsense"
  - "dns-over-tls-port"
  - "dns-over-tls-providers"
  - "dns-over-tls-test"
image:
  path: /assets/img/posts/2-1.png
---

DNS over TLS (DoT), In the last article itself we discuss the [DNS over HTTPS](https://corpit.org/what-is-dns-over-https-doh/) (DoH). Now what is heck is DNS over TLS (DoT)? Will discuss that in detail. DoT is similar to DoH but with little difference.

Nowadays most browsers and operating system support DoH. Now let's discuss this in detail.

## What is DNS encryption and why do we need it?

So we already discuss the [DNS](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/), it is like a phonebook and it helps us in resolving our domain name to IP. By default, the DNS request goes via UDP. UDP is not a secure protocol and anyone can sniff and access the content of the packet. In this case, the website that you are accessing.

With DNS encryption we can increase the security and so our data can be encrypted. So no one can sniff our data. The main reason for [DNS](https://corpit.org/setup-and-run-pi-hole-on-a-cloud/) encryption is to promote the security and privacy of the user.

DNS is there for a long time but there is not a lot of improvement. It is still working on UDP. With the DoT and DoH, we can achieve security.

## DNS over TLS(DoT)

DoT is similar to [DoH](https://corpit.org/what-is-dns-over-https-doh/), here we encrypt our packet using the [TLS](https://developers.google.com/speed/public-dns/docs/dns-over-tls) and it works on TCP port 853. All the traffic will transfer using this port. Due to the TLS layer, no one can access the content of the packet.

<figure>

![](/assets/img/posts/screely-1669638704245.png)

<figcaption>

DNS over TLS

</figcaption>

</figure>

The main issue with the [DoT](https://www.cloudflare.com/learning/dns/dns-over-tls/) is that it works on a different port. So if someone sniffs your network, He can easily detect the DNS traffic as it is working on a different port.

## Difference between DoT and DoH?

The main difference between the [DoT](https://developers.google.com/speed/public-dns/docs/dns-over-tls) and DoH is the port. As the [DoH](https://www.cloudflare.com/learning/dns/dns-over-tls/) is using port 443. So it mixes with all the traffic so now can easily detect whether it is DNS traffic or normal traffic. But in the case of DoT, it is on port 853. So If someone sniffs the network he can easily determine the DNS traffic.

## What is DNS over TLS(DOT) Video?

https://www.youtube.com/watch?v=ZEXj6uTne9E
