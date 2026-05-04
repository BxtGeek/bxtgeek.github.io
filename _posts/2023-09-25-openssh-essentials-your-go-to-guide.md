---
title: "OpenSSH Essentials: Your Go-To Guide"
date: 2023-09-25 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "network-security"
  - "password-authentication"
  - "remote-access"
  - "root-login"
  - "secure-shell"
  - "ssh-authentication"
  - "ssh-basics"
  - "ssh-best-practices"
  - "ssh-client"
  - "ssh-configuration"
  - "ssh-key-management"
  - "ssh-key-pair"
  - "ssh-protocol"
  - "ssh-security"
  - "ssh-server"
  - "ssh-tips"
  - "ssh-tutorial"
  - "sshd-configuration"
  - "sshd-management"
image:
  path: /assets/img/posts/OpenSSH-Essentials-Your-Go-To-Guide.png
---

In the world of secure remote communication and system administration, OpenSSH shines as a fundamental tool. OpenSSH, or Secure Shell, allows users to securely access remote servers and execute commands. In this comprehensive guide, we will explore OpenSSH from its basics to advanced configurations, equipping you with the knowledge to use this essential tool effectively.

## What is SSH?

**SSH**, short for **Secure Shell**, is a network protocol that enables secure communication between two devices over an unsecured network, such as the Internet. SSH provides encrypted connections for various network services, including remote command-line login, remote command execution, and secure file transfer.

## Working of SSH

SSH works through a client-server architecture. When a client wants to connect to a remote server securely, it initiates a connection request. The server, if properly configured, responds by verifying the client's identity and establishing an encrypted session. All data exchanged between the client and server is encrypted, ensuring confidentiality and integrity.

[![](/assets/img/posts/image-3.png)](https://corpit.org/hostinger)

## Components of SSH

- **Client**: The client initiates the SSH connection and interacts with the remote server.

- **Server**: The server listens for incoming SSH connection requests and authenticates clients.

- **SSH Protocol**: Defines the rules for secure communication between the client and server.

- **Public and Private Keys**: Used for authentication and encryption.

- **Configuration Files**: Define the behavior and settings for SSH on both the client and server.

## Install open SSH on the server

To install OpenSSH on a server, you'll typically use the package manager specific to your server's operating system. Here are instructions for a few commonly used Linux distributions:

- **Update the Package List**: Open a terminal and run:

```bashsudo apt update
```

- **Install OpenSSH Server:**

```bashsudo systemctl start ssh
```

- **Start the SSH Service:**

```bashsudo systemctl start ssh
```

- **Enable SSH to Start on Boot:**

```bashsudo systemctl enable ssh
```

- **Check if OpenSSH is Installed**:

```bashssh -V
```

That's it! OpenSSH should now be installed on your server, and you can use it for secure remote access and file transfer. 

## Configure firewall to allow SSH traffic

To configure your firewall to allow SSH traffic (port 22), you'll typically use a firewall management tool specific to your operating system. Here are instructions for a few commonly used operating systems:

- **Install `ufw` if not already installed**:

```bashsudo apt update
sudo apt install ufw
```

- **Enable the Firewall:**

```bashsudo ufw enable
```

- **Allow SSH Traffic:**

```bashsudo ufw allow 22/tcp
```

- **Reload the Firewall Rules:**

```bashsudo ufw reload
```

That's it! Your firewall should now be configured to allow SSH traffic on port 22.

## Configuring SSH on the Client Machine

To manually generate an SSH Ed25519 key pair for a server and copy the public key to the server, you can use the `ssh-keygen` command. Here are the steps:

### Generate the SSH Ed25519 Key Pair

- **Open a Terminal**: If you're using a local terminal, open your terminal application. If you're connecting to a remote server, you can use an SSH client like `ssh` or PuTTY to access the server's command line.

- **Generate the Ed25519 Key Pair**: Use the `ssh-keygen` command with the `-t` option set to `ed25519` to specify the Ed25519 key type. Also, provide a location to save the key pair (if you don't specify a location, it will use the default `~/.ssh/id_ed25519` for the private key and `~/.ssh/id_ed25519.pub` for the public key):

```
ssh-keygen -t ed25519
```

- **Set a Secure Passphrase (Optional)**: You can choose to set a passphrase to encrypt the private key. This adds an extra layer of security. If you choose to use a passphrase, you'll be prompted to enter it and confirm it.

- **Key Generation**: The `ssh-keygen` the command will generate the Ed25519 key pair and display some information, including the location of the keys.

### Copy the Public Key to the Server

Assuming you want to copy your public key to a remote server, you can use the `ssh-copy-id` command. Replace `[user]` with your server's username and `[server]` with the server's IP address or domain name:

```
ssh-copy-id [user]@[server]
```

This command will prompt you to enter the password for your server's user account. After providing the password, it will copy your public key to the server and add it to the `~/.ssh/authorized_keys` file, allowing you to log in without a password.

That's it! You've successfully generated an SSH Ed25519 key pair and copied the public key to a server for secure authentication. Make sure to keep your private key secure and never share it with anyone.

## Configuring SSH Hostnames for Easy Remote Access

To configure SSH hostnames on your client machine for easier and more convenient SSH connections, you can use SSH configuration files. These files allow you to define aliases for remote hosts, set default options, and specify various SSH configurations. The main configuration file is typically located at `~/.ssh/config`.

Here's how to set up SSH hostnames:

- **Open or Create the SSH Configuration File**: Open your terminal and use a text editor to open or create the SSH configuration file. If it doesn't already exist, you can create it:

```
nano ~/.ssh/config
```

- **Add Host Definitions**: In the SSH configuration file, you can define hosts using the following format:

```
Host [alias]
    HostName [actual-hostname-or-IP]
    User [username]
    Port [port-number]
    [Other SSH options]
    IdentityFile [private key path]
```

Replace `[alias]` with your chosen hostname alias (this is what you'll use to connect), `[actual-hostname-or-IP]` with the server's actual hostname or IP address, `[username]` with your server username, and `[port-number]` with the SSH port (typically 22, but you can specify a different port if needed).

For example, to configure an alias for a remote server:

```
Host learnvm
  Hostname 192.168.1.89
  Port 22
  User root
  IdentityFile ~/.ssh/learnvm_id_ed25519
```

- **Save and Exit**: Save your changes and exit the text editor.

- **Test the Configuration**: You can now SSH into the remote host using the alias you defined:

```bashssh myserver
```

- This will use the alias `myserver` and connect to the server defined in your SSH configuration file.

Using SSH configuration files, you can simplify your SSH connections and avoid having to remember IP addresses, usernames, or other connection details for each server you connect to.

## SSHD Management

The SSH server daemon, `sshd`, plays a critical role in handling incoming SSH connections to your server. Properly managing it is essential for maintaining a secure and functional SSH service. Below, we will explore various aspects of `sshd` management.

The `sshd_config` file is the central configuration file for the SSH server (`sshd`). It contains various settings and options that dictate how SSH connections are handled on your server. To configure `sshd`, you need to edit this file.

You can typically find the `sshd_config` file in one of these locations:

- **Ubuntu/Debian**: `/etc/ssh/sshd_config`

- **CentOS/RHEL**: `/etc/ssh/sshd_config`

- **macOS**: `/etc/ssh/sshd_config`

Common configuration options in `sshd_config` include specifying allowed users and groups, setting authentication methods, controlling access based on IP addresses, and defining the SSH port. It's essential to review and modify this file carefully to meet your security and operational requirements.

### Changing the SSHD Port

By default, SSH operates on port 22. While this is well-known and widely used, it can also be a target for automated attacks. Changing the SSH port to a non-standard value can enhance security by reducing the visibility of your SSH service.

To change the SSHD port, follow these steps:

- Open the `sshd_config` file for editing

```bashsudo nano /etc/ssh/sshd_config
```

- Locate the line that specifies the SSH port (usually `Port 22`), and change the port number to your desired value. Ensure it's a non-standard port not used by other services.

```
Port 2222
```

- Save the file and exit the text editor.

```bashsudo systemctl restart sshd 
```

- Restart the SSH service to apply the changes:

### Root User Login Permit

Allowing or denying the root user to log in via SSH is a critical security consideration. While it's generally recommended to disable direct root login, there are situations where it might be necessary to enable it temporarily.

To deny root user login:

- Open the `sshd_config` file:

- Find the line that reads `PermitRootLogin yes` and change it to `PermitRootLogin no`.

```
PermitRootLogin no
```

- Save the file and restart the SSH service as explained earlier.

### Setting Up Password Authentication

SSH supports various authentication methods, including password-based authentication. However, for improved security, it's advisable to configure SSH to use key-based authentication and disable password authentication, especially for privileged users.

To configure password authentication:

- Open the `sshd_config` file:

- Locate the line that specifies `PasswordAuthentication`. Change it from `yes` to `no`:

```
PasswordAuthentication no
```

- Save the file and restart the SSH service.

By following these SSHD management practices, you can enhance the security and control of your SSH service while ensuring its smooth operation.

## Security Tips

- **Disable Root Login**: Unless necessary, disable direct root login.

- **Regularly Update SSH**: Keep your OpenSSH installation up to date.

- **Implement Firewall Rules**: Configure firewall rules to restrict SSH access.

- **Monitor SSH Logs**: Regularly review SSH logs for unusual activities.

- **Use Key-Based Authentication**: Rely on key-based authentication for added security.

- **Limit Login Attempts**: Implement login attempt limits to thwart brute-force attacks.

- **Enable Two-Factor Authentication (2FA)**: If possible, enable 2FA for additional security.

## Conclusion

By following this comprehensive guide on OpenSSH essentials, you'll have the knowledge and skills to set up, configure, and secure SSH connections effectively. Whether you're a seasoned system administrator or a beginner, understanding SSH is crucial for managing remote servers securely.
