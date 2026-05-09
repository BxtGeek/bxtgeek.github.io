---
title: "FAST VP in Storage Explained: Smarter Tiering for Cost and Performance"
date: 2021-09-07 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "capacity-tier"
  - "cold-data"
  - "data-relocation"
  - "extreme-performance-tier"
  - "fast-vp"
  - "fully-automated-storage-tiering-for-virtual-pools"
  - "hot-data"
  - "performance-tier"
  - "storage-tiering"
image:
  path: /assets/img/posts/FAST-VP-in-Storage-Explained-Smarter-Tiering-for-Cost-and-Performance.webp
---

Managing large volumes of data is rarely straightforward, especially when you're trying to balance **performance** and **cost**. An all-flash storage environment is fast, but it's also expensive — and most workloads simply don't need that level of speed all the time.

That's the problem **FAST VP** solves. Rather than forcing you to choose between a fast storage tier and an affordable one, it automatically places each piece of data on the right type of drive based on how frequently it's being used.

## What is FAST VP?
**[FAST VP](https://www.dell.com/support/kbdoc/en-us/000010691/dell-emc-unity-difference-between-fast-cache-and-fast-vp-configurations-user-correctable)** stands for **Fully Automated Storage Tiering for Virtual Pools**. It's a feature found in Dell EMC storage arrays (such as Unity and PowerStore) that continuously monitors data access patterns and automatically relocates data across multiple storage tiers — without any manual intervention.

In a typical FAST VP-enabled array, you'll have three types of drives working together:

| Tier | Drive type | Purpose |
| Extreme performance | SSD / NVMe flash | Maximum speed for hot data |
| Performance | 10K or 15K RPM SAS | Balanced speed and capacity |
| Capacity | 7.2K SATA or Nearline SAS | Low-cost bulk storage for cold data |

FAST VP's job is to ensure your most active data always lives on the fastest tier, while data that hasn't been touched in a while gradually moves down to cheaper drives — saving cost without impacting application performance.

## How the three storage tiers work

### Extreme performance tier
This tier uses **SSD or NVMe flash drives** and is reserved for your most frequently accessed data — also called *hot data*. Response times here are measured in microseconds, making it ideal for databases, virtual machine boot volumes, and any workload that demands consistent low latency.

Data automatically promotes to this tier when FAST VP detects that it's being read or written frequently.

### Performance tier
The performance tier uses **10K or 15K RPM SAS drives**. It sits in the middle ground — faster than spinning SATA disks but more cost-effective than all-flash. This tier typically holds data that's accessed regularly but not constantly, such as application logs, moderately active databases, or shared file systems with typical business usage patterns.

### Capacity tier
The capacity tier uses **7.2K RPM SATA or Nearline SAS drives**, optimised for storing large amounts of data at the lowest possible cost. Data that hasn't been accessed for an extended period — called *cold data* — is demoted here automatically. Examples include archived files, compliance data, old backups, or any data that needs to be retained but is rarely read.

## How data relocation works
FAST VP doesn't move data in real time. Instead, it runs **relocation jobs** on a defined schedule (typically during off-peak hours) to avoid impacting production workloads. During each job, FAST VP analyses sub-LUN chunks of data — usually 256 MB segments — and promotes or demotes them based on their recent access patterns.

A relocation job moves through the following states:

| State | What's happening |
| **Ready** | The job is scheduled and waiting to begin |
| **Relocating** | Data is actively being moved between tiers |
| **Paused** | The job has been temporarily suspended (manually or due to system load) |
| **Complete** | The job has finished and all eligible data has been relocated |

You can configure FAST VP policies to control how aggressively data is promoted or demoted, and which pools or LUNs are included. In most environments, the default policy is sufficient — set it once and let it run.

## Hot data vs cold data
Understanding the distinction between hot and cold data is key to understanding why tiered storage works.
**Hot data** is accessed frequently — often multiple times per hour or day. Examples include active database tables, virtual machine disks, operating system volumes, and application binaries. This data benefits significantly from being on flash storage, where random I/O latency is near zero.
**Cold data** is rarely accessed — sometimes going weeks or months without a read request. Examples include completed project archives, regulatory compliance records, old email attachments, and historical logs. Keeping this data on expensive SSDs wastes money without providing any measurable benefit to users or applications.
FAST VP continuously tracks access frequency at the sub-LUN level, so even a mostly cold LUN can have its hot portions promoted to flash while the rest stays on cheaper drives.

## Why FAST VP matters in practice
Without automated tiering, storage administrators face an unpleasant choice: overprovision expensive flash storage to ensure performance, or underprovision and risk bottlenecks. Neither option is ideal.
FAST VP changes the equation. A typical deployment might look like this:
- **10% of storage** is SSD (extreme performance tier) — handles the 20–30% of data that's actively hot
- **30% is SAS** (performance tier) — holds warm data that needs reasonable response times
- **60% is SATA** (capacity tier) — absorbs the bulk of cold, archival data
This tiered model can reduce storage costs by 40–60% compared to an all-flash array, while still delivering flash-level performance for the workloads that actually need it.

## FAQs

**What does FAST VP stand for?**
Fully Automated Storage Tiering for Virtual Pools.

**Which Dell EMC products support FAST VP?**
FAST VP is available on Dell EMC Unity XT, PowerStore, and legacy VNX arrays. The specific feature set varies by platform.

**Is FAST VP the same as FAST Cache?**
No. FAST Cache uses SSDs as a read/write cache layer that accelerates I/O in real time. FAST VP is a tiering system that physically relocates data between drive tiers on a scheduled basis. They serve different purposes and can be used together for maximum effect.

**Do I need to manually move data between tiers?**
No — FAST VP is fully automated. You define the policy and schedule, and the system handles all data movement.

**How often does data get relocated?**
By default, relocation runs on a schedule you define (often nightly or weekly). You can also trigger manual relocations at any time.

**What happens if a tier runs out of space?**
FAST VP will not promote data to a tier that has insufficient space. This makes capacity planning and monitoring across all three tiers important — particularly for the SSD tier.

## Conclusion
FAST VP is one of the more practical features in enterprise storage — not because it's flashy, but because it solves a real problem quietly and reliably. It ensures that your fastest, most expensive storage is used only where it genuinely makes a difference, while cheaper drives absorb everything else.

The result is a storage environment that's faster than a pure-SATA array, more affordable than all-flash, and easier to manage than any manually tiered system.
**If you're running a Dell EMC array and haven't configured FAST VP, it's one of the highest-value changes you can make to your storage infrastructure.**
