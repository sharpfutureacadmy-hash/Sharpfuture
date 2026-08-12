"use client"

import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { Button } from "@/components/ui/button"
import { Star, Users, Award, Phone, MessageCircle } from "lucide-react"

const bannerImages = [
  "Banner-03.jpg",
  "fantasy-game-environment-with-castle.jpg",
  "/students-learning-animation-and-vfx-in-modern-comp.jpg",
  "3d-animated-character-in-action-scene.jpg",
  "/modern-animation-studio-with-students-working-on-c.jpeg",
  "/vfx-compositing-and-special-effects.jpg",
  "/graphic-design-portfolio-and-branding.jpg",
  "/web-development-and-responsive-design.jpg",
  //"/professional-male-instructor-web-development-teach.jpg",
  "/BVOC+admissions_Banner.jpg"
]

const carouselImages = ["Banner-03.jpg",
  "fantasy-game-environment-with-castle.jpg",
  "/students-learning-animation-and-vfx-in-modern-comp.jpg",
  "3d-animated-character-in-action-scene.jpg",
  "/modern-animation-studio-with-students-working-on-c.jpeg",
  "/vfx-compositing-and-special-effects.jpg",
  "/graphic-design-portfolio-and-branding.jpg",
  "/web-development-and-responsive-design.jpg",
  "/professional-male-instructor-web-development-teach.jpg",]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(3)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [trackTranslate, setTrackTranslate] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerImages.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % carouselImages.length)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])


  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const active = itemRefs.current[galleryIndex]

    if (!wrapper || !active) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()

    const center =
      active.offsetLeft +
      activeRect.width / 2 -
      wrapperRect.width / 2

    setTrackTranslate(-center)
  }, [galleryIndex])

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="flex h-full w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {bannerImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="h-full w-full flex-shrink-0 object-cover brightness-110 contrast-105"
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/65"></div>
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                  Sharp Future Academy
                  <span className="mt-2 block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Design Your Future</span>
                  <span className="mt-2 block text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Lenin Chowk, Muzaffarpur</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/95 text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  Sharp Future Academy, celebrating several years of vocational training excellence, has transformed countless
                  lives by placing students in diverse roles like graphic designers, animators, and AV editors at top
                  studios worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 shadow-lg shadow-primary/20 w-full sm:w-auto" onClick={() => window.open("tel:+917319792555", "_self")}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/917319792555?text=Hi, I would like to know more about your courses",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Several</div>
                  <div className="text-sm text-white/85">Years Excellence</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">Global</div>
                  <div className="text-sm text-white/85">Placements</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Industry</div>
                  <div className="text-sm text-white/85">Leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
