---
title: "How to Upgrade ESXi Using Command Line with Internet Access"
date: 2024-09-29 00:00:00 +0530
categories: 
  - "vmware"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-4.png
---

Upgrading an ESXi host using the command line with internet access can be done by connecting the host to VMware's online depot and using `esxcli` commands. Here's a step-by-step guide to upgrade your ESXi host:

### Prerequisites:

- Make sure your ESXi host is connected to the internet.

- Check that you have SSH access enabled on the ESXi host.

- Have a backup of your host configuration and VMs.

- Ensure the host is in **maintenance mode**.

### Steps to Upgrade ESXi:

**Enable SSH on the ESXi Host (if not already enabled):**

- Log in to the ESXi web interface.

- Go to **Manage** → **Services**.

- Find and start the **SSH** service.

**SSH into the ESXi Host:**

- Use an SSH client like PuTTY or the terminal if you're on a Unix-like system:

```bashssh root@<ESXi_host_IP>
```

**Place the ESXi Host in Maintenance Mode:**

- Before starting the upgrade, place the host in maintenance mode to avoid any VM disruption:

```
esxcli system maintenanceMode set --enable true
```

**Check Current Version:**

- To check the current ESXi version, run:

```
vmware -v
```

**Find the ESXi Profile to Upgrade:**

- Run the following command to list available profiles for upgrading:

```
esxcli software sources profile list -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml
```

**Upgrade ESXi Using the Profile:**

- Once you have identified the correct profile for your version (for example, `ESXi-7.0U3c-19193900-standard`), run the following command to upgrade:

```
esxcli software profile update -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml -p <profile_name>
```

- Example:  
    `esxcli software profile update -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml -p ESXi-7.0U3c-19193900-standard`

**Reboot the ESXi Host:**

- After the upgrade is successful, reboot the host:

```
reboot
```

### Optional: Check the ESXi Version After Upgrade:

Once the system reboots, you can verify the version by running:

```
vmware -v
```

This should display the new version of ESXi installed on your host.

## \[Video\] How to Upgrade ESXi Using Command Line with Internet Access

https://youtu.be/fPVu6gNPmyM
