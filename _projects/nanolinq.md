---
layout: page
title: Nanolinq - URL Shortener
description: A high-performance URL shortener written in Go, featuring a full web interface and automated CI/CD deployment on Proxmox.
img: assets/img/nanolinq_hero.png
importance: 1
category: personal
---

## This project

**[Nanolinq](https://nanolinq.ianchenn.com)** is a self-hosted URL shortener developed to provide a lightweight and fast solution for link management. Beyond the core logic, this project served as a playground to implement a professional deployment pipeline within my **Homelab**. [Github](https://github.com/ianchu0317/nanolinq)

The web interface allows users to:
- **Shorten URLs** using custom short codes.
- **Track statistics** for each shortened link.
- **Manage links** through an intuitive dashboard (Edit/Delete).

<div class="row">  
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nanolinq_dashboard.png" title="Dashboard interface" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Nanolinq Web Interface - Link management and statistics.
</div>

---

## Deployment & CI/CD Pipeline

The true power of this project lies in its infrastructure:
- The application is **containerized with Docker** and deployed on a **Proxmox VM**.
- I configured a **GitHub Actions Runner** locally to enable a full **CI/CD pipeline**.
- Every time I merge code into the `main` branch, the runner automatically builds the image and redeploys the service, ensuring zero-downtime updates.

---

## Project objectives

I've built Nanolinq with these objectives: 
- Create a functional tool for my own domain (nanolinq.ianchenn.com).
- Master **Go (Golang)** for backend services.
- Automate the software development lifecycle (SDLC) using **GitHub Actions**.
- Practice service orchestration within a **Proxmox** environment.

---

## Technologies used
- **Backend:** Go (Golang) & Postgres SQL
- **Infrastructure:** Docker, Docker Compose & Proxmox
- **DevOps:** GitHub Actions (CI/CD) & Git
- **Networking:** Cloudflare Tunnels