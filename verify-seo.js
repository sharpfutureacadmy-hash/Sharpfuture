#!/usr/bin/env node

/**
 * SEO Implementation Verification Script
 * Run this to verify all SEO changes are in place
 */

const fs = require('fs');
const path = require('path');

const checks = {
  files: [
    'lib/seo-keywords.ts',
    'lib/seo-utils.ts',
    'lib/seo-tracking-config.ts',
    'lib/email-protection.ts',
    'public/robots.txt',
    'public/manifest.json',
    'public/llms.txt',
    'app/sitemap.xml/route.ts',
    'SEO_OPTIMIZATION_GUIDE.md',
    'SEO_AUDIT_IMPLEMENTATION_GUIDE.md',
    'SEO_SETUP_COMPLETE.md',
    'SEO_RECOMMENDATIONS_STATUS.md',
    'SEO_CHANGES_SUMMARY_HI.md',
  ],
  contents: {
    'app/layout.tsx': [
      'ORGANIZATION_SCHEMA',
      'SITE_CONFIG',
      'SEO_KEYWORDS',
      'Google Analytics',
      'gtag',
      'favicon',
      'apple-touch-icon',
    ],
    'app/page.tsx': [
      'export const metadata',
      'Sharp Future Academy',
      'Animation & Web Design',
    ],
    'components/header.tsx': [
      'mailto:',
      'email-protection',
    ],
    'components/footer.tsx': [
      'mailto:',
      'email-protection',
    ],
    '.env.example': [
      'NEXT_PUBLIC_GA_ID',
      'NEXT_PUBLIC_FACEBOOK_PIXEL_ID',
      'GOOGLE_VERIFICATION_CODE',
    ],
  },
};

function verifyFiles() {
  console.log('\n📁 Checking Files...\n');
  let filesOk = 0;
  
  checks.files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file}`);
      filesOk++;
    } else {
      console.log(`❌ ${file} - MISSING`);
    }
  });
  
  console.log(`\nFiles: ${filesOk}/${checks.files.length} present\n`);
  return filesOk === checks.files.length;
}

function verifyContents() {
  console.log('📝 Checking File Contents...\n');
  let contentsOk = 0;
  let totalChecks = 0;
  
  Object.entries(checks.contents).forEach(([file, keywords]) => {
    const filePath = path.join(__dirname, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${file} - FILE NOT FOUND`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    let fileOk = true;
    
    keywords.forEach(keyword => {
      totalChecks++;
      if (content.includes(keyword)) {
        contentsOk++;
      } else {
        fileOk = false;
      }
    });
    
    const status = fileOk ? '✅' : '⚠️';
    console.log(`${status} ${file}`);
  });
  
  console.log(`\nContents: ${contentsOk}/${totalChecks} present\n`);
  return contentsOk >= totalChecks * 0.9; // 90% pass rate
}

function verifyConfig() {
  console.log('⚙️  Checking Configuration...\n');
  
  const envExamplePath = path.join(__dirname, '.env.example');
  const envLocalPath = path.join(__dirname, '.env.local');
  
  console.log(`📄 .env.example: ${fs.existsSync(envExamplePath) ? '✅ exists' : '❌ missing'}`);
  console.log(`📄 .env.local: ${fs.existsSync(envLocalPath) ? '⏳ configured (update with your IDs)' : '⏳ not yet created (will create from .env.example)'}`);
  
  if (fs.existsSync(envLocalPath)) {
    const envLocal = fs.readFileSync(envLocalPath, 'utf8');
    console.log(`\n⚠️  Configured values in .env.local:`);
    
    if (envLocal.includes('NEXT_PUBLIC_GA_ID=') && !envLocal.includes('NEXT_PUBLIC_GA_ID=$')) {
      console.log(`   ✅ NEXT_PUBLIC_GA_ID is set`);
    } else {
      console.log(`   ⏳ NEXT_PUBLIC_GA_ID needs to be set`);
    }
    
    if (envLocal.includes('NEXT_PUBLIC_FACEBOOK_PIXEL_ID=') && !envLocal.includes('NEXT_PUBLIC_FACEBOOK_PIXEL_ID=$')) {
      console.log(`   ✅ NEXT_PUBLIC_FACEBOOK_PIXEL_ID is set`);
    } else {
      console.log(`   ⏳ NEXT_PUBLIC_FACEBOOK_PIXEL_ID needs to be set`);
    }
  }
  
  console.log('\n');
}

function checkFavicons() {
  console.log('🎨 Checking Favicon Files...\n');
  
  const faviconFiles = [
    'public/favicon.ico',
    'public/favicon-16x16.png',
    'public/favicon-32x32.png',
    'public/apple-touch-icon.png',
  ];
  
  let faviconOk = 0;
  
  faviconFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file}`);
      faviconOk++;
    } else {
      console.log(`⏳ ${file} - TO BE ADDED`);
    }
  });
  
  console.log(`\nFaviconFiles: ${faviconOk}/${faviconFiles.length} present`);
  if (faviconOk < faviconFiles.length) {
    console.log(`⚠️  Action: Generate favicons at https://favicon-generator.org\n`);
  }
  
  return faviconOk === faviconFiles.length;
}

function printSummary(filesOk, contentsOk, faviconsOk) {
  console.log('═'.repeat(60));
  console.log('📊 SEO IMPLEMENTATION VERIFICATION REPORT');
  console.log('═'.repeat(60));
  
  const overallStatus = filesOk && contentsOk;
  const icon = overallStatus ? '✅' : '⚠️';
  
  console.log(`\n${icon} Overall Status: ${overallStatus ? 'READY FOR DEPLOYMENT' : 'ACTION ITEMS REMAINING'}\n`);
  
  console.log('Summary:');
  console.log(`  • Files: ${filesOk ? '✅ Complete' : '❌ Missing some files'}`);
  console.log(`  • Content: ${contentsOk ? '✅ Complete' : '⚠️ Some missing'}`);
  console.log(`  • Favicons: ${faviconsOk ? '✅ Complete' : '⏳ To be added'}`);
  console.log(`  • Configuration: ⏳ Needs GA ID and Facebook Pixel ID\n`);
  
  console.log('Next Steps:');
  if (!faviconsOk) {
    console.log('  1. Generate favicon files at https://favicon-generator.org');
  }
  console.log('  2. Set NEXT_PUBLIC_GA_ID in .env.local');
  console.log('  3. Set NEXT_PUBLIC_FACEBOOK_PIXEL_ID in .env.local (optional)');
  console.log('  4. Run: npm run build && npm start');
  console.log('  5. Submit sitemap to Google Search Console\n');
  
  console.log('Documentation:');
  console.log('  • Read: SEO_SETUP_COMPLETE.md');
  console.log('  • Read: SEO_RECOMMENDATIONS_STATUS.md');
  console.log('  • Read: SEO_CHANGES_SUMMARY_HI.md (for Hindi/Hinglish)\n');
  
  console.log('═'.repeat(60));
}

// Run all checks
console.log('\n🔍 SEO IMPLEMENTATION VERIFICATION\n');

const filesOk = verifyFiles();
const contentsOk = verifyContents();
verifyConfig();
const faviconsOk = checkFavicons();

printSummary(filesOk, contentsOk, faviconsOk);

// Exit codes
process.exit((filesOk && contentsOk) ? 0 : 1);
