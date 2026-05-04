---
title: "How to Deploy n8n as a Container (with Docker Compose)"
date: 2025-07-21 00:00:00 +0530
categories: 
  - "artificial-intelligence"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

You can automate powerful workflows by running **[n8n](https://docs.n8n.io/hosting/installation/server-setups/docker-compose/) with Docker Compose**. In this guide, we’ll walk through how to launch and manage **[n8n with Docker Compose](https://www.corpit.org/docker-compose-101-simplify-your-multi-container-applications/)** efficiently.

## 1\. Organize Your Project Structure

First, let’s get the right folder structure:

text`/mnt/Ackerman/n8n/ ├── .env ├── compose.yaml ├── n8n_data/ ├── pg_data/ ├── local-files/ ├── secrets/ │   └── n8n_postgres_password`

**Tip:** This structure lets you keep your configuration, data, and secrets tidy. It also makes backups easy!

## 2\. Prepare Your Environment Variables (`.env`)

Create a `.env` file with these settings:

```
GENERIC_TIMEZONE=Asia/KolkataN8N_HOST=n8n.example.comN8N_PROTOCOL=httpN8N_SECURE_COOKIE=falseWEBHOOK_URL=http://n8n.example.com/UID=950GID=950DB_TYPE=postgresdbDB_POSTGRESDB_HOST=postgresDB_POSTGRESDB_PORT=5432DB_POSTGRESDB_DATABASE=n8nDB_POSTGRESDB_USER=n8n_user# Password stored securely via Docker secrets!
```

**Why?**

- _Timezones_ and _URLs_ let n8n’s webhooks work with your location.

- _Encryption Key_ keeps sensitive data safe.

- _DB settings_ and _UID/GID_ keep permissions and access correct.

## 3\. Write Your `compose.yaml`

Here’s a `compose.yaml` using best practices (like Docker secrets for passwords):

```
version: "3.8"services:  n8n:    image: n8nio/n8n:1.48.1    restart: always    env_file: .env    ports:      - "5678:5678"    secrets:      - n8n_postgres_password    environment:      - DB_POSTGRESDB_PASSWORD_FILE=/run/secrets/n8n_postgres_password    volumes:      - ./n8n_data:/home/node/.n8n      - ./local-files:/files    depends_on:      - postgres  postgres:    image: postgres:15    user: "${UID}:${GID}"    restart: always    environment:      - POSTGRES_DB=${DB_POSTGRESDB_DATABASE}      - POSTGRES_USER=${DB_POSTGRESDB_USER}      - POSTGRES_PASSWORD_FILE=/run/secrets/n8n_postgres_password    secrets:      - n8n_postgres_password    volumes:      - ./pg_data:/var/lib/postgresql/datasecrets:  n8n_postgres_password:    file: ./secrets/n8n_postgres_password
```

**What’s Good Here?**

- Passwords _aren’t_ in your `.env` or code—they’re stored in a file in `secrets/`.

- Your data is stored on disk—safe from container wipes.

- The Postgres user/group matches your UID/GID for permission compatibility.

## 4\. Set Secure File Permissions

Your `n8n_data` folder currently has a different owner (`1000:1000`). This might cause permissions errors.

**Actionable Fix:**

```bashsudo chown -R 950:950 n8n_data
```

- This makes sure n8n (running as UID 950 and GID 950) can read and write its data.

- Do the same for other persistent data folders if needed (like `pg_data`).

## 5\. Create Your Secret Password File

Create the password file for Postgres:

```bashecho 'YourStrongPassword' > secrets/n8n_postgres_passwordchmod 600 secrets/n8n_postgres_password
```

**Tip:** Use a strong password—this keeps your data safe.

## 6\. Start Everything Up

Inside your `/mnt/Ackerman/n8n/` directory, run:

```bashdocker compose up -d
```

- The first start can take a minute—Postgres initializes its database, and n8n sets up its storage.

## 7\. Access n8n

Open your browser and go to:

```
http://n8n.example.com:5678
```

If you’re just using your local network, you can also use your server’s IP and port 5678.

![](/assets/img/posts/Screenshot-2025-07-18-at-1.50.26-PM-1024x502.png)

## Pro Tips

- **Back Up**: Regularly back up `n8n_data` and `pg_data`.

- **Updates**: Occasionally pull newer images with `docker compose pull` and restart (after reading release notes)!

- **Security**: For public deployments, consider using HTTPS (with a reverse proxy like Traefik or Nginx).

## Example: Troubleshooting File Permissions

Let’s say the n8n container logs show “permission denied” errors for writing to `/home/node/.n8n`. That usually means the folder owner isn’t set correctly.

**How to Fix:**

1. Stop the containers: `docker compose down`

3. Run: `sudo chown -R 950:950 n8n_data`

5. Sometime this will not work and you need to change the owner of `n8n_data` from 950 to 1000 and the final command will be `sudo chown -R 1000:1000 n8n_data` the reason we need to do that because node use this permission to run.

7. Restart: `docker compose up -d`

That should resolve any access issues—n8n will now manage its files smoothly.

You’re all set! With these steps, you’re running a robust, secure, and maintainable n8n containerized deployment. Enjoy automating!
