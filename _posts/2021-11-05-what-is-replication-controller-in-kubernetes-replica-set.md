---
title: "What is replication controller in kubernetes? | Replica Set"
date: 2021-11-05 00:00:00 +0530
categories: 
  - "devops"
  - "kubernetes"
tags: 
  - "introduction-to-replication-controller"
  - "kubernetes-replication-controller"
  - "replication-controller"
  - "replication-controller-architecture"
  - "replication-controller-demo"
  - "replication-controller-example"
  - "replication-controller-features"
  - "replication-controller-kubernetes"
  - "replication-controller-training"
  - "replication-controller-tutorial"
  - "replication-controller-tutorial-for-beginners"
  - "what-are-replication-controller"
  - "what-is-replication-controller"
image:
  path: /assets/img/posts/What-is-replication-controller-in-kubernetes.png
---

So we already discuss about the [pod](https://itsmanoj.co.in/what-is-pod-in-kubernetes/) and there deployment. Now will see what is replication controller  and how we can utilize in our deployment in order gain HA.

##  What is Replication Controller ?

It will ensure that a specific or the defined number of pod will run in the culture. So at any time of failure if any pod fail then with the help of Replication Controller it will create a new pod. If in our environment we have a single pod and that crashes then it will regenerate that pod.

With the help of the Replication Controller will also able to achieve the High availability and load balancing. In Replication Controller we have a option of scaling so at any particular time if there is lots of traffic then it will also scale the pod.

## What is Replica Set ?

Its a new version of the Replication Controller. It is mainly use with the deployment in order to orchestrate or maintain the pod like pod creation, deletion and update.

## Yaml configuration for creating a Replication Controller

```
apiVersion: v1
kind: ReplicationController
metadata:
  name: replication-controller
  labels:
    app: nginx
    type: frontend 
spec:
  template:
    metadata: 
      name: nginx
      labels: 
        app: myapp
        type: frontend
    spec:
      containers:
        - name: nginx
          image: nginx
  replicas: 3
```

You can test the replication controller form the above definition file. Let see what is going on in this file.

- We have all the 4 important attribute that we already have in the pod creation, that is apiVersion, kind, metadata and spec.
- Main change that you can see is in spec, we have two new things there one is template and another is replicas.
- So what is template, but it is nothing but the specification of the pod that you want.
- and the replicas are nothing but how many number of pod required in your cluster, so with the help of replication controller it will maintain the 3 pods.

## Important commands for Replica Controller ?

- kubectl apply -f <yaml file name> (Command using which you can create a replicaset from yaml file)
- kubectl describe replicationcontrollers <replication controller name> (using this command you can check the specification of any replicaset)
- Kubectl get replicaset (this command will list all the replicaset in the system)
- kubectl delete replicaset <replicaset name> (using this command you can delete any replicaset)
