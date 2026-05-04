---
title: "11# Weekly Linux and Tech Update"
date: 2024-04-08 00:00:00 +0530
categories: 
  - "weekly-linux"
tags: 
  - "amd-open-source"
  - "binarly-scanner"
  - "budgie-desktop"
  - "debian-12-6"
  - "desktop-environment-debate"
  - "digital-sovereignty"
  - "exchange-auto-discovery"
  - "exchange-support"
  - "fedora-42"
  - "gnome"
  - "joshua-strobl"
  - "kde-plasma"
  - "kernel-updates"
  - "libreoffice"
  - "linux-desktop-advancements"
  - "linux-mint-22"
  - "linux-popularity"
  - "microsoft-active-directory"
  - "nextcloud"
  - "oauth"
  - "open-xchange"
  - "opensuse-tumbleweed"
  - "pine-64"
  - "pipewire"
  - "schleswig-holstein"
  - "snap-package"
  - "steam-deck"
  - "systemd-security"
  - "thunderbird"
  - "thunderbird-snap-github-repo"
  - "tuxedo"
  - "ubuntu-22-04-lts-delay"
  - "windows-to-linux-migration"
  - "xz-library-backdoor"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

- A proposal was made to change the default desktop environment of Fedora 42 to KDE Plasma from GNOME.
    - The proposal was made by Joshua Strobl, the lead for the Budgie desktop, and was submitted on April 1st.
    
    - The justification for the change is that KDE Plasma provides a more flexible experience for users, supports more standards, and has better Wayland support.
    
    - The proposal argues that KDE Plasma has pushed for more advancements to the Linux desktop than GNOME recently.
    
    - The proposal also mentions that KDE Plasma is used on the Steam Deck, Pine 64 products, and by Linux manufacturers like Tuxedo.
    
    - The proposal suggests that having KDE Plasma as the default would make Fedora more appealing to users and would make Linux as a whole more popular.
    
    - The proposal has been met with skepticism and the discussion has devolved into arguments about which desktop environment is better.

- The repercussions of the backdoor in the popular XZ library continue, causing Canonical to delay the beta of Ubuntu 22.04 LTS.
    - The backdoor has pushed other distributions, like openSUSE Tumbleweed and Debian 12.6, to postpone their next releases to fix the problem.
    
    - Systemd is considering reducing its dependencies to limit the surface of attack for the init system.

- A scanner called "[binarly](https://www.binarly.io/blog/xz-utils-supply-chain-puzzle-binarly-ships-free-scanner-for-cve-2024-3094-backdoor)" has been created to detect the specific backdoor in any file that might implement it.

- One of Germany's federal states, Schleswig-Holstein, is moving from Windows and Microsoft Office to Linux and LibreOffice.
    - The move will transition 30,000 computers to open-source software and is part of recent European moves for more digital sovereignty.
    
    - The transition will also move them to things like Nextcloud, Thunderbird, and Open-Xchange, and will replace Microsoft Active Directory.
    
    - The move to Linux is mandatory for every computer affected, but they are willing to take their time and allow for possible delays and exceptions.

- Linux Mint 22 will move to PipeWire as its main sound server, undo recent changes to distribute Thunderbird as a snap, and bring two new applications.
    - Mint 22 will also start changing how they distribute kernel updates, automatically distributing all Hardware Enablement updates to the kernel version they ship.

- AMD is opening up more portions of their software stack to the community, including the documentation and source code for their microcontroller scheduler.

- Thunderbird is making progress on the addition of Exchange support natively in the email client, implementing Exchange Auto Discovery and OAuth compatibility in the account setup.
    - Thunderbird will also take control of their snap package, which will be the default format used for Thunderbird in Ubuntu 22.04 instead of using a deb package.
    
    - The snap package has been added to Thunderbird's built-in infrastructure to make sure everything is always nice and up to date whenever a new version is pushed to the Thunderbird snap GitHub repo.
