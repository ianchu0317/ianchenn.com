---
layout: page
title: OCR Server
description: Simple OCR server with Tesseract and FastAPI - Deploy on https://ocr.ianchenn.com/images/ 
img: assets/img/testocr.png
importance: 2
category: personal
related_publications: true
---

## This project
I've built a simple ocr server with Tesseract, FastAPI, and deployed in my homelab with docker compose. The idea is to get a free and reliable OCR server to act as microservice for my future projects.

Main features are:

- Easy deploy on Docker (download and go)
- Good images extraction with Tesseract
- Simple usage (simple request and response format)
- Small documentation

The configuration and documentation are available on [GitHub repo](https://github.com/ianchu0317/ocr-server) and server is deployed on [https://ocr.ianchenn.com/images/](https://ocr.ianchenn.com/images/).

## Technologies used
- Tesseract
- FastAPI
- Docker
- Cloudflared
- Proxmox

## What I've learned
Main thing I've learned from this project was file upload to server through API Requests. 