import type React from "react"

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b16] text-white">
      {children}
    </div>
  )
}
