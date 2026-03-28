---
layout: post
title: "3 2 1... Backup"
description: "Automating Remote Backups with Rclone and Backblaze B2"
date: 2026-03-05 09:00:00 -0300
categories: homelab infrastructure
thumbnail: assets/img/backblaze_theory.png
tags: rclone backblaze backup sysadmin
---

### **💾 Backup in 3, 2, 1... Mission Accomplished**

Infrastructure is only as good as its recovery plan. I’ve finally completed the integration of **Rclone + Backblaze B2** to ensure all my critical data is backed up off-site. 

### **The Power of Rclone**

I was honestly surprised by how straightforward it was to configure Rclone for data synchronization and connecting with Cloud Storage providers. It’s a versatile tool that has become a staple in my disaster recovery toolkit.

**My current setup includes:**
- **Automated Scheduling:** A **cron job** running every 12 hours.
- **Remote Synchronization:** All important files are mirrored to a secure, remote cloud bucket.
- **Peace of Mind:** The ability to recover my data quickly in case I break something during lab experiments.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/backblaze_bucket.png" title="Backblaze B2 Dashboard" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    My Backblaze B2 bucket actively syncing 69.6 GB of critical infrastructure data.
</div>

---

### **Why Off-site Backups?**

In a **Homelab** environment, it’s easy to focus only on the hardware and services. However, implementing a 3-2-1 backup strategy (at least one copy off-site) is what separates a hobbyist from a professional. 

By using **Backblaze B2** as a backend, I get enterprise-grade storage at a fraction of the cost, ensuring that my most important files survive even a total local failure.

**#Homelab #SysAdmin #CloudBackup #Rclone #DataIntegrity #SelfHosted**