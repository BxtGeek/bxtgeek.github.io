---
title: "Enable or disable SSH on VMWare vCenter Server Appliance (VCSA)"
date: 2022-12-29 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "disable-ssh-vcenter"
  - "enable-ssh-on-vcenter-server-appliance-7-vcsa"
  - "how-to-ssh-into-vcenter"
  - "ssh-vcenter-commands"
  - "vcenter-enable-ssh-on-host"
  - "vcenter-server-appliance-management-interface"
  - "vcenter-ssh-connection-refused"
  - "vcsa-enable-ssh-cli"
image:
  path: /assets/img/posts/Enable-or-disable-SSH-on-VMWare-vCenter-Server-Appliance-VCSA.png
---

Enabling the SSH in vCenter is a high risk. It increases the attack surface. As per the VMware security policy, we always recommend to disabled SSH.

Use the SSH whenever required and after the use of the SSH disable that. In this tutorial will see how we can enable and disable ssh.

## Enable/Disable the SSH using the Vami Page.

1.) Open the web browser and log in to the VAMI page with the root credentials.  
2.) In the right-hand side dashboard check for the access label and click on that.  
3.) There you will find the option to enable and disable the SSH for the vCenter.

## Enable/Disable the SSH using the DCUI.

1.) log in to the DCUI page  
2.) Press ALT F2 for the duo setting  
3.) Using the keyboard arrow keys go to system configuration and find the Troubleshooting Mode options  
4.) There you will find the option to enable or disable the SSH option
