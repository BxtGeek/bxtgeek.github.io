---
title: "Understanding Dora Process in DHCP"
date: 2022-06-13 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "dhcp"
  - "dora"
  - "protocol"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

Today will talk about the DHCP. We all know how important the internet is for us. But to run the internet we need IP. Guess who provides this beautiful thing to use DHCP. So today will talk about the DHCP. How it will assign the IPs to the network devices. Also, it will talk about the alternative the DHCP. Also the PRo and Cons of using the DHCP.

## What is DHCP?

DHCP stands for the Dynamic Host Configuration Protocol. It is a protocol that will assign dynamic Ip to network devices. Using these Ip network devices will communicate. DHCP helps organize all the Ip in a central system that is easy to manage. This all is automated so Admin needs to set up the IP in every system.

Now we know about the DHCP and what it does. Let's see how that DHCP assigns the Ip to the network devices.

## Working of DHCP?

The process of assigning Ip to any network device is known as DORA. Will see how DORA works. It is not [Dora the explorer](https://en.wikipedia.org/wiki/Dora_the_Explorer) so please be aware.

In DORA there are a total of 4 steps will take place. After these 4 steps, any network device has there own IP.

<figure>

![DORA Process](/assets/img/posts/DHCP-1024x598.png)

<figcaption>

DORA Process

</figcaption>

</figure>

### 1\. DHCP Discover

Whenever a system comes up in a network. It will broadcast a message on the network. Stating I need an IP. With that message, it will also add his Mac address. So that DHCP will target that.

### 2\. DHCP Offer

Once DHCP listens to the broadcast message. It will offer an IP, Mac of the DHCP Server, Ip of the DHCP server, netmask and Lease time.

### 3\. DHCP Request

Once the Network devices have the DHCP offer. It will send a request back to the DHCP server. Stating that I am agreeing with the Ip. Will use these Ip in future communication.

### 4\. DHCP ACK

Once the DHCP server will listen to this Message from network devices. It will make an entry into the system. As a response, it will send an ACK message. Stating that save your data and now you can use that Ip.

## Advantages and Disadvantages of DHCP?

We already learn lots of things about the DHCP and how its working but let discuss about the pro and cons about the DHCP.

### Advantages of DHCP

- It is easy to use and It automatic the assignment of IP addresses.
- Implementation does not need any extra cost.
- As all data is centralized so any Duplicate or Invalid Ip can be detected.
- It is simplifying the networking

### Disadvantages of DHCP

- It is a single point of failure.
- Client cannot communicate in case of Ip absence.
- It comes with a security risk. As it can easily authenticate the client.

## Alternative of DHCP?

Most people use DHCP. Due to its ease of use. But there are still a few situations, where we need to seek the alternative. Once a popular alternative is [APIPA](https://corpit.org/what-is-apipa/). I already created a detailed article on that. But the only downside is that it works only in Windows. There are some others like TFTPD32, Serva 32/64, Technitium DNS Server, and so on.

## DHCP FAQ

### What is DHCP?

DHCP stands for "Dynamic Host Configuration Protocol".

### What is DHCP's purpose?

DHCP's purpose is to enable individual computers on an IP network to extract their configurations from a server (the 'DHCP server') or servers, in particular, servers that have no exact information about the individual computers until they request the information. The overall purpose of this is to reduce the work necessary to administer a large IP network.

### Who Created It? How Was It Created?

DHCP was created by the Dynamic Host Configuration Working Group of the Internet Engineering Task Force (IETF; a volunteer organization which defines protocols for use on the Internet). As such, it's definition is recorded in an Internet RFC and the Internet Activities Board (IAB) is asserting its status as to Internet Standardization. As of this writing (March 1996), DHCP is an Internet Proposed Standard Protocol and is Elective. BOOTP is an Internet Draft Standard Protocol and is Recommended. For more information on Internet standardization, see RFC1920 (March 1996).

### How is it different than BOOTP or RARP?

DHCP is based on BOOTP and maintains some backward compatibility. The main difference is that BOOTP was designed for manual pre-configuration of the host information in a server database, while DHCP allows for dynamic allocation of network addresses and configurations to newly attached hosts. Additionally, DHCP allows for recovery and reallocation of network addresses through a leasing mechanism.  
RARP is a protocol used by Sun and other vendors that allows a computer to find out its own IP number, which is one of the protocol parameters typically passed to the client system by DHCP or BOOTP. RARP doesn't support other parameters and using it, a server can only serve a single LAN. DHCP and BOOTP are designed so they can be routed.  

### Can DHCP support statically defined addresses?

Yes. At least there is nothing in the protocol to preclude this and one expects it to be a feature of any DHCP server. This is really a server matter and the client should work either way. The RFC refers to this as manual allocation.

### Can a BOOTP client boot from a DHCP server?

Only if the DHCP server is specifically written to also handle BOOTP queries.

### Can a DHCP client boot from a BOOTP server?

Only if the DHCP client were specifically written to make use of the answer from a BOOTP server. It would presumably treat a BOOTP reply as an unending lease on the IP address.  
In particular, the TCP/IP stack included with Windows 95 _does not_ have this capability.

### **What is the default duration of IP lease in DHCP?**

The default duration of IP lease is **8 days.**

### What is DHCP port number?

DHCP uses UDP port number **67** for the DESTIANTION SERVER and UDP port number **68** for the CLIENT.
