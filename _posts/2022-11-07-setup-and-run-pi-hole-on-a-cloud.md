---
title: "Working and setting up Pi-Hole on a Cloud"
date: 2022-11-07 00:00:00 +0530
categories: 
  - "homelab"
tags: 
  - "pi-hole-dns"
  - "pihole"
  - "pihole-alternatives"
  - "pihole-documentation"
  - "pihole-github"
  - "pihole-in-the-cloud"
  - "pihole-unbound"
  - "raspberry-pi-hole"
image:
  path: /assets/img/posts/pi-hole.png
---

Ads are becoming the new homepage of the internet. Almost every website on the internet is trying hard to sell us ads. Is there any solution using which we can stop those annoying ads? Today's article will discuss that only.

There are lots of ads blocker that are available over the internet to block ads. So what if I want to block all the ads in my entire home network? Well, for that I will use the Pi-Hole.

## What is pihole?

It is a network-wide ads blocker that you can install on a Pi, Old computer, or [cloud](https://corpit.org/digitalocean). But how exactly it will block the ads? For that to understand we need to understand the working of the internet.

## Working of [pihole](https://pi-hole.net/)?

Let's understand how the internet work with an example. Let's suppose you want to visit corpit.org, you'll open your browser and then search for this website. Then this request will go to the router. At this time router will have a domain name. But it needs an IP to fetch the homepage of the website. To get the IP, the router will request the DNS(domain name server) for the IP. [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) will check the name in the database and provide the associated IP to the domain back to the router, then the router will send this request to the internet and the internet will return the result to the router. After that, the router will send that result to the laptop and Now in your laptop browser, you will able to see the homepage of the website.

<figure>

![](/assets/img/posts/screely-1667711489325-1024x519.png)

<figcaption>

Working of [pihole](https://pi-hole.net/)?

</figcaption>

</figure>

To get more clarity on DNS, we will look on a daily basis example.

Suppose you have to call your friend from your mobile. You will open your phone app, search for your friend's name, and will make a call request. Here, you are not dialing the number, instead just type your friend's name and your phone app will fetch you the number. Similarly, we only provide the website name to the browser and then DNS fetches the IP address associated with that website.

Wondering how DNS will block these ads? Well, we will replace the DNS with the Pi-Hole whenever a site request is made. It will check the URLs and filters those URL that contains ads and blocks them.

We understood the working of Pi-Hole. Now, let's dive in its setup.

## What components do I need?

Now let us talk about the components that we need to build. Will set up our pi-hole over the [cloud](https://corpit.org/digitalocean). Following are the requirements to setup the Pi-Hole- 
1.) Laptop  
2.) [digitalocean account](https://corpit.org/digitalocean)  
3.) Internet  
4.) And most of all Patience

## How to set up the pihole?

1.) log in to your digital ocean account and create one project.  
2.) Now create the droplet  
3.) Login to the droplet using the ssh  
4.) update the ubuntu instances.  
5.) Install the pi-hole with the below commands.  
6.) Access the pihole with the web browser.

## How to set up the pihole(Video)?

<figure>

https://www.youtube.com/watch?v=o8e0s0K\_tbs

<figcaption>

How to set up the pihole

</figcaption>

</figure>

## How to set up the pihole as a DNS?

1.) log in to your router and go to Administration  
2.) Find the DNS option and replace the DNS with your digital ocean IP  
3.) Restart your router and your pi-hole is ready to roll.
