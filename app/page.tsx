import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Courses } from "@/components/courses"
import { ArenaStars } from "@/components/arena-stars"
import { Gallery } from "@/components/gallery"
import { WhyArena } from "@/components/why-arena"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
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
