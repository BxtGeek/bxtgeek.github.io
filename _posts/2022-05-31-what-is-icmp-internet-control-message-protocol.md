---
title: "What is ICMP (Internet Control Message Protocol)?"
date: 2022-05-31 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "icmp"
  - "internet-control-message-protocol"
  - "ping"
  - "traceroute"
image:
  path: /assets/img/posts/What-is-ICMP.png
---

Today's article will Talk about the ICMP. How do we use the ICMP packet in networking and some famous Linux utilities that depend upon the ICMP?

## What is the ICMP?

ICMP is known as Internet Control Message Protocol. It is also known as an error reporting protocol. So whenever a packet drops the network device will generate the ICMP packet to the previous device stating that the packet dropped. In response to the ICMP packet Network device send a new packet. It is not a protocol that transfer protocol that sends data between systems, That's only used for error reporting. It is not used in the end-user application. It is usually used in network administration for network troubleshooting.

## What is ICMP used for?

It is used to communicate the error information. ICMP messages can be triggered due to several scenarios. Like If a device sends a message to a larger network and if some device or recipient drops the message then it sends an ICMP message back to the source.

Also if we communicate in a large network and network find out a shorter route to reach the destination then the drop that packet and as a result it sends an ICMP packet back to the source.

## ICMP in network diagnostics?

As ICMP is mostly used in network administration there is 2 popular Linux utility that uses ICMP to diagnose network.

- **Traceroute** \- It will check all the devices that are present between two devices also known as hop. If some network device is not up then it will send a message to the source.
- **Ping** \- Ping is the most command that is used by the network administrator to check whether a server is up or not. It will send a packet to the target if it drops the packet then it will send a message back to the source in form of ICMP. That defines a server as not up.
