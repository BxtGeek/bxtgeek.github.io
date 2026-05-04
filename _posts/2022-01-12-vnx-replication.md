---
title: "What is Replication? and VNX Replication offering?"
date: 2022-01-12 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "local-replication"
  - "loopback-replication"
  - "mirror-view"
  - "recoverpoint"
  - "remote-replication"
  - "replication"
  - "rto"
  - "srdf"
  - "vnx-block-only-system"
  - "vnx-file-only-system"
  - "vnx-gateway"
  - "vnx-replicator"
  - "vnx-unified"
  - "vplex"
image:
  path: /assets/img/posts/What-is-NAS-and-SAN.png
---

**VNX Replication, **Replication****, **VNX Block only system, VNX File only system, VNX Unified, VNX gateway, Recoverpoint, VNX Replicator, Mirror View, Loopback replication, Local Replication, Remote replication, SRDF, VPLEX, RTO, RPO**

If you are creating a data center then backup takes an important part. Because that backup only helps us in the disaster time. There are lots of things using which we can perform the backup but today's article will talk about the Replication and how we can implement this in VNX.

## What is the Replication?

Create an offsite backup, that continuously copies the data from one server to another. Another server is situated in another part of the world. So that any natural disaster, Human error, or cyberattack won't impact that. Also at any given point in time, we can backup data from our replicated array/server.

We use Replication to achieve two main functionality failover capability and load balancing. So at any point in time, the main server will go down the secondary server will come into the picture and handle all the loads.

Its use in the load balancing as well. If there are lots of requests is coming to our primary server then some requests will go to the secondary server to have those addresses. That will help the system to servers requests in an efficient way.

## Dell VNX Replication?

To discuss that we need to understand the VNX. So VNX comes into the below configuration:

- VNX Block only system
- VNX File only system
- VNX Unified
- VNX gateway

And for the above VNX configuration we can use the below-supported solution:

<figure>

![Replication solution for different VNX configuration](/assets/img/posts/image.png)

<figcaption>

Replication solution for different VNX configuration

</figcaption>

</figure>

### Recoverpoint

It provides an appliance-based, continuous data protection solution. It provides the integrity of the production data at the local and remote sites. It provides centralized control for data protection management. It provides efficient asynchronous replication capability over the internet protocol and Syncrons over the Fibre channel networks.

### VNX Replicator

It's a replication that comes with the VNX system. It offers an asynchronous file-level replication. It creates the backup of the NFS and CIFS from the production array or the DR array. So when every some disaster situation happen. It transfers the responsibility to the DR array from the production array.  
This failover may cause data loss and this is already confirmed by the customer in terms of RPO policy.

3 types of replication is supported by the VNX Replicator  
**Loopback replication**  
In this replication source and destination, data will transfer within the same system also within the same data mover.

**Local Replication**  
In this type of replication data is transferred within the same system but from one data mover to another.

**Remote replication**  
In this type of replication data is the move from the production array data mover to the DR array data mover.

### Mirror View

It offers two types of mirrorview product

- MirrorView/Synchronous(MirrorView/S)
- MirrorView/Asynchronous(MirrorView/A)

MirrorView is a VNX technology and both types of MirrorView works in the VNX. Usually is a lun based replication. So the data from the primary array lun is copied in the DR array lun.

### SRDF

Its stands for the Symmetrix remote data facility. Its offer various types of replication solution for the Symmetrix. It is used in the VNX file gateway.

### VPLEX

It's a mirroring technology. Its main aim is to connect multiple vnx arrays and provide an Active/Active replication. Instead of using the high-end VNX system, you can have multiple small VNX systems and there you can use it Vplex. Its design is to provide the replication for mission-critical systems with zero RTO and Zero RPO.

## Important link

- [EMC VNX Replication Technologies](https://www.dell.com/community/s/vjauj58549/attachments/vjauj58549/vnx/28546/1/h12079-vnx-replication-technologies-overview-wp.pdf)
