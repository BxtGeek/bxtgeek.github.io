---
title: "Efficient Web Hosting: Running Two Sites on One Nginx Server"
date: 2023-09-29 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "efficient-hosting"
  - "hosting-efficiency"
  - "multiple-websites"
  - "nginx-configuration"
  - "nginx-performance"
  - "nginx-server"
  - "nginx-server-blocks"
  - "nginx-setup"
  - "nginx-tutorial"
  - "server-configuration"
  - "server-optimization"
  - "server-resource-management"
  - "web-development"
  - "web-hosting"
  - "web-hosting-solutions"
  - "web-server-management"
  - "website-hosting"
  - "website-management"
  - "website-scalability"
image:
  path: /assets/img/posts/Efficient-Web-Hosting-Running-Two-Sites-on-One-Nginx-Server.png
---

One of my old friends recently reached out to me with a query about installing two websites on the same Nginx server. He has two IP addresses assigned to his server, and Nginx is already installed. He's looking to set up a configuration where accessing the first IP will lead to the first website, and accessing the second IP will redirect to the second website.

## Prerequisites

- **Server**: You need access to a Linux server with Nginx installed. This could be a virtual server or cloud instance.

- **Two IP Addresses**: Your server should have two separate IP addresses assigned—one for each website.

- **Admin Access**: You should have administrative access to your server (root or sudo) for making system changes.

- **Nginx Installed**: Confirm that Nginx is installed. If not, you can install it using your server's package manager.

- **Basic Nginx Knowledge**: Familiarize yourself with Nginx basics, like server blocks (virtual hosts) and configuration directives.

- **SSH Client**: Install an SSH client on your local computer for remote server access.

## Setting Up Websites

In this section, we'll guide you through the process of setting up two distinct websites on your Nginx server. For demonstration purposes, we'll use free theme templates from [Free CSS](https://www.free-css.com/) and host them on your server.

- Visit [Free CSS](https://www.free-css.com/) and select two different website templates that you'd like to use.

- Download the themes (typically in ZIP format) to your server using the `wget` command. For example, let's assume you've downloaded two themes named `theme1.zip` and `theme2.zip`:

```bashwget https://www.free-css.com/assets/files/theme1.zip
wget https://www.free-css.com/assets/files/theme2.zip
```

- Create two directories `/var/www/html` to host the websites. We'll name them `web1` and `web2`:

```bashsudo mkdir /var/www/html/web1
sudo mkdir /var/www/html/web2
```

- Unzip the downloaded theme files into their respective directories:

```bashsudo unzip theme1.zip -d /var/www/html/web1
sudo unzip theme2.zip -d /var/www/html/web2
```

After following this your two website are ready. Now configure the nginx to work they way we want.

## Configure Nginx Server Blocks

To efficiently host two websites on a single Nginx server, we'll use Nginx's server block feature. Each website will have its own server block configuration. Follow these steps to configure Nginx server blocks:

- Open a terminal and navigate to Nginx's sites directory, which typically contains configuration files for server blocks:

```bashcd /etc/nginx/sites-available
```

- You'll need a separate configuration file for each website. For this example, let's call them `website1` and `website2`. You can use the `default` configuration file as a template:

```bashtouch website#1
touch website#2
```

- Add the below content in both the file, Replace the content accordingly.

```
# /etc/nginx/sites-available/web1
server {
    listen 80;
    server_name #1_ip_Address;

    root /var/www/html/web1;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

- Now you will have two files with the name `web1` and `web2`.

- Create symbolic links to enable the server blocks:

```bashsudo ln -s /etc/nginx/sites-available/web1 /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/web2 /etc/nginx/sites-enabled/
```

- Test your Nginx configuration for any syntax errors:

```bashsudo nginx -t
```

- If the test is successful, reload Nginx to apply the changes:

```bashsudo systemctl reload nginx
```

- You can now access your websites by entering their respective domain names (e.g., `http://#1_ip_address` and `` `http://#1_ip_address` ``) in a web browser. Nginx will route the requests to the appropriate server block based on the domain name.

![](/assets/img/posts/Screenshot-2023-09-20-at-4.09.24-PM-1024x576.jpg)

![](/assets/img/posts/Screenshot-2023-09-20-at-4.09.44-PM-1024x576.jpg)

Repeat these steps whenever you need to add more websites to your Nginx server, ensuring each has its own server block configuration.

## Conclusion 

In this guide, we've explored the art of efficient web hosting by running two distinct websites on a single Nginx server. By harnessing the power of Nginx's server block configuration, you've learned how to segregate and serve multiple websites seamlessly. Here's a recap of what you've achieved:

- **Cost Efficiency**: Hosting multiple websites on a single server is a cost-effective way to utilize your resources efficiently, especially when you have limited hardware.

- **Resource Optimization**: Nginx's lightweight and high-performance nature ensures that your server can efficiently manage the traffic for both websites without compromising on speed or reliability.

- **Easy Scaling**: This setup makes it easy to scale up and add more websites as your online presence expands.

- **Streamlined Maintenance**: Managing websites individually is simplified, making updates, troubleshooting, and maintenance more manageable.

- **Enhanced Performance**: By optimizing your Nginx configuration and keeping it organized, you can ensure that each website performs at its best.

As you continue your journey in web hosting and server management, remember that Nginx offers a robust platform for hosting multiple websites efficiently. Regularly review and refine your Nginx configurations to meet the evolving needs of your websites.

Efficient web hosting isn't just about running multiple websites on one server; it's about achieving optimal performance, security, and scalability. With Nginx as your ally, you're well on your way to mastering the art of web hosting.

Start hosting your websites efficiently with Nginx today, and unlock the full potential of your server.
