---
title: "Managing VMs with OrbStack: A Quick Guide"
date: 2024-09-21 00:00:00 +0530
categories: 
  - "devops"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

In my previous [article](https://corpit.org/running-containers-natively-on-mac-with-orbstack/), I discussed how to manage containers, pods, and VMs using OrbStack from a single platform. Recently, I discovered that [OrbStack](https://docs.orbstack.dev/) also offers a command-line interface (CLI) for managing VMs. Here’s a handy list of common commands to help you get started.

### Common OrbStack Commands

- **List Running VMs**
    - **Command:** `orb list`
    
    - **Description:** This command displays all the running VMs. Here’s an example of the output:

```
NAME STATE DISTRO VERSION ARCH ---- ----- ------ ------- ---- rocky running rockylinux 9 arm64
```

- **View VM Logs**
    - **Command:** `orb logs <VM-name>`
    
    - **Description:** Use this command to check the logs of any VM. For example:  
        `orb logs rocky`

```
[7:55:21]-[0]-[Manojs-MacBook-Air] ~ orb logs rocky
systemd 252-32.el9_4.7 running in system mode (+PAM +AUDIT +SELINUX -APPARMOR +IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS -FIDO2 +IDN2 -IDN -IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 -PWQUALITY +P11KIT -QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD -BPF_FRAMEWORK +XKBCOMMON +UTMP +SYSVINIT default-hierarchy=unified)
Detected virtualization lxc.
Detected architecture arm64.

Welcome to Rocky Linux 9.4 (Blue Onyx)!

Initializing machine ID from random generator.
Queued start job for default target Graphical Interface.
[  OK  ] Created slice Slice /system/getty.
[  OK  ] Created slice Slice /system/modprobe.
[  OK  ] Created slice User and Session Slice.
[  OK  ] Started Dispatch Password Requests to Console Directory Watch.
[  OK  ] Started Forward Password Requests to Wall Directory Watch.
[  OK  ] Set up automount Arbitrary Executab…rmats File System Automount Point.
[  OK  ] Reached target Local Encrypted Volumes.
[  OK  ] Reached target Local Integrity Protected Volumes.
[  OK  ] Reached target Path Units.
[  OK  ] Reached target Remote File Systems.
.
.
.
[  OK  ] Reached target Login Prompts.
[  OK  ] Finished Network Manager Wait Online.
[  OK  ] Reached target Network is Online.
         Starting System Logging Service...
[  OK  ] Started System Logging Service.
[  OK  ] Reached target Multi-User System.
[  OK  ] Reached target Graphical Interface.
         Starting Record Runlevel Change in UTMP...
[  OK  ] Finished Record Runlevel Change in UTMP.

Rocky Linux 9.4 (Blue Onyx)
Kernel 6.10.7-orbstack-00280-gd3b7ec68d3d4 on an aarch64

rocky login: 
```

- **Check orbstack Status**
    - **Command:** `orb status`
    
    - **Description:** This command shows whether OrbStack is currently running.

- **Get OrbStack Version**
    - **Command:** `orb version`
    
    - **Description:** Use this command to find out the current version of OrbStack.

- **Stop a VM**
    - **Command:** `orb stop <VM-name>`
    
    - **Description:** Use this command to stop a running VM

- **Start a VM**
    - **Command:** `orb start <VM-name>`
    
    - **Description:** Use this command to start a running VM  
        

- **Restart a VM**
    - **Command:** `orb restart <VM-name>`
    
    - **Description:** Use this command to restart a running VM

### Additional Commands to Explore

Here are some more commands you can use with OrbStack:

```
completion: Generate autocompletion scripts for your shell.

config: Change OrbStack settings.

create: Create a new machine.

delete: Delete a machine.

info: Get information about a machine.

login: Log in and activate your OrbStack license.

logout: Log out of your OrbStack account.

update: Update OrbStack.
```

Feel free to explore these commands further to enhance your experience with OrbStack!
