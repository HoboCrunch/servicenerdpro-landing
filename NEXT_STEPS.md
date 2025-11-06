# Next Steps - Standalone Project Setup

## 1. Install Dependencies

```bash
cd online-bundle-standalone
npm install
```

## 2. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` - you should see the OnlineBundle landing page!

## 3. Rebrand (Important!)

### Update Brand Content
Edit `src/content/brandContent.ts`:
- Change company name
- Update contact info (email, phone, address)
- Update website URL

### Update Logo Files
Replace these files in `public/opsprocket-assets/`:
- Current: `762d0707-2946-4240-8883-7c1d19d20374.png`
- Or create new folder structure for your brand

### Update Colors (Optional)
Edit `tailwind.config.ts`:
- Search for `opsprocket` color definitions
- Replace with your brand colors

### Update Hero Image (Optional)
Replace `public/service-businesses.jpg` with your own hero image

## 4. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - Online Bundle landing page"
```

## 5. Push to GitHub

```bash
# Create new repo on GitHub first, then:
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 6. Deploy

### Option A: Vercel (Recommended)
1. Visit vercel.com
2. Import your GitHub repo
3. Vercel auto-detects Vite
4. Deploy!

### Option B: Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com/drop
3. Or connect GitHub repo

### Option C: Custom Server
```bash
npm run build
# Upload 'dist' folder to your server
```

## 7. Custom Domain

Once deployed:
1. Buy domain (Namecheap, Google Domains, etc.)
2. Point DNS to your host (Vercel/Netlify provides instructions)
3. Enable HTTPS (automatic on Vercel/Netlify)

## Suggested Brand Names

- **LaunchFast** - `launchfast.services`
- **ServiceSite Pro** - `servicesitepro.com`
- **7 Day Website** - `7daywebsite.co`
- **InstantWeb Pro** - `instantwebpro.com`
- **QuickSite** - `quicksite.pro`

## Files That Reference OpSprocket

You'll need to update these:

1. **src/content/brandContent.ts** - All brand info
2. **src/pages/OnlineBundle.tsx** - Logo references
3. **public/opsprocket-assets/** - Logo files (rename folder)
4. **index.html** - Page title

## Key Features Already Built

✅ Fully responsive design
✅ Exit intent popup
✅ Trust bar with stats
✅ Multiple CTAs throughout page
✅ Contact form with validation
✅ SEO optimized with structured data
✅ $199/month pricing (psychological pricing)
✅ 7-day timeline messaging
✅ Service business focused (not landscaping specific)

## Questions?

This is a complete, production-ready landing page. Just install, rebrand, and deploy!
