---
title: "How to setup an NFS share in Linux"
date: 2022-12-27 00:00:00 +0530
categories: 
  - "homelab"
  - "linux"
tags: 
  - "create-nfs-share-linux-ubuntu"
  - "how-to-check-nfs-share-in-linux"
  - "how-to-configure-nfs-server-in-linux"
  - "how-to-mount-nfs-in-linux"
  - "nfs-command-in-linux"
  - "nfs-configuration-in-rhel-7-step-by-step"
  - "nfs-server-configuration-in-linux-step-by-step-pdf"
  - "what-is-nfs-in-linux"
image:
  path: /assets/img/posts/How-to-setup-an-NFS-share-in-Linux.png
---

Network File System (NFS) allows you to share directories between multiple systems over a network. It is useful for sharing files in a local network or across remote servers. In this guide, we will walk through the process of setting up an NFS server on Ubuntu and mounting the shared directory on a remote Ubuntu machine.

### **Step 1: Install NFS Server on the Host Machine**

To set up an NFS server, you need to install the `nfs-kernel-server` package.

- **Update the system package list**: `sudo apt update`

- **Install NFS server**: `sudo apt install nfs-kernel-server -y`

### **Step 2: Create and Configure the Shared Directory**

Now, you need to create the directory that you want to share over the network.

- **Create the directory** (for example, `/mnt/nfs_share`):

```bashsudo mkdir -p /mnt/nfs_share
```

- **Set appropriate permissions**:

```bashsudo chown nobody:nogroup /mnt/nfs_share sudo chmod 777 /mnt/nfs_share
```

- These permissions allow any client to access and modify files. You can set more restrictive permissions based on your needs.

- **Edit the NFS exports file**: Open the `/etc/exports` file:

```bashsudo nano /etc/exports
```

- Add the following line at the end:

```
/mnt/nfs_share 192.168.1.0/24(rw,sync,no_subtree_check)
```

- **Apply the changes**:

```bashsudo exportfs -a
```

- **Restart the NFS service**:

```bashsudo systemctl restart nfs-kernel-server
```

### **Step 3: Configure Firewall (if applicable)**

If UFW (Uncomplicated Firewall) is enabled, allow NFS traffic.

```bashsudo ufw allow from 192.168.1.0/24 to any port nfs
```

Restart UFW:

```bashsudo ufw reload
```

### **Step 4: Install NFS Client on the Remote Machine**

Now, install the required packages on the client machine.

- **Update the package list**:

```bashsudo apt update
```

- **Install the NFS client package**:

```bashsudo apt install nfs-common -y
```

### **Step 5: Mount the NFS Share on the Remote Machine**

- **Create a mount point** (for example, `/mnt/nfs_client`):

```bashsudo mkdir -p /mnt/nfs_client
```

- **Mount the NFS share**:

```bashsudo mount 192.168.1.100:/mnt/nfs_share /mnt/nfs_client
```

- Replace `192.168.1.100` with the actual IP address of your NFS server.

- **Verify the mount**:

```
df -h
```

- You should see the mounted NFS share in the list.

### **Step 6: Make the Mount Persistent**

To ensure the NFS share is mounted automatically after a reboot:

- Open the `/etc/fstab` file:

```bashsudo nano /etc/fstab
```

- Add the following line at the end:

```
192.168.1.100:/mnt/nfs_share /mnt/nfs_client nfs defaults 0 0
```

- Save and exit the file.

- Test the fstab configuration:

```bashsudo mount -a
```

- If there are no errors, the configuration is correct.

### **Conclusion**

You have successfully set up an NFS server on Ubuntu and mounted it on a remote machine. This setup allows seamless file sharing between multiple systems. You can now access the shared directory from the remote machine as if it were a local directory.
