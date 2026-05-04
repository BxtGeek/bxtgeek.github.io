---
title: "How to Mount a Drive in Ubuntu: Step-by-Step Guide"
date: 2021-10-19 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "code"
  - "coding"
  - "file-system"
  - "file-system-in-linux"
  - "learning"
  - "linux"
  - "testout"
  - "tutorials"
  - "ubuntu-server"
  - "unmount"
  - "unmounting-a-file-system"
image:
  path: /assets/img/posts/How-to-Mount-a-Drive-in-Ubuntu-Step-by-Step-Guide.png
---

Mounting a drive in Ubuntu may sound complex, but it’s actually straightforward once you know the right steps. Whether you’re adding an external hard drive, SSD, or partition, you need to mount it before accessing your data.

In this guide, we’ll walk through **five simple steps to mount a drive in [Ubuntu](https://www.corpit.org/how-to-assign-a-static-ip-in-the-ubuntu-server/)**, covering both temporary and permanent mounting options.

## Step 1: Identify the Drive in Ubuntu

Before mounting, you first need to identify the drive available on your system. Run the following command in your terminal:

```
lsblk
```

This command lists all block devices. You’ll see outputs like `/dev/sdb1`, `/dev/sdc`, etc.

- **/dev/sdb1** → Represents the partition.

- **MOUNTPOINT** → Shows where (if anywhere) the drive is currently mounted.

By checking this, you’ll know exactly which drive you want to mount.

## Step 2: Create a Mount Point

A **mount point** is simply a directory where your drive will be accessible. You can create one with:

```bashsudo mkdir /media/data
```

Here, `/media/data` is the mount point. You can choose any directory name you prefer.

## Step 3: Format the Drive with a Filesystem

If the drive is new or unformatted, you need to create a filesystem. The most common Linux filesystem type is **ext4**. Use:

```bashsudo mkfs.ext4 /dev/sdb1
```

- **ext4** → Filesystem type.

- **/dev/sdb1** → The drive partition you want to format.

⚠️ **Warning**: Formatting erases all existing data on the drive. Double-check before running this command.

## Step 4: Mount the Drive Temporarily

Now that you have a filesystem and mount point, mount the drive using:

```bashsudo mount /dev/sdb1 /media/data
```

At this point, you can access your drive by navigating to `/media/data`. However, this is a **temporary mount**—if you restart your system, it will unmount.

## Step 5: Mount the Drive Permanently

To ensure the drive mounts automatically at boot, you need to edit the **[fstab](https://help.ubuntu.com/community/Fstab)** file:

```bashsudo nano /etc/fstab
```

Add the following line at the end of the file:

```
/dev/sdb1   /media/data   ext4   defaults   1   2
```

### Breaking Down the fstab Line:

- `/dev/sdb1` → Drive partition.

- `/media/data` → Mount point directory.

- `ext4` → Filesystem type.

- `defaults` → Default mount options.

- `1` → Backup option (set to 0 to disable).

- `2` → Filesystem check order (root = 1, other partitions = 2).

Save and exit. From now on, your drive will mount automatically on every reboot.

## FAQs About Mounting Drives in Ubuntu

**How do I check which drives are mounted in Ubuntu?**

You can run `lsblk` or `df -h` to list all currently mounted drives and their mount points.

**What if I don’t want to format the drive before mounting?**

If the drive already has a filesystem (e.g., NTFS, ext4), you can skip formatting and mount it directly.

**Can I mount Windows drives in Ubuntu?**

Yes, Ubuntu supports NTFS and FAT32 filesystems. Just replace `ext4` with the correct filesystem type.

**Why should I edit fstab for permanent mounting?**

Without fstab configuration, your drive will unmount every time you restart Ubuntu. Editing fstab ensures it mounts automatically.

**Is it safe to edit the fstab file?**

Yes, but mistakes can prevent Ubuntu from booting properly. Always back up the file before making changes.

## Conclusion

Mounting a drive in Ubuntu is easy when you break it down into steps:

1. Identify the drive.

3. Create a mount point.

5. Format with a filesystem.

7. Mount temporarily.

9. Configure permanent mounting in fstab.

With these steps, you’ll have full access to your drives every time you boot your system.

👉 Now you’re ready to manage your storage efficiently in Ubuntu!
