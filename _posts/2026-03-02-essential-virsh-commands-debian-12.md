---
title: "Essential Virsh Commands for Managing Virtual Machines on Debian 12"
date: 2026-03-02 00:00:00 +0530
categories: 
  - "qemu"
image:
  path: /assets/img/posts/essential-virsh-commands-debian-12.webp
---

The **essential virsh commands** help you manage virtual machines from the command line. If you use libvirt on Debian, you must know these commands.

In this guide, we will use **[Debian GNU/Linux 12 (Bookworm)](https://www.corpit.org/install-kvm-qemu-libvirt-debian-12/)**. All future examples in this series also use this version.

Because virsh works directly with libvirt, it gives you full control over your VMs.

## What Is Virsh?

[virsh](https://www.corpit.org/qemu-libvirt-and-virsh-explained/) is a command-line tool used to manage virtual machines through [libvirt](https://www.libvirt.org/manpages/virsh.html).

It allows you to:

- Start and stop VMs

- View VM details

- Edit configuration

- Control VM lifecycle

Therefore, learning the essential virsh commands is critical.

# Essential Virsh Commands Explained

Below are the most important commands every administrator should know.

## 1\. virsh list

The `virsh list` command shows running virtual machines.

```bashvirsh list
```

To show all VMs, including stopped ones:

```bashvirsh list --all
```

Because of this command, you can quickly check VM status.

## 2\. virsh start

The `virsh start` command starts a virtual machine.

```bashvirsh start vm-name
```

Use this when a VM is in a shut-off state.

However, make sure the VM configuration is correct before starting.

## 3\. virsh shutdown

The `virsh shutdown` command gracefully powers off a VM.

```bashvirsh shutdown vm-name
```

This works like pressing the power button inside the OS.

Therefore, it is safer than forcing a stop.

## 4\. virsh destroy

The `virsh destroy` command forcefully stops a VM.

```bashvirsh destroy vm-name
```

This is similar to unplugging power.

Use it only when the VM does not respond.

## 5\. virsh reboot

The `virsh reboot` command restarts a virtual machine.

```bashvirsh reboot vm-name
```

Because it performs a clean reboot, it is safer than destroy + start.

## 6\. virsh autostart

The `virsh autostart` command enables automatic startup.

```bashvirsh autostart vm-name
```

Now the VM starts automatically when the host boots.

To disable autostart:

```bashvirsh autostart --disable vm-name
```

This is useful for production environments.

## 7\. virsh dominfo

The `virsh dominfo` command shows VM details.

```bashvirsh dominfo vm-name
```

It displays:

- CPU count

- Memory allocation

- State

- Autostart status

- UUID

Because of this, you can quickly check VM configuration.

## 8\. virsh dumpxml

The `virsh dumpxml` command displays the VM XML configuration.

```bashvirsh dumpxml vm-name
```

You can also save it:

```bashvirsh dumpxml vm-name > vm-backup.xml
```

This helps you back up or review settings.

## 9\. virsh edit

The `virsh edit` command allows live XML editing.

```bashvirsh edit vm-name
```

Always shut down the VM before major changes.

Because XML is strict, one mistake can prevent the VM from starting.

## Quick Command Summary Table

| Command | Purpose | Safe to Use Anytime? |
| --- | --- | --- |
| virsh list | Show VM status | Yes |
| virsh start | Start VM | Yes |
| virsh shutdown | Graceful stop | Yes |
| virsh destroy | Force stop | Use carefully |
| virsh reboot | Restart VM | Yes |
| virsh autostart | Enable auto boot | Yes |
| virsh dominfo | Show VM details | Yes |
| virsh dumpxml | View XML config | Yes |
| virsh edit | Modify XML | Stop VM first |

# Why These Essential Virsh Commands Matter

The **essential virsh commands** allow you to manage the full VM lifecycle.

For example, you can:

- Control power states

- Configure startup behavior

- Inspect VM details

- Modify hardware settings

Because virsh works directly with libvirt, it provides precise control.

As a result, many administrators prefer it over GUI tools.

# FAQ Section

**Do I need root access to use virsh?**

No. Add your user to the libvirt group.

**Is virsh safe for production?**

Yes. Many enterprise systems use it daily.

**What is the difference between shutdown and destroy?**

Shutdown is graceful. Destroy is forceful.

**Can I automate virsh commands?**

Yes. You can use shell scripts.

**Does virsh work without KVM?**

Yes, but performance may be lower.

## Conclusion

Learning the **essential virsh commands** is critical for managing virtual machines on Debian GNU/Linux 12 (Bookworm). These commands help you start, stop, inspect, and configure VMs safely.

If you master these tools, you gain full control over your virtualization environment.

In the next tutorial, we will create a virtual machine using virt-install and manage it with virsh.
