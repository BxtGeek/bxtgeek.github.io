---
title: "Running Containers Natively on Mac with Orbstack"
date: 2024-08-15 00:00:00 +0530
categories: 
  - "devops"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

Even though I have a fully equipped lab for handling all my workloads, there are times when I need a quick and portable solution to test my Compose or YAML files. Remote access to my lab isn't always feasible, but my laptop is always with me. In this article, we'll explore how to install Orbstack on your Mac and manage your pods, containers, and VMs locally.

## **What is Orbstack?**

OrbStack is an efficient replacement for Docker Desktop, designed to run containers and Linux machines with impressive speed and low resource usage. It offers features like Rosetta x86 emulation, file sharing, SSH agent forwarding, and more, catering to developers' needs.

Say goodbye to slow and cumbersome containers and VMs. OrbStack provides a fast, lightweight, and user-friendly way to run containers and Linux environments, making development faster and more efficient.

![](/assets/img/posts/image-1024x735.png)

Switch to OrbStack for a streamlined Docker Desktop alternative and experience light-speed development.

## **How to Install Orbstack**

**Getting Started with OrbStack:**

- **Quick Installation:** You can easily install OrbStack using Homebrew. Simply run:

```bashbrew install orbstack
```

- **What's New:**
    - Supports macOS 12.3 and newer.
    
    - Free to try and remains free for personal use.

## **How to Run Your First Pod**

Running the first pod is very simple. We will use the simple pod definition file below to achieve this.

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

The output of the above pod definition file will look something like the below:

```
[15:29:47]-[0]-[Manojs-MacBook-Air] ~/Desktop/kubernetes/Orbstack kubectl apply -f pod_definitation.yaml
pod/nginx-pod created
[15:29:52]-[0]-[Manojs-MacBook-Air] ~/Desktop/kubernetes/Orbstack kubectl get pods
NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          4s
[15:30:05]-[0]-[Manojs-MacBook-Air] ~/Desktop/kubernetes/Orbstack 
```

The nginx server is locally accessible also.

<figure>

![](/assets/img/posts/Screenshot-2024-08-15-at-3.32.44 PM-1024x155.jpg)

<figcaption>

Nginx Pod

</figcaption>

</figure>

## **How to Run Your First Container**

Running the first container is very simple. We will use the simple docker-compose file below to achieve this.

```
version: '3'
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
```

The output of the above docker-compose file will look something like the below:

```
[15:37:20]-[0]-[Manojs-MacBook-Air] ~/Desktop/kubernetes/Orbstack docker compose up -d
WARN[0000] /Users/manojkumar/Desktop/kubernetes/Orbstack/docker-compose.yaml: `version` is obsolete 
[+] Running 2/2
 ✔ Network orbstack_default    Created                                               0.1s 
 ✔ Container orbstack-nginx-1  Started                                               0.3s 
[15:37:21]-[0]-[Manojs-MacBook-Air] ~/Desktop/kubernetes/Orbstack docker ps -a
CONTAINER ID   IMAGE                              COMMAND                  CREATED         STATUS                      PORTS                               NAMES
a187842f28d4   nginx:latest                       "/docker-entrypoint.…"   8 seconds ago   Up 7 seconds                0.0.0.0:80->80/tcp, :::80->80/tcp   orbstack-nginx-1
```

The nginx server is locally accessible also.

<figure>

![](/assets/img/posts/Screenshot-2024-08-15-at-3.38.52 PM-1024x155.jpg)

<figcaption>

Docker composes nginx server

</figcaption>

</figure>

## **How to Spin Up Your First VM**

The best part of Orbstack is that you can easily create VMs. By default, creating a Linux VM is straightforward—you don't need to add an ISO file. Just select the version you want, and you're ready to go.

Here are the steps to create a VM in Orbstack:

1. Click on 'Machine' under 'Linux' from the left side.

3. Click on 'New Machine.'

5. Enter the name, select the distribution, version, and CPU type, then click 'Create.'

Once done, your VM is ready to use. Let's see how you can connect to your VM. Open the terminal and run the below command:

```bashssh ubuntu@orb
```

and the output will look something like the below:

<figure>

![](/assets/img/posts/Screenshot-2024-08-15-at-3.59.30 PM-935x1024.jpg)

<figcaption>

Orbstack VM

</figcaption>

</figure>

## **Things I Don't Like About Orbstack**

Orbstack is a powerful tool by default, but there are a few areas that could be improved:

- Limited VM customization options.

- Inability to create Windows VMs.

- VMs resemble LXC containers more than independent VMs.

- Limited networking capabilities.

## \[Video\] Running Containers,Pods and VM natively on Mac with Orbstack

https://www.youtube.com/watch?v=RTC9sOx6iJA

## **Conclusion**

Orbstack proves to be a highly effective and versatile tool for local development, offering a streamlined alternative to Docker Desktop. Whether you need to quickly test Compose or YAML files, manage pods and containers, or spin up VMs, Orbstack delivers with impressive speed and efficiency. Installing and using Orbstack on your Mac is straightforward, and it supports various development needs with features like Rosetta x86 emulation and file sharing.

While Orbstack excels in many areas, it's important to be aware of its limitations, such as limited VM customization, lack of support for Windows VMs, and reduced networking capabilities. Despite these drawbacks, Orbstack remains a valuable tool for developers seeking a lightweight and user-friendly environment for containerized applications and virtual machines. By adopting Orbstack, you can enhance your development workflow and achieve faster, more efficient results.
