---
layout: post
title: How do I access my homelab remotely (+18,000 km away) 🇹🇼
date: 2025-09-24 20:36:00
description: Homelab remote access
tags: networking pc linux
categories: homelab english
---

During my trip, I was able to connect to the services hosted in my homelab (like Minecraft) thanks to the various remote access methods I had previously configured.

While there are several ways to achieve this—such as port forwarding, hosting my own VPN (OpenVPN), or using Tailscale—I opted for a different approach. To avoid connecting every server individually, centralize management, and monitor my VMs, I decided to configure a single Cloudflare Tunnel inside an LXC container that routes all incoming traffic to my internal network. This allows me to access all my servers under a single domain from any device; the only requirement is a web browser.

I also have a Tailscale process configured in the same LXC acting as a subnet router for SSH connections. However, I primarily use this as a backup or for connecting to specific servers.


<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/remote_homelab_1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/remote_homelab_2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/remote_homelab_3.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>