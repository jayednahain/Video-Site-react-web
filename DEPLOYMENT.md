# Deployment Guide

This guide covers how to deploy the Video Site React Web application to various hosting platforms for both development and production environments.

## Table of Contents
- [Deployment Overview](#deployment-overview)
- [Frontend Deployment](#frontend-deployment)
- [Backend Deployment](#backend-deployment)
- [Environment Configuration](#environment-configuration)
- [Production Considerations](#production-considerations)
- [Monitoring and Maintenance](#monitoring-and-maintenance)

## Deployment Overview

### Architecture
- **Frontend**: React SPA (Single Page Application)
- **Backend**: Node.js JSON Server
- **Database**: JSON file (development) / MongoDB/PostgreSQL (production)

### Deployment Options
- **Frontend**: Netlify, Vercel, GitHub Pages, AWS S3
- **Backend**: Heroku, Railway, DigitalOcean, AWS EC2
- **Full Stack**: Docker containers, Kubernetes

## Frontend Deployment

### Prerequisites
```bash
# Build the application
npm run build

# Verify build output
ls -la dist/
```

### Option 1: Netlify (Recommended)

#### Manual Deployment
1. Build your application:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com) and create account
3. Drag and drop the `dist` folder to Netlify deploy area
4. Your app will be live at `https://YOUR_APP_NAME.netlify.app`

#### Continuous Deployment
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (in environment variables)

3. Add environment variables:
   ```
   VITE_API_BASE_URL=https://your-backend-url.com
   ```

#### Custom Domain
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS records as instructed

### Option 2: Vercel

#### Automatic Deployment
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and your app will be deployed

#### GitHub Integration
1. Connect your repository to Vercel
2. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Option 3: GitHub Pages

#### Setup
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/Video-Site-react-web",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/Video-Site-react-web/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

#### S3 Setup
1. Create S3 bucket with public read access
2. Enable static website hosting
3. Upload `dist` folder contents

#### CloudFront Setup
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure custom error pages for SPA routing

## Backend Deployment

### Option 1: Railway (Recommended)

#### Setup
1. Create account at [Railway](https://railway.app)
2. Create new project from GitHub repo
3. Select the `server` folder
4. Configure environment:
   ```bash
   PORT=3000
   NODE_ENV=production
   ```

#### Deploy
Railway automatically deploys from your repository.

### Option 2: Heroku

#### Preparation
1. Create `Procfile` in server directory:
   ```
   web: npm start
   ```

2. Update server `package.json`:
   ```json
   {
     "engines": {
       "node": "18.x"
     }
   }
   ```

#### Deploy
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git subtree push --prefix server heroku main
```

### Option 3: DigitalOcean App Platform

1. Create account at DigitalOcean
2. Create new App from GitHub repository
3. Configure service:
   - **Source Directory**: `/server`
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`

### Option 4: Self-Hosted with PM2

#### Server Setup
```bash
# Install PM2 globally
npm install -g pm2

# Clone repository
git clone https://github.com/jayednahain/Video-Site-react-web.git
cd Video-Site-react-web/server

# Install dependencies
npm install --production

# Start with PM2
pm2 start npm --name "video-api" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Configuration

### Frontend Environment Variables
Create appropriate `.env` files:

#### Development (`.env.development`)
```env
VITE_API_BASE_URL=http://localhost:9000
VITE_APP_NAME=Video Site (Dev)
```

#### Production (`.env.production`)
```env
VITE_API_BASE_URL=https://your-api-domain.com
VITE_APP_NAME=Video Site
```

### Backend Environment Variables
```env
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://your-frontend-domain.com
```

## Production Considerations

### Frontend Optimizations

#### Performance
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
```

#### Progressive Web App
```bash
npm install vite-plugin-pwa
```

```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
```

### Backend Optimizations

#### Database Migration
Replace JSON file with proper database:

```javascript
// For MongoDB
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  // ... other fields
});

const Video = mongoose.model('Video', videoSchema);
```

#### Security Headers
```javascript
const helmet = require('helmet');
app.use(helmet());
```

#### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

## Docker Deployment

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - backend
    environment:
      - VITE_API_BASE_URL=http://backend:3000

  backend:
    build: ./server
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## SSL/HTTPS Setup

### Using Certbot (Let's Encrypt)
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Cloudflare SSL
1. Sign up for Cloudflare
2. Add your domain
3. Update nameservers
4. Enable "Full (strict)" SSL mode

## Monitoring and Maintenance

### Frontend Monitoring
```javascript
// Error tracking with Sentry
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

### Backend Monitoring
```javascript
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

### Logging
```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

## Backup and Recovery

### Database Backup
```bash
# For JSON file
cp db_videos.json db_videos_backup_$(date +%Y%m%d).json

# For MongoDB
mongodump --db video_db --out ./backup
```

### Automated Backups
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/path/to/backups"

# Create backup
cp /path/to/db_videos.json "$BACKUP_DIR/db_videos_$DATE.json"

# Keep only last 30 days
find "$BACKUP_DIR" -name "db_videos_*.json" -mtime +30 -delete
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### API Connection Issues
- Check CORS configuration
- Verify API URL in environment variables
- Check network and firewall settings

#### Performance Issues
- Enable gzip compression
- Implement CDN for static assets
- Optimize images and bundle size

### Rollback Strategy
```bash
# Keep previous build
mv dist dist_backup

# If deployment fails, restore
mv dist_backup dist
```

---

This deployment guide should help you get your Video Site React Web application running in production. Choose the deployment options that best fit your needs and budget.