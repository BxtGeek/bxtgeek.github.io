---
title: "Beginner Guide: How to Troubleshoot a Performance issue in SAN"
date: 2022-05-07 00:00:00 +0530
categories: 
  - "network-concept"
  - "storage-concepts"
tags: 
  - "performance-issue"
  - "san"
  - "troubleshoot"
image:
  path: /assets/img/posts/How-to-Troubleshoot-a-Performance-issue-in-SAN.png
---

The performance issue is one of the common issues that we see in the SAN system. Due to this people can access the data but at a slow speed. Today this article will see how we can troubleshoot the issue.

## Information gathering for Performance issue

To jump into the Performance issue first do the information gathering and find out is there any possible issue due to which this issue is occurring. You can ask the below points with the customer to understand the current scenario.

- From when you are facing this issue time (Ask for some standard time, so that it will be easy to track)
- Is there any onsite activity?
- Are there any recent changes in the Datacenter?
- Are there any configuration changes.

## Common scenarios that cause performance issue

Now you have all the available details to troubleshoot the issue. So now we understand the important part of this troubleshooting.

- Backend storage System
- Network Latency
- Some issues with the switches
- Host issue

So above are the possible cause of the issue. So let's troubleshoot the issue accordingly.

### Backend storage System

In the storage system, we need to check if any drives are having an issue. Like drive failure. Once we determine that we need to address that and replace that drive. After that, we need to check the EOL or Drive wearing. If a drive has a high count of the soft media error then we need to replace the drive proactively. After that, we can also check if there is an issue with the Pool or LUN.

### Network Latency

Once the Backend storage System is checked we can now check the Network. Because using the Network we are connecting our storage system to the host. Take the Network logs from the customer. Usually, GNS logs have all the info about the Network. So you can ask those from the customer. You can check with the a network expert to check that and find out is there any issue on the network side.

### Some issues with the switches

Sometimes there is some issue with the switches due to which we are facing the performance. So we usually have 2 popular switches named **[cisco](https://www.cisco.com/c/en_in/products/switches/index.html)** [](https://www.cisco.com/c/en_in/products/switches/index.html)and **[brocade](https://www.broadcom.com/products/fibre-channel-networking/switches/g620-switch)**. You can ask for the logs from the customer and check that with a switches expert if there is some issue on the switch side.

### Host issue

Now at last if everything looks good. Then Check the host side. Probably there is some issue with the host. You can ask for the logs from the VMware to check if there is some issue with that. You can engage the VMware expert to look deep into the issue.

## Best practice to avoid the Performance issue

- You need to refer product specific configuration guide and product guide to choose right components to deliver the maximum efficient performance.
- Check the system at regular interval
- Setup a proper monitoring system
- Before doing any change in the system. Setup a change window and do a proper backup

## Conclusions

So in this article, I told you about the Performance issue and how you can troubleshoot that. From my experience most of the time this issue occurred due to miss-configuration. Check out our other great tutorials from the **[website](https://corpit.org/)**.
