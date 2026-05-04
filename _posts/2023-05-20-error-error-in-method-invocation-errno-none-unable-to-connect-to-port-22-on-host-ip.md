---
title: "Error - Error In Method Invocation [errno None] Unable To Connect To Port 22 On [Host-IP]"
date: 2023-05-20 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "connection-issue"
  - "error-codes"
  - "error-resolution"
  - "error-troubleshooting"
  - "esxi-host"
  - "method-invocation-error"
  - "port-22-error"
  - "ssh-configuration"
  - "troubleshooting-tips"
  - "vcenter-upgrade"
image:
  path: /assets/img/posts/Error-Error-In-Method-Invocation-errno-None-Unable-To-Connect-To-Port-22-On-Host-IP.png
---

In this article, I will discuss a recent ticket I received regarding a customer's experience with an error message during a vCenter upgrade. The error message displayed was "Error In Method Invocation \[errno None\] Unable To Connect To Port 22 On \[Host-IP\]." The error can be visualized as follows:

![](/assets/img/posts/image-1-1024x366.png)

Let's delve into the root cause of this issue. During a vCenter upgrade, the vCenter software attempts to establish a connection with the host using port 22. This particular issue tends to occur more frequently in older versions of vCenter.

Now that we have gained an understanding of the possible cause of the issue, let's explore the troubleshooting steps to address it.

## Troubleshoot #1:

To resolve this issue, you will need to enable SSH on the host and then proceed with the update. Follow the steps below to enable the SSH service on the host:

- Connect to the ESXi host using the VMware vCenter

- In the vSphere Client, select the ESXi host in the inventory.

- Go to the "Configure" tab and click on "Security Profile" in the left-hand menu.

- In the Services section, click on "Edit" next to "Services Properties."

- A new window will appear displaying the list of services. Locate "SSH" and click on "Options."

- Select "Start" to enable the SSH service.

- Click "OK" to save the changes.

Once you have followed the steps mentioned above to enable SSH on the host, you can continue with the upgrade process. This will resolve the issue and allow you to successfully start the vCenter update.

If you encounter any further difficulties, there's no need to worry! I'm here to help. Please leave a comment in the section below, and I'll be more than happy to assist you. Additionally, you can check out our AI-powered tool, [VMassist](https://corpit.org/vmassist/), for further guidance and support.
