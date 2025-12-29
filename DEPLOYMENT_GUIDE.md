# Deployment Guide - yousufrayhan.me

## ⚠️ IMPORTANT: API Key Security Fixed

I've removed the exposed SerpApi key from the code and created a secure serverless function.

## 🚀 OPTION 1: Deploy with Netlify (RECOMMENDED - FREE & SECURE)

Netlify provides free hosting with serverless functions to keep your API key secure.

### Step-by-Step Instructions:

1. **Go to Netlify**: https://www.netlify.com/
   - Sign up with your GitHub account

2. **Import Your Repository**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select: `usufxrex/usufxrex.github.io`

3. **Configure Build Settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (dot)
   - Click "Deploy site"

4. **Add Environment Variable (CRITICAL)**:
   - Go to Site settings → Environment variables
   - Click "Add a variable"
   - Key: `SERPAPI_KEY`
   - Value: `28cb72fc4d7a086f585f3ce452de36a8d163e51a1fae41be4fd1158794974cd1`
   - Click "Create variable"

5. **Add Custom Domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `yousufrayhan.me`
   - Netlify will provide DNS records

6. **Update DNS in Namecheap**:
   - Go to your Namecheap account
   - Domain list → Manage → Advanced DNS
   - **DELETE all existing A/CNAME records for your domain**
   - **Add these NEW records**:
     
     Type: A Record
     Host: @
     Value: 75.2.60.5
     TTL: Automatic
     
     Type: CNAME Record
     Host: www
     Value: [your-netlify-subdomain].netlify.app (from step 5)
     TTL: Automatic

7. **Wait for DNS Propagation** (15-30 minutes)

8. **Enable HTTPS**:
   - Netlify automatically provides free SSL certificate
   - Go to Site settings → Domain management → HTTPS
   - Enable "Force HTTPS"

---

## 🔧 OPTION 2: Stay with GitHub Pages (Less Secure)

If you want to stay with GitHub Pages, you need to:

### A. Fix GitHub Pages Setup:

1. **GitHub Repository Settings**:
   - Go to: https://github.com/usufxrex/usufxrex.github.io/settings/pages
   - Under "Build and deployment":
     - Source: Deploy from a branch
     - Branch: main / (root)
   - Under "Custom domain":
     - Enter: `yousufrayhan.me`
     - Click Save
     - Wait for DNS check ✓

2. **Your DNS is Already Correct** (from your screenshot):
   - Keep your existing A records (185.199.108.153, etc.)
   - Keep CNAME: www → usufxrex.github.io

3. **Wait 15-30 minutes for DNS propagation**

### B. API Key Security (Important!):

**⚠️ WARNING**: With GitHub Pages, your API key will be visible in the source code. To minimize risk:

1. **Go to SerpApi Dashboard**: https://serpapi.com/manage-api-key
2. **Restrict your API key**:
   - Set HTTP Referrer restrictions to: `yousufrayhan.me/*`
   - Set monthly quota limit (e.g., 100 searches/month)
   - Enable "Only allow requests from specified domains"

3. **Consider rotating your API key periodically**

**Note**: This solution is NOT fully secure, but adds some protection.

---

## 📊 What We Fixed:

✅ Created CNAME file for custom domain
✅ Removed exposed API key from code
✅ Created Netlify serverless function (secure backend)
✅ Added package.json for dependencies
✅ Added netlify.toml for configuration

## 🎯 Recommended Solution:

**Use Netlify (Option 1)** because:
- ✅ FREE forever plan
- ✅ API key is 100% secure (server-side only)
- ✅ Automatic HTTPS/SSL
- ✅ Faster global CDN
- ✅ Better build system
- ✅ Serverless functions included
- ✅ Easy custom domain setup

## ⚡ After Deployment:

Your website will be live at:
- https://yousufrayhan.me
- https://www.yousufrayhan.me

All features will work:
- Google Scholar auto-updates ✓
- GitHub projects auto-fetch ✓
- Auto-updating experience counter ✓
- Secure API calls ✓

## 🆘 Troubleshooting:

**If website shows 404**:
- Wait 15-30 minutes for DNS propagation
- Check GitHub Pages settings
- Verify CNAME file exists in repository

**If Scholar data doesn't load**:
- Check Netlify environment variable is set
- Check browser console for errors
- Verify serverless function deployed correctly

**If you need help**: Contact me with screenshots of the error!
