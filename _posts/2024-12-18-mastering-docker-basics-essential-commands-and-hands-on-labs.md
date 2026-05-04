---
title: "Mastering Docker Basics: Essential Commands and Hands-On Labs"
date: 2024-12-18 00:00:00 +0530
categories: 
  - "docker"
  - "docker-series"
tags: 
  - "docker"
  - "docker-basics"
  - "docker-commands"
  - "docker-containers"
  - "docker-exec"
  - "docker-hub"
  - "docker-images"
  - "docker-ps"
  - "docker-run"
  - "how-to-use-docker"
  - "learn-docker"
  - "nginx-container"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

Docker simplifies application deployment by using containers, which are lightweight, portable environments. To get started, it’s important to understand the key commands used to interact with Docker containers and images.

Here are some essential commands every Docker user should know:

##### docker run

The `docker run` command is used to create and start a container from a specified image. This is one of the most frequently used commands for launching containers.

Example:

```bashdocker run -d -p 80:80 nginx
```

This command starts a new container using the Nginx image, runs it in the background (`-d`), and maps port 80 of the container to port 80 on your machine (`-p`).

##### docker ps

To view the running containers, use the `docker ps` command. It lists all containers currently active, showing information like container ID, image, status, and port mappings.

Example:

```bashdocker ps
```

##### docker stop

When you want to stop a running container, the `docker stop` command comes in handy.

Example:

```bashdocker stop <container_id>
```

##### docker rm

To remove a stopped container from your system, use the `docker rm` command. Note that this only removes stopped containers.

Example:

```bashdocker rm <container_id>
```

##### docker exec

The `docker exec` command allows you to interact with a running container. You can execute commands or open a shell session within a container.

Example:

```bashdocker exec -it <container_id> bash
```

##### docker inspect

The `docker inspect` command allows you to check the details or configuration of that container.

Example:

```bashdocker inspect <container_id> 
```

##### docker logs

The `docker logs` command allows you to see the logs of a container. You can execute commands with using the below command

Example:

```bashdocker logs <container_id>
```

#### **Difference Between Docker Images and Containers**

Before diving deeper into using Docker, it’s crucial to understand the distinction between Docker images and containers.

- **Docker Image**:  
    An image is a blueprint or template used to create containers. It’s an immutable file that contains the application and its dependencies. Docker images are stored in registries like Docker Hub.

- **Docker Container**:  
    A container is a running instance of an image. It’s a lightweight, isolated process that runs an application and shares the host system’s kernel. You can have multiple containers running from the same image but each operates in its own isolated environment.

#### **How to Search, Pull, and Run Images from Docker Hub**

Docker Hub is the default public registry where you can find pre-built images for a variety of applications.

- **Search for Images**:  
    To search for images in Docker Hub, use the `docker search` command followed by a keyword. Example:

```bashdocker search nginx
```

- **Pull Images**:  
    Once you find an image you want to use, you can pull it to your local system using the `docker pull` command. Example:

```bashdocker pull nginx
```

- **Run Images**:  
    After pulling an image, you can use the `docker run` command to create and start a container from that image (as demonstrated earlier).

### **Labs**

- Run a containerized Nginx server and access it from your browser.

- Use docker exec to interact with a running container.

### \[Video\] Mastering Docker Basics: Essential Commands and Hands-On Labs

https://youtu.be/j7Mjr6QvUN0

### **Conclusion**

Now that you’ve learned the basics of Docker commands and gained hands-on experience with containers, you’re ready to start containerizing your own applications. Docker’s simplicity and power are game-changers for developers, allowing you to easily deploy, scale, and manage applications across environments. With the foundation built in this post, you can explore advanced Docker features and start building your own containerized applications.
