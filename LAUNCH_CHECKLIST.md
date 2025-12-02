# Core Brim Tech Website - Launch Checklist

## Pre-Launch Setup

### 1. Environment Variables
- [ ] Sign up for Web3Forms at https://web3forms.com
- [ ] Get your free access key
- [ ] Add `WEB3FORMS_ACCESS_KEY` to Vercel environment variables
- [ ] Test contact form submission
- [ ] Test newsletter subscription

### 2. Domain Configuration
- [ ] Update domain in `app/sitemap.ts` (line 4)
- [ ] Update domain in `app/robots.ts` (line 4)
- [ ] Update domain in `app/layout.tsx` metadata (line 25)
- [ ] Add your custom domain in Vercel project settings

### 3. SEO Setup
- [ ] Verify site with Google Search Console
- [ ] Add verification code to `app/layout.tsx` (line 81)
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags using https://www.opengraph.xyz/
- [ ] Test Twitter Card using https://cards-dev.twitter.com/validator

### 4. Social Media Links
Update your actual social media URLs in:
- [ ] Homepage (app/page.tsx) - Contact section
- [ ] All footer sections
- [ ] Verify Twitter handle matches in metadata

### 5. Analytics
- [ ] Vercel Analytics is already configured
- [ ] Verify analytics are working in Vercel dashboard
- [ ] (Optional) Add Google Analytics if needed

### 6. Content Review
- [ ] Review all text for typos and accuracy
- [ ] Verify contact information (email, phone, location)
- [ ] Check project descriptions are up-to-date
- [ ] Review blog posts for accuracy
- [ ] Verify services page reflects actual offerings

### 7. Testing
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify 404 page works correctly
- [ ] Check loading states
- [ ] Test dark mode (if implemented)

### 8. Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Optimize images if needed
- [ ] Check page load speeds
- [ ] Verify Core Web Vitals

### 9. Security
- [ ] Ensure HTTPS is enabled
- [ ] Test form spam protection
- [ ] Review environment variables security
- [ ] Check CORS settings if using external APIs

### 10. Legal
- [ ] Review Privacy Policy
- [ ] Review Terms of Service
- [ ] Ensure compliance with local laws
- [ ] Add cookie notice if required by your jurisdiction

## Post-Launch

### Week 1
- [ ] Monitor contact form submissions
- [ ] Check analytics for traffic
- [ ] Monitor for any errors in Vercel logs
- [ ] Gather initial user feedback

### Week 2
- [ ] Review SEO performance in Google Search Console
- [ ] Check for any broken links
- [ ] Monitor site speed and performance

### Ongoing
- [ ] Publish new blog posts regularly
- [ ] Update project status as they progress
- [ ] Respond to contact form inquiries promptly
- [ ] Keep dependencies updated
- [ ] Monitor security advisories

## Support Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Web3Forms: https://docs.web3forms.com

### Need Help?
If you encounter any issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Test in incognito/private mode
4. Clear cache and try again

## Notes
- Remember to backup your database regularly (if using one in the future)
- Keep your API keys secure and never commit them to Git
- Monitor your Web3Forms usage to avoid hitting rate limits
- Consider setting up automated backups for your content
