---
title: "18# Weekly Linux and Tech Update"
date: 2024-05-27 00:00:00 +0530
categories: 
  - "weekly-linux"
image:
  path: /assets/img/posts/18-Weekly-Linux-and-Tech-Update.png
---

- Published a 5-year plan to guide GNOME towards a more sustainable future
    - Three main goals:
        - The explosive growth of the community (unify the community, make GNOME relevant and attractive to diverse people, and increase commercial value)
        
        - Create a unified and integrated suite of programs, services, and processes (integrated technology, reorganized events)
        
        - Strengthen the GNOME Foundation as a non-profit (document impact, double budget, prioritize health and well-being)

- A CPU made by Qualcomm, built on the ARM platform
    - Contributes to the Linux kernel
    
    - Benchmarks show it beats Apple M3 in Gigbench 6 and Intel Core Ultra 7155h
    
    - It runs hotter than the [Apple M3](https://en.wikipedia.org/wiki/Apple_M3), but wins in battery life tests

<figure>

![](/assets/img/posts/Screenshot-2024-05-26-at-4.11.28 AM.jpg)

<figcaption>

Qualcomm Elite Chip

</figcaption>

</figure>

- Announced [Windows Recall](https://www.techradar.com/computing/windows/microsofts-controversial-recall-feature-for-windows-11-could-already-be-in-legal-hot-water), a feature that takes screenshots every few seconds to learn from user behavior
    - This raises privacy concerns, as screenshots may display private information
    
    - The feature will be on by default, with unclear encryption and access controls
    
    - This feature can use up to 25Gb of memory in your system to save the screenshot.

- KDE Plasma 6.1 beta released, with fixes for theming on other desktops (e.g., GNOME)
    - Triple buffering in KWin for smoother rendering and animations
    
    - Explicit sync support for Wayland and Nvidia
    
    - [Dolphin file manager](https://apps.kde.org/en-gb/dolphin/) improvements (generate previews for remote locations, become administrator, session restore)

- Mozilla Firefox published a roadmap for features to be implemented in the next year
    - Features include tab grouping, virtual vertical tabs, streamlined menus, and AI-powered accessibility features
    
    - Focus on speed, performance, and compatibility

- [Netris: a self-hostable](https://gadgeteer.co.za/netris-is-an-open-source-and-self-hosted-alternative-to-geforce-now-inspired-by-stadia/#:~:text=Netris%20is%20an%20open%2Dsource,GeForce%20NOW%2C%20inspired%20by%20Stadia), open-source cloud gaming platform using Steam. You can either use their server to host or you can host in your homelab but you need to have the NvidiaGPU for that to work.

- Nvidia released beta drivers version [555.42.02](https://www.nvidia.com/download/driverResults.aspx/224751/), with support for explicit sync on Wayland and other features
