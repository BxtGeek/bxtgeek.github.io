---
title: "Enabling Retreat Mode for Clusters in vSphere Version 8.0.2(22617221)"
date: 2023-12-08 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
image:
  path: /assets/img/posts/Enabling-Retreat-Mode-for-Clusters-in-vSphere-Version-8.0.222617221.png
---

In one of the previous articles, I talked about the [Retreat Mode,](https://corpit.org/drs-functionality-impacted-by-the-unhealthy-state-of-the-vsphere-cluster-services-vcls/) explaining its purpose and the method to put the cluster into Retreat Mode. However, in vSphere version 8.0.2(22617221), there is a new approach to enable Retreat Mode for the cluster. In this article, we will explore this new process. To implement these steps, ensure your vCenter is on version 8.0.2(22617221) or higher. Once you have confirmed the version compatibility, follow the steps below:

1. Log in to the vCenter and navigate to the cluster settings.

3. Select the configuration of the cluster and proceed to 'vSphere Cluster Services' -> 'General'.

5. Click on 'Edit vCLS' and choose 'Retreat Mode'.

7. Wait for the vCLS VM deletion process to complete.

9. Once deleted, revisit the same location, click on 'Edit vCLS', and select 'System Managed'.

![](/assets/img/posts/retreat-mode-1-1024x434.png)

![](/assets/img/posts/retreat-mode-2-1024x433.png)

This concise article aims to guide you through the new process. Should you encounter any issues while implementing the Retreat Mode for the cluster, please feel free to comment below. I'll gladly assist you further. Alternatively, you can also reach out to me on X (formerly Twitter) for a more detailed discussion."
