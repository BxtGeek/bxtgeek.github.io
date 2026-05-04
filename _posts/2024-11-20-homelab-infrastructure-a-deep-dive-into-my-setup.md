---
title: "Homelab Infrastructure: A Deep Dive into My Setup"
date: 2024-11-20 00:00:00 +0530
categories: 
  - "homelab"
tags: 
  - "esxi"
  - "homelab"
  - "it-infrastructure"
  - "nas"
  - "network-setup"
  - "portainer"
  - "proxmox"
  - "tech-setup"
  - "truenas"
  - "vcenter"
  - "virtualization"
image:
  path: /assets/img/posts/Homelab-Infrastructure-A-Deep-Dive-into-My-Setup.png
---

Having a dedicated homelab allows you to experiment, learn, and manage various technologies in a controlled environment. Today, I'll walk you through my homelab setup, detailing the components and architecture that make it tick. This setup enables me to run multiple virtual machines (VMs), manage storage efficiently, and maintain a network infrastructure that mimics a small-scale enterprise environment.

<figure>

![](/assets/img/posts/Screenshot-2024-10-25-at-7.09.00 PM-1.jpg)

<figcaption>

Screenshot

</figcaption>

</figure>

### Hardware Overview

My homelab consists of four primary components: **Luffy-ESXi**, **Zoro-Proxmox**, **Robin-Vcenter**, and **Nami-Truenas**, connected via a network switch. Each serves a specific role, ensuring smooth operation and resource management.

#### 1\. **Luffy-ESXi**

- **Specs**: i5-6th Gen, 32GB RAM, 128GB SSD (Boot Drive)

- **Role**: Virtualization Host

- **Description**: Luffy-ESXi acts as a powerful virtualization server, running various virtual machines. Its ample RAM and SSD ensure swift performance, making it a crucial part of the homelab for managing isolated workloads.

#### 2\. **Zoro-Proxmox**

- **Specs**: i5-6th Gen, 32GB RAM, 128GB SSD (Boot Drive)

- **Role**: Virtualization Host

- **Description**: Another critical node, Zoro-Proxmox, is set up with Proxmox VE, a robust open-source virtualization platform. It offers flexibility for deploying different VMs and containers, making it easy to test various environments and applications.

#### 3\. **Robin-Vcenter**

- **Role**: Virtualization Management

- **Description**: Acting as the central hub for managing VMs across Luffy-ESXi and Zoro-Proxmox, Robin-Vcenter simplifies the orchestration of resources, ensuring seamless integration and scalability.

#### 4\. **Nami-Truenas**

- **Specs**: i5-6th Gen, 32GB RAM, 128GB SSD (Boot Drive), 3TB Storage Drives

- **Role**: Network Attached Storage (NAS)

- **Description**: Nami-Truenas is the storage powerhouse of the setup. Running on TrueNAS, it provides ample storage for all virtual machines and data backups. The large storage capacity ensures that there's enough room for everything, from VM snapshots to project files.

### Software and Services

- **Portainer**: This is installed for easy management of Docker containers, providing a simple UI to manage and monitor services.

- **Nginx Proxy Manager** – For all my reverse proxy requirement.

### Why This Setup?

This homelab is designed to be flexible, scalable, and easy to manage. By using Proxmox and ESXi, I can run different types of virtual machines, test new applications, and manage a variety of environments. TrueNAS ensures that I have reliable and scalable storage. The network setup allows for smooth operation, and services like Portainer make container management a breeze.

### Conclusion

Building a homelab like this can be incredibly rewarding, whether you're a tech enthusiast, a developer, or someone interested in networking. It offers endless opportunities to learn and experiment. Hopefully, this overview inspires you to design your own homelab setup!
