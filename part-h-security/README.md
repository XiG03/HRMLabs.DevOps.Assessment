# Part H - Security

## About the question: 

    35. Where should production database passwords be stored?
    36. What is wrong with storing DB_PASSWORD directly in a public Git repository?
    37. What is SSH key authentication?
    38. Why should you avoid using root for normal application operations?
    39. What is the purpose of a firewall?
    40. What are ports 80, 443, and 22 normally used for?

## Answer

### 35. Where should production database passwords be stored?

Production database passwords should not be hard-coded in the source code or stored in a Git repository. They should preferably be stored in a secure secret management system such as Azure Key Vault, or injected through protected environment variables or application settings.

For example, when deploying a .NET application to Azure, I would normally use Azure App Settings or a secret management service to provide the database credentials to the application instead of committing them to the repository.

In addition to protecting the credentials, I would also restrict database network access using firewall rules or IP/network restrictions, so that only authorized applications or networks can connect to the database.

### 36. What is wrong with storing DB_PASSWORD directly in a public Git repository?


If DB_PASSWORD is exposed, an attacker may be able to access the database and read, modify, or delete sensitive data, depending on the database's network access controls and the permissions associated with the account.

Network restrictions such as firewall rules or IP allowlists can provide an additional layer of protection by limiting which systems can connect to the database. However, this should not be considered a replacement for properly protecting credentials.

Therefore, database passwords should never be stored directly in a public Git repository. They should be stored securely using a secret management system or protected environment variables. If a credential is accidentally exposed, it should be revoked or rotated immediately.

## 37. What is SSH key authentication?

SSH key authentication is a method of authenticating to a Linux server using a public-private key pair instead of a password. The private key is kept securely on the client, while the public key is stored on the server, usually in the user's ~/.ssh/authorized_keys file.

An administrator can then connect to the server remotely using SSH, for example ssh username@server-ip, and the SSH server verifies the key instead of relying on a password.

For security, the private key should be protected carefully, and SSH access should also be restricted using firewall rules, IP allowlists, or VPN access where appropriate.

### 38. Why should you avoid using root for normal application operations?

Applications should not normally run as root because root has highly privileged access to the entire system. If the application is compromised, an attacker could potentially use those privileges to modify system configurations, access sensitive files, create users, or take control of the server.

I would run each application using a dedicated non-root user and grant it only the permissions it actually needs. This follows the principle of least privilege and limits the potential impact of a security breach.'

### 39. What is the purpose of a firewall?

A firewall is a security mechanism that controls and filters network traffic based on predefined rules. It can control both inbound and outbound traffic and determine which IP addresses, ports, and services are allowed or blocked.

For example, a firewall can allow users to access a web server through ports 80 and 443 while restricting SSH access to authorized IP addresses and blocking direct Internet access to a database.

Firewalls can also be used to protect a DMZ, which is a network zone containing public-facing services such as web servers. The DMZ provides an additional security boundary between the Internet and the internal network.

### 40. What are ports 80, 443, and 22 normally used for?

Port 80 is normally used for HTTP traffic, while port 443 is normally used for HTTPS traffic, which provides encrypted communication using TLS.

Port 22 is normally used for SSH, which allows administrators to securely access and manage Linux servers remotely.