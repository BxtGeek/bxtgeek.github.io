---
title: "Storage Provisioning in Simple Terms: Thick vs Thin Explained"
date: 2021-09-05 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "storage-provisioning"
image:
  path: /assets/img/posts/Storage-Provisioning-in-Simple-Terms-Thick-vs-Thin-Explained.webp
---

In today’s IT world, storage is one of the most valuable resources. You’ve probably heard people say things like _“We need to provision more storage for this server”_ or _“The provisioned space is almost full.”_ But what exactly does **storage provisioning** mean?
Don’t worry—this article breaks it down with simple examples so you can clearly understand what it is and how it’s used in businesses.

## What is Storage Provisioning?
Storage provisioning is the process of **assigning storage space** from a storage system (like a SAN – Storage Area Network) to devices such as servers, virtual machines, or applications.
It can be done **automatically** or manually by a storage administrator.

#### Simple Example
Imagine your company has a **10 TB SAN**:
- You need **10 virtual machines (VMs)** for your employees.
- Each VM is assigned **512 GB**, totaling around **5 TB**.
- You also create a **3 TB shared storage** for projects.
Now you’ve used about **8 TB**, leaving **2 TB** for future use. This step-by-step allocation is what we call **storage provisioning**.

## Types of Storage Provisioning
There are mainly two approaches:
- Thick Provisioning
- Thin Provisioning

#### Thick Provisioning
In **thick provisioning**, you assign the full amount of storage upfront. For example, if you create a **3 TB share**, the system immediately reserves 3 TB for it—no one else can use that space, even if it’s empty.

**Benefits:**
- Low latency (storage is ready right away).
- Less monitoring needed (space is fixed).

**Downsides:**
- Costly, because you need all the storage available upfront.
- Can lead to unused storage sitting idle.

#### Thin Provisioning
In **thin provisioning**, storage is allocated **on demand**. If you create a **3 TB share**, the system doesn’t immediately reserve the full 3 TB. Instead, it grows as data is added, making more efficient use of available space.

**Benefits:**
- Reduces wasted storage.
- Scales as your actual usage grows.

**Downsides:**
- Requires constant monitoring.
- If storage runs out, systems may crash or shut down.

![Types of Storage Provisioning](/assets/img/posts/visual-selection-1024x553.webp)

# Storage Provisioning in VMware

In virtualization platforms like VMware vSphere, storage provisioning becomes even more important because multiple virtual machines share the same physical storage.

When creating a virtual disk (VMDK) in VMware, administrators usually choose between:

* Thin Provision
* Thick Provision Lazy Zeroed
* Thick Provision Eager Zeroed

## VMware Thin Provisioning
With **Thin Provisioning**, VMware creates a virtual disk with the maximum size defined, but physical storage is consumed only as data is written.

### Example
You create a **100 GB VM disk**:
* Initially, it may consume only **2–5 GB**
* As data grows, the storage usage increases gradually

### Advantages
* Saves storage space
* Allows higher VM density
* Ideal for development or testing environments

### Disadvantages
* Requires monitoring
* Overprovisioning can occur
* Performance may be slightly lower during disk growth

## Thick Provision Lazy Zeroed
In **Lazy Zeroed Thick Provisioning**, VMware allocates the full disk space immediately, but blocks are zeroed only when they are first written to.

### How It Works
If you create a **100 GB disk**:
* VMware reserves the entire 100 GB instantly
* However, empty blocks are initialized ("zeroed") only during first use

### Advantages
* Faster VM creation compared to eager zeroed
* Better predictable storage allocation
* Common default option in VMware

### Disadvantages
* Slight delay when writing to new blocks for the first time
* Not suitable for some clustering features

## Thick Provision Eager Zeroed
In **Eager Zeroed Thick Provisioning**, VMware allocates and zeroes out the entire disk during creation itself.

### How It Works
For a **100 GB disk**:
* Entire 100 GB is reserved immediately
* Every block is pre-zeroed before the VM starts

### Advantages
* Best performance consistency
* Required for VMware features like:
  * Fault Tolerance (FT)
  * Some clustering applications
* No first-write penalty

### Disadvantages
* Takes longer to create
* Uses full storage immediately

## Lazy Zeroed vs Eager Zeroed
| Feature                       | Lazy Zeroed       | Eager Zeroed            |
|-------------------------------|-------------------|-------------------------|
| Space Reserved Immediately    | Yes               | Yes                     |
| Blocks Zeroed During Creation | No                | Yes                     |
| VM Creation Speed             | Faster            | Slower                  |
| First Write Performance       | Slight Delay      | Faster                  |
| Best Use Case                 | General workloads | Critical workloads / FT |



## Real-World Enterprise Usage
Most companies use a combination of provisioning methods:
* **Thin Provisioning**
  * Development VMs
  * Test environments
  * Low-priority workloads

* **Lazy Zeroed Thick**
  * General production servers
  * Standard enterprise applications

* **Eager Zeroed Thick**
  * Databases
  * High-performance applications
  * VMware Fault Tolerance workloads

## Important Concept: Overprovisioning
Thin provisioning allows administrators to allocate more virtual storage than physically available.

### Example
A SAN has:
* Physical storage: **10 TB**
But admins create:
* 20 VMs × 1 TB each = **20 TB provisioned**
This works because not all VMs use their full space immediately.

### Risk
If actual usage reaches the physical limit:
* VMs may pause
* Applications can crash
* Datastores may become unavailable

This is why monitoring and alerts are extremely important in thin-provisioned environments.

## Conclusion
Storage provisioning is a **smart way to manage storage resources** in IT. With **thick provisioning**, you reserve space upfront for reliability, while **thin provisioning** helps save costs by allocating storage only as needed.

Choosing between the two depends on your priorities:
- Pick **thick provisioning** if you value performance and predictability.
- Choose **thin provisioning** if flexibility and efficient usage are more important.
By understanding these two methods, you can ensure your company’s storage stays efficient, cost-effective, and ready for growth.
