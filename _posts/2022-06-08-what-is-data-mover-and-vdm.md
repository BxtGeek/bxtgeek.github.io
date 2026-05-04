---
title: "What is Data Mover and VDM (Virtual Data Mover)?"
date: 2022-06-08 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "data-mover"
  - "vdm"
  - "virtual-data-mover"
image:
  path: /assets/img/posts/What-is-data-mover-and-VDM.png
---

So today's [article](https://corpit.org/) will talk about the Data Mover and the Virtual Data Mover. Why they are important. First, let's talk about the Data Mover.

## What is Data Mover?

Data Mover is a physical unit that is installed in an array. That will translate from the storage system to the network client. It runs its operating system. It is a kind of gateway that presents the NAS storage to the end-user. It supports protocols like NFS, CIFS, and pNFS.

All the configuration is stored in the root file system of the physical Data Mover.

## What is Virtual Data Mover (VDM)?

Now let's discuss the Virtual Data Mover. It is an extension of the physical Data Mover. It is also Known as VDM. It allows the grouping of the CIFS or NFS into the virtual Container. Using this we can differentiate the CIFS and NFS from associate environments by different Ip addresses.

Each VDM configuration file is stored in the respective VDM root file system. It is the subset of the actual root file system.

From the below image we can see the physical data mover and the VDM root file system. All the operations that need to perform on the VDM are needed to perform in the Physical Data Mover.

<figure>

![](/assets/img/posts/Data-Mover.png)

<figcaption>

Data Mover Root File System.

</figcaption>

</figure>

We can perform the below operation on the data mover:

- Stop, start, delete services (eg. NFS)
- Data Mover failover
- Parameter changes

## Important link for Data Mover?

- [Virtual Data Movers on EMC VNX](https://www.delltechnologies.com/asset/en-us/products/storage/industry-market/h10741-vnx-data-movers-wp.pdf)
- [Configuring Virtual Data Movers on VNX](https://www.dell.com/community/s/vjauj58549/attachments/vjauj58549/celerra/21354/5/Configuring%20Virtual%20Data%20Movers%20on%20VNX%20%207.0%20A03.pdf)
