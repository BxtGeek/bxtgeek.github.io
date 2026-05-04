---
title: "How to Setup Netdata Monitoring Tool on Ubuntu"
date: 2022-12-20 00:00:00 +0530
categories: 
  - "homelab"
  - "linux"
tags: 
  - "netdata-docker"
  - "netdata-github"
  - "netdata-install-redhat"
  - "netdata-linux"
  - "netdata-omv"
  - "netdata-system-requirements"
  - "openwrt-netdata"
  - "uninstall-netdata"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

[Netdata](https://www.netdata.cloud/) is a popular open-source monitoring tool that can be used to monitor the performance and health of Linux systems in real-time. In this article, we will look at how to install Netdata on an Ubuntu server.

<figure>

![](/assets/img/posts/screely-1672477662342-1024x633.png)

<figcaption>

Netdata

</figcaption>

</figure>

- The first step is to install the `git` and `zlib1g-dev` packages, which are required by [Netdata](https://www.netdata.cloud/). This can be done by running the following command:

```bashsudo apt-get install git zlib1g-dev
```

- Next, clone the Netdata git repository to your Ubuntu server using the following command:

```bashgit clone https://github.com/netdata/netdata.git --depth=1
```

- Once the repository has been cloned, navigate to the `netdata` directory and run the `netdata-installer.sh` script. This script will automatically install all of the required dependencies and configure [Netdata](https://www.netdata.cloud/) for you. You can run it using the following command:

```bashcd netdata
sudo ./netdata-installer.sh
```

- After the installation is complete, you can access the Netdata dashboard by opening a web browser and navigating to `http://<server-ip-address>:19999`, where `<server-ip-address>` is the IP address of your Ubuntu server. This will bring up the Netdata dashboard, which displays real-time information about the performance and health of your system.

- By default, the Netdata dashboard is only accessible from the local server. If you want to be able to access it from a remote computer, you will need to edit the `/etc/netdata/netdata.conf` configuration file and set the `bind to` option to your server's IP address. For example:

```
[web]
  bind to = 192.168.1.100
```

- Save the configuration file and restart the [Netdata](https://www.netdata.cloud/) service using the following command:

```bashsudo systemctl restart netdata
```

- You should now be able to access the [Netdata](https://www.netdata.cloud/) dashboard from a remote computer using the IP address of your Ubuntu server.

In summary, installing Netdata on Ubuntu is a simple process that involves installing the required dependencies, cloning the Netdata git repository, and running the installation script. With a little bit of effort, you can easily set up Netdata on your [Ubuntu server](https://corpit.org/how-to-install-the-docker-on-ubuntu/) and start monitoring its performance and health in real-time.
