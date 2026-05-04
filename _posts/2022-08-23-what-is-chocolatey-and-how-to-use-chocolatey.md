---
title: "What is Chocolatey and How to use Chocolatey?"
date: 2022-08-23 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "chocolatey-download"
  - "chocolatey-packages"
  - "chocolatey-wiki"
  - "chocolatey-windows"
  - "install-chocolatey"
  - "is-chocolatey-safe"
  - "uninstall-chocolatey"
  - "what-is-chocolatey-node"
image:
  path: /assets/img/posts/What-is-Chocolatey-and-How-to-use-Chocolatey.png
---

For years we tend to download any window software using a website. We search for that application on google. Go on the trusted website download it and then click click click and install. But it is not simple as Linux. Where we can just install any application with a single line of command. No need to dig the internet for the software.

So today this article will talk about an awesome software called Chocolatey. How we can use that and how it can ease our life. But to understand Chocolatey first we need to understand the package manager.

## What is a package manager?

A package manager is a system tool. That helps in automating the process of installing, upgrading, and configuring. It has a wide database of applications and also about their dependency. So even if any software needs any dependency it will help with that.

## What is Chocolatey?

[Chocolatey](https://chocolatey.org/) is a package manager. Using this we can automate the process of installing the application. It is based on the developer-centric application NuGet. Chocolatey had its package feed that is developed and maintained by the project community members.

<figure>

![What is Chocolatey](/assets/img/posts/screely-1661224028534-1024x594.png)

<figcaption>

What is Chocolatey

</figcaption>

</figure>

Chocolatey packages are simple and easy to install that need less user interaction.

## Why Use Chocolatey?

The person who uses Linux understands the ease of installing and upgrading any application. But in [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), there is no way to do that. That is where Chocolatey comes into the picture. It is easy to use the command line tool. using which you can easily maintain your install application.

## Installing Chocolatey

For installing the Chocolatey you can refer to the official [Chocolatey site](https://chocolatey.org/install) for that. But for the general people below steps will help.

1. search for Powershell in the window search and open that as an administrator.
2. Once open enter the below command:  
    **Set-ExecutionPolicy Bypass -Scope Process -Force; \[System.Net.ServicePointManager\]::SecurityProtocol = \[System.Net.ServicePointManager\]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))**
3. Once the command finishes test with the below command whether it is installed proerly or not.  
    **choco**

It will return the Chocolatey version info in the command line.

<figure>

![Chocolatey installation](/assets/img/posts/screely-1661223865697-1024x881.png)

<figcaption>

Chocolatey installation

</figcaption>

</figure>

## Benefit of Chocolatey

All the package manager benefit applies to the chocolate but here are some that will help a lot.

### Installing programs Chocolatey style

You just need to enter a command to install any application. You no need to dig the internet. for the trusted resource to find the official download link of the application. There is a lot of application that is already maintained by the project community members. You can check those from the [Chocolatey packages website](https://community.chocolatey.org/packages).

### Multiple installs

Let's suppose you want to build a website so you need PHP, a lamp server, and a MySQL database. All these three applications you can install in one go.

### Uninstalling and updating

With chocolatey, you can uninstall and update any command with ease. Just hit once command and you are good to go.

## What is Chocolatey and How to use Chocolatey Video?

https://youtu.be/8kHcfCKTOO4

## Chocolatey FAQ

### How to install an application?

**choco install <Application Name>**

### How to uninstall an application?

**choco uninstall <Application Name>**

### How to install multiple applications at once?

**choco install <Application Name 1> <Application Name 2>**

### How to upgrade an application?

**choco upgrade <Application Name>**

### What is Chocolatey GUI?

Chocolatey GUI is a GUI utility to manage all your application from a single screen. to install the Chocolatey GUI you can run the below command.  
**choco install ChocolateyGUI**
