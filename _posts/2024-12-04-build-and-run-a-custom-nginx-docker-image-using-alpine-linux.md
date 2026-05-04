---
title: "Build and Run a Custom Nginx Docker Image Using Alpine Linux"
date: 2024-12-04 00:00:00 +0530
categories: 
  - "docker"
tags: 
  - "alpine-linux"
  - "custom-docker-image"
  - "devops"
  - "docker"
  - "docker-container"
  - "nginx"
  - "nginx-configuration"
  - "static-website"
  - "web-server"
image:
  path: /assets/img/posts/Build-and-Run-a-Custom-Nginx-Docker-Image-Using-Alpine-Linux.png
---

In this tutorial, we will create a custom Docker image using Nginx and Alpine Linux, the lightweight Linux distribution popular for its minimal footprint. We will define a simple static website, configure Nginx, and build and run a Docker container from our custom image.

#### Prerequisites

- Docker installed on your system.

- Basic understanding of Dockerfiles and container concepts.

- Familiarity with Nginx configurations.

#### Steps to Build and Run a Custom Nginx Docker Image

##### 1\. **Prepare Project Files**

Create a project directory and add the following files:

- **`Dockerfile`**  
    Defines the base image, required software, and instructions to set up the container.

```
FROM alpine:latest 
RUN apk add --no-cache nginx 
COPY index.html /usr/share/nginx/html/ 
COPY nginx.conf /etc/nginx 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
```

- **`index.html`**  
    A simple HTML file for the static website.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Nginx</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f9;
            margin-top: 50px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Welcome to Nginx on Alpine Linux!</h1>
    <p>This is a simple static website served using Nginx and Alpine Linux.</p>
</body>
</html>
```

- **`nginx.conf`**  
    Configuration file for Nginx.

```
user nginx;
worker_processes auto;

error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;

    keepalive_timeout 65;

    server {
        listen 80;
        server_name localhost;

        root /usr/share/nginx/html;
        index index.html;

        error_page 404 /404.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

##### 2\. **Build the Docker Image**

Run the following command in the project directory to build the Docker image:

```bashdocker build -t custom-nginx .
```

This command will create a Docker image named `custom-nginx`.

##### 3\. **Run the Docker Container**

After building the image, use the following command to run the container:

```bashdocker run -d -p 8080:80 --name custom-nginx-container custom-nginx
```

- The `-d` flag runs the container in detached mode.

- The `-p 8080:80` maps port 8080 on the host to port 80 in the container.

- The `--name` flag names the container `custom-nginx-container`.

##### 4\. **Access the Website**

Open a browser and navigate to `http://localhost:8080`. You should see the static website with the message:

> Welcome to Nginx on Alpine Linux!  
> This is a simple static website served using Nginx and Alpine Linux.

#### Conclusion

By following this tutorial, you've successfully built a custom Nginx Docker image using Alpine Linux, configured it to serve a static website, and deployed it as a container. This lightweight and efficient setup is perfect for small-scale web servers and rapid prototyping.
