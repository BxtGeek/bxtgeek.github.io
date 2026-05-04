---
title: "How to Enable SSH on ESXi Host: Step-by-Step Guide"
date: 2022-11-17 00:00:00 +0530
categories: 
  - "vmware"
tags: 
  - "enable-ssh-esxi-command-line"
  - "enable-ssh-on-esxi-7"
  - "esxi-5-5-enable-ssh"
  - "esxi-enable-ssh-from-console"
  - "esxi-enable-ssh-permanent"
  - "how-to-enable-ssh-on-esxi-host-from-vcenter"
  - "ssh-to-esxi-host"
  - "tsm-ssh"
image:
  path: /assets/img/posts/How-to-Enable-SSH-on-ESXi-Host-Step-by-Step-Guide.png
---

In day-to-day VMware administration, SSH is often required to connect to an **ESXi host** for troubleshooting and management tasks. However, many organizations disable SSH for **security reasons**.

When troubleshooting or performing maintenance, administrators may need to **temporarily enable SSH**. In this guide, we’ll cover different methods to enable or disable SSH on an ESXi host safely.

## Method 1: Enable SSH on ESXi Host Using the Host Client

1.) Login to the [host client](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-4EAFC4E4-D666-4E40-8CF9-7B96418DD3DB.html)  
2.) Click on the action and select services There you will find the option to enable/disable ssh.

<figure>

![](/assets/img/posts/screely-1668706480875-1024x555.png)

<figcaption>

Enable/Disable the ssh using the host client

</figcaption>

</figure>

## Method 2: Enable SSH on ESXi Host Using DCUI

1.) Login to the DCUI using the [iLO](https://www.hpe.com/us/en/servers/integrated-lights-out-ilo.html)/[iDRAC](https://www.dell.com/en-in/dt/solutions/openmanage/idrac.htm)  
2.) Hit Alt+F2 and enter the root credentials  
3.) Select the troubleshooting option

<figure>

![](/assets/img/posts/screely-1668706689655.png)

<figcaption>

troubleshooting option

</figcaption>

</figure>

4.) There you will find one option to enable and disable ssh.

<figure>

![](/assets/img/posts/screely-1668706704459.png)

<figcaption>

Enable/Disable the ssh using the DCUI

</figcaption>

</figure>

## Best Practices for Using SSH on ESXi Hosts

While enabling SSH can be helpful, it’s important to follow **best practices**:

- 🔒 Only enable SSH when troubleshooting.

- ⏳ Disable SSH once tasks are complete.

- 🛡 Use **firewall rules** or restrict access by IP for better security.

- 📜 Monitor SSH logs to track unauthorized login attempts.

By following these steps, you keep your ESXi environment both functional and secure.

## Frequently Asked Questions (FAQs)

**Why should I enable SSH on ESXi host?**

You should enable SSH on an **ESXi host** when you need direct access for troubleshooting, configuration, or advanced management tasks.

**How do I enable SSH in ESXi using Host Client?**

Simply log in to the **Host Client**, go to **Actions > Services**, and enable SSH.

**Can I enable SSH on ESXi host without internet access?**

Yes. SSH can be enabled locally using the **DCUI** without requiring internet connectivity.

**Is it safe to keep SSH enabled on ESXi?**

No. For security, SSH should be **enabled only when needed** and disabled afterward.

**What if SSH service is blocked in my ESXi environment?**

If blocked by policy, you may need to request access through your **system administrator** or use alternative VMware management tools.

## Conclusion

Enabling SSH on an ESXi host is sometimes necessary for troubleshooting and administration. You can do this either through the **Host Client** or the **DCUI**, depending on your access method.

👉 Always remember to disable SSH once your tasks are done to maintain a secure environment.
