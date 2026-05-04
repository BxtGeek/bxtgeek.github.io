---
title: "What is Vagrant and how we use it?"
date: 2022-02-27 00:00:00 +0530
categories: 
  - "devops"
  - "virtualization-concepts"
tags: 
  - "vagrant"
  - "virtualization"
image:
  path: /assets/img/posts/What-is-Vagrant-and-how-we-use-it.png
---

We already cover the virtualization in our previous post. But how cool if we can automate the creation of those virtual machine. In this article will learn how we can do that, why need to do that and using which tool we can do that.

## Why we need to automate the creation of vm's?

Let suppose you are working in a enterprises and due this WFH culture (Writing from Covid world👻). You are a system admin over there and there are 500 employees joins the organization. You are assign to a task to create those 500 vm's for each employee. Now you have to open the Esxi server and start creating those VM. Mean its so daunting task and it will take around 5-6 day for the initialization and creation of those VM's. So automation plays an important role in such cases.

Let understand the important of automation from one more example you create a ERP application in a VM and now you want to distribute that ERP for multiple people. so you will do to every person laptop/ desktop install the erp dependencies and check weather is working on not. Again very boring task. What you can do here you can create a script where you define the system element like ram, cpu, network that is needed to run that ERP. Create a file and share that across all user and when user run that file. User have access for that ERP.

So we use the automation to make boring thing fancy. Now we understand why we need the automation. Now learn how we can do that in real life. Here I am taking example of home lab( mean my boring old laptop💻).

## How to automate VM's creation?

In order to automate the VM creation we need few tools:

- **Virtualbox -** It is a hypervisor using which we can create the VM in our machine.
- **Vagrant** \- It is a tool to build and manage portable VM's.
- **Notepad++** - I like this note taking over any other tool hence referring 😂.

**We need to follow the below steps in order to setup the things:**

- We need to download the **[Virtualbox](https://www.virtualbox.org/wiki/Downloads)** from the link and install (just click next, next).
- Install the **[Vagrant](https://www.vagrantup.com/downloads)** from the link and install (just click next, next).
- \[Optional\] Install **[Notepad++](https://notepad-plus-plus.org/downloads/)** from the link and install (just click next, next).

**With all the things install your environment is ready. Now see how you can create the Virtual machine in Virtualbox manually:**

- Open virtualbox.
- Click on new in top bar.
- Give the name of the machine and select the folder where you want to store that VM in machine folder.
- Select type for now I am using linux and it will automatically detect the version( if not detected manually you can also select one).
- Now it will ask for the Memory size. Give it wisely if you system have low ram then assign it according.
- Now it will ask for the virtual disk select the default option. After that if will ask for the drive type go with the default one(VDI).
- Now it will ask for way you want to store the drive. Like dynamic way mean it will increase automatic if VM need the space. If you select the fixed size it will block that space in VM. So here I suggest you to go with the dynamic way and select the storage size.
- Now your vm is created. Now you need to install the operating system in it and you are good to go.
- Once you create the VM it will look something like below.

![](/assets/img/posts/image-1-1024x576.png)

N**ow see how we can create the VM using Vagrant or Automatic way**:

But in order to create the VM's automatic we need to understand the Vagrant box. They are like the containers mean predefine file. All the important values are already mention in this file also known as vagrant box or vagrant config file. You can access the vagrant box from the below link:

[**https://app.vagrantup.com/boxes/search**](https://app.vagrantup.com/boxes/search)

Here you will get the Vm from the different sizes and types and as per liking you can create one. Will see how we can create one.

- Open Vagrantbox website and select a box here I am selecting centos box by [**geerlingguy/centos7**](https://app.vagrantup.com/geerlingguy/boxes/centos7).
- Open cmd and enter the command

```
vagrant init geerlingguy/centos7
```

- It will create a vagrant file in that dir now you need run the command vagrant up

```
vagrant up
```

- It will download the os file and configuration and created that VM in the virtualbox

![](/assets/img/posts/image-2-1024x576.png)

We already cover the things here an there in vagrant in the upcoming session will see how we create the multi VM vahrant file and how we can automate the code creation using the vagrant.
