/**
 * SEO Configuration & Tracking Setup
 * Update this file with your actual tracking IDs
 */

// Google Analytics Configuration
export const GOOGLE_ANALYTICS_ID = "YOUR_GA_ID"; // Replace with G-XXXXXXXXXX from Google Analytics

// Facebook Pixel Configuration
export const FACEBOOK_PIXEL_ID = "YOUR_FACEBOOK_PIXEL_ID"; // Replace with your pixel ID

// Google Search Console Verification Code
export const GOOGLE_VERIFICATION_CODE = "google-site-verification-code"; // Replace with your verification code

// Bing Webmaster Verification Code
export const BING_VERIFICATION_CODE = ""; // Optional: Add your Bing verification code

// SPF Mail Record Configuration
export const SPF_RECORD = "v=spf1 include:sendgrid.net ~all"; // Update based on your email provider

/**
 * SETUP INSTRUCTIONS
 * 
 * 1. GOOGLE ANALYTICS (GA4)
 *    - Go to https://analytics.google.com
 *    - Create new property
 *    - Get Measurement ID (format: G-XXXXXXXXXX)
 *    - Replace YOUR_GA_ID above
 *    
 * 2. FACEBOOK PIXEL
 *    - Go to https://business.facebook.com/
 *    - Create new pixel or get existing ID
 *    - Replace YOUR_FACEBOOK_PIXEL_ID above
 *    - Verify in Events Manager
 *    
 * 3. GOOGLE SEARCH CONSOLE
 *    - Go to https://search.google.com/search-console
 *    - Add property: https://sharpfuture.com
 *    - Verify ownership (HTML tag method recommended)
 *    - Copy verification code and add above
 *    - Submit sitemap: https://sharpfuture.com/sitemap.xml
 *    
 * 4. BING WEBMASTER TOOLS
 *    - Go to https://www.bing.com/webmaster
 *    - Add site
 *    - Verify via DNS or HTML file
 *    - Submit sitemap
 *    
 * 5. FAVICON FILES
 *    - Required files in public/ folder:
 *    - favicon.ico (16x16, 32x32, 48x48)
 *    - favicon-16x16.png (16x16)
 *    - favicon-32x32.png (32x32)
 *    - apple-touch-icon.png (180x180)
 *    - Use https://favicon-generator.org to create
 * 
 * 6. EMAIL CONFIGURATION (SPF/DKIM/DMARC)
 *    - Access your domain's DNS settings
 *    - Add SPF record: v=spf1 include:sendgrid.net ~all
 *    - Request DKIM from your email provider
 *    - Add DMARC: v=DMARC1; p=none; rua=mailto:admin@sharpfuture.com
 *    - Test at https://mxtoolbox.com/spf.aspx
 */

// DO NOT EXPOSE SENSITIVE DATA - Use environment variables instead
export const SEO_CONFIG = {
  analytics: {
    enabled: process.env.NEXT_PUBLIC_GA_ID ? true : false,
    id: process.env.NEXT_PUBLIC_GA_ID || GOOGLE_ANALYTICS_ID,
  },
  facebookPixel: {
    enabled: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ? true : false,
    id: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || FACEBOOK_PIXEL_ID,
  },
  searchConsole: {
    verificationCode: process.env.GOOGLE_VERIFICATION_CODE || GOOGLE_VERIFICATION_CODE,
  },
};
