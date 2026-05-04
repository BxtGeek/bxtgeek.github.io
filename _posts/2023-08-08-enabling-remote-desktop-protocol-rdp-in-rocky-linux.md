---
title: "Enabling Remote Desktop Protocol (RDP) in Rocky Linux"
date: 2023-08-08 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "gui"
  - "linux"
  - "linux-desktop"
  - "linux-networking"
  - "linux-server"
  - "rdp"
  - "remote-access"
  - "remote-desktop-protocol"
  - "rocky-linux"
  - "system-administration"
image:
  path: /assets/img/posts/Enabling-Remote-Desktop-Protocol-RDP-in-Rocky-Linux.png
---

Remote Desktop Protocol (RDP) is a valuable feature that allows users to connect to their Rocky Linux system from another device, such as a Windows or macOS computer. By enabling RDP, users gain the ability to access and control their Rocky Linux machine remotely, making it an essential tool for system administrators, developers, and individuals who need to manage their server or desktop from a distance. In this article, we will walk you through the steps to enable RDP on your Rocky Linux system.

## Prerequisites

Before proceeding with the steps below, make sure you have the following:

- A working [Rocky Linux installation](https://corpit.org/how-to-install-gnome-desktopgui-on-rocky-linux-9/).

- Patience

And sorry I forget about the coffee, As you all know, in the world of IT, coffee is an essential companion for everything we do 😉.

## Enabling Remote Desktop Protocol (RDP)

- **Update the System** \- The first step is to update the system packages to ensure you have the latest software and security updates. Open a terminal and run the following commands:

```bashsudo yum update && sudo yum upgrade
```

- **Install xrdp Package** - Next, we need to install the xrdp package, which is responsible for handling RDP connections on the Rocky Linux system. Run the following command in the terminal:

```bashsudo yum install xrdp
systemctl start xrdp
systemctl enable xrdp
```

- **Allow RDP Port Through Firewall** \- To allow incoming RDP connections, we must open the default RDP port (3389) on the firewall. Run the following commands to add the necessary rule:

```bashsudo firewall-cmd --permanent --add-port=3389/tcp
sudo firewall-cmd --reload
```

- **Check IP Address** \- To connect to your Rocky Linux system via RDP, you will need to know its IP address. Run the following command to find the IP address of your system:

```
ip addr
```

- After following this you can open the RDP in your other machine and connect to this machine. And you have a working RDP session.

![Rocky Linux RDP session](/assets/img/posts/image-1024x576.png)

## Conclusion

Enabling Remote Desktop Protocol (RDP) on Rocky Linux allows you to access your system remotely and perform administrative tasks from the comfort of your local machine. By following the steps outlined in this article, you can easily enable RDP and establish a secure remote connection to your Rocky Linux system. With RDP enabled, you can efficiently manage your server or desktop, saving time and effort in your daily operations. Enjoy the convenience of remote access while ensuring the security and reliability of your Rocky Linux system.
