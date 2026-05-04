---
title: "Understanding Linux Basic Networking"
date: 2023-09-11 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "basics-of-linux-networking"
  - "introduction-to-linux-networking"
  - "inux-network-fundamentals"
  - "learning-linux-networking"
  - "linux-network-basics-explained"
  - "linux-network-concepts"
  - "linux-network-essentials"
  - "linux-network-introductory-guide"
  - "linux-network-knowledge"
  - "linux-network-understanding"
  - "linux-networking-101"
  - "linux-networking-basics-unveiled"
  - "linux-networking-essentials"
  - "linux-networking-for-beginners"
  - "linux-networking-for-newbies"
  - "linux-networking-for-starters"
  - "linux-networking-overview"
  - "linux-networking-primer"
  - "linux-networking-simplified"
  - "mastering-linux-networking-basics"
image:
  path: /assets/img/posts/Understanding-Linux-Basic-Networking.png
---

Linux, with its robust networking capabilities, is the backbone of the internet and runs many critical systems worldwide. Whether you're a system administrator, developer, or just a curious user, understanding basic Linux networking is essential. In this article, we'll explore the fundamental concepts and commands that will help you get started in this fascinating domain.

## What is ifconfig?

`ifconfig` stands for "interface configuration" and is a command-line utility used in Unix-like operating systems, including Linux, to view and configure network interfaces. It allows users to query and configure various network-related parameters of network interfaces, such as Ethernet cards, wireless adapters, and virtual interfaces.

ifconfig has his brother's name ipconfig for Windows😉.

## Understanding the output of the ifconfig command

![](/assets/img/posts/image.png)

Now, let's break down the elements in this output:

- `**eth0**`: This is the name of the network interface. Each network interface is assigned a name, such as eth0, eth1, wlan0, etc.

- `**flags=4163**`: These are the flags or attributes associated with the interface. In this example, `UP` indicates the interface is up, `BROADCAST` indicates it can send broadcast packets, `RUNNING` indicates it's operational, and `MULTICAST` means it can send multicast packets.

- `**mtu 1500**`: MTU stands for Maximum Transmission Unit, which is the maximum packet size the interface can handle without fragmentation.

- `**inet 192.168.1.89**`: This is the IPv4 address assigned to the interface.

- `**netmask 255.255.255.0**`: This is the subnet mask associated with the IP address.

- `**broadcast 192.168.1.255**`: This is the broadcast address for the network.

- `**inet6 fe80::385d:c8ff:fe5a:702b**`**:** This is the IPv6 link-local address for the interface.

- `**ether 3a:5d:c8:5a:70:2b**`: This is the MAC (Media Access Control) address of the interface, which is unique to the hardware.

- `**txqueuelen 1000**`: This indicates the length of the transmit queue for the interface.

- `**RX packets**`: Shows the number of packets received, along with the total bytes received.

- `**RX errors**`: Displays the number of received errors.

- `**TX packets**`: Shows the number of packets transmitted, along with the total bytes transmitted.

- `**TX errors**`: Displays the number of transmit errors.

- **`dropped`, `overruns`, `frame`**: These fields show various statistics related to packet handling, including dropped packets, overruns, and frame errors.

- `**collisions**`: Displays the number of collisions detected on the interface, which is relevant for Ethernet interfaces.

## Changing IP address using the ifconfig 

To change the IP address of a network interface using the `ifconfig` command, you need to specify the name of the interface (`eth0`, `eth1`, etc.) and the new IP address you want to assign. You can also specify other parameters like the netmask or broadcast address if needed. Here's the basic syntax:

```bashsudo ifconfig [interface] [new_ip] [netmask] [broadcast]
```

Let's break down the components:

- `sudo`: You may need superuser privileges to change network configuration, so you typically use `sudo` to run `ifconfig` with administrative rights.

- `interface`: Replace this with the name of the network interface you want to configure (e.g., `eth0`, `eth1`, `wlan0`, etc.).

- `new_ip`: Specify the new IP address you want to assign to the interface. For example, if you want to set the IP address to `192.168.1.100`, replace `[new_ip]` with `192.168.1.100`.

- `netmask` (optional): If you want to change the netmask (subnet mask) along with the IP address, specify it here. For example, `[netmask]` could be `255.255.255.0`.

- `broadcast` (optional): If you want to change the broadcast address along with the IP address, specify it here. For example, `[broadcast]` could be `192.168.1.255`.

## Changing MAC address using the ifconfig

You can change the MAC (Media Access Control) address of a network interface using the `ifconfig` command in Linux. To do this, you'll need to use the following syntax:

```bashsudo ifconfig [interface] hw ether [new_mac_address]
```

Here's a breakdown of the components:

- `sudo`: You'll often need superuser privileges to change the MAC address, so you should run the `ifconfig` command with `sudo`.

- `interface`: Replace this with the name of the network interface you want to configure (e.g., `eth0`, `eth1`, `wlan0`, etc.).

- `hw ether`: This part of the command specifies that you are going to change the hardware (MAC) address of the interface.

- `new_mac_address`: Replace this with the new MAC address you want to assign to the interface. The MAC address should be in the format `XX:XX:XX:XX:XX:XX`, where each `X` represents a hexadecimal digit (0-9, A-F).

## Changing the DNS 

To change the DNS (Domain Name System) server settings on a Linux system, you typically need to edit the `/etc/resolv.conf` file. This file contains the DNS resolver configuration for your system. Here's how to change the DNS servers:

- Edit the resolv.conf File using the command

```bashsudo nano /etc/resolv.conf
```

- Edit the DNS Server Entries: Inside the resolv.conf file, you should see lines that look like this:

- Save and Exit: If you're using nano, press Ctrl + O to save the file and then Enter. To exit, press Ctrl + X.

- Restart the Network Service: Depending on your Linux distribution, you may need to restart the network service for the changes to take effect. You can do this with a command like:

```bashsudo systemctl restart network-manager
```

- Verify DNS Settings: To verify that your DNS settings have been changed, you can use the cat command to display the contents of the resolv.conf file

```bashcat /etc/resolv.conf
```

## Mapping your own IP address

If you want to map your own IP address to a hostname in the `/etc/hosts` file on a Unix-based system (Linux, macOS, etc.), you can do so to create a local DNS-like mapping. This can be useful for various purposes, such as setting up local development environments or accessing local services using a custom hostname. Here's how you can map your IP address in the `/etc/hosts` file:

- Open a Terminal: Open a terminal or command prompt with administrative privileges (you may need to use sudo).

- Edit the /etc/hosts File: Use a text editor like nano

```bashsudo nano /etc/hosts
```

- Add the Mapping: In the /etc/hosts file, you'll typically see lines with IP addresses followed by hostnames. You can add your mapping by appending a line at the end of the file. The format is:

```
[IP Address] [Hostname]
```

- Replace \[IP Address\] with your IP address and \[Hostname\] with the hostname you want to map to that IP address. For example:

```
192.168.1.100   mycustomhostname
```

- Save and Exit: If you're using nano, press Ctrl + O to save the file and then Enter. To exit, press Ctrl + X.

- Verify the Mapping: To verify that the mapping is working, you can ping the hostname you specified:

```
ping mycustomhostname
```

- It should resolve to the IP address you specified.

- Testing: You can also open a web browser and enter the hostname (e.g., http://mycustomhostname) to see if it resolves to the correct IP address. This is useful for testing local web services.
