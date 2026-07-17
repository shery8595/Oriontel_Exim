<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ORIONTEL EXIM - Global Trade Excellence

A modern, high-performance website for ORIONTEL EXIM (SMC-Private) Ltd., built with React, TypeScript, and Vite, featuring stunning 3D visualizations and optimized for Vercel deployment.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite
- **3D Globe Visualization**: Interactive Three.js globe with optimized performance
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Production Ready**: Error boundaries, code splitting, and performance optimizations
- **Vercel Optimized**: Pre-configured for seamless deployment

## 📦 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS (CDN)
- **3D Graphics**: Three.js
- **Deployment**: Vercel

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the app.

## 🏗️ Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect Vite and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## ⚡ Performance Optimizations

- **Code Splitting**: Three.js and React vendors are split into separate chunks
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: Terser minification with console removal in production
- **Lazy Loading**: Globe component with loading states
- **Resource Cleanup**: Proper disposal of Three.js resources
- **Mobile Optimization**: Reduced antialiasing and segments on mobile devices

## 🎨 Project Structure

```
oriontel-exim/
├── components/
│   ├── ErrorBoundary.tsx    # Error handling wrapper
│   ├── Globe.tsx             # 3D globe visualization
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation bar
│   └── Section.tsx           # Reusable section component
├── App.tsx                   # Main app component
├── index.tsx                 # App entry point
├── index.html                # HTML template with SEO
├── index.css                 # Global styles
├── constants.tsx             # Business data
├── types.ts                  # TypeScript types
├── vite.config.ts            # Vite configuration
├── vercel.json               # Vercel deployment config
└── package.json              # Dependencies
```

## 🔍 SEO Features

- Comprehensive meta tags (description, keywords, author)
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for search engines
- Canonical URLs
- Optimized page titles

## 🛡️ Production Features

- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, CSP
- **Caching Strategy**: Long-term caching for static assets
- **Performance Monitoring**: Ready for analytics integration

## 📊 Bundle Size

Optimized bundle sizes:
- Main chunk: ~150KB (gzipped)
- Three.js chunk: ~120KB (gzipped)
- React vendor: ~45KB (gzipped)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2025 ORIONTEL EXIM (SMC-Private) Ltd. All rights reserved.

## 📧 Contact

- **Email**: oriontelexim@gmail.com
- **Phone**: +92 300 2711881
- **Address**: Empire Plaza, Machine Mohallah No.3, Jhelum, Punjab, Pakistan

