
# HRM Labs DevOps Assessment

## Overview

This repository contains my work for the HRM Labs DevOps Assessment.

The assessment covers several areas of DevOps, including:

- Linux and Server Administration
- Git and Git Workflow
- Docker
- CI/CD
- Nginx / Reverse Proxy
- Troubleshooting
- Monitoring
- Security
- Mini Deployment Project

My approach throughout the assessment is to first understand the problem, identify the possible root cause, and then apply the appropriate technical solution.

---

# Repository Structure

```text
HRMLabs.DevOps.Assessment/
│
├── part-a-linux/
├── part-b-git/
├── part-c-docker/
├── part-d-cicd/
├── part-e-nginx/
├── part-f-troubleshooting/
├── part-g-monitoring/
├── part-h-security/
├── part-i-mini-project/
│
└── README.md
````

---

# Part A — Linux & Server Administration

## Current Status

This part has not been fully completed as a practical lab because I am still building confidence with Linux server administration.

However, I understand the general troubleshooting approach and the commands I would use to investigate the provided scenario.

For a server with high CPU, memory, and disk usage, I would investigate the resources systematically instead of immediately restarting the server or application.

### 1. Check CPU and running processes

I would initially use:

```bash
htop
```

This allows me to inspect CPU usage and identify processes consuming significant CPU resources.

I could also use:

```bash
top
```

for a more basic process and resource overview.

### 2. Check memory

I would then check memory usage with:

```bash
free -h
```

This helps determine whether the server is experiencing memory pressure or insufficient available memory.

### 3. Check disk usage

I would check disk usage with:

```bash
df -h
```

If necessary, I would then investigate which directories or files are consuming significant disk space.

### 4. Investigate slow application response

If the application response time is significantly higher than normal, I would continue investigating the running processes and their resource consumption.

My general troubleshooting approach would be:

```text
Check CPU
   ↓
Check Memory
   ↓
Check Disk
   ↓
Check Running Processes
   ↓
Check Application/System Logs
   ↓
Identify Root Cause
   ↓
Apply Fix
   ↓
Verify Result
```

I would avoid restarting services immediately because doing so may remove useful evidence about the original problem.

---

# Part B — Git

The recommended workflow for moving a completed login feature into the development environment is:

```text
feature/login
      ↓
Pull Request
      ↓
develop
      ↓
Development Environment
```

The developer should:

1. Check the changes.
2. Make sure sensitive files and credentials are not committed.
3. Commit the changes using an appropriate commit message.
4. Push the feature branch to the remote repository.
5. Create a Pull Request from `feature/login` to `develop`.
6. Allow the required code review and CI checks to run.
7. Resolve any review comments or merge conflicts.
8. Merge the Pull Request after approval.
9. Allow CI/CD to deploy the `develop` branch to the development environment.
10. QA/Testers verify the feature in the development environment.

Important Git concepts covered in this section include:

* `git merge`
* `git rebase`
* Pull Requests
* Branch protection
* Merge conflicts
* `.gitignore`
* Secret management

---

# Part C — Docker

This section demonstrates basic Docker operations, including:

* Creating a Docker image
* Running a Docker container
* Exposing application ports
* Using environment variables
* Viewing container logs
* Stopping containers
* Restarting containers
* Using Docker Compose

Common commands include:

```bash
docker build
docker run
docker ps
docker logs
docker stop
docker restart
docker compose up
docker compose down
```

The application is designed to be accessible through:

```text
http://localhost:3000
```

---

# Part D — CI/CD

The CI pipeline performs the following operations:

```text
Checkout Source Code
        ↓
Restore / Install Dependencies
        ↓
Build Application
        ↓
Run Automated Tests
        ↓
Build Docker Image
        ↓
Report Build Status
```

CI stands for Continuous Integration.

The purpose of CI is to automatically build and test changes when developers integrate code into a shared repository.

CD can refer to:

* Continuous Delivery
* Continuous Deployment

Continuous Delivery prepares an application for deployment and may require manual approval before production.

Continuous Deployment automatically deploys the application after the required checks pass.

The pipeline should stop when an important step fails so that problematic code does not continue to later deployment stages.

Sensitive information should be stored using:

* GitHub Secrets
* Environment variables
* Dedicated secret management systems

Secrets should not be hard-coded in source code or workflow files.

---

# Part E — Nginx / Reverse Proxy

## Current Status

The Nginx practical lab has not been fully completed yet.

I understand the main concepts involved, including:

* Nginx as a web server and reverse proxy
* `server` blocks
* `location` blocks
* `proxy_pass`
* HTTPS
* HTTP → HTTPS redirection
* Security headers

The expected architecture is:

```text
Client
   |
   | HTTPS :443
   v
 Nginx
   |
   | proxy_pass
   v
Application :3000
```

### `server`

The `server` block is an Nginx configuration block that defines which requests Nginx should handle and how those requests should be processed.

### `location`

The `location` block defines how Nginx should handle requests that match a specific URL path.

### `proxy_pass`

`proxy_pass` defines the destination where Nginx forwards a matched request.

For example:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
}
```

For HTTPS, Nginx would normally listen on port `443` and use a valid TLS certificate and private key.

HTTP traffic can be redirected to HTTPS using a `301` redirect.

---

# Part F — Troubleshooting

This section focuses on identifying the root cause before restarting services.

For example, if an application container exits with:

```text
Unable to connect to database
Connection refused: mysql:3306
```

possible causes include:

* MySQL container is not running
* MySQL is not ready
* Incorrect database hostname or port
* Incorrect environment variables
* Docker network problems
* Database startup order problems
* Database availability problems

The investigation should start with logs and container status.

Useful commands include:

```bash
docker ps -a
docker logs <container>
docker inspect <container>
docker network ls
docker network inspect <network>
```

Before restarting anything, I would first determine:

1. What failed?
2. When did it fail?
3. What happened immediately before the failure?
4. Is the database available?
5. Can the application reach the database?
6. Are the environment variables correct?
7. What is the impact of restarting the service?

Only after understanding the problem would I restart the affected service.

Possible prevention mechanisms include:

* Docker health checks
* Restart policies
* Monitoring
* Alerting
* Correct dependency startup order
* Database availability monitoring
* Backup and recovery procedures

---

# Part G — Monitoring

Monitoring should provide visibility into the health and performance of the system.

## Server

Important metrics include:

* CPU
* RAM
* Disk
* Network
* Load

## Application

Important metrics include:

* Response time
* Error rate
* HTTP status codes
* Request volume
* Logs

## Infrastructure

Important metrics include:

* Container status
* Database availability
* Database connections
* Uptime

Examples of alert conditions include:

* High CPU usage
* High memory usage
* Low disk space
* Database unavailable
* Container stopped
* High error rate
* Abnormally high response time

Alerts should be routed to the appropriate responsible team.

For example:

```text
Infrastructure Alert
        ↓
DevOps / System Administrator

Database Alert
        ↓
Database Administrator

Application Alert
        ↓
Development Team / Team Lead
```

### Monitoring vs Logging

Monitoring continuously observes system metrics and helps detect abnormal conditions.

Logging records system and application events that can later be used for troubleshooting and root-cause analysis.

A simple way to think about them is:

```text
Monitoring
    ↓
Detect a problem
    ↓
Alert

Logging
    ↓
Investigate the problem
    ↓
Find the cause
```

For multiple servers, I would use centralized monitoring and alerting instead of manually checking every server.

---

# Part H — Security

Production credentials should not be stored directly in Git.

Sensitive information includes:

* Database passwords
* API keys
* Access tokens
* Deployment credentials
* Private keys

Recommended approaches include:

* Environment variables
* GitHub Secrets
* Cloud secret management
* Dedicated secret management systems

If credentials are accidentally exposed, they should be revoked or rotated immediately.

## SSH Key Authentication

SSH key authentication uses a public/private key pair.

The private key remains on the client, while the public key is configured on the server.

SSH normally uses port:

```text
22
```

## Root User

Applications should not normally run as root because root has extensive system privileges.

A compromised application running as root could potentially cause significantly more damage to the server.

Applications should use a dedicated user with only the permissions required by the application.

## Firewall

A firewall controls network traffic based on configured rules.

Common ports include:

```text
22  → SSH
80  → HTTP
443 → HTTPS
```

---

# Part I — Mini Deployment Project

This section provides a small deployment environment for a web application.

The project demonstrates:

* Docker
* Docker Compose
* Environment variables
* Nginx
* Reverse proxy
* Health check
* Application logs
* GitHub Actions CI

Architecture:

```text
                 Client
                    |
                    | HTTP
                    v
              +-----------+
              |   Nginx   |
              |  :80      |
              +-----+-----+
                    |
                    | proxy_pass
                    v
              +-----------+
              | Node.js   |
              |   :3000   |
              +-----------+
```

## Repository Structure

```text
part-i-mini-project/
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
```

## Run the Project

Navigate to the project:

```bash
cd part-i-mini-project
```

Create the environment file.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux/macOS:

```bash
cp .env.example .env
```

Build and start the containers:

```bash
docker compose up -d --build
```

Check container status:

```bash
docker compose ps
```

View application logs:

```bash
docker compose logs app
```

Follow logs:

```bash
docker compose logs -f app
```

The application should be accessible through:

```text
http://localhost
```

The health-check endpoint is:

```text
http://localhost/health
```

Stop the application:

```bash
docker compose stop
```

Restart:

```bash
docker compose restart
```

Stop and remove containers:

```bash
docker compose down
```

---

# Troubleshooting the Mini Project

## Check container status

```bash
docker compose ps -a
```

## Check application logs

```bash
docker compose logs app
```

## Check Nginx logs

```bash
docker compose logs nginx
```

## Rebuild the images

```bash
docker compose build --no-cache
```

Then:

```bash
docker compose up -d
```

If Nginx returns `502 Bad Gateway`, check:

1. Whether the application container is running.
2. Whether the application is listening on port `3000`.
3. Whether Nginx can reach the application through the Docker network.
4. Whether `proxy_pass` points to the correct destination.
5. Application and Nginx logs.

---

# CI Pipeline

The GitHub Actions workflow is located at:

```text
.github/workflows/ci.yml
```

The basic pipeline performs:

```text
Checkout
   ↓
Install Dependencies
   ↓
Run Tests
   ↓
Build Docker Image
   ↓
Report Status
```

If a required step fails, the pipeline stops and the GitHub Actions logs can be used to investigate the problem.

---

# Environment Variables

Environment-specific configuration should be provided through environment variables.

Example:

```env
PORT=3000
NODE_ENV=development
```

`.env.example` can be committed because it contains only example values.

Real `.env` files containing secrets should not be committed.

Production secrets should be provided through a secure secret management mechanism.

---

# Security Considerations

This repository does not contain:

* Real passwords
* Production database credentials
* API keys
* Access tokens
* Production private keys

Sensitive values should be injected through environment variables, GitHub Secrets, or a dedicated secret management system.

---

# Current Limitations

Some sections of the assessment are currently presented at the conceptual level rather than as completed practical labs.

In particular:

* Part A — Linux practical lab is not fully completed.
* Part E — Nginx practical lab is not fully completed.

For these sections, I documented the troubleshooting approach and technical concepts I understand, together with the commands or configurations I would use.

I chose not to present untested configurations as completed work.

---

# Learning Approach

For areas where I have less hands-on experience, my approach is:

```text
Understand the requirement
        ↓
Identify the relevant technology/concept
        ↓
Research the correct approach
        ↓
Implement
        ↓
Test
        ↓
Document the result
```

The assessment helped me identify areas where I need further hands-on practice, particularly Linux server administration and Nginx configuration.

---

# Conclusion

This assessment demonstrates my understanding of basic DevOps concepts and my approach to deployment and troubleshooting.

The main workflow covered by the assessment is:

```text
Git
 ↓
CI
 ↓
Build & Test
 ↓
Docker
 ↓
Nginx
 ↓
Application
 ↓
Monitoring
 ↓
Troubleshooting
 ↓
Security
```

Where practical labs were completed, the repository contains the corresponding source and configuration files.

Where a practical lab was not completed, the README documents my current understanding and the approach I would take rather than claiming an untested implementation as completed.

