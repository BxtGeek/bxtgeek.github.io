---
title: "What is kubernetes services?"
date: 2021-11-27 00:00:00 +0530
categories: 
  - "devops"
  - "kubernetes"
tags: 
  - "clusterip"
  - "kubernetes-services"
  - "loadbalancer"
  - "nodeport"
image:
  path: /assets/img/posts/Kubernetes-Services.png
---

So in the previous blog we already discuss about the various component of the kubernetes but now lets discuss about the kubernetes services in details and how its helpful in running the kubernetes culture.

## What is kubernetes services?

In order to communicate in the cluster we need to setup a networking solution using which we can communicate with the different nodes in the cluster. But these kubernetes node communicate without the help of NAT or Network address translation. They use kubernetes services in order to communicate with the different nodes.

They created a internal pod network and in that they communicate with the each other with the help of the kubernetes services.

## Types of services

There 3 types of services using which different nodes communicate in the cluster

- NodePort
- ClusterIP
- LoadBalancer

### NodePort

Let suppose there is an web application and we need few tools in order to create that one is web server and database so web server is install in one pod and database is install in different pod. But in order to communicate they need to have common point using which they can communicate and Nodeport provide that common point using which they interact.

Nodeport will looks like below:

\[caption id="attachment\_3427" align="aligncenter" width="319"\]![Node port Definition file ](/assets/img/posts/carbon.png) Node port Definition file\[/caption\]

### ClusterIP

It is the default type of the service. When every you create a Service in the kubernetes by default its type is ClusterIP. So we have an application that use the front end component and also backend component and we have there replicas and the pod is going down and coming up. So there IP's are also changing so in order to communicate with the backend services we cannot depend on those Ip. So here ClusterIP come into the picture what is do it will provide a single ip for front end pod and single up for the backend pod to communicate and later on they distribute the load to any pod.

### LoadBalancer

It provide a LoadBalancer for the application to balance the load.
