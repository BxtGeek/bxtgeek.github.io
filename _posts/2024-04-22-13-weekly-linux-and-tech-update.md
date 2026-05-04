---
title: "13# Weekly Linux and Tech Update"
date: 2024-04-22 00:00:00 +0530
categories: 
  - "weekly-linux"
tags: 
  - "ai-assisted-contributions"
  - "amd-radeon-pro-w7500-gpu"
  - "appearance-settings"
  - "arm-platforms"
  - "arm64"
  - "battery-life"
  - "ben-skeggs"
  - "bug-fixes"
  - "command-execution"
  - "contributions"
  - "copyright-issues"
  - "cosmic"
  - "cosmic-app-store"
  - "cpu-usage"
  - "deb-packages"
  - "desktop-environment"
  - "drivers"
  - "ethical-issues"
  - "fex"
  - "flatpak"
  - "flatpak-packaging"
  - "frame-rates"
  - "framework"
  - "genode"
  - "god-of-war-2018"
  - "gsp-support"
  - "gtk3"
  - "gtk4"
  - "keyboard-settings"
  - "lenus-tals"
  - "linux-kernel-6-1"
  - "memory-usage"
  - "modular-laptops"
  - "nouveau-driver"
  - "ntsync-driver"
  - "nvidia-employment"
  - "nvidia-tegra-orin"
  - "performance-improvements"
  - "quality-issues"
  - "repairable-laptops"
  - "sandbox-escape"
  - "security-patch"
  - "security-updates"
  - "software-issues"
  - "testing"
  - "theming"
  - "ui"
  - "vulnerability"
  - "windows-games-on-linux"
  - "wine"
  - "x86-emulator"
image:
  path: /assets/img/posts/13-Weekly-Linux-and-Tech-Update.png
---

- A new vulnerability in Flatpak allows applications to escape the sandbox.
    - The issue is caused by the ability to append the --command parameter, which can be used to execute additional commands.
    
    - The Flatpak team has already submitted a patch for all supported versions.
    
    - Users can test if one of the flatpak for this issue by running the below command

```
flatpak run --command=--help <app-full-name>
```

- Cosmic, a new desktop environment, will integrate other applications from other desktops, especially with theming.
    - Applications built with GTK3 and GTK4, whether packaged as Flatpak or through regular DEB packages, will be able to be themed if the user wants that.
    
    - There's a dedicated option in the appearance settings for theming.
    
    - Cosmic App Store and its basic UI have been showcased.
    
    - Keyboard settings have been implemented in the settings.
    
    - There are contributions for new applications that don't come from System76.

- Genode developers have implemented a complete ban on AI-assisted contributions to the DRO.
    - The reasons are copyright problems, quality-related issues, and ethical problems.
    
    - [Linux Torvalds](https://www.linkedin.com/in/linustorvalds/) the creator of Genode, is also skeptical of the current AI hype.

- [Framework](https://frame.work/), makers of modular and repairable laptops, are having trouble with the software part of the equation.
    - Drivers remain stuck to their initial version from a year ago, meaning that users are not getting any bug fixes, battery life or performance improvements, or even security updates.
    
    - The company is aware of the issue and is working to fix it.

- Ben Skeggs, the longtime Nouveau driver maintainer, has found employment at Nvidia.
    - He contributed a series of 156 patches to the Nouveau drivers this week to clean up the code for GSP support.
    
    - It is not impossible that his work is now sponsored by Nvidia.

- The new NTsync driver will be merged in the Linux kernel 6.10, which could give pretty big improvements in terms of frame rates when playing Windows games on Linux through Wine.

- Fex, the x86 emulator for ARM platforms, has released version 24.4, bringing better performance when it comes to memory usage and CPU usage.
    - The speed with which Fex can read from and write to memory has been improved from 3 GB per second up to 88 GB per second.
    
    - Developers showcased God of War 2018 running on ARM64 on an Nvidia Tegra Orin with an AMD Radeon Pro W7500 GPU.
