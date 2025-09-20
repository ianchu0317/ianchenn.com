---
layout: post
title: Time to upgrade my homelab
date: 2025-08-31 21:13:00
description: It's time to make my homelab network faster
tags: networking pc linux
categories: homelab english
thumbnail: assets/img/homelab-1.jpg
images:
    slider: true
---

## Current Homelab

I leave these photos just to show off my cute homelab setup

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/upgrade-homelab-1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/upgrade-homelab-2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>


## Issues

When I built my mini-rack, I used a `10/100 mbps` router and switch wich is a bottle-neck to my entire homelab network. At that time I didn't really care about network nor internet speeds because I didn't really used much the services and didn't have the need to download any large files. 

But now I want to improve the network speed since I use Proxmox cluster. For instance, when I have to download `.iso` images or migrate VMs between nodes this becomes an issue because I just waste a lot of time waiting and doing nothing. Improving Internet speed also let me in the future host better services like Plex, NAS server, VPN server or even Minecraft server.

## Objectives
Having this issue in mind the main thing to do is to upgrade the router and the switch to better ones that supports at least `1 Gbps` internet speed. 

I want to take this opportunity to re-document my entire homelab just in case and also clean-up my `home-server` (intel nuc i3) to turn it on again on production. 


## Things to be done

- Migrate Bookstack documentation to simple Jekyll server documentation 
    - Should be accesible only inside home network 
- Modify backup scripts (delete some useless cron jobs)
- Change Router and Switch
- Config new Router settings
- Update documentation with new hardware
- Cable + Space management



