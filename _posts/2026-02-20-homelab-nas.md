---
layout: post
title: "Expanding the Lab" 
description: "4TB+ Storage and OpenMediaVault Integration"
date: 2026-02-20 10:00:00 -0300
categories: homelab infrastructure
tags: proxmox openmediavault nas storage
thumbnail: assets/img/omv_logo.png
---

### **Adding 4TB+ to the Cluster** 💾

Almost a year after I started building my own servers, my infrastructure just took a significant leap forward. I’ve recently added a new storage server with **over 4TB of capacity**, marking a new chapter in my self-hosting journey.

### **Implementing OpenMediaVault (OMV)**

To manage this new overhead, I deployed **OpenMediaVault (OMV)**. This allows me to handle physical disks for backups and network-attached storage (NAS) efficiently. 

Key features of this integration include:
- **Protocol Management:** Seamless data sharing across the lab using **NFS and SMB** protocols.
- **Virtualization:** The NAS is tightly integrated with my **Proxmox** environment, providing storage backends for various virtual machines.
- **Centralized Backups:** A dedicated space to landing my automated **Rclone and Bash** backup scripts.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/omv_setup.png" title="OMV Dashboard" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Managing 4TB of raw storage via OpenMediaVault within the Proxmox cluster.
</div>

---

### **Looking Ahead: Production-Grade Services**

With this new storage foundation, my goal is to dive deeper into enterprise-level self-hosted services. The roadmap includes:
- **Immich:** Moving away from commercial clouds for photo backups.
- **Nextcloud:** Setting up a truly private personal cloud for document management.
- **Rsync & Data Integrity:** Mastering advanced synchronization to ensure data remains consistent across all nodes.

Building a lab is a never-ending process of breaking, fixing, and scaling. Having a solid NAS is no longer a luxury—it’s the backbone of my entire operation 🛜.

**#Proxmox #SelfHosted #SysAdmin #OpenMediaVault #Networking**