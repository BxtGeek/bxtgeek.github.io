---
title: "What is Zoning and LUN Masking?"
date: 2022-02-15 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "initiator"
  - "lun-masking"
  - "target"
  - "zoning"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

In SAN system Zoning and LUN masking plays an important role. In this article will see what is this.

## What is Zoning?

Zoning is configured to switched to control which host are allowed to communicate with each other. It creates a security layers so unauthorized access between initiator(Host) and Target(Storage) won't happen. It create a logical path between initiator and target to communicate.

## What is LUN Masking?

Using the zoning we control how a initiator can communicate with the target. But how we can give an access to the initiator to communicate with a particular LUN. That where LUN masking come into picture. LUN Masking is configured in a storage system to lock a LUN down to the Host or Hosts who are authorized to access it.

## Note

You can remember the Zoning and LUN Masking from the below points its always help

- Zoning ->Switch Level
- LUN Masking -> Storage System
