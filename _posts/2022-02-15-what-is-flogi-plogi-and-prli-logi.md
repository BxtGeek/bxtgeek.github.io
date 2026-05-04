---
title: "Exploring the Concepts of Flogi, Plogi, and Prli Logi in Fibre Channel Networks"
date: 2022-02-15 00:00:00 +0530
categories: 
  - "storage-concepts"
tags: 
  - "domain-switch-id"
  - "fcid"
  - "fcns"
  - "flogi"
  - "lun-masking"
  - "plogi"
  - "prli-logi"
  - "zoning"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

In a Fibre Channel (FC) environment, the concepts of Flogi, Plogi, and Prli Logi are crucial for proper communication. These processes are essential for communication to occur in an FC environment. In this discussion, we will cover each one individually.

## Flogi

Flogi, also known as Fabric Login, is a process that occurs when a server or Host Bus Adapter (HBA) powers on and initiates communication with a locally attached Fibre Channel (FC) switch. The process begins when the server or [HBA](https://www.techtarget.com/searchstorage/definition/host-bus-adapter) sends a Flogi request to the switch.

When the switch receives the Flogi request, it assigns a 24-bit FCID (Fibre Channel ID) to the server or HBA. Similar to an IP address, the FCID helps to route traffic between the switch and storage. The switch also maintains a table of FCID to [WWPN](https://corpit.org/difference-between-wwns-wwnn-and-wwpn/) (World Wide Port Name) address mappings.

The FCID is a unique identifier that is assigned to each device connected to the SAN (Storage Area Network). The FCID is used to identify the device and direct traffic to the correct destination.

The importance of Flogi in SAN lies in its ability to establish communication between devices and ensure proper traffic routing. Without Flogi, devices would not be able to connect to the SAN and share data. Additionally, by assigning an FCID to each device, Flogi ensures that data is properly directed to the correct destination.

## Plogi

Plogi, also known as Port Login, is a process that occurs after the completion of Flogi (Fabric Login) in a Storage Area Network (SAN). Plogi is the process by which a host initiator (such as a server or HBA) establishes communication with a target device, such as a storage system.

When the Flogi process is completed, the initiator sends a Plogi request to the target. Based on the zoning configuration, the initiator is granted access to the target device. Zoning configuration is a way to control access to storage devices by limiting the number of devices that can communicate with a specific target.

The relationship between Flogi and Plogi is that Flogi establishes the initial communication between the initiator and the switch, while Plogi establishes communication between the initiator and the target device.

The importance of Plogi in SAN lies in its ability to establish communication between the initiator and the target device, which enables data transfer and sharing. Without Plogi, the initiator would not be able to connect to the target device and access the data. Additionally, the zoning configuration ensures that only authorized initiators can communicate with specific target devices, which improves security in the SAN.

## Prli Logi

Prli, also known as Process Login, is a process that occurs after the initiator has established communication with the target device through the Flogi and Plogi process in a Storage Area Network (SAN). Prli is the process by which the initiator requests access to specific Logical Unit Numbers (LUNs) on the target device.

Once the initiator is connected to the target device, it sends a Prli request, also known as process login. Based on the [LUN masking](https://corpit.org/what-is-zoning-and-lun-masking/) configuration, the storage system grants access to the initiator. LUN masking is a way to control access to specific LUNs on a storage device by limiting the number of initiators that can access them.

The relationship between Prli and Flogi/Plogi is that Prli builds on the communication established by Flogi and Plogi to request access to specific LUNs on the target device.

The importance of Prli in SAN lies in its ability to provide access control to specific LUNs on the target device. Without Prli, the initiator would have access to all LUNs on the target device, which can be a security risk. Additionally, the LUN masking configuration ensures that only authorized initiators can access specific LUNs, which improves security in the SAN.

## Note

Prli, or Process Login, is a step in a Storage Area Network (SAN) that follows the communication established between an initiator and target device through Flogi and Plogi. It enables the initiator to request access to specific Logical Unit Numbers (LUNs) on the target device.

When the initiator is connected to the target device, it sends a Prli request. The storage system then grants access to the initiator based on the LUN masking configuration, which limits access to specific LUNs on a storage device to authorized initiators.

Prli builds upon the communication established by Flogi and Plogi to request access to specific LUNs on the target device. Its importance lies in its ability to provide access control to specific LUNs on the target device, preventing security risks that may arise from unrestricted access. LUN masking configuration further improves security by ensuring only authorized initiators can access specific LUNs.

## FAQ

### What is Flogi?

Flogi stands for Fabric Login. It is the process that occurs when a server or Host Bus Adapter (HBA) powers on and initiates communication with a locally attached Fibre Channel (FC) switch. The switch assigns a unique 24-bit FCID (Fibre Channel ID) to the device and maintains a table of FCID to WWPN (World Wide Port Name) address mappings which helps in proper traffic routing and communication between devices.

### What is Plogi?

Plogi stands for Port Login. It is the process that occurs after the completion of Flogi, where the host initiator establishes communication with a target device, such as a storage system, based on the zoning configuration. Zoning configuration is a way to control access to storage devices by limiting the number of devices that can communicate with a specific target.

### What is Prli?

Prli stands for Process Login. It is a process that occurs after the initiator has established communication with the target device through the Flogi and Plogi processes. Prli enables the initiator to request access to specific Logical Unit Numbers (LUNs) on the target device based on the LUN masking configuration which helps in access control and security in the SAN.

### How do Flogi, Plogi, and Prli Logi work together?

Flogi establishes the initial communication between the initiator and the switch, Plogi establishes communication between the initiator and the target device and Prli builds on the communication established by Flogi and Plogi to request access to specific LUNs on the target device. Together they enable communication and access control in the SAN.

### Why are Flogi, Plogi, and Prli Logi important in SAN?

These logins are essential for communication and access control in the SAN. Without these logins, devices would not be able to connect to the SAN and share data and any device would have access to all the LUNs on the target device which can be a security risk.
