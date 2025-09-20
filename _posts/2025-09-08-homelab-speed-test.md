---
layout: post
title: Homelab network speed test
date: 2025-09-08 15:05:00
description: solving networking speed problem in my homelab
tags: networking pc linux
categories: homelab english
thumbnail: 
images:
    slider: true
---

## Intro

As I mentioned on my latest post about upgrading my homelab, the whole point is to get better networking performance both in local and on internet, so I changed my router and switch to Gigabit :)

Then when I tested after mounting everything on my rack, the connection was still very slow as before :(

To troubleshoot this I thought I was using wrong software or command software. Then after checking ethernet cables I realized that I was using cat 5 and some old cat5e cables. Finally I changed that and it was all OK (`940 mbps` in LAN and `230 mbps` on Internet).

But in this post I just want to share my testing methods.

### LAN speedtest (Local)
Inside local networks I tested the speed using the command `iperf3` and here is an example usage

- On server side run `iperf3 -s`
- On client run `iperf3 -c <SERVER_IP_ADDRESS>`

This is speed is important for example if I have to migrate VMs, NAS data or local gaming. 

### WAN speedtest (Internet)

For this I used [speedtest.net](https://www.speedtest.net/) wich has a [command line tool](https://www.speedtest.net/apps/cli).

This for me is important if I need to host VPN, Plex server or connect server to tunnels.

### Pictures

And here I want to share some pictures :)

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/speed-test-1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/speed-test-2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/speed-test-3.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/speed-test-4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>