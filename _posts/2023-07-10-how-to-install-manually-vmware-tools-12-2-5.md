---
title: "How to install manually VMware tools 12.2.5"
date: 2023-07-10 00:00:00 +0530
categories: 
  - "vcenter"
  - "vmware"
tags: 
  - "installation-steps"
  - "linux-vm"
  - "manual-installation"
  - "virtual-machine-tools"
  - "vmware-tools-12-2-5"
  - "vmware-tools-installation"
  - "vmware-tools-installation-guide"
  - "vmware-tools-iso"
  - "vmware-tools-upgrade"
  - "windows-vm"
image:
  path: /assets/img/posts/How-to-install-manually-VMware-tools-12.2.5.png
---

In today's article, we will discuss how to install VMware Tools 12.2.5. Due to the recent vulnerability [VMSA-2023-0013](https://www.vmware.com/security/advisories/VMSA-2023-0013.html), many customers are attempting to upgrade their VMware Tools to version 12.2.5. However, with the recent version of vCenter, VMware Tools are not available by default, so customers need to install them manually.

**Here's how to upgrade VMware Tools 12.2.5 on a Windows VM:**

- Log in to the customer connect portal and download the latest VMware Tools.

- Once downloaded, extract the zip file and locate the VMware Tools ISO.

- Mount the ISO in the Windows VM and proceed with the installation.

- After installation, reboot the VM to complete the VMware Tools upgrade to version 12.2.5.

**And here's how to upgrade VMware Tools 12.2.5 on a Linux VM:**

1. Using the same method, extract the ISO and mount it to the Linux VM.

3. Create a directory by running the following command

```bashmkdir /mnt/cdrom
```

- Mount the CD to the newly created directory using this command

```
mount /dev/cdrom /mnt/cdrom
```

- Copy the necessary files using this command

```bashcp /mnt/cdrom/VMwareTools-version.tar.gz /tmp/
```

- Extract the files using the following command

```
tar -zxvf VMwareTools-version.tar.gz
```

- Navigate to the extracted directory and Run the installation script

```bashcd vmware-tools-distrib 
./vmware-install.pl
```

1. Reboot the VM to complete the VMware Tools upgrade to version 12.2.5.

We hope you find this concise article helpful. If you have any doubts, please feel free to leave a comment. You can also reach out to me on [Twitter](https://twitter.com/bxtgeek). Don't forget to check out our AI-powered tool, [VMassist](https://corpit.org/vmassist/).
