---
title: "vCenter Error: The source host thumbprint is different than the provided one"
date: 2023-07-06 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
tags: 
  - "drs-distributed-resource-scheduler"
  - "source-host-thumbprint-error"
  - "vcenter-error"
  - "vcenter-error-message"
  - "vcenter-host-identification"
  - "vcenter-migration"
  - "vcenter-thumbprint-mismatch"
  - "vcenter-troubleshooting"
  - "vcenter-upgrade"
  - "virtual-machine-migration"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

Today's article discusses a common problem encountered during a vCenter upgrade. We will explore the cause of the error and provide a solution.

The error message states: "The source host thumbprint is different than the provided one." This error occurs during stage 2 of the vCenter upgrade, as shown in the screenshot below.

According to the official [vCenter upgrade documentation](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vcenter.upgrade.doc/GUID-913F49FC-E0F4-4AEE-8848-A0FE34F05E1D.html), it is necessary to set the Distributed Resource Scheduler (DRS) to manual mode before starting the vCenter upgrade. This is important because if the vCenter migrates from one host to another during the upgrade process, the thumbprint of the vCenter virtual machine will change, resulting in the displayed error.

To resolve this issue, you can either migrate the virtual machine back to the original host or, if you are unsure of the original host, restart the vCenter upgrade. Migrating the VM back to the original host can be challenging if the host is not known, which often leads to restarting the upgrade process.

We hope you find this article helpful. If you have any doubts, please feel free to reach out to us through the comments section or connect with us on [Twitter](https://twitter.com/bxtgeek). For further assistance, you can also check out our AI tool, [VMassist.](https://corpit.org/vmassist/)
