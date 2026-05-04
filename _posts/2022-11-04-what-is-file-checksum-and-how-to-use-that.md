---
title: "What is file checksum and how to use that?"
date: 2022-11-04 00:00:00 +0530
categories: 
  - "cryptography"
tags: 
  - "checksum-example"
  - "checksum-software"
  - "file-checksum-linux"
  - "file-checksum-windows"
  - "how-does-checksum-work"
  - "how-to-calculate-checksum"
  - "how-to-use-checksum"
  - "what-is-checksum-in-networking"
image:
  path: /assets/img/posts/What-is-file-checksum-and-how-to-use-that.png
---

With the increased amount of privacy concerns, the checksum plays an important role. To make sure the file are temper proof. This article will discuss the [checksum](https://www.a2hosting.in/kb/developer-corner/linux/working-with-file-checksums) and how we can use the checksum to secure our files.

## What is a checksum?

The [checksum](https://www.a2hosting.in/kb/developer-corner/linux/working-with-file-checksums) is an alphanumeric value that is associated with a file. Whenever we download some file from the internet there is one alphanumeric string got to attach to that file. That file represents the current status of the file. If the downloaded file has some different checksum. That means the file got corrupted or altered while downloading.

These checksums are also known as hashes. The most common hashes algorithms are MD5 and SHA. A slight change in alphabet case will in a different-looking [checksum](https://corpit.org/category/cryptography/).

## What is the use of checksum?

There are lots of different scenarios where we can refer to the checksum.

- let's suppose we are downloading something from the internet. So we can check the checksum of the file and compare that checksum with the download file. That will help us in making sure the file is not altered while downloading.

- We can store the checksum of your backup so we can make sure our backups are not corrupted.

- These hashes can we also be important to determine the authenticity of the image. We can also use these checksums for image licensing.

- We can share the secure email with this checksum.

- It is also used by companies to verify the user without storing the user's password in the server.

## Type of hash algorithms?

Various checksum algorithms are currently we are using. The most common checksum algorithms are MD5 and SHA. Following are algorithms that you can use to generate the checksum.

- MD2

- MD4

- [MD5](https://en.wikipedia.org/wiki/MD5)

- SHA1

- SHA256

- SHA384

- SHA512

## How do checksums work?

The checksum is an algorithm. You can use any algorithm to generate the hash. In this algorithm you can put anything in a single line of text, an image, or an entire operating system, this will generate a fixed output in the form of hashes.

If we take the example of SHA256 it can take any output and show the result in 64 letter hash.

## How Calculate Checksums?

You can see the checksum in any operating system. This article will show you. How you can check the hash of the file in Linux and Windows. For this example I am taking the [MD5](https://en.wikipedia.org/wiki/MD5) as my algorithm.

### Calculate checksum in window?

```
Get-FileHash <filename> MD5
```

### Calculate checksum in Linux?

```bashecho -n '<filename>' | md5sum
```
