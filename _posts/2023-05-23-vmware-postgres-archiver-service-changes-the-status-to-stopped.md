---
title: "VMware Postgres Archiver Service changes the status to \"stopped\""
date: 2023-05-23 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "archiver-service"
  - "assistance"
  - "backup"
  - "error"
  - "postgres"
  - "ssh"
  - "status"
  - "stopped"
  - "troubleshooting"
  - "vcenter"
  - "vmware"
image:
  path: /assets/img/posts/VMware-Postgres-Archiver-Service-changes-the-status-to-stopped.png
---

This article discusses my recent experience with a vCenter ticket, precisely an error message I encountered: "invalid vCenter server status: all required services are not up, stopped services: 'VMware-postgres-archiver." The customer attempted to take a vCenter backup from the Vami interface but ran into this error. The error message will appear similar to the following:

![](/assets/img/posts/screely-1683852509808-1024x785.png)

Now that we have a clear understanding of how the issue appears, let's explore the possible scenarios that could lead to this problem. One possibility is that when restarting or powering on your vCenter, the 'VMware-postgres-archiver' service stops unexpectedly or encounters some other issue causing it to stop. Now that we have identified the potential cause of the problem, let's move on to discussing how we can resolve it.

To check the current status of all services in vCenter, log in to vCenter using SSH and execute the following command. Pay attention to whether the 'VMware-postgres-archiver' service is running or not. In my situation, the service is stopped.

```
service-control --status --all
```

Now we can run the below command to start the services.

```
service-control --start vmware-postgres-archiver
```

I hope this solution resolves your issue. If the problem persists, please leave a comment, and we will be more than happy to provide further assistance. Additionally, you can try out our new AI-Powered assistance tool, [VMassist](https://corpit.org/vmassist/), which is available for free.
