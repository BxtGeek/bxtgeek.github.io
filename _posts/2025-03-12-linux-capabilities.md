---
title: "What are Linux Capabilities?"
date: 2025-03-12 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "docker-security"
  - "linux-capabilities"
  - "linux-kernel"
  - "linux-permissions"
  - "linux-security"
  - "posix-capabilities"
  - "system-security"
image:
  path: /assets/img/posts/What-are-Linux-Capabilities.png
---

Linux is renowned for its robust security features, and **Linux capabilities** play a crucial role in enhancing its security model. Whether you're a system administrator, developer, or Linux enthusiast, understanding Linux capabilities is essential to manage permissions efficiently without granting excessive privileges.

In this guide, you'll discover what **Linux capabilities** are, why they matter, how they work, and how to configure them for optimal security.

## What are Linux Capabilities?

Linux capabilities are a fine-grained permission system that allows processes to perform privileged operations without granting them full root privileges. Introduced to improve system security, Linux capabilities break down traditional **superuser privileges** into smaller, more manageable permissions.

By assigning only the necessary privileges to processes, Linux capabilities significantly reduce the risk of security vulnerabilities.

## Why are Linux Capabilities Important?

In a conventional Linux system, root privileges provide unrestricted access to system resources. This **all-or-nothing approach** poses a security risk because any compromised process running as root could compromise the entire system.

**Linux capabilities** mitigate this risk by allowing processes to access only the permissions they need, adhering to the **principle of least privilege**.

## How Do Linux Capabilities Work?

Linux capabilities are implemented at the kernel level and are managed using **POSIX.1e** standards. They divide root privileges into multiple **capability bits** that can be assigned individually.

Common Linux capabilities include:

- `CAP_NET_BIND_SERVICE`: Allows binding to privileged ports (below 1024)

- `CAP_SYS_ADMIN`: Grants system administration tasks

- `CAP_CHOWN`: Allows changing file ownership

- `CAP_SETUID`: Enables setting user IDs

## List of Common Linux Capabilities

| Capability | Description |
| --- | --- |
| `CAP_CHOWN` | Change file ownership |
| `CAP_NET_BIND_SERVICE` | Bind to low-numbered ports |
| `CAP_SYS_ADMIN` | Perform system administration tasks |
| `CAP_SETUID` | Change user IDs |
| `CAP_DAC_OVERRIDE` | Bypass discretionary access controls |

## How to View Linux Capabilities?

To check the capabilities of a binary file, use the following command:

```
getcap /path/to/binary
```

Example:

```
getcap /bin/ping
```

This command will display the assigned capabilities for the specified binary.

## Assigning Linux Capabilities to Files

You can assign capabilities to a binary using the `setcap` command:

```bashsudo setcap cap_net_bind_service+ep /usr/bin/myapp
```

Explanation:

- `cap_net_bind_service`: The capability to bind to privileged ports.

- `+ep`: Effective and permitted capabilities.

## How to Remove Capabilities?

To remove capabilities from a binary, use:

```bashsudo setcap -r /usr/bin/myapp
```

This removes all capabilities assigned to the binary.

## Linux Capabilities vs Sudo

Unlike `sudo`, which temporarily grants root privileges, **Linux capabilities** provide a more granular approach by assigning only the required privileges. This minimizes the attack surface and enhances system security.

## Best Practices for Using Linux Capabilities

- Use capabilities only when necessary.

- Assign the **minimum set of permissions** required.

- Regularly audit capabilities using the `getcap` command.

- Avoid granting **CAP\_SYS\_ADMIN** unless absolutely required.

## Security Benefits of Linux Capabilities

- Reduces the attack surface

- Implements **principle of least privilege**

- Prevents privilege escalation

- Improves overall system security

## Limitations of Linux Capabilities

Despite their advantages, Linux capabilities have some limitations:

- They only apply to **binary executables** (not scripts).

- Misconfigured capabilities can still lead to security vulnerabilities.

- Not all root privileges can be subdivided.

## How to Audit Linux Capabilities?

To list all files with assigned capabilities, run:

```
getcap -r /
```

This command recursively searches for binaries with capabilities.

## Linux Capabilities in Docker Containers

Docker uses Linux capabilities to isolate containerized applications. By default, Docker drops most capabilities and only assigns a minimal set of privileges.

You can modify container capabilities using:

```bashdocker run --cap-add=NET_ADMIN --cap-drop=ALL mycontainer
```

## Linux Capabilities in Systemd

Systemd services can be configured with specific capabilities using the `AmbientCapabilities` directive in service unit files.

Example:

```
[Service]
ExecStart=/usr/bin/myapp
AmbientCapabilities=CAP_NET_BIND_SERVICE
```

## FAQs

What is the difference between Linux capabilities and permissions?  
Linux capabilities provide fine-grained control over root privileges, while file permissions regulate user access to files.

**Can I assign Linux capabilities to scripts?**

No, Linux capabilities only apply to binary executables.

**How do I list all Linux capabilities?**

Use the `capsh --print` command to list all capabilities.

**Are Linux capabilities supported by all distributions?**

Yes, Linux capabilities are supported by all modern Linux distributions.

**Can I add custom capabilities?**

No, Linux capabilities are predefined by the kernel.

**Do Linux capabilities improve system performance?**

No, Linux capabilities are strictly a security feature.

### Conclusion

**Linux capabilities** offer a powerful way to enhance system security by breaking down root privileges into smaller, more manageable permissions. By understanding how to configure and audit these capabilities, administrators can significantly reduce the attack surface of their Linux systems.

Implementing **Linux capabilities** is a best practice for securing applications, containers, and services without compromising functionality.
