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
import { SITE_CONFIG, SEO_KEYWORDS, FAQ_DATA } from "@/lib/seo-keywords"
import { generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo-utils"

export const metadata: Metadata = {
  title: "Best Animation, VFX, Web Design & IT Training Institute in Muzaffarpur | Sharp Future Academy",
  description: "Learn Animation, VFX, Graphic Design, Web Development, Coding, UI/UX, and Digital Marketing at Sharp Future Academy in Lenin Chowk, Muzaffarpur, Bihar. BCA/MCA live project internship & placement support.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Sharp Future Academy | Best Animation, VFX, Web Design & IT Training in Muzaffarpur",
    description: "Transform your creative career with industry-oriented courses in Animation, VFX, Web Development, UI/UX, and Digital Marketing. Live projects & 100% placement assistance in Muzaffarpur, Bihar.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharp Future Academy - Best Animation & IT Institute in Muzaffarpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharp Future Academy - Animation & Web Design Institute in Muzaffarpur",
    description: "Join professional Animation, VFX, Web Development & Digital Marketing courses with 100% placement support in Muzaffarpur, Bihar.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  const faqSchema = generateFAQSchema(FAQ_DATA);
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
  ]);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

