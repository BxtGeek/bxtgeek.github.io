---
title: "How to assign a static IP to the ubuntu server"
date: 2022-10-29 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

Follow the below steps to have a static IP

Static IP Address Assignment

1.) Login to the ubuntu server

2.) After that enter the below command to edit the network file

```bashsudo nano /etc/netplan/00-installer-config.yaml
```

3.) Add the below code in the file, Please make sure you have your network adapter name handy(mine is ens18)

```
network:
  ethernets:
    ens18:
      addresses:
        - 192.168.0.71/24
      routes: 
        - to: default
          via: 192.168.0.1
      nameservers:
          addresses: [8.8.8.8]
  version: 2
```

4.) Once the file is edited, Apply the below command to update the service.

```bashsudo netplan apply
```

Once all is done, reboot the machine and you are good to go.
