---
title: "“Read-only File System” Error and Solutions"
date: 2022-07-22 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "error-read-only-file-system-mac"
  - "how-to-fix-read-only-file-system-error-in-redhat-linux"
  - "linux-file-system-went-to-read-only-mode"
  - "read-only-file-system-error-android"
  - "read-only-file-system-error-python"
  - "root-is-read-only-file-system"
  - "tar-cannot-open-read-only-file-system"
  - "ubuntu-read-only-file-system-windows"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

This article will discuss a common problem that people use to face while installing Linux. That is a read-only file system in this article will discuss this in detail about that. Why it happens and how we can solve it.

What happens when this issue detect?  
You are unable to create a folder, delete a file, etc. you don't have the modified privileges of the filesystem.

## Why does it happen?

1. If you are dual booting your system. So at that time, you face this issue.
2. By copying OS from one drive to another drive.

## How to resolve this issue?

To resolve the issue. First, you need to list down the drives that are available in your system you can do this from the below commands.

```
lsblk
```

No, you have all the drives and partitions. List down the drive that has an issue and run the below command.

```bashsudo ntfsfix /drive/path something like sudo ntfsfix /dev/sda1
```

After this, your issue will be resolved.
