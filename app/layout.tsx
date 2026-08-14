import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { SITE_CONFIG, SEO_KEYWORDS, ORGANIZATION_SCHEMA } from "@/lib/seo-keywords"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sharp Future Academy - Leading Animation & Multimedia Institute in Muzaffarpur, Bihar",
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS.join(", "),
  authors: [{ name: "Sharp Future Academy" }],
  creator: "Sharp Future Academy",
  publisher: "Sharp Future Academy",
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
    title: "Sharp Future Academy - Leading Animation & Multimedia Institute",
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Sharp Future Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharp Future Academy - Leading Animation & Multimedia Institute",
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.ogImage],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  )
}
