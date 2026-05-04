---
title: "How to Optimize the VM Performance in Proxmox (Using Pop!_OS)"
date: 2025-08-01 00:00:00 +0530
categories: 
  - "proxmox"
image:
  path: /assets/img/posts/optimize-VM-performance-in-Proxmox.png
---

If you’ve recently started experimenting with virtualization and want to **optimize VM performance in Proxmox**, you’re in the right place. In this guide, we’ll walk through best practices for performance tuning, using **Pop!\_OS** as the guest OS with the following VM specifications:

- **Memory:** 4GB

- **CPU:** 2 Sockets, 2 Cores

- **Storage:** 40GB HDD

- **Virtualization Platform:** Proxmox

- **Optimization Tool:** Yoast plugin for SEO tuning

Whether you're a hobbyist or running a lightweight Linux VM in your lab, here’s how to **optimize VM performance in [Proxmox](https://www.proxmox.com/en/)** with minimal effort.

## Why Optimize Your Proxmox VM?

Optimizing your virtual machines isn’t just about speed—it’s about **efficiency, responsiveness, and resource management**. A poorly configured VM can result in sluggish performance, excessive disk usage, and even kernel panics.

To **optimize VM performance in Proxmox**, we’ll focus on four major areas:

1. CPU & Memory Configuration

3. Disk I/O Improvements

5. Guest OS (Pop!\_OS) Tweaks

7. Proxmox-Specific Optimizations

## Step 1: Optimize CPU & Memory Settings in Proxmox

### Use the Right CPU Type

In the Proxmox VM settings:

- Set **CPU Type** to `host` to allow the VM to use your host CPU features.

- This improves compatibility and enhances performance for Pop!\_OS.

### Set NUMA (Non-Uniform Memory Access)

- If your system supports it, **enable NUMA** in the VM settings.

- This helps in distributing memory access more efficiently across CPU cores.

### Enable Ballooning

Memory ballooning allows dynamic memory management:

- In the **Proxmox VM Hardware tab**, enable **ballooning**.

- Set minimum and maximum values. For your 4GB VM, try:
    - Minimum: 2048 MB
    
    - Maximum: 4096 MB

This will allow the VM to expand or shrink memory use based on demand.

## Step 2: Improve Disk I/O Performance

### Use VirtIO for Disk

To reduce overhead and boost speed:

- In the **VM’s Hardware tab**, change the disk bus to **VirtIO**.

- This allows your guest OS to communicate more efficiently with Proxmox storage.

### Enable Write Back Cache

- Turn on **Write Back** cache in the disk options.

- This reduces disk latency, which is especially helpful in Linux-based VMs like Pop!\_OS.

### Align Disk Size and Use fstrim

- Ensure your 40GB disk is fully aligned.

- In Pop!\_OS terminal, run: `sudo fstrim -av` This command helps reclaim unused disk space and improves SSD performance.

## Step 3: Tweak Pop!\_OS for Better VM Performance

### Disable Unused Services

Pop!\_OS comes with some services you may not need in a VM:

```bashsudo systemctl disable cups.service
sudo systemctl disable bluetooth.service
```

This reduces background resource consumption.

### Enable Swappiness Tuning

To avoid excessive swapping:

```bashecho 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

This tells Linux to avoid using swap unless absolutely necessary.

## Step 4: Use Proxmox Tools for Performance Insights

### Use Proxmox Tools

- Use the **Proxmox "Summary" tab** to monitor CPU, memory, and disk usage in real-time.

- Check **"Logs"** for any signs of bottlenecks.

### Enable KVM Hardware Virtualization

In VM Settings → Options:

- Ensure **KVM Hardware Virtualization** is enabled.

- This drastically improves CPU efficiency.

## Conclusion

To **optimize VM performance in [Proxmox](https://www.corpit.org/how-to-add-nfs-share-to-lxc-containers-in-proxmox-step-by-step-guide/)**, follow these steps consistently: choose the right hardware settings, tweak disk options, optimize Pop!\_OS from within, and always monitor system resources.

By applying these strategies—even with limited resources like **4GB RAM and 2-core CPU**—you’ll notice smoother operation and more responsive performance from your VM.
