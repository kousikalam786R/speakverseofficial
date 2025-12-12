# Static HTML Export Guide

This website is configured to export as static HTML files that can be hosted on any static hosting service.

## How to Export

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build and export the static site**:
   ```bash
   npm run export
   ```
   
   Or simply:
   ```bash
   npm run build
   ```

3. **Find your exported files**:
   After the build completes, you'll find all static HTML, CSS, and JavaScript files in the `out/` directory.

## What Gets Exported

- All pages as static HTML files
- All CSS and JavaScript bundles
- All images and assets from the `public/` folder
- Sitemap.xml
- Robots.txt

## Deployment Options

You can deploy the `out/` folder to:

### 1. **Netlify**
   - Drag and drop the `out/` folder to Netlify
   - Or connect your Git repository and set build command: `npm run build` and publish directory: `out`

### 2. **GitHub Pages**
   - Push the `out/` folder contents to a `gh-pages` branch
   - Or use GitHub Actions to automate the build

### 3. **AWS S3 + CloudFront**
   - Upload the `out/` folder contents to an S3 bucket
   - Configure CloudFront for CDN

### 4. **Any Static Hosting**
   - Upload the contents of the `out/` folder to any web server
   - Works with Apache, Nginx, or any static file server

### 5. **Vercel** (Still works, but uses server-side rendering by default)
   - Vercel can also host static exports
   - Set output directory to `out` in Vercel settings

## Important Notes

- **Images**: All images are unoptimized for static export compatibility. If you need image optimization, consider using a CDN or image service.
- **Contact Form**: The contact form currently logs to console. For production, you'll need to integrate with a form service (like Formspree, Netlify Forms, etc.) or a backend API.
- **No Server Required**: The exported site runs entirely on the client-side - no Node.js server needed!

## File Structure After Export

```
out/
├── index.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── privacy-policy/
│   └── index.html
├── terms-and-conditions/
│   └── index.html
├── refund-policy/
│   └── index.html
├── _next/
│   └── (CSS and JS bundles)
├── logo.png
├── robots.txt
└── sitemap.xml
```

## Troubleshooting

If you encounter issues:

1. **Clear the `.next` and `out` directories**:
   ```bash
   rm -rf .next out
   npm run build
   ```

2. **Check for server-side code**: Make sure all pages use only client-side features (no `getServerSideProps`, API routes, etc.)

3. **Image optimization**: If you see image-related errors, the `unoptimized: true` setting should resolve them.

