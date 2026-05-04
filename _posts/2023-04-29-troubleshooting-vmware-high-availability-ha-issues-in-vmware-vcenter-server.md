---
title: "Troubleshooting VMware High Availability (HA) issues in VMware vCenter Server"
date: 2023-04-29 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
tags: 
  - "high-availability"
  - "troubleshooting"
  - "vcenter-server"
  - "vmware"
  - "vsphere"
image:
  path: /assets/img/posts/Troubleshooting-VMware-High-Availability-HA-issues-in-VMware-vCenter-Server.png
---

In this article, I will be discussing a recent ticket I received from a customer who was receiving alerts about the "vSphere HA host status" in their 2-host setup. I will cover the steps I took to resolve this issue.

![](/assets/img/posts/screely-1682157201803-1024x267.png)

To begin with, let's understand what vSphere HA is. It is a feature of VMware's vSphere virtualization platform that provides automatic recovery for virtual machines in the event of a host failure. When a host failure occurs, vSphere HA automatically restarts the affected virtual machines on other available hosts in the cluster, ensuring minimal downtime and service disruption.

Moving on to the troubleshooting steps I took:

## Troubleshoot #1:

- Logged in to the vCenter and clicked on the cluster level.

- Went to config and navigated to the vSphere HA and disabled and enabled it.

- However, this did not resolve the issue.

## Troubleshoot #2:

- Tried to disconnect and reconnect the host.

- Checked the vSphere HA, but the alarm was still showing.

## Troubleshoot #3:

Disabled the vSphere HA from the cluster level.

Logged in to one of the ESXi and checked if FDM vib was present using the command -

```
esxcli software vib list |grep fdm
```

Since FDM vib was present, I removed it using the command -

```
esxcli software vib remove -n vmware-fdm -f
```

Now, login to the vCenter and using the below command copied FDM vib to the ESXI using the command -

```bashcd /etc/vmware-vpx/docRoot/vSphere-HA-depot/vib20/vmware-fdm/

scp VMware_bootbank_/VMware_bootbank_vmware-fdm_x.x.0-xxxxxx.vib root@<esxi-ip>:/tmp
```

Installed FDM VIB again using the command -

```
esxcli software vib install -v /tmp/VMware_bootbank_vmware-fdm_x.x.0-xxxxxx.vib -f
```

Verified the FDM vib in the host using the command -

```
esxcli software vib list |grep fdm
```

Started the vSphere HA services from the cluster level, and the alert disappeared.

In conclusion, I hope this article has been helpful to you. If you have any doubts while implementing these steps, feel free to let me know in the comments, and I will be happy to assist you. If you are still facing any issues, you can connect with me over [Twitter](https://twitter.com/bxtgeek).
