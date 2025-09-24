---
layout: post
title: Reinstall homelab
date: 2025-09-24 20:36:00
description: Systems reinstall and reorganization
tags: networking pc linux
categories: homelab english
---


## Introduction

I've learnt a lot from my previous rack config, and now after upgrading my networking hardware I decided to start over again but this time with some objectives and motivation.

**Objectives**
- Re-structure IP ranges with static IP
- Learn to use Proxmox
- Learn NAS
- Learn active directory
- Learn PC hardware expansion
- Learn linux in general

**Reasons**
- Centralize proxmox server instead of cluster
- Shutdown inactive servers (power saving)
- Take advantage of all mini-pc hardware features (RAM, M2 slot, etc)

---

## Previous configuration
So for my previous configuration I had a cluster with two nodes for Proxmox server and an ubuntu server running isolated in another pc (waste a lot of resource unused).

```
Proxmox node 1 (main) -> Gigabyte intel J4105 4 cores 4 threads, 8gb ram
Proxmox node 2 -> Asus tower intel J4105, 8gb ram
Ubuntu Server -> Intel NUC7i3BNH, 8gb
```

From this configuration I really never tried and used all the computing in the cluster (also not using HA) and from the ubuntu server, so I thought it would be better to just keep one Proxmox servers to manage all the homelab.

## New configuration plan
Now that I've tried things I have more flexibility and options.

For servers I want to setup this:
```
Proxmox Server -> Intel NUC7i3BNH, 16ram
NAS Openmediavault -> Asus tower intel J4105, 4gb ram
```

And inside proxmox I want to have:
```
VPN & reverse proxy -> tunnel for cloudflared and tailscale
Minecraft server
Proyect server
Bots server
Fobium server
HomeAssistant
DNS
Linux for testing
...
```

Finally for networking, my IP subnet is still `192.168.1.1/24` but now organice the ranges by purposes:
```
2-49: Personal devices
50-99: Physical servers
100-199: Servers
200+: Testing
```
