---
title: "Understanding Docker Networking: Bridging the Gap Between Containers and the World"
date: 2025-01-08 00:00:00 +0530
categories: 
  - "docker"
  - "docker-series"
tags: 
  - "container-communication"
  - "docker-application-networking"
  - "docker-bridge-network"
  - "docker-custom-networks"
  - "docker-host-network"
  - "docker-network-create"
  - "docker-networking"
  - "docker-none-network"
  - "docker-port-mapping"
  - "linking-containers"
image:
  path: /assets/img/posts/Understanding-Docker-Networking-Bridging-the-Gap-Between-Containers-and-the-World.png
---

#### **Introduction to Docker Networking**

Networking is a crucial aspect of containerized applications, enabling seamless communication between containers, the host system, and external networks. Docker simplifies this with built-in networking modes, making it easy to configure and manage connectivity.

This article dives into Docker’s networking concepts, internal and external container communication, and how to map ports effectively.

### **Networking Concepts in Docker**

- **Bridge Network**_(Default)_
    - Containers on the same bridge network can communicate with each other using container names or IP addresses.
    
    - External access requires port mapping.
    
    - Ideal for standalone containers.
    
    - Example:

```bashdocker network inspect bridge docker run --name app -d -p 8080:80 nginx
```

- **Host Network**
    - The container shares the host machine’s network stack, eliminating network isolation.
    
    - Faster but lacks security isolation.
    
    - Example:

```bashdocker run --network host -d nginx
```

- **None Network**
    - The container has no network access and operates in complete isolation.
    
    - Useful for security-focused applications.
    
    - Example:

```bash docker run --network none nginx
```

- **Custom Networks**
    - User-defined networks allow more control, such as specifying subnets, DNS, and IPs.
    
    - Enable container communication using names without explicit links.
    
    - Example:

```bashdocker network create my-network docker run --network my-network --name app1 -d nginx docker run --network my-network --name app2 -d busybox 
```

- **Overlay**
    - Used in Docker Swarm mode.
    
    - Allows containers running on different Docker hosts to communicate with each other.
    
    - Use case: Multi-host networks for distributed applications.

```bashdocker network create -d overlay my_overlay
```

- **macvlan**
    - Assigns a MAC address to each container, making them look like physical devices on the network.
    
    - Containers appear as independent devices on the network.
    
    - Use case: Legacy applications that need to be directly connected to the physical network.

```bashdocker network create -d macvlan --subnet=192.168.1.0/24 my_macvlan
```

### **How Containers Communicate**

- **Internal Communication**
    - Containers on the same network can resolve each other by their names.
    
    - For example, two containers on a custom network can communicate using hostnames.

- **External Communication**
    - Port mapping connects containers to external systems.
    
    - Use the `-p` flag to map container ports to the host:

```bashdocker run -d -p 8080:80 nginx
```

- Access the containerised service via `http://localhost:8080`.

### **Port Mapping and Linking Containers**

- **Port Mapping**
    - Expose container ports to the host to make services accessible externally.

```
Syntax: -p <host_port>:<container_port>
```

### **Lab**

- Create two nginx containers in different network type one in host and another one in bridge and see if they are reachable.

### \[Video\] Understanding Docker Networking: Bridging the Gap Between Containers and the World

https://youtu.be/gSaofRie\_tI

### **Conclusion**

Docker networking provides powerful and flexible tools to connect containers and enable communication both internally and externally. By understanding Docker’s networking modes and mastering port mapping, you can design efficient and secure architectures for your containerized applications.
