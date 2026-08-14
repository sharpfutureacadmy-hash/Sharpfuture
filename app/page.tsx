import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Course } from "@/components/course"
import { StudentWork } from "@/components/studentwork"
import { ArenaStars } from "@/components/arena-stars"
import { Gallery } from "@/components/gallery"
import { WhyArena } from "@/components/why-arena"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SITE_CONFIG } from "@/lib/seo-keywords"

export const metadata: Metadata = {
  title: "Sharp Future Academy - Animation, VFX & Web Design Courses in Muzaffarpur",
  description: SITE_CONFIG.description,
  openGraph: {
    title: "Sharp Future Academy - Leading Creative & IT Training Institute",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Course />
        <StudentWork />
        <About />
        <ArenaStars />
        <Gallery />
        <WhyArena />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
