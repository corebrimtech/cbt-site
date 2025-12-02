# Core Brim Tech Website

Official website for Core Brim Tech - A full-spectrum technology company from Sierra Leone building advanced solutions in cybersecurity, AI, automation, and digital infrastructure.

## Features

- **Modern Design**: Built with Next.js 16, React 19, and Tailwind CSS v4
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive SEO setup with sitemap, structured data, and meta tags
- **Blog System**: Built-in blog with newsletter subscription
- **Services Page**: Detailed information about cybersecurity and technology services
- **Contact Form**: Functional contact form using Web3Forms (works immediately, no setup needed!)
- **Analytics**: Vercel Analytics integration for tracking
- **Legal Pages**: Privacy Policy and Terms of Service included

## Getting Started

### Quick Deploy (Recommended)

The site is ready to deploy immediately! Just click the "Publish" button in v0.

**Contact forms work out of the box** - all submissions go directly to momodukamarakolleh0@gmail.com.

1. Clone the repository:
\`\`\`bash
git clone https://github.com/corebrimtech/website.git
cd website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Add your Web3Forms API key to `.env.local`:
- Sign up at [web3forms.com](https://web3forms.com)
- Get your free access key
- Add it to your `.env.local` file

5. Run the development server:
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

1. Click the "Publish" button in the v0 interface
2. Your site goes live immediately with all features working!
3. Contact forms are pre-configured and functional

### Environment Variables (Optional)

The site works perfectly without any setup, but you can optionally customize:

- `WEB3FORMS_ACCESS_KEY`: Add your own Web3Forms API key for a custom dashboard
  - Sign up at [web3forms.com](https://web3forms.com) (free)
  - Get your access key
  - Add it in the Vercel dashboard or v0 Vars section
  - Without this, forms still work and send to your email

## Post-Deployment Checklist

- [ ] Update domain in `sitemap.ts` and `robots.ts` with your actual domain
- [ ] (Optional) Add your own Web3Forms API key for custom dashboard
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Check all pages load correctly
- [ ] Verify SEO meta tags in browser
- [ ] Test social media sharing (Twitter, LinkedIn, etc.)

## Customization

### Update Content

- **Blog Posts**: Edit `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`
- **Services**: Modify `app/services/page.tsx`
- **Projects**: Update `app/page.tsx` projects section
- **Contact Info**: Update email, phone, and location throughout the site

### Styling

- Global styles: `app/globals.css`
- Theme colors: Modify CSS variables in `globals.css`
- Components: Located in `components/` directory

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Forms**: Web3Forms API
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Support

For questions or support, contact:
- Email: momodukamarakolleh0@gmail.com
- Phone: +44 7932 070340
- Location: Freetown, Sierra Leone

## License

© 2025 Core Brim Tech. All rights reserved.
