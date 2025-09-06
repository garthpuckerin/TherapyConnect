# Deploying to GoDaddy (recommended workflow)

This repository contains a demo/public version of the TherapyConnect site. To host a professional production site on GoDaddy, follow these steps.

1. Keep this repo public as the demo. Create a separate private repository for production (recommended).

2. Build output

- The Vite build output is in `dist/` after running:

  npm ci
  npm run build

3. Deployment options for GoDaddy

- Shared hosting (cPanel/FTP): upload contents of `dist/` to the `public_html` (or desired) folder via SFTP/FTP or the File Manager.
- Managed WordPress: not applicable for this static site (use a separate approach).

4. Automated deploy via GitHub Actions (recommended)

- This repo includes a workflow `.github/workflows/deploy-godaddy.yml` that builds the app and deploys `dist/` via FTP.
- Add the following repository Secrets in GitHub (Settings → Secrets → Actions) for the production repo:
  - `FTP_HOST` - your GoDaddy server hostname or IP
  - `FTP_USERNAME` - FTP/SFTP account user
  - `FTP_PASSWORD` - FTP/SFTP account password
  - `FTP_DEPLOY_PATH` - server path to deploy to (e.g., `/public_html`)

5. Remove sensitive files from the repo

- Ensure `.env` is not tracked by Git. Add secrets to GitHub Actions Secrets or your host control panel instead.

6. DNS / Domain

- In GoDaddy DNS settings, point your domain (A record) to the hosting server IP. If using a CDN or external host, update the DNS accordingly.

7. Security / Compliance

- Do not store PHI in the repo. Use HTTPS for all forms, and verify SimplePractice / hosting BAAs if you will transmit PHI.
