---
title: "Pods with Yaml | How to create the pod with the help of Yaml"
date: 2022-02-17 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "create-the-pod-with-the-help-of-yaml"
  - "pod-creation"
  - "pod-in-kubernetes"
  - "pods-with-yaml"
image:
  path: /assets/img/posts/Pods-with-Yaml-How-to-create-the-pod-with-the-help-of-Yaml.png
---

So we already know about the yaml from our last blog now lets talk about how we can create the pod using the yaml. But in order to create the pod using the yaml we need to understand the few things.

## Steps to create the pod using the yaml:

### Step1:

We need to create a definition file using which we will create the pod. This definition file will create the all the data that is related to the creation of the pod. That file will looks something like **pod\_definition .yaml,** you can the name as per your requirement but it should be end with the .yaml extension.

### Step2:

Now we need to understand about the few attributes that will helps us in order to create the yaml file.

**apiversion:** This is the kubernetes version that we use for the deployment of the kind.

| Kind | Version |
| --- | --- |
| Pod | V1 |
| Services | V1 |
| Replicaset | Apps/V1 |
| Deploymemt | Apps/V1 |

**kind:** This is the type of the object that we need to create.

**metadata:** This is the data about the object that we need to create the kubernetes. It contain 2 field name and label

**spec:** It is the specification about the pod

## Important commands:

- **kubectl apply -f <yml file name>** (This command is used to create the pod using the yaml file)
- **kubectl get pod**(This command is used to list the all the current pod in the node)
- **kubectl describe <Pod name>**(this pod is used to get the details about the pod)
- **kubectl delete pod <Pod name>**(using this pod we can delete the pod)
