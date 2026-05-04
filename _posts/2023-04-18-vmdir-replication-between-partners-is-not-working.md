---
title: "VMDir Replication between partners is not working"
date: 2023-04-18 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "command-line-tools"
  - "elm"
  - "it-support"
  - "replication-issues"
  - "snapshot"
  - "troubleshooting"
  - "vc-upgrade"
  - "virtualization"
  - "vmdir-replication"
  - "vmware"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

Greetings everyone, Today we will be discussing a particular situation where I was assisting a customer with their VC upgrade. The customer had ELM enabled but was encountering an error at the VC stage 2, stating "VMDir Replication between partners is not working". You can refer to the following link for more information:

![](/assets/img/posts/screely-1680820853785.png)

To resolve this issue, I logged into both VCs and checked the replication status. I noticed that one VC showed both replication partners, whereas the other VC only showed one. Here are the steps I took to resolve this problem:

- Prior to the upgrade, I ensured that we had a power-off snapshot of the VC in case anything went wrong.

- We ran the below command to check replication and found that it gave us the intended output in one VC, but showed nothing in the other.

![](/assets/img/posts/MicrosoftTeams-image-3-1024x428.png)

```
/usr/lib/vmware-vmdir/bin/vdcrepadmin -f showservers -h localhost -u administrator
/usr/lib/vmware-vmdir/bin/vdcrepadmin -f showpartnerstatus -h localhost -u administrator
/usr/lib/vmware-vmafd/bin/dir-cli state get
```

![](/assets/img/posts/MicrosoftTeams-image-2-1024x469.png)

- We also ran another command to check the VMDird status, and it showed as normal.

```
/usr/lib/vmware-vmdir/bin/vdcadmintool
```

![](/assets/img/posts/MicrosoftTeams-image-4-1024x589.png)

![](/assets/img/posts/screely-1680820791885.png)

- To proceed with the upgrade, we needed to fix the replication issue.

After fixing the replication issue, I was able to successfully upgrade the VC. If you are still encountering this error, you can refer to this article or leave a comment on this post for assistance. If you need further assistance, you can connect with me on Twitter.
