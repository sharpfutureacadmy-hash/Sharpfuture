"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const galleryItems = [
  {
    title: "Student 3D Animation Project",
    category: "Animation",
    image: "/3d-animated-character-in-action-scene.jpg",
  },
  {
    title: "VFX Compositing Work",
    category: "VFX",
    image: "/visual-effects-compositing-with-explosions.jpg",
  },
  {
    title: "Game Environment Design",
    category: "Gaming",
    image: "/fantasy-game-environment-with-castle.jpg",
  },
  {
    title: "Character Design Portfolio",
    category: "Animation",
    image: "/cartoon-character-design-sheet.jpg",
  },
  {
    title: "Motion Graphics Project",
    category: "VFX",
    image: "/motion-graphics-logo-animation.jpg",
  },
  {
    title: "Web Design Project",
    category: "Web Design",
    image: "/modern-website-design-mockup.jpg",
  },
  {
    title: "Digital Art Creation",
    category: "Graphics",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Game UI Design",
    category: "Gaming",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = ["All", "Animation", "VFX", "Gaming", "Web Design", "Graphics"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Student <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore the amazing work created by our talented students across various courses and specializations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">{item.title}</h3>
                    <Badge variant="outline" className="bg-white/90 text-slate-900 border-white/50">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
