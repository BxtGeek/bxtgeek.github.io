---
title: "How to install the docker on Ubuntu"
date: 2022-11-09 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "docker-desktop-stopped-ubuntu"
  - "docker-desktop-ubuntu"
  - "docker-hub-ubuntu"
  - "docker-ubuntu"
  - "install-docker-compose-ubuntu"
  - "install-docker-desktop"
  - "install-docker-on-linux"
  - "uninstall-docker-ubuntu"
image:
  path: /assets/img/posts/How-to-install-the-docker-on-Ubuntu.png
---

In today's article, we won't talk about much. This is a simple docker installation article. You just need to throw these commands in your Linux terminal and you are good to go. Your [docker](https://corpit.org/what-is-docker-and-how-it-works/) will be installed. Let's see how we can start with the installation.

**Update the system with the below commands**

```bashsudo apt update && sudo apt upgrade
```

**Install the necessary packages**

```bashsudo apt install apt-transport-https ca-certificates curl software-properties-common
```

**Curl the key**

```bashcurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

**Add the repository**

```bashsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

**This will update the package database with the docker packages**

```
apt-cache policy docker-ce
```

**Install the docker ce**

```bashsudo apt install docker-ce
```

**Check the docker status**

```bashsudo systemctl status docker
```

**Executing the Docker Command Without Sudo (optional)**

```bashsudo usermod -aG docker ${USER}
```

**Run the test container**

```bashdocker run hello-world
```
