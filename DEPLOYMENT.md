# 🚀 Deployment Guide

This guide covers deploying the MeraDhan Economic Calendar app to various platforms.

## Prerequisites

- Git repository (GitHub, GitLab, or Bitbucket)
- Production build tested locally (`npm run build`)

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd meradhan-app
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**Configuration**:
- Framework Preset: Next.js
- Root Directory: `meradhan-app`
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

**Or use Netlify Dashboard**:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"
3. Import from Git
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: `meradhan-app`

## Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - cd meradhan-app
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: meradhan-app/.next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect Next.js
6. Add environment variables if needed
7. Deploy

## Deploy to Render

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your Git repository
4. Configure:
   - Name: meradhan-app
   - Root Directory: `meradhan-app`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

## Deploy to Digital Ocean App Platform

1. Go to [Digital Ocean](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your Git repository
4. Configure:
   - Source Directory: `meradhan-app`
   - Build Command: `npm run build`
   - Run Command: `npm start`

## Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://meradhan.com
```

Add these to your deployment platform's environment variables section.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

Before deploying, ensure:

- ✅ Images are optimized
- ✅ Unused dependencies removed
- ✅ Build runs without errors
- ✅ TypeScript types are correct
- ✅ ESLint passes

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify responsive design on mobile
- [ ] Check loading performance
- [ ] Test forms and interactions
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check console for errors
- [ ] Verify analytics (if configured)

## Monitoring

Consider adding:
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: For traffic monitoring
- **Sentry**: For error tracking
- **LogRocket**: For session replay

## Continuous Deployment

Most platforms support automatic deployments:
- Push to `main` branch → Auto deploy to production
- Push to `develop` branch → Auto deploy to staging

## Rollback

If something goes wrong:

**Vercel**: Go to Deployments → Select previous deployment → Promote to Production

**Netlify**: Go to Deploys → Select previous deploy → Publish deploy

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Your app is ready for production! 🎉**
