---
title: "Install GUI Cinnamon (Graphical User Interface) to a Fedora system"
date: 2024-10-09 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "cinnamon-fedora-installation"
  - "cinnamon-graphical-interface-fedora"
  - "fedora-cinnamon-desktop"
  - "fedora-cinnamon-desktop-environment"
  - "fedora-cinnamon-gui-tutorial"
  - "fedora-cinnamon-installation-guide"
  - "fedora-desktop-customization"
  - "fedora-desktop-environment"
  - "fedora-gui-setup"
  - "fedora-linux-cinnamon-setup"
  - "fedora-linux-gui-options"
  - "install-cinnamon-gui-fedora"
  - "install-cinnamon-on-fedora"
  - "install-fedora-cinnamon-step-by-step"
  - "install-gui-fedora-linux"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-5.png
---

To add the Cinnamon GUI (Graphical User Interface) to a Fedora system, you can follow these steps. This assumes you are starting from a Fedora installation without a desktop environment (e.g., Fedora Server or a minimal installation).

### Steps:

- **Update the System**  
    Open a terminal and make sure your system is fully updated before installing Cinnamon:

```bash   sudo dnf update
```

- **List the available Desktop Environment**  
    In order to know what are the available Graphical User Interface available in the system you can run the below command.

```bash   sudo dnf group list
```

- **Install Cinnamon Desktop Environment**  
    Install the Cinnamon desktop environment by running the following command:

```bash   sudo dnf groupinstall "Cinnamon Desktop"
```

This will install the full Cinnamon environment along with related packages.

- **Set Cinnamon as the Default Environment**  
    After installation, you need to set Cinnamon as the default desktop environment. You can do this by running:

```bash   sudo systemctl set-default graphical.target
```

- **Start the GUI**  
    Now, reboot the system to start Cinnamon:

```bash   sudo reboot
```

After reboot, your system should boot into the Cinnamon desktop environment.
