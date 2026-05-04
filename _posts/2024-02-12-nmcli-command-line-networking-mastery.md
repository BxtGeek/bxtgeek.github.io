---
title: "nmcli: Command-Line Networking Mastery!"
date: 2024-02-12 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "command-line"
  - "command-line-networking"
  - "linux"
  - "network-configuration"
  - "network-management"
  - "network-monitoring"
  - "networking-mastery"
  - "networkmanager"
  - "nmcli"
  - "static-ip"
  - "sysadmin"
image:
  path: /assets/img/posts/nmcli-Command-Line-Networking-Mastery.png
---

In the realm of Linux network management, efficiency and versatility are paramount. Enter `nmcli`, the command-line interface for NetworkManager, offering unparalleled control over network configurations and connections. In this article, we'll delve into the world of `nmcli`, exploring its capabilities and demonstrating how it empowers users to master networking from the command line.

## **What is nmcli?**

`nmcli` is a powerful command-line tool that serves as the interface to NetworkManager, the default network management service in many Linux distributions. It provides a comprehensive set of commands for configuring and monitoring network connections, making it an indispensable tool for both beginners and seasoned sysadmins.

```
NAME    UUID                                  TYPE      DEVICE
enp0s1  7cb31d31-17c1-3e8a-9321-eb469611eb39  ethernet  enp0s1
enp0s2  f3151652-4db6-3ffc-af6b-b78830c99d5a  ethernet  enp0s2
lo      c6277b69-d88e-4c8f-8235-74644c01fb78  loopback  lo
```

## **How to Use nmcli**

Using `nmcli` is straightforward, yet it offers a wide range of functionalities. To get started, simply open your terminal and type `nmcli`. This will display the main menu with various categories of commands, including connections, devices, networking status, and more.

```
enp0s1: connected to enp0s1
        "Red Hat Virtio"
        ethernet (virtio_net), C2:2E:F9:1D:DF:CD, hw, mtu 1500
        ip4 default
        inet4 192.168.64.61/32
        route4 192.168.64.1/32 metric 100
        route4 default via 192.168.64.1 metric 100
        inet6 fdb0:b525:57f5:d2d7:c02e:f9ff:fe1d:dfcd/64
        inet6 fe80::c02e:f9ff:fe1d:dfcd/64
        route6 fe80::/64 metric 1024
        route6 fdb0:b525:57f5:d2d7::/64 metric 100

enp0s2: connected to enp0s2
        "Red Hat Virtio"
        ethernet (virtio_net), 16:69:91:C2:D8:B5, hw, mtu 1500
        inet4 192.168.64.62/32
        route4 192.168.64.1/32 metric 101
        route4 default via 192.168.64.1 metric 101
        inet6 fdb0:b525:57f5:d2d7:587c:f9ca:37f3:c74b/64
        inet6 fe80::d071:1e89:82aa:aead/64
        route6 fe80::/64 metric 1024
        route6 fdb0:b525:57f5:d2d7::/64 metric 101

lo: connected (externally) to lo
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
        inet4 127.0.0.1/8
        inet6 ::1/128
        route6 ::1/128 metric 256
lines 1-29
```

To list available network connections, type `nmcli connection show`. This will provide a list of active and saved connections, along with their details such as UUID, type, and device.

## **How to Assign a Static IP**

Assigning a static IP address with `nmcli` is a breeze. First, identify the name of the connection you want to configure using `nmcli connection show`. Then, use the `nmcli connection modify` command to set the IP address, subnet mask, gateway, and DNS servers.

For example, to assign the IP address 192.168.1.100 with a subnet mask of 255.255.255.0 and a default gateway of 192.168.1.1 to a connection named "eth0", you would use the following command:

```
nmcli connection modify eth0 ipv4.addresses 192.168.1.100/24 ipv4.gateway 192.168.1.1 ipv4.dns "8.8.8.8, 8.8.4.4"
```

## **Conclusion**

In conclusion, `nmcli` is a versatile and powerful tool for mastering networking tasks from the command line. With its intuitive syntax and extensive capabilities, it enables users to configure, monitor, and troubleshoot network connections with ease. Whether you're a beginner exploring the basics of networking or a seasoned sysadmin managing complex network setups, `nmcli` equips you with the tools you need to streamline your workflow and achieve networking mastery. So, next time you find yourself needing to tweak your network settings on Linux, remember `nmcli` and unleash the power of command-line networking!
