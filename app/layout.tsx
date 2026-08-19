import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { SITE_CONFIG, SEO_KEYWORDS, ORGANIZATION_SCHEMA } from "@/lib/seo-keywords"
import { generateWebSiteSchema } from "@/lib/seo-utils"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ea580c",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Sharp Future Academy | Animation, VFX, Web Design & IT Training Institute in Muzaffarpur",
    template: "%s | Sharp Future Academy",
  },
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Sharp Future Academy", url: SITE_CONFIG.url }],
  creator: "Sharp Future Academy",
  publisher: "Sharp Future Academy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Sharp Future Academy - Best Animation & Multimedia Institute in Muzaffarpur, Bihar",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharp Future Academy - Animation & Web Design Courses in Muzaffarpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharp Future Academy - Best Animation & Multimedia Institute in Muzaffarpur, Bihar",
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || undefined,
    yandex: undefined,
    yahoo: undefined,
    other: {
      ...(process.env.BING_VERIFICATION_CODE ? { "msvalidate.01": process.env.BING_VERIFICATION_CODE } : {}),
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
}

declare global {
  interface Window {
    gtag?: any;
    dataLayer?: any[];
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {/* Educational Organization & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        {/* Google Analytics (Only loaded when valid ID is present) */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  )
}

