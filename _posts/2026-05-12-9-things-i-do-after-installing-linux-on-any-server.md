---
title: "9 Things I Do After Installing Linux on Any Server"
date: 2026-05-12 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/9-things-i-do-after-installing-linux-on-any-server.webp
---

Whenever I create a new Linux virtual machine in my homelab, I follow the same basic setup process. Over the last couple of years, I've moved from mostly using Ubuntu to working more with RHEL-based distributions like Rocky Linux and Fedora Linux.

These steps help me make the server more secure, easier to manage, and ready for long-term use.

In this article, I'll focus on RHEL-based distributions. If you use Debian, Ubuntu, or Arch, the commands will be slightly different, but the overall concepts remain the same.

## 1. Update the System

The first thing I do after installing Linux is update the system. A freshly installed server may contain:

- Old packages
- Security vulnerabilities
- Buggy software versions
- Missing kernel improvements

Updating ensures the system is stable, secure, and ready for production or lab usage.

On RHEL-based distributions, use:

```bash
sudo dnf update -y && sudo dnf upgrade -y
```

If the kernel gets updated, reboot the server:

```bash
sudo reboot
```

After rebooting, verify the kernel version:

```bash
uname -r
```

## 2. Create a User and Add Them to the Sudo Group

Using the `root` account for daily work is not recommended. Creating a normal user:

- Improves security
- Prevents accidental system damage
- Makes auditing easier
- Follows Linux best practices

Instead of logging in as `root`, use a normal user with sudo privileges.

Create a new user:

```bash
sudo useradd bxtgeek
```

Set a password:

```bash
sudo passwd bxtgeek
```

Add the user to the `wheel` group (sudo group in RHEL-based systems):

```bash
sudo usermod -aG wheel bxtgeek
```

Test sudo access:

```bash
su - bxtgeek
sudo whoami
```

If it returns `root`, then sudo is working correctly.

## 3. Assign a Static IP Address

Servers should not receive random IP addresses from DHCP. A static IP helps because:

- SSH connections remain consistent
- Services become easier to access
- DNS records stay valid
- Automation scripts work properly

This is especially important in homelabs and virtualization environments.

First, check your network interface name:

```bash
ip a
```

You might see something like `ens18`.

Now edit the network configuration:

```bash
sudo nmtui
```

Inside the interface menu:

1. Select your network adapter
2. Set IPv4 to Manual
3. Enter your IP Address, Gateway, and DNS Server

Save and restart networking:

```bash
sudo systemctl restart NetworkManager
```

Verify the IP:

```bash
ip a
```

## 4. Set a Hostname

A hostname identifies your server on the network. Instead of seeing `localhost.localdomain`, you'll see something meaningful like `web-server` or `db-server`. This becomes very useful once you start managing multiple systems.

Set the hostname using:

```bash
sudo hostnamectl set-hostname web-server
```

Verify it:

```bash
hostname
```

You may need to reconnect your shell session to see the change reflected everywhere.

## 5. Configure the Timezone

Incorrect time settings can cause:

- Log issues
- Authentication problems
- Scheduling failures
- Backup inconsistencies

Servers should always use the correct timezone.

Check current timezone:

```bash
timedatectl
```

List available timezones:

```bash
timedatectl list-timezones
```

Set your timezone:

```bash
sudo timedatectl set-timezone Asia/Kolkata
```

Verify:

```bash
timedatectl
```

## 6. Install and Enable OpenSSH

SSH allows remote management of the server. Without SSH:

- You need console access every time
- Automation tools cannot connect
- Remote troubleshooting becomes difficult

SSH is one of the most important services on a Linux server.

Install OpenSSH Server:

```bash
sudo dnf install openssh-server -y
```

Enable and start the service:

```bash
sudo systemctl enable sshd --now
```

Verify the status:

```bash
sudo systemctl status sshd
```

Check if SSH is listening:

```bash
ss -tulpn | grep ssh
```

## 7. Configure Passwordless SSH Authentication

Using SSH keys is:

- More secure than passwords
- Faster
- Easier for automation
- Resistant to brute-force attacks

Once configured, you can log in without typing a password every time.

On your local machine, generate an SSH key:

```bash
ssh-keygen
```

Copy the key to the server:

```bash
ssh-copy-id bxtgeek@192.168.x.x
```

Now test login:

```bash
ssh bxtgeek@192.168.x.x
```

If it logs in without asking for the server password, it works. You can further improve security by disabling password authentication later.

## 8. Remove Unnecessary Packages and Services

A minimal server is:

- More secure
- Faster
- Easier to maintain
- Less resource intensive

Many default installations include packages you may never use. In servers, I prefer keeping only what is necessary.

List installed packages:

```bash
dnf list installed
```

Remove unused packages:

```bash
sudo dnf remove package-name
```

Check enabled services:

```bash
systemctl list-unit-files --type=service
```

Disable unnecessary services:

```bash
sudo systemctl disable service-name
```

For example, if you do not use Bluetooth on a server:

```bash
sudo systemctl disable bluetooth
```

## 9. Configure Backups Using Snapper and Btrfs

This is probably one of my favorite Linux features. I've been using the Btrfs filesystem for years mainly because of snapshots.

Snapshots allow you to:

- Roll back bad updates
- Recover from mistakes
- Restore deleted files quickly
- Protect your server during experimentation

This is extremely useful in homelabs.

Install Snapper:

```bash
sudo dnf install snapper -y
```

Create a Snapper configuration:

```bash
sudo snapper -c root create-config /
```

Create your first snapshot:

```bash
sudo snapper create --description "Initial snapshot"
```

List snapshots:

```bash
sudo snapper list
```

If something breaks after an update, snapshots can save hours of troubleshooting. If your distro does not use Btrfs, you can also use `rsync`, `borgbackup`, or `restic` for backup solutions.

## Final Thoughts

These are the first things I do after creating any Linux server VM in my lab. The goal is simple:

- Keep the server secure
- Make management easier
- Prepare it for long-term usage
- Avoid problems later

As you spend more time with Linux, you'll slowly build your own post-install checklist as well. The important thing is consistency. A properly configured server from day one saves a lot of troubleshooting later.
