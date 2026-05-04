---
title: "Empowering Your Home Lab with Trusted Domains in Nextcloud on TrueNAS Scale"
date: 2023-04-01 00:00:00 +0530
categories: 
  - "homelab"
image:
  path: /assets/img/posts/Empowering-Your-Home-Lab-with-Trusted-Domains-in-Nextcloud-on-TrueNAS-Scale.png
---

With the advent of Cloudflare Tunnel, exposing services to the internet has become easier. However, some services can still pose challenges. In this article, we'll delve into how to expose Nextcloud to the internet using Cloudflare Tunnel.

To get started, you'll need to add a domain to your Cloudflare Tunnel. Here are the steps you'll need to follow:

- Log into Cloudflare

- Click on the "Zero Trust" option on the left side.

- Under "Access," you will find the "Tunnel" option.

- Click on the Tunnel and select your desired tunnel.

- Click on the "Public Hostname" and create a new entry.

- Once you've made the necessary changes, don't forget to save your work.

Your domain has now been created within the Cloudflare Tunnel. If you're interested in learning how to create one, check out the following video:

https://www.youtube.com/watch?v=ey4u7OUAF3c

Before proceeding, let's talk about the setup of your NextCloud installation.

If you have created it in a container, accessing it shell is straightforward. However, if you have installed it using TrueNAS, you'll need to follow these steps to access the NextCloud CLI:

- Open TrueNAS and select "Apps" from the right-side menu.

- Choose "Nextcloud" and click on the three dots.

- Select "Shell" from the options.

- From the pod's list, choose one ending with "fvwwx" and enter "/bin/bash" at the command prompt.

- You are now in the Nextcloud container shell and need to install nano to edit the config file. Run the command "apt-get install nano".

To modify the Nextcloud config.php file, follow these steps:

- Open a shell in the Nextcloud environment

- Navigate to the config directory:

```bashcd /var/www/html/config
```

- Create a backup of the config.php file:

```
Create a backup of the config.php file:
```

- Open the config.php file using nano and search for the trusted domain and add a new entry. Here I added 'nextcloud.corpit.org'

```
  'trusted_domains' => 
  array (
    0 => 'localhost',
    1 => '192.168.1.82',
    3 => 'nextcloud.corpit.org',
  ),
```

- Once this is done you need to add a few more lines at the end of the file:

```
  'overwriteprotocol' => 'https',
  'enable_previews' => true,
```

- Once done save this file and restart the container. You can now access your nextcloud instances with the domain name.

![](/assets/img/posts/image-1024x523.png)

In conclusion, by empowering your home lab with trusted domains in Nextcloud on TrueNAS Scale, you can greatly enhance the security and functionality of your personal cloud system. By utilizing the power of Cloudflare tunnels, you can expose your Nextcloud installation to the internet with confidence, knowing that your data and services are protected from potential threats.

By following the steps outlined in this article, you can quickly and easily set up your Nextcloud installation and start taking advantage of all the benefits it has to offer.

Whether you're looking to back up your data, store your photos, or access your media from anywhere, Nextcloud on TrueNAS Scale is a powerful tool that will help you do just that. If you need some help while setting up, please let me know will be more than happy to assist you with that.
