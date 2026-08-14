import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Courses | Sharp Future Academy - Animation, VFX, Web Design & Digital Marketing",
  description:
    "Explore professional courses in Animation, VFX, Game Design, Web Development, Digital Marketing, and more at Sharp Future Academy in Muzaffarpur, Bihar. Industry-expert training with placement support.",
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
