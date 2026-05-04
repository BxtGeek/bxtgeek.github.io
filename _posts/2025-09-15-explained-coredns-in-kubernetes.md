---
title: "Explained CoreDNS in Kubernetes"
date: 2025-09-15 00:00:00 +0530
categories: 
  - "kubernetes"
image:
  path: /assets/img/posts/Explained-CoreDNS-in-Kubernetes.png
---

Kubernetes relies on several [control plane](https://www.corpit.org/explained-kubernetes-architecture/) components to ensure smooth cluster operations. Among these, **CoreDNS** plays a vital role in DNS-based service discovery and name resolution within a Kubernetes environment. In this guide, we’ll explore **what CoreDNS is, why it’s important, and how it works** in Kubernetes clusters.

## What is CoreDNS in Kubernetes?

CoreDNS is the **default DNS server** used in Kubernetes clusters. It ensures that services and pods can communicate with each other seamlessly using domain names instead of IP addresses.

Key features of CoreDNS include:

- **Default Name Server**: CoreDNS is automatically deployed as the default DNS server in Kubernetes.

- **Flexible and Lightweight**: Written in Go, it provides high performance and flexibility.

- **Deployment in kube-system Namespace**: It runs as a Kubernetes Deployment inside the `kube-system` namespace.

- **Cluster DNS Service**: Exposed via a `ClusterIP` service under the name `kube-dns`.

## Why Do We Need CoreDNS in Kubernetes?

CoreDNS provides essential DNS resolution functionalities that simplify communication within Kubernetes clusters. Some key use cases include:

1. **Service Discovery**
    - Translates service names such as `myservice.default.svc.cluster.local` into corresponding cluster IPs.

3. **Pod DNS Resolution**
    - Resolves pod hostnames (if configured), enabling pod-to-pod communication via DNS.

5. **External DNS Resolution**
    - Forwards unknown queries to upstream DNS servers, allowing pods to access external domains.

7. **Custom DNS Rules**
    - Lets cluster administrators define custom domain mappings and tailor DNS behavior as needed.

## How Does CoreDNS Work in Kubernetes?

The working of CoreDNS follows a step-by-step process for resolving DNS queries inside a cluster:

1. **Pod Makes a DNS Query**
    - When a pod needs to resolve a hostname, it sends a query via `/etc/resolv.conf`, which points to the `kube-dns` ClusterIP.

3. **CoreDNS Receives the Query**
    - CoreDNS checks how to handle the request based on its configuration.

5. **Kubernetes API Server Lookup**
    - CoreDNS communicates with the Kubernetes API Server to determine if the queried service or endpoint exists.

7. **Response Handling**
    - If the service exists, CoreDNS returns the corresponding cluster IP (or pod IP).
    
    - If it does not exist, CoreDNS forwards the query to an upstream DNS for external resolution.

This mechanism ensures smooth service-to-service communication and external domain resolution within Kubernetes clusters.

![How Does CoreDNS Work in Kubernetes?](/assets/img/posts/image.png)

## Frequently Asked Questions (FAQs)

**What is the role of CoreDNS in Kubernetes?**

CoreDNS acts as the default DNS server, enabling service discovery and DNS resolution for pods and services in a cluster.

**Can CoreDNS resolve external domain names?**

Yes, CoreDNS forwards unknown queries to upstream DNS servers, allowing pods to access the internet.

**Where does CoreDNS run in Kubernetes?**

CoreDNS is deployed as a `Deployment` in the `kube-system` namespace and exposed via the `kube-dns` service.

**Is CoreDNS configurable in Kubernetes?**

Yes, administrators can customize CoreDNS behavior using a `Corefile` configuration file to define custom DNS rules.

**What replaced kube-dns in Kubernetes?**

CoreDNS replaced the older `kube-dns` component and became the default DNS service starting from Kubernetes v1.13.

**How do I check if CoreDNS is running in my cluster?**

kubectl get pods -n kube-system -l k8s-app=kube-dns  
  
This command will show the running CoreDNS pods.

## \[Video\] Explained CoreDNS in Kubernetes

https://youtu.be/Yc2ghzuawaI

## Conclusion

CoreDNS in Kubernetes is a **powerful and flexible DNS solution** that ensures smooth service discovery, pod DNS resolution, and external domain access. By integrating tightly with the Kubernetes API, CoreDNS makes networking inside the cluster both **reliable and efficient**.

For a deeper dive into Kubernetes DNS architecture, check the [official Kubernetes documentation](https://kubernetes.io/docs/tasks/administer-cluster/coredns/).
