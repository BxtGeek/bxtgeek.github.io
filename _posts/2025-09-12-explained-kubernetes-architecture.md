---
title: "Explained Kubernetes Architecture"
date: 2025-09-12 00:00:00 +0530
categories: 
  - "kubernetes"
image:
  path: /assets/img/posts/Explained-Kubernetes-Architecture.png
---

Kubernetes has become the standard for container orchestration, helping organizations manage containerized applications at scale. To understand how [Kubernetes works](https://www.corpit.org/what-is-kubernetes-and-why-do-we-need-kubernetes/), it’s essential to dive into its **architecture**. At a high level, Kubernetes architecture is divided into two primary layers: the **Control Plane** and the **Data Plane**.

The **Control Plane** acts as the “brain” of the cluster, making global decisions about scheduling, cluster state, and orchestration. The **Data Plane**, on the other hand, executes these instructions by running workloads on worker nodes. Let’s break down the major components of each.

| **Control Plane** | **Data Plane** |
| --- | --- |
| Kube API Server | Kubelet |
| etcd | Kube-proxy |
| Scheduler | Container Runtime |
| Controller Manager |  |
| Cloud Controller Manager |  |

## Components of the Control Plane

The **Control Plane** manages the overall cluster state and is responsible for ensuring workloads are running as expected. Its key components include:

### 1\. Kube API Server

The **Kube API Server** is the entry point for all administrative tasks. It acts as the front-end for the Kubernetes control plane.

- All cluster components communicate with the API server.

- It is the only component that directly interacts with **etcd**.

- Other components request access to cluster data through the API server.

### 2\. etcd

- A distributed, **key-value store** used to persist cluster data.

- Stores configuration, secrets, service discovery details, and the state of the cluster.

- Provides consistency across the control plane.

### 3\. Scheduler

The **Scheduler** decides **which node** a newly created pod should run on.

- Uses internal algorithms to determine the most suitable node.

- Considers factors like available resources, workload requirements, and affinity rules.

- Instructs the API server, which then passes the scheduling decision to the worker nodes.

### 4\. Controller Manager

- Runs different **controllers** that regulate the state of the cluster.

- Examples include Node Controller, Replication Controller, and Endpoints Controller.

- Ensures the desired number of pods or replicas are always running.

### 5\. Cloud Controller Manager

- Interacts with cloud provider APIs to manage cloud-specific resources.

- Useful when running Kubernetes on **AWS, Azure, or GCP**.

- In on-premise environments, this component is less critical.

## Components of the Data Plane

The **Data Plane** executes the tasks assigned by the Control Plane. These components run on **worker nodes** and ensure applications are deployed correctly.

### 1\. Kubelet

- An agent that runs on each worker node.

- Communicates with the API server to receive tasks.

- Ensures containers are running as instructed by the Control Plane.

### 2\. Kube-proxy

- Handles all **network communication** within and outside the cluster.

- Assigns IPs to services and manages load balancing between pods.

- Ensures seamless communication between different services.

### 3\. Container Runtime

- Responsible for running containers inside worker nodes.

- Common runtimes include:
    - **containerd** (default)
    
    - **CRI-O**
    
    - **rkt**

- Ensures applications run smoothly within their containers.

## Frequently Asked Questions (FAQs) About Kubernetes Architecture

**What is Kubernetes architecture?**

Kubernetes architecture is the framework that defines how different components like the **Control Plane** and **Data Plane** work together to manage containerized applications. The control plane makes cluster-wide decisions, while the data plane executes them on worker nodes.

****What are the main components of the Kubernetes Control Plane?****

The control plane includes:  
\- Kube API Server  
\- etcd  
\- Scheduler  
\- Controller Manager  
\- Cloud Controller Manager

**What is the role of etcd in Kubernetes?**

**etcd** is a distributed key-value store that stores all cluster-related data, including configurations, states, and secrets. It ensures consistency across the Kubernetes cluster.

**What is the difference between Kubelet and Kube-proxy?**

\- **Kubelet** is an agent on worker nodes that ensures containers are running properly.  
**\-** **Kube-proxy** manages network rules and enables communication between services and pods.

**Which container runtimes are supported in Kubernetes?**

Kubernetes supports several container runtimes, including:  
\- **containerd** (default)  
**\-** **CRI-O**  
**\-** **rkt**  
\- Any runtime compatible with the **Container Runtime Interface (CRI)**.

**Why is the Cloud Controller Manager important?**

The **Cloud Controller Manager** integrates Kubernetes with cloud providers like AWS, Azure, or GCP. It allows Kubernetes to manage cloud-based resources, such as load balancers, storage, and networking, directly through provider APIs.

## \[Video\] Explained Kubernetes Architecture

https://youtu.be/jzSuMCxdSpE

## Conclusion

[Kubernetes](https://kubernetes.io/) architecture may sound complex, but once broken down into **Control Plane** and **Data Plane** components, it becomes much easier to understand. The Control Plane makes all the decisions about the cluster state, while the Data Plane executes them on worker nodes.

By mastering Kubernetes architecture, you gain the foundation needed to manage clusters effectively—whether you’re deploying on-premises or in the cloud.
