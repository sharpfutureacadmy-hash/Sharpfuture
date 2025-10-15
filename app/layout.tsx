import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sharp Future Academy - Leading Animation & Multimedia Institute",
  description:
    "Join Sharp Future Academy for world-class training in Animation, VFX, Gaming, Web Design, and Digital Marketing. Industry-expert faculty, modern infrastructure, and excellent placement support.",
  keywords:
    "animation courses, VFX training, game design, web development, digital marketing, graphic design, Lenin Chowk, Muzaffarpur, Bihar",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
