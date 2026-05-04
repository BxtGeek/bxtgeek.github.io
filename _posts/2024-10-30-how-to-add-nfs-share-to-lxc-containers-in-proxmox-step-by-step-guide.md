---
title: "How to Add NFS Share to LXC Containers in Proxmox: Step-by-Step Guide"
date: 2024-10-30 00:00:00 +0530
categories: 
  - "proxmox"
tags: 
  - "apparmor"
  - "container-configuration"
  - "container-management"
  - "container-networking"
  - "container-security"
  - "devops"
  - "file-sharing"
  - "linux-commands"
  - "linux-containers"
  - "linux-server"
  - "lxc-container"
  - "mount-nfs"
  - "network-file-system"
  - "nfs-setup"
  - "nfs-share"
  - "privileged-containers"
  - "proxmox"
  - "proxmox-guide"
  - "proxmox-lxc"
  - "proxmox-tutorial"
  - "ssh-setup"
  - "step-by-step-guide"
  - "system-administration"
  - "unprivileged-containers"
  - "virtualization"
image:
  path: /assets/img/posts/How-to-Add-NFS-Share-to-LXC-Containers-in-Proxmox-Step-by-Step-Guide.png
---

Proxmox is a powerful virtualization platform that supports LXC containers, allowing you to run lightweight, isolated environments. Integrating an NFS (Network File System) share can be useful for sharing data between containers and other devices on your network. This guide will walk you through setting up an NFS share within an LXC container on Proxmox.

#### Requirements:

- Proxmox server with LXC container support.

- NFS server already configured and accessible on the network.

- Basic knowledge of Linux commands.

### Step 1: Install and Configure SSH on Your LXC Container

First, ensure you can remotely connect to your LXC container by setting up SSH:

```bashsudo dnf install -y openssh-serversudo systemctl enable sshdsudo systemctl start sshdsudo systemctl status sshd
```

### Step 2: Install NFS Client Utilities in the LXC Container

To interact with NFS shares, you need to install the `nfs-utils` package on the LXC container:

```bashsudo dnf install nfs-utils -y
```

Enable and start the required services:

```bashsudo systemctl enable nfs-server rpcbindsudo systemctl start nfs-server rpcbind
```

### Step 3: Add the NFS Share to the Container’s Fstab

Edit the `/etc/fstab` file in the container to mount the NFS share automatically. Add the following line:

```
192.168.1.73:/mnt/MainPool /mnt/truenas nfs defaults 0 0
```

To apply changes:

```bashsudo systemctl daemon-reload
```

After this, you can run `mount -a` to manually mount the share immediately or reboot the container to check if it mounts automatically.

### Step 4: Allowing Access in Proxmox

By default, Proxmox might restrict certain operations for security reasons. To allow mounting, you need to modify the container’s configuration file in Proxmox:

1. **Navigate to the LXC configuration directory:**  
    `cd /etc/pve/lxc`

3. **Edit the container configuration file** (e.g., `100.conf`) and add:  
    `lxc.apparmor.profile: unconfined`

This change will disable the AppArmor profile for the container, allowing it to perform tasks like mounting an NFS share.

### Step 5: Privileged vs. Unprivileged Containers

Understanding the differences between privileged and unprivileged containers is essential for managing security and permissions:

1. **Privileged Containers**:
    - These containers run with elevated permissions and have direct root access to the system.
    
    - Easier to configure when working with system resources (e.g., mounting NFS shares), but they are less secure.
    
    - Suitable for internal, trusted environments.

3. **Unprivileged Containers**:
    - These containers run with restricted permissions, making them safer for multi-tenant environments.
    
    - More challenging to configure for resource access because of security restrictions.
    
    - To use NFS shares in an unprivileged container, additional permission settings might be required, like UID and GID mappings.

## \[Video\] How to Add NFS Share to LXC Containers in Proxmox: Step-by-Step Guide

https://www.youtube.com/watch?v=jSiBBGDWvK0

### Conclusion

Adding NFS shares to an LXC container in Proxmox is a straightforward process. While privileged containers simplify the setup, unprivileged containers offer better security. By following this guide, you can easily integrate shared storage into your Proxmox-based environment, ensuring seamless data sharing across your containers.
