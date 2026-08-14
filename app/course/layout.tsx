import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Courses - Sharp Future Academy",
  description:
    "Professional animation, VFX, game design, web design, and digital marketing courses with internships, live projects, and placement support in Muzaffarpur, Bihar.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b16] text-white">
      {children}
    </div>
  )
}
