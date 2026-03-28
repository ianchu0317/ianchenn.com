---
layout: post
title: "My Self-Hosted Google Photos Alternative"
description: Deploying Immich on Proxmox to manage +4TB of personal photos and videos with full privacy.
thumbnail: assets/img/immich_logo.png
date: 2026-02-24 17:32:00 -0300
importance: 1
category: homelab
---

## **Taking Control of My Memories: The Immich Deployment** 📸

After expanding my lab's storage capacity, the first major service I wanted to implement was a robust photo management system. I chose **Immich**, and the results have been incredible: I now have **over 4TB of personal cloud storage** dedicated to my media.

### **The Architecture**

To ensure stability and performance, I opted for a dedicated environment within my cluster:
- **Environment:** Running on a specialized **Proxmox VM**.
- **Orchestration:** Deployed using **Docker Compose** for easy updates and modularity.
- **Storage Backend:** Integrated with my **OpenMediaVault** NAS via network protocols to leverage the full 4TB overhead.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/immich_interface.png" title="Immich Web Interface" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The Immich dashboard, handling thousands of assets with high performance.
</div>

---

## **Documentation: The Key to a Stable Lab** 💿💻

As any **SysAdmin** knows, a service is only as good as its documentation. Along with the deployment, I've fully documented the entire setup process in **Bookstack**.

This documentation includes:
- Network configurations and port mappings.
- External library integration steps.
- Backup schedules to ensure no memory is ever lost.

---

## **Why Immich?**

- **Privacy:** My data never leaves my local network unless I want it to.
- **Performance:** Blazing fast backup and search capabilities.
- **Cost-Efficiency:** No more monthly subscriptions for extra cloud storage.

Building this has been a great lesson in managing large-scale data and containerized applications. It's not just about the code; it's about building a reliable system that works for you every day.

**#Homelab #SysAdmin #Docker #Proxmox #SelfHosted #Immich**