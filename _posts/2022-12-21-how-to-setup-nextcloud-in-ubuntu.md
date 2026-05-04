---
title: "How to Setup Nextcloud in ubuntu"
date: 2022-12-21 00:00:00 +0530
categories: 
  - "homelab"
  - "linux"
tags: 
  - "install-nextcloud-ubuntu-docker"
  - "nextcloud-install-ubuntu-20-04-nginx"
  - "nextcloud-install-ubuntu-20-04-without-snap"
  - "nextcloud-snap-install"
  - "ubuntu-install-nextcloud-client"
  - "ubuntu-install-nextcloud-snap"
  - "ubuntu-nextcloud"
  - "ubuntu-nextcloud-snap"
image:
  path: /assets/img/posts/How-to-Setup-Nextcloud-in-ubuntu.png
---

Nextcloud is a popular open-source file-sharing and collaboration platform that can be installed on a variety of operating systems, including Ubuntu. In this article, we will look at how to install Nextcloud on an Ubuntu server.

<figure>

![](/assets/img/posts/screely-1672477575787-1024x500.png)

<figcaption>

Nextcloud

</figcaption>

</figure>

- The first step is to install the Apache web server and the PHP scripting language on your Ubuntu server. This can be done by running the following commands:

```bashsudo apt-get update
sudo apt-get install apache2
sudo apt-get install php libapache2-mod-php
```

- Next, you need to download the Nextcloud installation package from the official website. You can do this using the `wget` command, like this:

```bashwget https://download.nextcloud.com/server/releases/nextcloud-17.0.2.zip
```

- Once the download is complete, you need to extract the contents of the zip file to the Apache web server directory. This is typically located at `/var/www/html`, and can be done using the `unzip` command, like this:

```bashsudo unzip nextcloud-17.0.2.zip -d /var/www/html/
```

- Now you need to give the Apache web server permission to read and write to the Nextcloud directory. This can be done using the `chown` command, like this:

```bashsudo chown -R www-data:www-data /var/www/html/nextcloud
```

- At this point, Nextcloud is installed and ready to be configured. Open your web browser and navigate to `http://<server-ip-address>/nextcloud`, where `<server-ip-address>` is the IP address of your Ubuntu server. This will bring up the Nextcloud setup wizard, which will guide you through the process of creating a new admin account and configuring your Nextcloud instance.

- Once the setup wizard is complete, you will be able to log in to your Nextcloud instance using the admin account you created. From here, you can begin using Nextcloud to store and share files, collaborate with others, and much more.

In summary, installing Nextcloud on Ubuntu is a simple process that involves installing the Apache web server and PHP, downloading and extracting the Nextcloud installation package, and giving the web server permission to access the Nextcloud directory. With a little bit of effort, you can easily set up your own Nextcloud instance on an Ubuntu server.
