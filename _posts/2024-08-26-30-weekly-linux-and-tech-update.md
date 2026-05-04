---
title: "30# Weekly Linux and Tech Update"
date: 2024-08-26 00:00:00 +0530
categories: 
  - "weekly-linux"
tags: 
  - "amd-gpus"
  - "application-compatibility"
  - "drawing-tablets"
  - "dual-boot"
  - "fedora-40"
  - "gnome-47-beta"
  - "gnome-updates"
  - "google"
  - "grub-2"
  - "hardware-accelerated-screen-sharing"
  - "hdr-support"
  - "influencer-marketing"
  - "kde"
  - "linux"
  - "linux-applications"
  - "linux-gaming"
  - "linux-gaming-performance"
  - "microsoft"
  - "multi-monitor-support"
  - "nvidia-drivers"
  - "nvidia-gpus"
  - "opengl2"
  - "patch-issues"
  - "pixel-phone"
  - "proton"
  - "secure-boot"
  - "sl-telemetry"
  - "virtual-machines"
  - "wayland"
  - "wayland-adoption"
  - "windows"
  - "windows-driver-store"
  - "wine-9-16"
  - "wine-updates"
  - "xwayland"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-4.png
---

**Microsoft Breaks Dual Boots for Linux and Windows**

- Microsoft recently pushed a patch meant to fix a flaw related to Grub 2, which could allow attackers to bypass Secure Boot.

- The patch inadvertently affected dual-boot systems running both Linux and Windows, causing numerous issues.

- Microsoft has yet to respond to those affected. For now, users can disable Secure Boot or uninstall the latest Windows security update to fix the issue.

**Google's Influencer Controversy**

- Google was caught trying to coerce influencers to speak positively about their latest Pixel phone.

- Google admitted there was an issue and claimed their communication "missed the mark," but the attempt to manipulate influencers was still apparent.

**New NVIDIA Drivers for Linux**

- NVIDIA released stable drivers for Linux version 5.560, featuring numerous fixes:
    - Resolved plasma shell freezes under Wayland.
    
    - Improved support for multi-monitor setups.
    
    - Enhanced XWayland support, particularly for running games.
    
    - Added hardware-accelerated screen sharing through PipeWire, even for multiple clients.

**GNOME 47 Beta Released**

- GNOME 47 beta brings significant changes:
    - Hardware-accelerated screen recording.
    
    - New features for drawing tablets and styluses.
    
    - Initial steps towards color management protocol for HDR support.
    
    - Enhanced handling of secondary GPU failures.
    
    - New customization options like accent colors and ICS file import for calendars.
    
    - Updates to the Epiphany web browser with features like auto-fill, privacy reports, and more.
    
    - Improved remote desktop support under Wayland.
    
    - Various bug fixes and backend updates.

**KDE's User Feedback Insights**

- KDE shared findings from its SL Telemetry tool, which gathers voluntary user feedback:
    - Wayland adoption among KDE users is at 45%, but reaches 80% among KDE Plasma 6 users.
    
    - The majority of X11 users rely on AMD GPUs, while Wayland users are less likely to use NVIDIA.
    
    - Some users still use very low-resolution displays (800x600 or 640x480), often for virtual machines.
    
    - The feedback data led to preserving support for OpenGL2, despite earlier plans to drop it.
    
    - KDE plans to propose changes to improve data collection and make the tool more useful.

**Linux vs. Windows Gaming Performance**

- Linux has caught up to, or even surpassed, Windows in gaming performance in some cases:
    - Jason Evangelho's benchmarks showed Linux outperforming Windows in games like Shadow of the Tomb Raider and Cyberpunk 2077, using Fedora 40 and Proton.
    
    - Differences in performance are minimal, making Linux a viable option for gaming.
    
    - The results were based on lower-powered hardware, so high-end setups might yield different outcomes.

**Wine Version 9.16 Released**

- Wine's new release, version 9.16, introduces significant updates:
    - First implementation of the Windows driver store from the Vista era.
    
    - Updated Wine Wayland driver.
    
    - 25 bugs fixed, improving compatibility for applications like Anarchy Online, Foxit PDF Reader, and Paint Shop Pro X7.
    
    - Enhanced overall application performance, not just for games.
