---
title: "TrueNAS was unable to reach updated servers."
date: 2023-08-15 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "network-connection-error"
  - "server-communication-failure"
  - "server-connection-issue"
  - "server-connectivity-problem"
  - "truenas-server-issues"
  - "truenas-server-update"
  - "truenas-update-issue"
  - "truenas-upgrade-problem"
  - "update-server-unreachable"
  - "updating-truenas-servers"
image:
  path: /assets/img/posts/TrueNAS-was-unable-to-reach-updated-servers.png
---

This article will discuss an error that we encountered during the TrueNAS upgrade. The error will appear as follows:

This issue may be caused by two reasons:

![](/assets/img/posts/image-1-1024x522.png)

- Incorrect DNS setup.

- Time and date discrepancies.

## Method #1:

- Log in to TrueNAS.

- Navigate to the "Networking" section.

- Under "Global Configuration," verify the correctness of the Nameservers.

- Once confirmed, proceed to the second method.

![](/assets/img/posts/image-2-1024x354.png)

## Method #2:

- Log in to TrueNAS.

- In the "System Information" section, check if you are encountering the error message: "Your NAS time does not match your computer time." This occurs when the TrueNAS time and the TrueNAS backend time are not synchronized.

- Now, go to "System Settings" -> "Shell."

- Execute the following command to resolve the time issue:

```
timedatectl set-time 'YYYY-MM-DD HH:MM:SS'
```

- After completing the steps, restart TrueNAS and check if the issue persists.

## Conclusion

In conclusion, this article has delved into the encountered error during the TrueNAS upgrade, providing insights into its potential causes and offering step-by-step methods to address them.

By meticulously examining DNS setup and addressing time and date discrepancies, we have outlined a comprehensive approach to troubleshooting and resolving the issue. Following the outlined methods ensures a smoother upgrade process and helps maintain the functionality of your TrueNAS system.

Should you encounter any challenges or require further assistance, please feel free to leave a comment below. Alternatively, you can reach out to me on [Twitter](https://twitter.com/bxtgeek), where I'd be more than happy to provide additional guidance and support. Your feedback and engagement are invaluable in our collective pursuit of seamless TrueNAS operations.

Thank you for your time and dedication in addressing this issue. Here's to hassle-free upgrades and optimal TrueNAS performance!
