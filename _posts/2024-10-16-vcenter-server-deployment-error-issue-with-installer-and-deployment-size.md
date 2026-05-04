---
title: "vCenter Server Deployment Error: Issue with Installer and Deployment Size"
date: 2024-10-16 00:00:00 +0530
categories: 
  - "vmware"
tags: 
  - "deployment-size-error"
  - "libnsl"
  - "ova-file-error"
  - "ovf-tool"
  - "rocky-linux"
  - "typeerror"
  - "vcenter-deployment"
  - "vcenter-installer"
  - "vcenter-server"
  - "virtualization"
  - "vmware"
  - "vsphere"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

While deploying a vCenter Appliance on Fedora Linux, I encountered the following error:

<figure>

![](/assets/img/posts/Screenshot-2024-10-01-at-7.05.07 AM-1024x834.jpg)

<figcaption>

Screenshot

</figcaption>

</figure>

**Error:**

```
A problem occurred while reading the OVA file:
TypeError: Cannot read properties of undefined (reading 'length')
```

The installer log, found in `/tmp/vcsaUiInstaller`, revealed this:

```
2024-10-01T19:27:44.548Z - error: OVF probe error: TypeError: Cannot read properties of undefined (reading 'length')
```

At first, I suspected a permissions issue with `layout.json`, but after verifying the file permissions, everything seemed correct. Next, I ran `ovftool` to check if it was causing any problems:

**Command:**

```
[vmware@console lin64]$ ./ovftool
```

**Error:**

```
./ovftool.bin: error while loading shared libraries: libnsl.so.1: cannot open shared object file: No such file or directory
```

It turned out that the `libnsl` library was missing. To fix this, I installed it with the following command:

```bashdnf install libnsl
```

After the installation completed successfully, I didn't need to restart the installer. I simply went back one screen and retried the deployment, which worked perfectly!

![](/assets/img/posts/vCenter-Server-Installer-Deployment-Size-1024x686-1.png)
