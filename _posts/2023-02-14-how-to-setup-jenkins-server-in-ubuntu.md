---
title: "How to Setup Jenkins Server in Ubuntu"
date: 2023-02-14 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "admin-user"
  - "automation"
  - "automation-server"
  - "ci-cd-pipeline"
  - "configuration"
  - "continuous-delivery"
  - "continuous-integration"
  - "devops"
  - "installation"
  - "java"
  - "jenkins"
  - "jenkins-tutorial"
  - "linux"
  - "open-source-2"
  - "plugins"
  - "security-settings"
  - "server-setup"
  - "software-development"
  - "terminal-commands"
  - "ubuntu"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

Jenkins is an open-source automation server that helps developers build, test and deploy their software projects. It is a popular tool for continuous integration and continuous delivery (CI/CD) pipeline. Jenkins allows developers to automate the building, testing, and deployment of their code, making the software development process more efficient and streamlined. It is widely used by software development teams of all sizes to automate the software development process and improve collaboration among team members. With Jenkins, developers can easily build, test and deploy their code, track bugs, and manage the entire software development lifecycle. In this guide, we will be covering the process of setting up a Jenkins server on an Ubuntu machine.

<figure>

![](/assets/img/posts/screely-1673894555129-1024x597.png)

<figcaption>

Jenkins Server

</figcaption>

</figure>

## Prerequisites

- Ubuntu Server

- Java 8 or higher

- And most of all patience

## Installation

**Download Jenkins package**

- Open a terminal window and navigate to the directory where you want to download the Jenkins package.

- Use the following command to download the package:

```bashwget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
```

**Add Jenkins package repository**

- Use the following command to add the Jenkins package repository:

```bashsudo add-apt-repository ppa:jenkins-ci/stable 
```

- Update your package list by running the command:

```bashsudo apt-get update
```

**Install Jenkins using apt-get**

- Use the following command to install Jenkins:

```bashsudo apt-get install jenkins 
```

- The installation process may take a few minutes to complete.

**Start and enable Jenkins service**

- Start the Jenkins service by running the command:

```bashsudo systemctl start jenkins
```

- To enable the Jenkins service to start automatically on system boot, run the command:

```bashsudo systemctl enable jenkins
```

- To check the status of the Jenkins service, use the command:

```bashsudo systemctl status jenkins
```

- Now, Jenkins server is running on your Ubuntu machine on port 8080, you can access it by visiting http://localhost:8080 in your web browser.

You have successfully installed Jenkins on your Ubuntu machine. In the next step, you will need to configure the initial settings, such as creating an admin user and configuring security settings.

## Initial Configuration

**Unlock Jenkins using the initial admin password**

- After the installation, Jenkins will be locked and require an initial admin password to proceed.

- Locate the password by running the command:

```bashcat /var/lib/jenkins/secrets/initialAdminPassword
```

- Copy the password and paste it into the "Administrator password" field on the Jenkins UI.

- Click "Continue" to proceed.

**Create admin user**

- On the "Customize Jenkins" page, click "Create a new user."

- Fill out the required fields, such as "Username" and "Password."

- Click "Save and Continue."

**Configure security settings**

- On the "Instance Configuration" page, select the security settings that fit your needs.

- For example, you can enable security by configuring the Jenkins user database, setting up the matrix-based security, or using an external security realm.

- Click "Save and Finish" to apply the security settings.

- Configure Jenkins plugins

- On the "Customize Jenkins" page, select the plugins you want to install, or leave the recommended plugins selected.

- Click "Download and Install" to install the plugins.

- Once the plugin installation is complete, click "Start using Jenkins" to access the Jenkins dashboard.

You have successfully configured the initial settings of your Jenkins server. You can now proceed to create jobs and automate your software development process.

## Conclusion

In this guide, we have covered the process of setting up a Jenkins server on an Ubuntu machine. We have discussed the prerequisites, installation, and initial configuration of the Jenkins server. We have also covered how to unlock Jenkins using the initial admin password, create an admin user, configure security settings, and configure Jenkins plugins.

Jenkins has a wide range of features and capabilities that can be configured to suit your needs. If you want to learn more about Jenkins, you can check out the official Jenkins documentation, or explore the wide range of plugins available for Jenkins. There are also many online tutorials and guides available that can help you learn more about Jenkins and how to use it effectively.
