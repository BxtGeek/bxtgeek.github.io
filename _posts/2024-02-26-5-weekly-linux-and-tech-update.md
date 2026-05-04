---
title: "5# Weekly Linux and Tech Update"
date: 2024-02-26 00:00:00 +0530
categories: 
  - "weekly-linux"
tags: 
  - "api"
  - "appimage"
  - "arm-devices"
  - "bitcoin"
  - "canonical"
  - "controller-support"
  - "cosmic-desktop"
  - "cosmic-text"
  - "credit-card-verification"
  - "crypto-wallet"
  - "deb"
  - "delay"
  - "dxvk"
  - "dxvk-nvapi"
  - "electron"
  - "exodus"
  - "fedora"
  - "fee"
  - "firefox"
  - "flutter"
  - "gaming"
  - "hdr"
  - "identity-verification"
  - "kernel-interface"
  - "linux"
  - "malware"
  - "nt-sync-driver"
  - "nvidia-drivers"
  - "open-source"
  - "passphrase"
  - "proton"
  - "publisher-verification"
  - "rgb-api"
  - "rust"
  - "scam"
  - "security"
  - "snap-sandbox"
  - "snap-store"
  - "system76"
  - "translation"
  - "tuxedo-computers"
  - "vkd3d-proton"
  - "vulkan"
  - "warp-terminal"
  - "wine"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

- Malicious app "Exodus" impersonating a popular crypto wallet infiltrated Snap Store, absconding with around $500,000 in Bitcoin from a user. This recurrence highlights the vulnerability of Snap Store to such threats.
    - The fraudulent app, deployed in early February, leveraged the snap sandbox but lacked authenticity compared to the official Exodus app, utilizing Flutter instead of Electron.
    
    - Operating under the guise of Exodus, the scam prompted users to input their 12-word passphrase—a departure from the official Exodus protocol, which never requests such sensitive information. Subsequently, the scam likely exploited this passphrase to access and deplete the wallet via an API.
    
    - Canonical, in response, has isolated the compromised snap and is endeavoring to bolster identity verification measures for all snap publishers. Suggestions include mandating credit card authentication and employing industry-standard identity verification technology or implementing a fee-based system with a waiting period to mitigate risks, albeit at the expense of prolonged app publishing timelines.

- Warp Terminal on Linux: Warp, a juiced-up terminal app with hardware acceleration, collaborative work, and AI features, is now available on Linux as a DEB or AppImage.
    - The Linux version has better performance than the macOS version due to Linux-specific optimizations.
    
    - The terminal is built using Rust and uses the Cosmic Text library developed by System76 for their Cosmic desktop.
    
    - The app isn't open source yet, but developers plan to open source parts of it.

- Linux RGB API: Tuxedo Computers is working on a dedicated kernel interface to handle complex RGB devices and interactions on Linux.
    - The API would make things better for everyone, not just Tuxedo Computers.

- Cosmic Desktop on Fedora: There are plans to create a Fedora spin using the Cosmic desktop environment.

- Firefox 123: The latest Firefox release has several new features, including built-in translation improvements, better controller support, and improved performance on ARM devices.

- Gaming News:
    - Progress on the proposed NT Sync driver for the Linux kernel, which aims to implement a better way to use Windows NT synchronization when running Windows games through Proton or Wine.
    
    - The latest NVIDIA drivers (510 branch) have improved Vulkan extension support, support for various color formats, HDR improvements, and fixes for older NVIDIA GPUs.
    
    - Proton 9.0 public beta released, based on Wine 9.0, bundling the latest Vkd3d-Proton, DXVK, DXVK-NVAPI, and other underlying libraries for gaming on Linux.

- Crossover 24 has been released with Wine 9.0, Wine Mono 8.10, VkD3D 1.1.0, and MoltenVK 1.2.5, with UI improvements and new features.

- DreamWorks Animation has open-sourced their renderer MoonRay, a multi-award winning state-of-the-art production renderer.

- System76 announcing a refresh for their line of laptops with newer 14th-gen Intel CPUs.

- Juno Computers announcing the fifth generation of the Saturn lineup of Linux-powered laptops.

- KDE Slimbook 5, the first laptop to come pre-installed with KDE Plasma 6 desktop environment.

- Manjaro partnering with Slimbook and Orange Pi to develop new hardware.

- KDE Plasma 5.25 is set to be released next week, and GNOME 46 beta has been announced.

- LXQt 20 is on its way, with most default apps and core components already ported to Qt 6.

- Valve is releasing more of their software as open source, including Steam Audio.

- GIMP 2.99.18 is the final development version before GIMP 3.0, which includes new features and improvements for color management and non-destructive editing.

- LXQt 20 is expected to be released in April 2024, with a new default application menu and improved support for Wayland display protocol.
