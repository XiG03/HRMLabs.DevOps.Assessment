# HRM Labs - Mini Deployment Project

## 1. Overview

This project demonstrates a basic deployment environment for a simple web application using:

- Node.js
- Docker
- Docker Compose
- Nginx
- GitHub Actions

The application runs inside a Docker container and is accessed through Nginx as a reverse proxy.

The project also provides:

- Environment variable configuration
- Health-check endpoint
- Application logs
- Docker container management
- Basic CI pipeline
- Troubleshooting instructions

---

## 2. Architecture

The application uses the following architecture:

Browser
   |
   | HTTP :80
   v
Nginx
   |
   | proxy_pass
   v
Node.js Application :3000


The application is not directly exposed to the host.

Nginx receives requests on port 80 and forwards them to the application container on port 3000.

---

## 3. Project Structure

```text
part-i-mini_project/
│
├── application/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── test.js
│
├── nginx/
│   └── nginx.conf
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md