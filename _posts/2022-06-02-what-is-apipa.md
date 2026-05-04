---
title: "What is APIPA (Automatic Private IP Addressing)?"
date: 2022-06-02 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "apipa"
  - "automatic-private-ip-addressing"
image:
  path: /assets/img/posts/What-is-APIPA-Automatic-Private-IP-Addressing.png
---

Today this article will talk about the APIPA. APIPA Stands for the Automatic Private IP Addressing.

## What is APIPA (Automatic Private IP Addressing)?

For every computer we need an IP for the communication and that IP can be assigned from the DHCP. But what happens if a DHCP server is down or a machine is unable to connect to the DHCP. Then will use the APIPA. This is a window utility that assigns a private IP to a window machine.

The IP range of the APIPA is between (169.254.0.1 - 169.254.255.254). The default subnet mask is 255.255.0.0.

The system uses to assign IP using APIPA. When the DHCP server is down or there is some malfunction in the DHCP.

## Working of APIPA (Automatic Private IP Addressing)?

Let's consider an example there is 3 machine in a network and all try to ask for an IP from the DHCP server. But the DHCP server is down or malfunctioning. At that time all 3 machines will auto-assign an IP to themself to make sure each IP is unique. Using the [ARP protocol](https://corpit.org/what-is-arp/) they will broadcast an [ARP](https://corpit.org/what-is-arp/) message stating that I am having this IP. Having an IP from the APIPA. They will still check in the network for the DHCP server once the DHCP server is up. These APIPA will replace by the DHCP IP.

<figure>

![](/assets/img/posts/APIPA-1024x672.png)

<figcaption>

Working of APIPA

</figcaption>

</figure>

## Features of APIPA.

- APIPA ensures a system will communicate with each other without the need for DHCP IP.
- APIPA will also ensure that the DHCP server is always up or not.

## Advantages and Disadvantages of APIPA

Now let discuss about the APIPA. What is the advantages of using the [APIPA](https://www.techtarget.com/whatis/definition/Automatic-Private-IP-Addressing-APIPA#:~:text=Automatic%20Private%20IP%20Addressing%20\(APIPA\)%20is%20a%20feature%20of%20Windows,available%20to%20perform%20that%20function.) in the environment. As there are some advantages of using APIPA but its also come with some disadvantages.

### Advantages

- It's used as a backup in case of DHCP server is down.
- It also uses the ARP to make sure that IP is not currently in use.

### Disadvantages

- It won't provide the network gateway like DHCP
- APIPA is only used in the local area network.
