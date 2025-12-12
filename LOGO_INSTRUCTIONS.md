# Logo Replacement Instructions

## Current Logo Placeholder

The website currently uses a placeholder logo with "SV" initials in a gradient box. This appears in:
- `components/Header.tsx` (navigation bar)
- `components/Footer.tsx` (footer)

## How to Replace with Your Logo

1. **Add your logo file** to the `public/` directory (e.g., `public/logo.svg` or `public/logo.png`)

2. **Update Header.tsx**:
   - Find the logo section (around line 15-20)
   - Replace the placeholder div with:
   ```tsx
   <Image 
     src="/logo.svg" 
     alt="SpeakVerse" 
     width={120} 
     height={40}
     className="h-10 w-auto"
   />
   ```
   - Don't forget to import Image from 'next/image' at the top

3. **Update Footer.tsx**:
   - Find the logo section (around line 10-15)
   - Replace the placeholder div with the same Image component

4. **Recommended Logo Specifications**:
   - Format: SVG (preferred) or PNG with transparent background
   - Height: 40px (width will scale proportionally)
   - Colors: Should work on both light and dark backgrounds, or use a version that matches your brand

## Alternative: Text-Only Logo

If you prefer to keep a text-based logo, you can simply update the "SV" text in the gradient box to your preferred initials or remove the gradient box entirely and use just the "SpeakVerse" text with custom styling.

