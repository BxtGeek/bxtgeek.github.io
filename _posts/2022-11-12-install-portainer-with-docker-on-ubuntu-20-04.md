---
title: "Install Portainer with Docker on ubuntu 20.04"
date: 2022-11-12 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "docker"
  - "linux"
  - "portainer"
image:
  path: /assets/img/posts/Install-Portainer-with-Docker-on-ubuntu-20.04.png
---

From the previous article, we already saw how to set up a dedicated Docker Host In VirtualBox. Now this article will see how we can install the Portainer. Also will see why we need to use the Portainer.

### What is Portainer?

Portainer is a web based container management system. Using this we can create perform different container operation like create, modify, destroy, etc.

### Prerequisites

To install the portainer we need below things :

- Centos 7.x, Centos 8.x, Ubuntu 18.04, Ubuntu 20.04

- 1024MB or above Ram.

- 20GB Disk Space.

- 1 vCPU or above CPU.

- Docker engine running on target host – Can be local or remote

- Linux, macOS or Windows docker host machine

- Internet connection to download Portainer docker image

### What Portainer can do

We already discuss about the portainer. Now let's see what we can do from the portainer.

- Manage the Containers.

- Quickly deploy the containerized application

- Manage the network and their security

- Easy user management

### How to install Portainer

Now let's see how we can install the portainer in the docker host.

- We need to create the volume for the docker.

```bashdocker volume create portainer_data
```

- Using the below command it will fetch the portainer image from the docker hub and set up the port.

```bashdocker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

- Now we need to check the status of the portainer status from the below command.

```bashdocker ps
```

<figure>

![](/assets/img/posts/screely-1655835085374-1024x157.png)

<figcaption>

Docker ps

</figcaption>

</figure>

### Accessing the Web Gui

Now will see how we can access the portainer web console. you need to go to the below Ip from your browser:

```
SERVER_IP:9000
```

Portainer default port is 9000 but if you want to change you change this as well. When you open the portainer web console it will look something like that.

<figure>

![](/assets/img/posts/screely-1655835287807-1024x610.png)

<figcaption>

Portainer Console

</figcaption>

</figure>

Once you login into the portainer you will find the below dashboard. Where you can find the list of nodes that you have and how many containers. You will also find the container states from this dashboard.

<figure>

![](/assets/img/posts/screely-1655835482843-1024x610.png)

<figcaption>

Portainer Web Console

</figcaption>

</figure>

So this is all about this article in this article we saw how we can install the portainer in our docker host. We also saw how we can access the web console.  
In the upcoming article will see how we can deploy a container on this.

## How to install and Access Portainer (Video)?

https://www.youtube.com/watch?v=\_sQvljkgnaU
