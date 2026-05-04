---
title: "Migration of vCLS VMs"
date: 2023-06-19 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "cluster-efficiency"
  - "cluster-health"
  - "cluster-maintenance"
  - "cluster-performance-optimization"
  - "cluster-resiliency"
  - "high-availability"
  - "resource-management"
  - "troubleshooting-vcls-vm-migration"
  - "vcenter-server"
  - "vcls-vm-migration"
  - "vcls-vm-migration-process"
  - "vcls-vm-migration-strategies"
  - "vcls-vm-relocation"
  - "virtual-machine-migration"
  - "vm-migration-best-practices"
  - "vsphere-cluster-deployment"
  - "vsphere-cluster-management"
  - "vsphere-environment"
  - "vsphere-management-tools"
  - "workload-migration"
  - "workload-optimization"
image:
  path: /assets/img/posts/Streamlining-Cluster-Efficiency-A-Guide-to-Migration-of-vCLS-VMs.png
---

After the release of vSphere 7.0, vCLS VMs have become an integral part of our environment for DRS functionality. These VMs are created in the cluster based on the number of hosts present. However, there are times when we need to migrate or delete these VMs. In this article, we will explore the process of migrating and deleting vCLS VMs and address any potential concerns associated with these actions.

## Exploring the Need for vCLS VM Migration

To begin, let's understand why we might need to migrate these VMs. There are numerous instances where maintenance activities are performed in the environment, necessitating the migration of vCLS VMs. Some common maintenance tasks include:

1. Host upgrades or patching

3. Host or storage decommissioning

## Types of Migration for vCLS VMs

Now, let's discuss the different approaches to migrating vCLS VMs.Typically, there are two methods for migrating these VMs. The first approach is straightforward: similar to how we leverage sMotion or vMotion for other VMs, we can use the same process to migrate vCLS VMs. However, it is advisable to follow the ideal method of putting the host into retreat mode. By referring to the provided link, you can learn how to put vCenter in retreat mode.

[Putting a Cluster in Retreat Mode](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.resmgmt.doc/GUID-F98C3C93-875D-4570-852B-37A38878CE0F.html)

While this issue may appear simple, it often causes confusion among users. Here are some frequently asked questions (FAQs) related to vCLS. If you have additional queries or information to contribute, please let us know, and we will incorporate them into the FAQ section.

## Common Faq 

### What is vCLS?

vCLS, which stands for vSphere Cluster Services, is an integral component that operates by default in all vSphere clusters. Its primary purpose is to guarantee the continuous availability of cluster services even in the event of vCenter Server unavailability. By ensuring the persistence of these services, vCLS safeguards the resources and overall well-being of workloads running within the clusters.

### Primary Functionality of vCLS VMs?

The primary functionality of vCLS (vSphere Cluster Services) VMs is to maintain the availability of critical cluster services in a vSphere environment. These VMs are automatically created and managed by vSphere to ensure the continued operation of essential services even if the vCenter Server becomes unavailable.

### vCenter service behind the vCLS VMs?

vCLS VMs are supervised by vCenter Server services such as ESX Agent Manager and Workload Control Plane, overseeing their life cycle operations. It's important to note that vCLS VMs do not have network interface card (NIC) support. Additionally, a cluster that is enabled with vCLS can include ESXi hosts of varying versions, as long as those ESXi versions are compatible with the vCenter Server in use.

### How many vCLS VMs in a cluster?

According to the documentation, the number of vCLS VMs running on a vSphere cluster will vary based on the size of the cluster. Typically, there will be between 1 to 3 vCLS VMs deployed per cluster. The specific quantity will be determined based on the cluster's scale and requirements.

### Can we login into the vCLS VMs?

While it is possible to log in to the vCLS (vSphere Cluster Services) VMs, it is generally not recommended unless necessary for troubleshooting purposes. Direct access to the vCLS VMs should be limited to specific diagnostic or troubleshooting scenarios.
