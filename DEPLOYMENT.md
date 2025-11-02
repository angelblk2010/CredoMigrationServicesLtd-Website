# Deployment Guide

## Static HTML Export

Your Next.js application has been configured for static export and built successfully!

### 📁 Deployment Files

All static files for deployment are located in the **`out/`** directory:

```
out/
├── _next/              # JavaScript, CSS, and font assets
├── 404/                # 404 error page
├── 404.html            # 404 error page HTML
├── index.html          # Main homepage
└── index.txt           # Text version
```

### 🚀 Deployment Options

#### Option 1: Deploy the Entire `out` Directory (Recommended)

Upload the entire `out` directory to your web server or hosting platform. This ensures all assets (CSS, JavaScript, fonts) are properly linked.

**Popular Hosting Platforms:**

1. **Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --dir=out --prod
   ```

2. **Vercel**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy
   vercel --prod
   ```

3. **GitHub Pages**
   - Push the `out` directory to your repository
   - Enable GitHub Pages in repository settings
   - Set source to the branch containing the `out` folder

4. **AWS S3 + CloudFront**
   ```bash
   # Upload to S3 bucket
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

5. **Firebase Hosting**
   ```bash
   # Initialize Firebase
   firebase init hosting
   
   # Set public directory to 'out'
   # Deploy
   firebase deploy
   ```

#### Option 2: Simple Web Server

For local testing or simple deployments:

```bash
# Using Python
cd out
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server out -p 8000

# Using PHP
cd out
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### 🔄 Rebuilding

Whenever you make changes to the code, rebuild the static files:

```bash
npm run build
```

This will regenerate the `out` directory with updated files.

### ⚙️ Configuration

The project has been configured for static export in `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes to URLs
  images: {
    unoptimized: true,        // Disable image optimization for static export
  },
};
```

### 📝 Important Notes

1. **Asset Paths**: The `index.html` file references assets in the `_next` directory. Always deploy the entire `out` folder.

2. **Root index.html**: A copy of `index.html` has been placed in the root directory for convenience, but it won't work properly without the `_next` assets folder.

3. **Dynamic Routes**: Static export doesn't support dynamic server-side features like API routes or server-side rendering. All pages are pre-rendered at build time.

4. **404 Page**: A custom 404 page is included in `out/404.html`. Configure your hosting platform to use it for not-found errors.

### 🌐 Custom Domain

After deployment, you can configure a custom domain through your hosting provider:

- **Netlify**: Domain settings in dashboard
- **Vercel**: Domains tab in project settings
- **GitHub Pages**: CNAME file in repository
- **AWS S3**: Route 53 or CloudFront distribution

### ✅ Verification

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All links are functional
- [ ] Styling is applied properly
- [ ] Mobile responsive design works
- [ ] Footer displays correctly

### 🔧 Troubleshooting

**Issue**: Styles not loading
- **Solution**: Ensure the entire `out` directory is deployed, not just `index.html`

**Issue**: 404 errors for assets
- **Solution**: Check that the `_next` folder is in the same directory as `index.html`

**Issue**: Links not working
- **Solution**: Ensure your web server is configured to serve `index.html` for directory requests

### 📞 Support

For deployment issues specific to your hosting platform, consult their documentation:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

---

**Built with Next.js 14 | Static Export Enabled**
