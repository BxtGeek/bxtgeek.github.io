---
title: "Why Linux Kernel Versions Confuse Everyone"
date: 2026-05-14 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/why-linux-kernel-versions-confuse-everyone.webp
---
When you visit [kernel.org](https://www.kernel.org), the Linux kernel versions can look confusing at first because there are multiple “tracks” of development and maintenance happening at the same time.

Here’s the practical breakdown of what each one means and how they relate to each other.

# How Linux Kernel Versions Actually Work

The Linux kernel is developed in layers of stability and maturity.
Not every kernel release is meant for the same audience.

Some kernels are:

* experimental
* under active feature development
* production-ready
* maintained for years
* or intended only for testing upcoming work

The major categories are:

1. Linux-next
2. Mainline
3. Stable
4. Longterm (LTS)
5. STS (Short-Term Stable)

# 1. Linux-next

Linux-next is **not an official release kernel**.

It is a **daily integration tree** where maintainers merge upcoming changes *before* they are sent to Linus Torvalds for the next release cycle.

Think of it as:

> “Tomorrow’s Linux kernel assembled today.”

### Purpose

* Catch merge conflicts early
* Test subsystem interactions
* Validate upcoming patches together

### Characteristics

* Updated almost daily
* Highly experimental
* May not even compile sometimes
* Used mainly by:

  * kernel developers
  * subsystem maintainers
  * CI systems
  * testers

### Important

Linux-next is:

* NOT production-ready
* NOT intended for normal users
* NOT supported like stable kernels

### Example

If development is happening for Linux 6.18, linux-next contains the future work that *might* become 6.18.

# 2. Mainline Kernel

The **mainline kernel** is the official kernel tree managed by Linus Torvalds.

This is where:

* new features land
* architectural changes happen
* drivers are introduced
* major kernel evolution occurs

### Release Cycle

A mainline release happens roughly every:

* 9–10 weeks

Example:

* 6.14
* 6.15
* 6.16

### Development Process

The cycle usually looks like this:

```text
Merge Window (2 weeks)
        ↓
Release Candidates (rc1 → rc7/rc8)
        ↓
Final Release
```

Example:

```text
6.15-rc1
6.15-rc2
...
6.15
```

### Characteristics

* Latest features
* Most recent hardware support
* Short support duration
* May contain newer bugs

### Best For

* enthusiasts
* kernel developers
* hardware enablement testing
* bleeding-edge desktops

# 3. Stable Kernel

Linux Kernel Organization

Once a mainline release becomes stable, a **stable branch** is created.

Example:

```text
6.15  → mainline release
6.15.1
6.15.2
6.15.3
```

These patch releases:

* fix bugs
* fix regressions
* include security patches
* do NOT add major new features

### Maintained By

Stable maintainers (like Greg Kroah-Hartman and others)

### Characteristics

* Production-ready
* Safer than mainline
* Short maintenance window

### Support Duration

Usually maintained until:

* the next major version becomes mature

Often only:

* a few months

# 4. Longterm (LTS) Kernels

Linux kernel

Longterm kernels are special stable kernels selected for **extended maintenance**.

Example:

* 6.6 LTS
* 6.1 LTS
* 5.15 LTS

### Support Duration

Typically:

* 2 to 6 years

Sometimes longer depending on industry adoption.

### Why They Exist

Many systems cannot upgrade kernels frequently:

* servers
* enterprise Linux
* embedded devices
* Android devices
* industrial systems

LTS kernels receive:

* security fixes
* critical bug fixes
* backported patches

But:

* no disruptive new features

### Best For

* production servers
* enterprise Linux
* embedded systems
* virtualization hosts
* cloud infrastructure

### Real-World Examples

* Red Hat uses heavily patched LTS kernels
* Canonical bases Ubuntu LTS releases on LTS kernels
* Google relies heavily on LTS kernels

# 5. STS (Short-Term Stable)

STS means:

> Short-Term Stable

This term is less emphasized nowadays on kernel.org, but historically it referred to kernels that were:

* stable
* production-capable
* but maintained only briefly

Essentially:

```text
Mainline → Stable → either:
                     Longterm (LTS)
                     or Short-Term Stable (STS)
```

### Example

Suppose:

* 6.14 becomes stable
* but NOT selected as LTS

Then it is effectively STS.

It may only receive:

* a few months of updates

before reaching end-of-life.



# How Everything Connects

Here’s the complete flow:

```text
linux-next
    ↓
Mainline Development
    ↓
Release Candidates (rc)
    ↓
Mainline Release (6.x)
    ↓
Stable Branch (6.x.y)
    ↓
Either:
    ├── Longterm/LTS
    └── Short-Term Stable
```


# Version Number Meaning

Example:

```text
6.6.32
```

Breakdown:

```text
6      → Major version
6      → Minor version
32     → Stable patch release
```

Another example:

```text
6.15-rc4
```

means:

* Linux 6.15
* Release Candidate 4


# Important Clarification About “LTS”

People often confuse:

* distro LTS
  vs
* kernel LTS

They are related but different.

Example:

* Ubuntu 24.04 LTS is a distro release
* Linux 6.8 may be the kernel inside it
* That kernel may or may not itself be upstream LTS

Distributions often:

* heavily patch kernels
* maintain them independently
* backport fixes themselves

# Practical Recommendation

## If You Are…

### A normal desktop user

Use:

* distro-provided stable kernel

### Running servers or production systems

Use:

* LTS kernels

### Testing latest hardware

Use:

* latest stable/mainline

### Developing kernel code

Use:

* linux-next or rc kernels


# Simple Analogy

Think of kernel development like software release channels:

| Kernel Type    | Analogy                      |
| -- | - |
| linux-next     | Internal integration/testing |
| Mainline RC    | Beta release                 |
| Mainline Final | New feature release          |
| Stable         | Production patches           |
| STS            | Short support release        |
| LTS            | Enterprise long support      |
