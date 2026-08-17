"use client"

import { Card } from "@/components/ui/card"

const galleryItems = [
  { title: "", image: "/student_gallery/DSC03350.jpg" },
  { title: "", image: "/student_gallery/DSC03351.jpg" },
  { title: "", image: "/student_gallery/DSC03352.jpg" },
  { title: "", image: "/student_gallery/DSC03353.jpg" },
  { title: "", image: "/student_gallery/DSC03354.jpg" },
  { title: "", image: "/student_gallery/DSC03355.jpg" },
  { title: "", image: "/student_gallery/DSC03356.jpg" },
  { title: "", image: "/student_gallery/DSC03357.jpg" },
  { title: "", image: "/student_gallery/DSC03358.jpg" },
  { title: "", image: "/student_gallery/DSC_0650.jpg" },
  { title: "", image: "/student_gallery/DSC_0704.jpg" },
  { title: "", image: "/student_gallery/DSC_0705.jpg" },
  { title: "", image: "/student_gallery/DSC_0706.jpg" },
  { title: "", image: "/student_gallery/DSC_0708.jpg" },
  { title: "", image: "/student_gallery/DSC_0710.jpg" },
  { title: "", image: "/student_gallery/DSC_0712.jpg" },
  { title: "", image: "/student_gallery/DSC_0714.jpg" },
  { title: "", image: "/student_gallery/DSC_0715.jpg" },
  { title: "", image: "/student_gallery/DSC_0716.jpg" },
  { title: "", image: "/student_gallery/DSC_0717.jpg" },
  { title: "", image: "/student_gallery/DSC_0718.jpg" },
  { title: "", image: "/student_gallery/DSC_0719.jpg" },
  { title: "", image: "/student_gallery/DSC_0720.jpg" },
  { title: "", image: "/student_gallery/DSC_0721.jpg" },
  { title: "", image: "/student_gallery/DSC_0722.jpg" },
  { title: "", image: "/student_gallery/DSC_0723.jpg" },
  { title: "", image: "/student_gallery/DSC_0724.jpg" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Student <span className="text-primary">Gallery</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore the amazing work created by our talented students across
            various courses and specializations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title || `Student Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}