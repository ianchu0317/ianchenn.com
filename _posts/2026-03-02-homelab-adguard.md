---
layout: post
title: "No More Ads"
description: "Deploying AdGuard Home as a Network DNS"
date: 2026-03-02 15:30:00 -0300
categories: homelab networking
tags: homelab
---

### **🏰🪄✨ Magic at the DNS Level: Ad-Free Disney+ and Beyond**

Tired of constant interruptions and ads while browsing or streaming, I finally decided to take control of my network traffic. I deployed **AdGuard Home** as a local DNS resolver to block ads and trackers at the source—and the results are exactly what I was hoping for.

### **The Setup: Lightweight and Centralized**

Instead of relying on browser extensions for every single laptop or mobile phone, I chose a **network-wide approach**. 

I installed AdGuard Home within a **Proxmox LXC container**. The installation is straightforward and extremely lightweight, making it the perfect utility for a homelab environment.

**Key benefits of this setup:**
- **Zero-Configuration for Clients:** Once the router or device points to this DNS, the protection is automatic.
- **No Extensions Needed:** It works on smart TVs, mobile apps, and devices where traditional ad-blockers can't be installed.
- **Privacy First:** It blocks tracking telemetries before they even leave the network.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adguard_dashboard.png" title="AdGuard Home Dashboard" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Monitoring blocked queries and network health via the AdGuard Home dashboard.
</div>

---

### **Why DNS Filtering?**

By intercepting DNS queries, AdGuard prevents the device from ever reaching the ad-serving domains. It's an elegant solution that not only cleans up the UI of websites and apps like **Disney+** but also saves bandwidth