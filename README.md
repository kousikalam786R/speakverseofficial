# SpeakVerse Marketing Website

A production-ready, fully responsive marketing website for SpeakVerse - Your English Speaking App.

## Features

- 🎨 Modern, clean design inspired by Duolingo, Notion, and OpenAI
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Next.js 14 (App Router)
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized with metadata, sitemap, and robots.txt
- ♿ Accessible with ARIA labels and semantic HTML
- 📄 Complete legal pages (Privacy Policy, Terms & Conditions, Refund Policy)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
speakverse-website/
├── app/
│   ├── about/              # About Us page
│   ├── contact/            # Contact page
│   ├── privacy-policy/      # Privacy Policy page
│   ├── terms-and-conditions/ # Terms & Conditions page
│   ├── refund-policy/       # Refund Policy page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features section
│   └── Testimonials.tsx     # Testimonials section
├── public/
│   └── robots.txt           # SEO robots file
└── package.json
```

## Pages

- **Home** (`/`) - Hero, features, and testimonials
- **About** (`/about`) - Company mission and story
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy-policy`) - Privacy policy
- **Terms & Conditions** (`/terms-and-conditions`) - Terms of service
- **Refund Policy** (`/refund-policy`) - Refund policy

## Customization

### Logo

Replace the logo placeholder in `components/Header.tsx` and `components/Footer.tsx` with your actual SVG logo.

### Colors

Modify the color scheme in `tailwind.config.ts` to match your brand colors.

### Content

Update content in respective page files and components.

## Deployment

This website is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **AWS** (using Amplify or EC2)
- **Netlify**
- **Any static hosting service**

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

## SEO

- All pages include proper metadata
- Sitemap automatically generated
- Robots.txt configured
- Semantic HTML structure
- Open Graph tags for social sharing

## License

© 2024 SpeakVerse. All rights reserved.

