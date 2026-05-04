---
title: "Error - Vmware Vsphere Lifecycle Manager Had An Unknown Error"
date: 2023-05-16 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "error-handling"
  - "error-resolution"
  - "esxi-upgrade"
  - "it-support"
  - "software-update-issues"
  - "troubleshooting"
  - "virtualization"
  - "vmware-infrastructure"
  - "vmware-vsphere"
  - "vsphere-lifecycle-manager"
image:
  path: /assets/img/posts/Error-Vmware-Vsphere-Lifecycle-Manager-Had-An-Unknown-Error.png
---

  
In this article, I will share my recent experience with an error that occurred during an ESXi upgrade using VMware vSphere Lifecycle Manager. The error message I encountered was "VMware vSphere Lifecycle Manager had an unknown error." Below is a screenshot showcasing the error message:

![](/assets/img/posts/image-2-1024x285.png)

Now that you have a clear understanding of the error and its appearance, let's delve into the potential causes behind this issue. Typically, there are three common reasons for its occurrence:

1. The VMware Update Manager service has not been started correctly.

3. There is an error present in the VMware Lifecycle Manager Database.

5. The vNIC (virtual Network Interface Controller) has not been configured with the proper DNS settings (although this is a rare occurrence).

These factors are likely contributing to the problem, and addressing them will help resolve the issue.

Now that we have identified the cause of the issue, let's explore the troubleshooting steps that were successful in resolving it. While these steps may not work in every case, there is no need to panic. Our comment section is available to assist you further or you can also check our AI-powered tool [VMassis](https://corpit.org/vmassist/)t.

## Troubleshoot #1:

During our discussion, we identified a potential cause for the issue. It appears that there may be an issue with the VMware Update Manager service not starting properly. To address this, you can resolve the problem by following these steps:

- Access the vCenter using SSH.

- Issue the command provided below to restart all the services in the vCenter.

- This action should resolve the issue and restore normal functioning.

Please execute the following command in your vCenter SSH session to restart the services:

```
service-control --stop --all && service-control --start--all
```

## Troubleshoot #2:

If you have followed the troubleshooting plan mentioned above and are still experiencing issues, it is recommended that you proceed with the following course of action. 

If you have already tried the first workaround and are still experiencing the issue, please try the following workaround. This involves [resetting the VUM database](https://corpit.org/lcm-showing-error-status-404-after-upgrade/), which can be done using the command below.

> Note: Resetting the Update Manager database is a task that permanently removes certain data. This includes custom baselines (but not Cluster Images), custom download settings, and manually imported patches/ISOs. You will need to reapply these after the reset.
> 
> Before proceeding with the steps below, we recommend that you take a backup or an offline snapshot (in powered-off state) of the vCenter Server Appliance. If the vCenter is part of a Linked Mode replication setup, please also backup/snapshot all replicating nodes. Additionally, make note of all custom configurations in Update Manager, such as proxy settings, third-party download URLs, and customized baselines, etc.

```bashservice-control --stop vmware-updatemgr

In vCenter Server Appliance 6.5:
/usr/lib/vmware-updatemgr/bin/updatemgr-util reset-db

In vCenter Server Appliance 6.7/7.0:
python /usr/lib/vmware-updatemgr/bin/updatemgr-utility.py reset-db

rm -rf /storage/updatemgr/patch-store/*
service-control --start vmware-updatemgr
```

After completing the steps, log back into vCenter and check if the life cycle manager issue has been resolved. If the issue persists, please leave a comment, and I will be more than happy to assist you.
