---
title: "Snapshots and Cloning in KVM on Debian 12 (Complete Guide)"
date: 2026-03-03 00:00:00 +0530
categories: 
  - "qemu"
image:
  path: /assets/img/posts/Snapshots-and-Cloning-in-KVM-on-Debian-12-Complete-Guide.png
---

**Snapshots and Cloning in KVM** allow you to save VM states and duplicate machines quickly. These features are essential for labs, testing, and production rollbacks.

In this guide, we use **[Debian GNU/Linux 12 (Bookworm)](https://www.corpit.org/install-kvm-qemu-libvirt-debian-12/)**. All examples in this series follow this version.

Because virtualization environments change often, snapshots and cloning provide safety and flexibility.

# Understanding KVM Snapshots

A snapshot saves the state of a virtual machine at a specific time.

It can include:

- Disk state

- Memory state

- VM configuration

You manage snapshots using **virsh**.

# Snapshot Command Overview

Virsh provides several snapshot commands:

```
snapshot-createsnapshot-create-assnapshot-currentsnapshot-deletesnapshot-dumpxmlsnapshot-editsnapshot-infosnapshot-listsnapshot-parentsnapshot-revert
```

These commands give full control over snapshot lifecycle.

# Creating a Snapshot

Create a simple snapshot:

```bashvirsh snapshot-create alpine-test
```

Example output:

```
Domain snapshot 1772322999 created
```

This creates a snapshot with an auto-generated name.

## Listing Snapshots

```bashvirsh snapshot-list alpine-test
```

Example output:

```
Name                           Creation Time               State---------------------------------------------------------------------1772322999                     2026-03-01 05:26:39 +0530   shutoffalpine-test_2026-02-22T03:47    2026-02-22 09:17:37 +0530   running
```

Because this shows creation time and state, you can easily track versions.

## Viewing Snapshot Information

```bashvirsh snapshot-info alpine-test alpine-test_2026-02-22T03:47
```

Example:

```
Name:           alpine-test_2026-02-22T03:47State:          runningLocation:       internalParent:         -
```

Notice the **Location: internal**. This means the snapshot is stored inside the disk image.

## Viewing Snapshot XML

```bashvirsh snapshot-dumpxml alpine-test 1772322999
```

Example:

```
<domainsnapshot>  <name>1772322999</name>  <state>shutoff</state>  <parent>    <name>alpine-test_2026-02-22T03:47</name>  </parent>  <memory snapshot='no'/>  <disks>    <disk name='vda' snapshot='internal'/>  </disks></domainsnapshot>
```

Because snapshots form a tree structure, each snapshot may have a parent.

## Reverting to a Snapshot

```bashvirsh snapshot-revert alpine-test 1772322999
```

This restores the VM to the selected snapshot state.

Always verify before reverting. Data changes after that snapshot will be lost.

## Deleting a Snapshot

```bashvirsh snapshot-delete alpine-test 1772322999
```

Example output:

```
Domain snapshot 1772322999 deleted
```

After deletion, confirm using:

```bashvirsh snapshot-list alpine-test
```

# Internal Snapshot vs External Snapshot

Understanding snapshot types is important.

## Internal Snapshot

An **internal snapshot** is stored inside the qcow2 disk file.

Advantages:

- Easy to create

- Simple management

- No extra files

Disadvantages:

- Can increase disk complexity

- Harder to manage large chains

Your example shows:

```
Location: internal
```

This confirms an internal snapshot.

## External Snapshot

An **external snapshot** creates a new overlay disk.

The original disk becomes a backing file.

This method uses copy-on-write technology.

Advantages:

- Cleaner disk separation

- Better for production

- Easier backup

However, it creates multiple disk files.

# Copy-on-Write Explained

Copy-on-write (CoW) means:

- Original data stays unchanged

- New changes go to a new file

In KVM, this is commonly used with qcow2.

For example:

```bashqemu-img create -f qcow2 -b base.qcow2 vm1.qcow2
```

Here:

- `base.qcow2` is the backing file

- `vm1.qcow2` stores only changes

Because of CoW, disk usage remains small.

# Template Design in KVM

A **template design** approach improves VM deployment.

Typical workflow:

- Install Debian 12 cleanly

- Update system

- Remove machine-specific data

- Convert disk to template

- Create new VMs using backing files

This approach reduces duplication.

It also speeds up provisioning.

# Cloning Virtual Machines

Cloning creates a new VM from an existing one.

Use:

```bashvirt-clone --original alpine-test --name alpine-clone --file /var/lib/libvirt/images/alpine-clone.qcow2
```

This creates:

- New VM definition

- New disk file

- New MAC address

Because virt-clone avoids manual duplication, it reduces errors.

# Snapshot vs Clone Comparison

| Feature | Snapshot | Clone |
| --- | --- | --- |
| Saves VM state | Yes | No |
| Creates new VM | No | Yes |
| Uses CoW | Yes | Optional |
| Used for rollback | Yes | No |
| Used for scaling | No | Yes |

Both are important in Snapshots and Cloning in KVM.

# When to Use Each Feature

Use snapshots when:

- Testing updates

- Performing risky changes

- Creating rollback points

Use cloning when:

- Deploying multiple servers

- Scaling applications

- Creating lab environments

Because each serves a different purpose, choose wisely.

# Why Snapshots and Cloning in KVM Matter

Snapshots and Cloning in KVM provide:

- Safe testing environments

- Quick rollback capability

- Efficient disk usage

- Faster VM provisioning

In Debian GNU/Linux 12 (Bookworm), these tools work seamlessly with libvirt.

Therefore, mastering these features improves virtualization management significantly.

## FAQ Section

**Are internal snapshots safe for production?**

They work, but external snapshots are better for large systems.

**Can I delete a parent snapshot?**

It depends on child relationships.

**Does cloning copy snapshots?**

No. It creates a fresh VM disk.

**Is qcow2 required for snapshots?**

Yes. Raw images do not support internal snapshots.

**What happens if I revert a running VM?**

Data after the snapshot point is lost.

# Conclusion

Understanding **Snapshots and Cloning in KVM** is essential for managing virtual machines on Debian GNU/Linux 12 (Bookworm). Snapshots allow safe rollback. Cloning enables rapid deployment. Internal and external snapshots use copy-on-write technology. Templates simplify large-scale environments.

If you master these techniques, you gain powerful control over your virtualization infrastructure.

In the next guide, we can build a production-ready template using qcow2 backing files.
