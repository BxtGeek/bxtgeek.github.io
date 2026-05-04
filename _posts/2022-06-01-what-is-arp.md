---
title: "What is ARP (Address Resolution Protocol)?"
date: 2022-06-01 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "address-resolution-protocol"
  - "arp"
image:
  path: /assets/img/posts/What-is-ARP-Address-Resolution-Protocol.png
---

Today's [article](https://corpit.org/) will talk about the ARP. What is ARP and how do we use ARP in-network administration.

## What is ARP?

ARP stands for the Address Resolution Protocol it is a layer 2 protocol. It is used to resolve the IP addresses to MAC addresses. MAC is a physical address of a device and it is globally unique. MAC is assigned to every network interface card(NIC). MAC stands for Media access control.

To communicate in a local area network you need the MAC to address the device to have a communication. To get the MAC address we use the ARP protocol.

An IP address is used to locate a device on a network but the MAC address identified the actual device.

## Working of ARP?

To understand the working of [ARP](https://www.techtarget.com/searchnetworking/definition/Address-Resolution-Protocol-ARP). Let's take an example let's suppose there is a network and where there are 4 devices connected naming A, B, C and D. Now A wants to communicate with the C. So it will check the MAC value of the C device for that it will check the device's own ARP cache.

<figure>

![](/assets/img/posts/Local-Area-Network-ARP.png)

<figcaption>

Local Area Network - ARP

</figcaption>

</figure>

If it finds the entry there it will start communicating with the device. If there is no entry then it will broadcast the message in the network asking what is the MAC of this IP address. A device that has that mac address will respond with the MAC. Device A will store that value in the ARP cache and start the communication.

If you have the window device you can check the ARP table using the below command and the output will look similar to the below image.

```
arp -a
```

<figure>

![](/assets/img/posts/ARP-command-output.png)

<figcaption>

Window ARP Output

</figcaption>

</figure>

ARP cache is so important to have in a device as the device wants to communicate in the network they need to send the broadcast message in the network. They just simply refer to the ARP table.

In the ARP cache, there are two types of values stored static and dynamic. So Dynamic value is something that is automatically created in the ARP cache and with time it got flushed. So that there is not a huge list of unused data. Whereas the static entry is something that is entered by the human. You can add your entry using the ARP utility in the Window.
