---
title: "What is VLAN’s (Virtual Local Area Networks) ?"
date: 2022-06-04 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "virtual-local-area-networks"
  - "vlans"
image:
  path: /assets/img/posts/What-is-VLANs-Virtual-Local-Area-Networks.png
---

The topic of today's [article](https://corpit.org/) is one of the most significant networking concepts: VLAN. Will discuss how VLANs function, as well as their characteristics, ranges, benefits, and drawbacks. But before jumping into the VLAN we need to understand what is LAN.

## What is LAN?

LAN stands for Local Area Network. A collection of different computer or networking devices is known as LAN. All these devices may be found in any location, whether it's on a floor or in a building. LAN stands for local area network.

## Need of VLANs?

Before learning about the VLAN's let discuss why we need the VLAN. Let's suppose there is a school there are lots of different departments like Admin department, Payroll department, Library Department, Sports department, etc. For that, we have a few departments and they all are connected to the same network.

<figure>

![](/assets/img/posts/VLAN.png)

<figcaption>

VLAN Working

</figcaption>

</figure>

Now let's support a device from the sports department that sends a broadcast message. So this message will pass in every department whether they need that or not. That will create an extra burden on the network. Also, the creates an extra workload for the CPU to process this broadcast.

## What are VLANs?

Now we understand why we need the VLAN. Now let see what is VLAN's? So VLAN stands for Virtual Local Area Networks. Here is what we do in a local area network we create a sub-network. like VLAN1, VLAN2, and so on. We assign these VLANs like VLAN1 to the Admin department, VLAN2 to the Payroll department, and so on.

So by creating this what we did we group the devices that share the same or similar property in our example that property is the department.

## Types of VLANs

As now we understood about the VLAN. let me know to discuss the different VLANs. We classified VLAN in 3 categories:

### Port-Based VLAN

In this type of VLAN, we assign every port in the switch to one port. Let's suppose we have 9 ports in the switch so the first 3 ports to VLAN1 and the second 3 ports to VLAN2 and so on. The issue with this type of VLAN is anyone can connect to different VLANs and access their data. As it is easy to set up but different from maintenance and it is not that secure. We also have the limitation of the number of ports in the switch.

### Protocol Based VLAN

In this type of VLAN, we differentiate the data by the protocol. If data is coming will differentiate using the Protocol and will assign that data to the different protocol.

### MAC Based VLAN

So this is one of the popular types of [VLAN](https://www.techtarget.com/searchnetworking/definition/virtual-LAN#:~:text=A%20virtual%20LAN%20\(VLAN\)%20is,share%20the%20same%20physical%20network.). Most people use this type of VLAN. Here we create a list of MAC addresses and assign those to the VLAN. So if a user connects to any port. based on its mac it will allocate to that VLAN.

## How VLAN works

So VLAN creates a separate network in your network to differentiate different department traffic. It uses a technique known as trucking using which data will flow from the same wire but due to VLAN there is a virtual route is created to transfer the data. The upcoming article will see trunk and trunking in detail.

<figure>

![](/assets/img/posts/Trunking-1024x785.png)

<figcaption>

Trunking

</figcaption>

</figure>

## Characteristics of VLAN

- VLAN Ease the network management
- VLAN enhances security.
- It reduces network congestion by dividing the traffic into different VLANs.

## Advantages and Disadvantages of VLAN

Now let's discuss about the Advantages and Disadvantages of VLAN

### Advantages of VLAN

- It helps in reducing the broadcast overhead
- Higher performance and reduced latency.
- VLAN removes the physical boundary.
- It helps you to enhance network security.

### Disadvantages of VLAN

- A VLAN cannot forward network traffic to other VLANs.
- A packet can leak from one VLAN to another.
