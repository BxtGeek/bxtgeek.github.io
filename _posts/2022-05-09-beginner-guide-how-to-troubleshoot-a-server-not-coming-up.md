---
title: "Beginner Guide: How to Troubleshoot a server not coming up"
date: 2022-05-09 00:00:00 +0530
categories: 
  - "network-concept"
  - "storage-concepts"
tags: 
  - "bootlogs"
  - "cmos"
  - "dns"
  - "server-issue"
image:
  path: /assets/img/posts/Troubleshoot-a-server-not-coming-up.png
---

There are lots of times the server is not coming up. Here we are talking about a physical server, not a virtualized server. Server something like **[Dell PowerEdge R250 Rack Server](https://www.dell.com/en-in/work/shop/productdetailstxn/poweredge-r250)**.

## Information gathering for server not coming up

whenever you came across such a scenario. First, you need to gather relevant information about the event. Why it's happening and when it's happening. You can ask the below question to understand the issue better.

- When you are facing this issue time (Ask for some standard time, so that it will be easy to track)
- Is there any onsite activity?
- Are there any recent changes in the Datacenter?
- Are there any configuration changes?

## Common scenarios that cause performance issue

We have all the relevant info about the issue now let's start troubleshooting the issue. Will follow the below steps to troubleshoot.

- DNS check
- Do a physical check
- Check the health of the CMOS batteries
- Check the bootlogs

### DNS check

Ping the server and check whether it is up or not. If not luck with the name tries to ping the server with the IP. Sometimes there is some issue with the DNS resolver and due to this, we are unable to access the server.

### Do a physical check

Examine the physical server and find out if the connection is proper. Parts are installed correctly. In this case some time due to some onsite activity. Some wires are not connected properly due to which our server is not coming up. Check the wiring and you are good here.

### Check the health of the CMOS batteries

The CMOS battery powers your server BIOS firmware, which is responsible for booting up your server and configuring data flow. You can tell if your CMOS battery has died if your server has difficulty booting up, if drivers disappear and if your server date change.

### Check the bootlogs

Now we need to dig deep. Try to turn on the server and capture the boot logs. Check if everything is fine or not. From boot logs, we get lots of info about the hardware. Check if every internal hardware is good. Most probably here you will find the issue with the booting drive or DIMM/RAM so change those and your server will be up and running.

## Best practice to avoid the server not coming up the issue

- You need to refer server-specific configuration guide for the best configuration.
- Check the system at regular interval
- Setup a proper monitoring system
- Before doing any change in the system. Setup a change window and do a proper backup

## Conclusions

After checking this article you understand how you can troubleshoot the server not coming up with the issue. We have already written a few more **[Beginner Guides](https://corpit.org/)** that will help you in your IT journey.
