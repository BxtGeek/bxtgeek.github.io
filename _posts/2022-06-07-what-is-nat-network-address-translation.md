---
title: "What is NAT (Network Address Translation) ?"
date: 2022-06-07 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "nat"
  - "network-address-translation"
  - "networking"
image:
  path: /assets/img/posts/What-is-NAT-Network-Address-Translation.png
---

Today's article will talk about the NAT also known as Network address translation. As we all know there are limits on public Ip and due to the internet revolution, lots of people are coming to the internet day by day. So having a public id for all is next to impossible. In such a situation NAT helps us. Will see how NAT helps us in overcoming such a situation.

## What is NAT?

NAT stands for Network address translation. It is a process of masking one or more private Ip to public Ip or Vice versa.

<figure>

![](/assets/img/posts/NAT-Working.png)

<figcaption>

NAT Working

</figcaption>

</figure>

Let's suppose in your home there are lots of devices like a phone or laptop. Every family member has a phone and in some cases laptop. you have one broadband connection and one public Ip assigned to your broadband and every device in have there own private Ip. So in this case we need not have multiple public Ip. We can use the same public to access the internet on multiple devices.

NAT happens in the router or firewall. It creates a [NAT](https://en.wikipedia.org/wiki/Network_address_translation) table and every private IP is masked to the public, Ip.

## Working of NAT?

Most of the router is configured with the NAT. When one packet is coming to the network it comes to router Ip and at the router level, it will check where this packet should go and convert that Ip into the private and Ip and delivered the packet to that private Ip. When a packet is going out from the network then the device sends that to the router. The router will change that private Ip with the public Ip and send it to the internet.

The whole process will complete in a fraction of a millisecond. So NAT is having a pool of private IPs at some point all the Ip are assigned and a new device is added to the network it will drop the request and send an [ICMP](https://corpit.org/what-is-icmp-internet-control-message-protocol/) packet.

## Network Address Translation (NAT) Types

### Static NAT

In this type of NAT, we create one private Ip assigned to one public IP. It will come in very handy for the server. Because it provides a security layer to the server. Even if the attacker wants to attach it will only gain access to the public IP, not the private IP.

### Dynamic NAT

In this type of NAT, we have a bunch of public IPs and those ips are assigned to a bunch of private IPs. So let's suppose you have a firm and where we have a day shift and night shift. In each shift, we have 10 employees so we have 10 public IPs and 10 private IPs. So that every IP attaches to one private IP. But what if an employee comes early then he cannot log in as there is no IP left.

Due to this, we have the net type of NAT.

### Port Address Translation (PAT)

So in this type of NAT, we assign every private Ip a unique port. It will help to identify that this private device asks for the request. using this port we can easily overcome the issue of Dynamic NAT.

## Advantages and Disadvantages of NAT

Now let's discuss the Advantages and Disadvantages of NAT

### Advantages of NAT

- It provides added security as it will hide the device that sends the request.
- It also required the overhead of purchasing new IP
- NAT conserves the IP

### Disadvantages of NAT

- Translation results in some delay.
- Complicates tunneling protocols such as IPsec.
- Some applications do not work with the NAT enable
