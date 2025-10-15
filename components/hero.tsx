"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, Award, Phone, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Sharp Future Academy
                <span className="text-primary block">Design Your Future</span>
                <span className="text-accent">Chhata Chowk, Muzaffarpur</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Sharp Future Academy, celebrating Several years of vocational training excellence, has transformed countless
                lives by placing students in diverse roles like graphic designers, animators, and AV editors at top
                studios worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => window.open("tel:+917319792555", "_self")}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
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

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">Several</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">Global</div>
                <div className="text-sm text-muted-foreground">Placements</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">Industry</div>
                <div className="text-sm text-muted-foreground">Leaders</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/students-learning-animation-and-vfx-in-modern-comp.jpg"
                alt="Sharp Future Academy Students"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
