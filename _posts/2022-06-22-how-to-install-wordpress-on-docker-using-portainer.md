---
title: "How to Install WordPress on Docker using Portainer"
date: 2022-06-22 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "docker"
  - "portainer"
  - "wordpress"
image:
  path: /assets/img/posts/How-to-Install-WordPress-on-Docker-using-Portainer.png
---

In our homelab series, we already saw how we can create a [docker host](https://corpit.org/how-to-setup-docker-machine-virtualbox/). We also saw how we can install the portainer in the docker host. Now we have our home server ready. Now let's install WordPress in our docker host.

## What is WordPress?

For people who are not aware of WordPress. let's discuss WordPress. It is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. If you want to develop a website WordPress is a go-to option for you. There are more than 70% of the website on the internet are built upon WordPress. Due to its ease of use, lots of people like to use WordPress.

## Prerequisites

To start with the article you need to follow the below article first. Using this we can install our WordPress website.

- [How To Setup A Dedicated Docker Host In VirtualBox](https://corpit.org/how-to-setup-docker-machine-virtualbox/)
- [Install Portainer with Docker on ubuntu 20.04](https://corpit.org/install-portainer-with-docker-on-ubuntu-20-04/)

## How to install WordPress on docker using Portainer

So to install WordPress let's first discuss the important element of WordPress. That it needs to work. We need two containers to run the WordPress.

- MySQL
- WordPress

In the MySQL container, all the important databases will store. in the WordPress container, all the files that are required for WordPress will store.

Let's see how we can install WordPress. Will install the WordPress using the [docker-compose method](https://hub.docker.com/_/wordpress). We also use the stack to deploy the website.

Stack is like a template that you create in portainer. We need to follow the below steps to host the website.

- Open the portainer web UI and click on stacks from the left-hand panel.
- There you will see a button with the name Add stack. Click on that.
- First you need to mention the name of the stack. here will name WordPress(make it small). Now click on web editor and paste the below code.

```
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - 8080:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
    volumes:
      - wordpress:/var/www/html

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql

volumes:
  wordpress:
  db:
```

- Now click on the deployed stack.

<figure>

![](/assets/img/posts/screely-1655921413430-1024x610.png)

<figcaption>

Portainer Stack

</figcaption>

</figure>

- It will create two containers that you can see from the container tab from the left-hand menu.

<figure>

![](/assets/img/posts/screely-1655921454602-1024x610.png)

<figcaption>

Portainer Container

</figcaption>

</figure>

## Accessing the website

From the previous steps we know, How we can create the WordPress container. Now we need to access that. For that you need to open the below link:

```
Server_ip:8080
```

The default WordPress setup screen will pop up in front of you.

<figure>

![](/assets/img/posts/screely-1655921520928-1024x610.png)

<figcaption>

Wordpress Setup Page

</figcaption>

</figure>

So using this small article you can host a WordPress site in your docker host.
