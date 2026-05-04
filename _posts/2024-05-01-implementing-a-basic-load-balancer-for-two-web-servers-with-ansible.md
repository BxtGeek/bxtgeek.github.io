---
title: "Implementing a Basic Load Balancer for Two Web Servers with Ansible"
date: 2024-05-01 00:00:00 +0530
categories: 
  - "devops"
tags: 
  - "ansible"
  - "ansible-playbook"
  - "automation"
  - "configuration-management"
  - "devops"
  - "haproxy"
  - "it-infrastructure"
  - "load-balancer"
  - "nginx"
  - "server-management"
  - "web-servers"
image:
  path: /assets/img/posts/Implementing-a-Basic-Load-Balancer-for-Two-Web-Servers-with-Ansible.png
---

In today's dynamic web environments, ensuring high availability and optimal performance is paramount. Load balancing is a crucial technique used to distribute incoming traffic across multiple servers, preventing any single server from becoming overwhelmed. With Ansible, a powerful automation tool, setting up a basic load balancer for two web servers becomes straightforward and efficient.

### Introduction

Load balancing plays a critical role in maintaining the availability and responsiveness of web applications. By evenly distributing incoming requests, it helps avoid bottlenecks and ensures that no single server is overburdened. In this guide, we'll walk through the process of setting up a simple load balancer using Ansible to manage two web servers.

![](/assets/img/posts/Screenshot-2024-04-30-at-5.51.54 AM.jpg)

### Prerequisites

Before getting started, ensure you have the following:

- Three virtual machines (VMs) have been configured with static IP addresses. You can check out GitHub the [reference article](https://github.com/BxtGeek/vault/blob/main/Linux/nmcli.md) for instructions on setting up static IPs. Rocky Linux will be utilized in this guide.

- Ensure that Ansible is installed either on your local machine or on a designated control node.

- Make sure that SSH access is enabled and configured for all servers from the machine where Ansible is installed.

### Step 1: Inventory Configuration

The first step is to define an inventory file that lists the IP addresses or hostnames of your web servers. Create a file named `inventory.ini`:

```
[web_servers]
192.168.1.86
192.168.1.87

[nginx_servers]
192.168.1.85
```

Replace the IP addresses with the actual addresses of your servers.

### Step 2: Workflow of the playbook

| Step | Description |
| --- | --- |
| 1 | Update repository index for web servers |
| 2 | Install httpd package for web servers |
| 3 | Start and enable httpd service for web servers |
| 4 | Delete empty index.html file on server 192.168.1.86 |
| 5 | Copy index.html template to server 192.168.1.86 |
| 6 | Delete empty index.html file on server 192.168.1.87 |
| 7 | Copy index.html template to server 192.168.1.87 |
| 8 | Disable Firewalld service for all servers |
| 9 | Update repository index for nginx servers |
| 10 | Install nginx package for nginx servers |
| 11 | Start and enable nginx service for nginx servers |
| 12 | Delete ls.conf file if present on nginx servers |
| 13 | Ensure ls.conf file exists on nginx servers |
| 14 | Add Nginx configuration block to ls.conf on nginx servers |
| 15 | Ensure Nginx service is restarted on nginx servers |

### Step 3: Playbook Creation

```
---
- hosts: web_servers
  tasks:
    - name: Update repo index
      yum:
        update_cache: yes

    - name: Install httpd package
      yum:
        name: httpd
        state: latest

    - name: Start and enable httpd service
      service:
        name: httpd
        enabled: yes
        state: started

- hosts: 192.168.1.86
  tasks:
    - name: Delete a index.html file if empty
      file:
        path: /usr/share/httpd/noindex/index.html
        state: absent

    - name: Copy index.html template
      template:
        src: index.html.j2
        dest: /usr/share/httpd/noindex/index.html

- hosts: 192.168.1.87
  tasks:
    - name: Delete a index.html file if empty
      file:
        path: /usr/share/httpd/noindex/index.html
        state: absent

    - name: Copy index.html template
      template:
        src: index1.html.j2
        dest: /usr/share/httpd/noindex/index.html

- hosts: all
  tasks:
    - name: Disable Firewalled
      service:
        name: firewalld
        enabled: no
        state: stopped

- hosts: nginx_servers
  tasks:
    - name: Update repo index
      yum:
        update_cache: yes

    - name: Install nginx package
      yum:
        name: nginx
        state: latest

    - name: Start and enable nginx service
      service:
        name: nginx
        enabled: yes
        state: started

    - name: Delete a ls.conf file if present
      file:
        path: /etc/nginx/conf.d/ls.conf
        state: absent

    - name: Ensure ls.conf file exists
      file:
        path: /etc/nginx/conf.d/ls.conf
        state: touch

    - name: Add Nginx configuration block
      blockinfile:
        path: /etc/nginx/conf.d/ls.conf
        block: |
          upstream backend {
              server 192.168.1.86:80;
              server 192.168.1.87:80;
          }

          server {
              listen 80;
              server_name localhost;

              location / {
                  proxy_pass http://backend;
              }
          }
        marker: "# {mark} ANSIBLE MANAGED BLOCK"

    - name: Ensure Nginx service is restarted
      service:
        name: nginx
        state: restarted
```

### Step 4: Running the Playbook

With the inventory and playbook in place, execute the playbook using the following command:

```
ansible-playbook install_httpd.yml
```

Ansible will connect to the web servers, install Nginx, and configure it according to the defined playbook.

### Conclusion

In this tutorial, we've demonstrated how to use Ansible to set up a basic load balancer for two web servers. By automating the installation and configuration process, Ansible simplifies the management of load balancers, allowing you to focus on ensuring the availability and scalability of your web applications. Experiment with different load-balancing algorithms and configurations to optimize performance according to your specific requirements.
