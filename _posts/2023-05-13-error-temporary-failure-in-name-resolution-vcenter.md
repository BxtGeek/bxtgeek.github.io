---
title: "Error - Temporary failure in name resolution vcenter"
date: 2023-05-13 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
tags: 
  - "error"
  - "name-resolution"
  - "temporary-failure"
  - "vcenter-2"
image:
  path: /assets/img/posts/Error-Temporary-failure-in-name-resolution-vcenter.png
---

In today's article, I will be discussing an issue I faced during a recent vCenter upgrade while helping a client. During stage 2, I encountered the following error: "Temporary failure in the name resolution center."

![](/assets/img/posts/screely-1683303632102.png)

Now that you have an understanding of what the error looks like, let's discuss how to troubleshoot it. There are various steps that can be taken to resolve this issue. While different troubleshooting steps may work for you, the following steps helped in my scenario.

## Troubleshoot #1:

- To begin troubleshooting, start by verifying if the VC FQDN is resolving to the IP address. This can be done by running the nslookup command in the command prompt.

```
nslookup VC_FQDN
```

- After verifying, try replacing the IP address with the FQDN and check if the issue persists. If the issue persists, proceed to the second troubleshooting step.

## Troubleshoot #2:

- Restart the upgrade process and in stage one, input the VC FQDN in the "ESXi host or vCenter Server name" field, then proceed with the upgrade.

![](/assets/img/posts/screely-1683304034286-1024x575.png)

By following the above troubleshooting steps, the issue should be resolved. However, if you are still experiencing issues, please let me know in the comments and I will be more than happy to assist you further. Alternatively, feel free to reach out to me on [Twitter](https://twitter.com/bxtgeek) for additional support.
