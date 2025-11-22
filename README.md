# Unloopy Website

A clean, modern landing page for the Unloopy app - built to match the app's design system.

## 🎨 Design System
- **Primary Color**: `#eb897a` (coral/salmon)
- **Background**: `#b9e5e2` (mint/turquoise)
- **Card Background**: `#f6fff1` (soft cream)
- **Fonts**: System fonts for native, clean feel

## 📁 Files
- `index.html` - Main landing page
- `styles.css` - All styles (using app's color palette)
- `script.js` - Smooth scrolling, animations, and interactions

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended - FREE)

1. **Create a new GitHub repository**
   ```bash
   cd C:\Users\Balaji\Desktop\Unloopy\unloopy.com
   git init
   git add .
   git commit -m "Initial commit: Unloopy landing page"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/unloopy-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/unloopy-website/`

4. **Connect your Porkbun domain**
   - In GitHub repository Settings → Pages → Custom domain
   - Enter your domain: `unloopy.com`
   - Wait for DNS check
   
   In Porkbun DNS settings, add these records:
   ```
   Type: A
   Host: @
   Answer: 185.199.108.153
   
   Type: A
   Host: @
   Answer: 185.199.109.153
   
   Type: A
   Host: @
   Answer: 185.199.110.153
   
   Type: A
   Host: @
   Answer: 185.199.111.153
   
   Type: CNAME
   Host: www
   Answer: YOUR_USERNAME.github.io
   ```

### Option 2: Firebase Hosting (Alternative - FREE)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   cd C:\Users\Balaji\Desktop\Unloopy\unloopy.com
   firebase login
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory to `.` (current directory)
   - Configure as single-page app: No
   - Don't overwrite index.html

3. **Deploy**
   ```bash
   firebase deploy
   ```

4. **Connect custom domain**
   - Go to Firebase Console → Hosting
   - Click "Add custom domain"
   - Follow instructions to update DNS in Porkbun

## 🔄 Auto-Deploy Setup

### For GitHub Pages:
GitHub automatically rebuilds and deploys whenever you push to the main branch. No additional setup needed!

### For Firebase:
Set up GitHub Actions for auto-deploy:

1. Create `.github/workflows/firebase-hosting.yml`:
```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

## 📝 Making Updates

1. Edit files locally in `C:\Users\Balaji\Desktop\Unloopy\unloopy.com`
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Site updates automatically in 30-60 seconds!

## ✨ Features
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Optimized performance
- SEO-friendly structure
- Matches app design system perfectly

## 📧 Contact
For questions or feedback: hello@unloopy.com

---

Built with ❤️ for Unloopy