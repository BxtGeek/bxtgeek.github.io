---
title: "How to Fix “Waiting for Active NFC Session to Terminate” Error in VMware"
date: 2022-12-06 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
tags: 
  - "esxcli-hangs"
  - "nfc-error-nfcsendfile-failed-to-get-sidecar-paths-nfc_success-the-operation-completed-successfully"
  - "restart-all-services-esxi-command-line"
  - "restart-the-vpxa"
  - "restart-xorg-service-esxi"
  - "timed-out-waiting-for-nfc-connections-retry-iteration-1"
  - "vmware-host-management-services-not-responding"
  - "waiting-for-operations-to-finish-nfc-server-ops-1"
image:
  path: /assets/img/posts/How-to-Fix-Waiting-for-Active-NFC-Session-to-Terminate-Error-in-VMware.png
---

When placing a VMware host into **maintenance mode**, you might encounter unexpected errors that halt your progress. One of the most common and frustrating messages is **“waiting for active NFC session to terminate.”**

This issue doesn’t happen every time, but when it does, it can delay maintenance tasks and system updates. Don’t worry — in this guide, you’ll learn **what causes this error** and **how to fix it quickly and safely**.

<figure>

![ESXi host stuck "Waiting for active NFC session to terminate" when entering maintenance mode](/assets/img/posts/screely-1669839351675-1024x188.png)

<figcaption>

ESXi host stuck "Waiting for active NFC session to terminate" when entering maintenance mode

</figcaption>

</figure>

## Understanding the Error: What Causes “Waiting for Active NFC Session to Terminate”?

Before applying a fix, it’s essential to understand the root cause.

This error usually appears when a **virtual machine (VM) backup process** is still running in the background. The NFC (Network File Copy) session remains active because the backup is transferring or locking VM data, preventing the host from fully entering maintenance mode.

In short:

> This error means that **your host is waiting for an ongoing backup task to complete.**

## How to Fix “Waiting for Active NFC Session to Terminate” Error

Fortunately, resolving this issue is simple and can be done in just a few minutes.

Here are **two proven methods** to fix it:

#### 1\. Stop Any Active VM Backup Jobs

The easiest fix is to **pause or stop any running backup jobs** before putting the host into maintenance mode.

**Steps:**

- Log in to your **backup software dashboard** (such as Veeam or any third-party backup solution).

- Check for **active backup tasks** related to the affected host.

- Stop or cancel any running backups.

- Try putting the host into maintenance mode again.

Once backups stop, the NFC session will end automatically, allowing maintenance mode to proceed.

#### 2\. Restart the VPXA Service

If the first method doesn’t work, restarting the **vpxa agent** on the ESXi host can help clear the stuck session.

**Steps:**

- Access the host via **SSH** or **Direct Console User Interface (DCUI)**.

- Run the following command to restart the VPXA service:

```
/etc/init.d/vpxa restart
```

- Wait for a minute, then attempt to put the host into maintenance mode again.

Restarting the VPXA service resets the communication between the host and vCenter, effectively terminating any lingering NFC sessions.

💡 _Tip:_ Restarting VPXA does not affect running VMs — it only resets the management agent.

## Preventing the Error in the Future

To avoid encountering the **“waiting for active NFC session to terminate”** issue again, consider these best practices:

- Schedule host maintenance **outside of backup windows**.

- Regularly check for **stuck or failed backup sessions**.

- Ensure your backup tool integrates correctly with vCenter to handle sessions cleanly.

Taking these precautions will help keep maintenance operations smooth and interruption-free.

## Frequently Asked Questions (FAQs)

**What does “waiting for active NFC session to terminate” mean in [VMware](https://www.corpit.org/category/vmware/)?**

It means a **backup or file transfer session is still running**, preventing the host from entering maintenance mode.

**How can I fix the “waiting for active NFC session to terminate” error?**

You can fix it by **stopping active backup jobs** or **restarting the VPXA service** using the `/etc/init.d/vpxa restart` command.

**Will restarting VPXA interrupt virtual machines?**

No, restarting VPXA only resets the management agent and won’t affect running VMs.

**Why does this error appear randomly?**

It appears when **backups overlap with maintenance tasks**, causing temporary conflicts in the NFC session.

**How can I prevent this error permanently?**

Schedule maintenance during non-backup hours and regularly monitor your backup sessions to avoid conflicts.

## Conclusion

This error in VMware is common but easy to fix. It usually happens because of an active backup session or a stuck NFC connection.

To resolve it, either **stop the running backup** or **restart the VPXA service** using `/etc/init.d/vpxa restart`. Both methods work effectively and can get your host into maintenance mode within minutes.

Stay proactive by managing your backup schedules, and you’ll avoid this issue in the future.
