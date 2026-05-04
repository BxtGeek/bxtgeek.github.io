---
title: "New features and enhancements of vSphere 8.0 Update 2"
date: 2023-09-22 00:00:00 +0530
categories: 
  - "vmware"
tags: 
  - "cloud-computing"
  - "data-centers"
  - "enterprise-technology"
  - "it-infrastructure"
  - "it-innovation"
  - "it-management"
  - "performance-optimization"
  - "security-enhancements"
  - "software-updates"
  - "virtualization"
  - "virtualization-management"
  - "virtualization-solutions"
  - "vmware"
  - "vmware-features"
  - "vsphere-8-0-update-2"
image:
  path: /assets/img/posts/New-features-and-enhancements-of-vSphere-8.0-Update-2.png
---

In the ever-evolving landscape of virtualization and cloud computing, staying at the forefront of technology is paramount. VMware, a global leader in virtualization and cloud infrastructure, has consistently delivered innovative solutions that empower organizations to harness the full potential of their data centers.

With the release of vSphere 8.0 Update 2, VMware once again pushes the boundaries of what's possible in the world of virtualization. This update brings a plethora of new features, enhancements, and optimizations that cater to the diverse needs of businesses, from small enterprises to large-scale data centers.

In vSphere 8.0 Update 2, there are several new features and improvements:

1. **Support for New Hardware**:
    - Adds support for NVIDIA BlueField-2 DPUs in server designs.
    
    - Includes support for various servers from Dell, Fujitsu, and Lenovo. You can find the full list in the VMware Compatibility Guide.

3. **In-Band Error-Correcting Code (IB ECC) Support**:
    - Allows data integrity checks without specialized ECC memory on supported hardware.

5. **Graphics and AI/ML Workloads Support on Intel ATS-M**:
    - Provides support for graphics and AI/ML workloads on Intel ATS-M.

7. **Enhanced ESXi CPU Scheduler**:
    - Improves performance for systems with high core count CPUs like Intel Sapphire Rapids.

9. **Driver Updates**:
    - Updates various drivers like Broadcom lpfc, Mellanox nmlx5, Marvell qedentv, and others for better performance and compatibility.

11. **IPv6 Driver Enhancements**:
     - Enhances IPv6 performance when used as an overlay.

13. **Uniform Passthrough (UPT) Mode Support**:
     - Allows faster vSphere vMotion operations in nested ESXi environments.

15. **Increased NIC Ports Support**:
     - Increases support for 100GB NIC ports from 4 to 8 in ESXi for Broadcom and Mellanox.

17. **CIM Services Tickets for REST Authentication**:
     - Introduces CIM services tickets for authenticating with ESXi hosts.

19. **glibc Library Update**:
     - Updates the glibc library to version 2.28.

21. **Guest Platform Enhancements**:
     - Introduces virtual hardware version 21, supporting more vGPU and vNVMe devices.
     
     - Adds support for NVMe 1.3 for Windows 11 and Windows Server 2022.
     
     - Supports hot extension of shared vSphere Virtual Volumes disks.

23. **Virtual Functions (VFs) Increase**:
     - Supports up to 128 Virtual Functions per VM for SR-IOV passthrough adapters.

25. **NVMe Controller for WSFC**:
     - Allows the use of NVMe controllers for Windows Server Failover Clustering.

27. **USB 3.2 Support**:
     - The virtual xHCI controller is now compatible with 20 Gbps.

29. **Read-Only Mode for Virtual Disks**:
     - You can attach virtual disks as read-only to improve performance.

31. **VM Cloning with First Class Disk (FCD)**:
     - Enables VM cloning when a First Class Disk is attached.

33. **GPU Driver VM for Passthrough GPUs**:
     - Facilitates support for new GPU vendors with the virtual SVGA device.

35. **Storage Enhancements**:
     - Supports multiple TCP connections on a single NFS v3 volume.
     
     - ESXCLI now supports SCSI UNMAP operations for vSphere Virtual Volumes.

These updates enhance the functionality, compatibility, and performance of vSphere 8.0 Update 2. To learn more about the updates please refer to the [official document](https://docs.vmware.com/en/VMware-vSphere/8.0/rn/vsphere-esxi-802-release-notes/index.html) for VMware ESXi 8.0 Update 2.
