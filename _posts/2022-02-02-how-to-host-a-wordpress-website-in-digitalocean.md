---
title: "How to host a WordPress website in Digitalocean in 2022"
date: 2022-02-02 00:00:00 +0530
categories: 
  - "digitalocean"
tags: 
  - "digitalocean"
  - "hsoting"
  - "website"
image:
  path: /assets/img/posts/How-to-host-a-WordPress-website-in-Digitalocean.png
---

Wordpress is one the best CMS in the market and over 95% of website are using the WordPress. But the traditionally shared hosting are not good. If your website having lots of traffic. At that time you need to migrate your wordpress website in some cloud hosting like [Digitalocean](http://corpit.org/digitalocean). So in this article will see how we can host a website in [Digitalocean](http://corpit.org/digitalocean).

First step is to buy the domain from any domain registrar like godaddy, namecheap, bigrock, etc. You can purchase domain from any of the domain registrar.

So you need a hosting to host this domain. Hosting is like a house where you live and store you belongings. In the same way hosting server will store the website the code or any other data.

## Create a WordPress droplet

1. Login into the [Digitalocean](http://corpit.org/digitalocean) console.
2. Click on marketplace from the right side panel.
3. Select for the WordPress droplet.
4. Once got the WordPress droplet then click on use this droplet.
5. Now here you select all other things about your server like hostname, datacenter location, etc.
6. Once everything mention click okay and now your droplet is created

## Connect the domain to WordPress droplet

Now you droplet is created or server is created now you need to connect the domain to this droplet. let see which steps you need to follow:

1. Click on droplet from the right hand side panel
2. Find the server or droplet that you created just now there you find a option like more click on that and you will find a option to add a domain
3. Now enter the domain that you have and now you need to update the name sever on your domain. Update the below nameserver.
    - ns1.digitalocean.com
    - ns2.digitalocean.com
    - ns3.digitalocean.com
4. Once name server update if will take some time propagate you can use the website like [dnschecker.org](https://dnschecker.org/) to verify that.
5. After 10-20 min the domain start pointing to the [Digitalocean](https://corpit.org/digitalocean)

## Install WordPress on the droplet

Now you need to install the WordPress in the droplet that you created for that lets follow the below steps:

1. Open the host or the droplet that you created
2. Copy the IPv4 ip and open the cmd prompt in the windows and enter the below "**ssh root@<IPv4>**"
3. Now it will ask for the password enter the password that you entered while creation of droplet.
4. Now it will ask for the below things
    - Enter the domain
    - Enter the email id
    - Enter the user name for the wordpress login
    - Enter the password for the wordpress login
5. Now it will ask for the letsencrypt ssl if you want you can install that. Its free for 3 month but I suggest you ignore that and install the Cloudflare ssl.
6. Now it will install the wordpress in your droplet.
7. Open the website in the browser and now you good to go.

## Install the [Cloudflare](https://cloudflare.com/) SSL in the WordPress website

1. Sign up to [Cloudflare](https://cloudflare.com/)
2. Select the free plan
3. Follow the step for adding your domain name
4. Now it will provide the [Cloudflare](https://cloudflare.com/) nameserver enter those in the domain registrar.
5. Again it will take some time around 20-30 min to propagate
6. Now you have Free SSL in your WordPress website.

## How to host a WordPress website in [Digitalocean](http://corpit.org/digitalocean) Video

https://youtu.be/sFlp0FpmQQs
