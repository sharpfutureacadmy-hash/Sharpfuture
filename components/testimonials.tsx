import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Animation Prime",
    company: "DreamWorks Animation",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Sharp Future Academy transformed my passion into a career. The faculty is amazing and the curriculum is industry-relevant. I landed my dream job at DreamWorks!",
  },
  {
    name: "Rahul Kumar",
    course: "VFX Prime",
    company: "Red Chillies VFX",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The hands-on training and real-world projects at Sharp Future Academy prepared me perfectly for the VFX industry. Highly recommend to anyone serious about VFX.",
  },
  {
    name: "Sneha Patel",
    course: "Game Art & Design",
    company: "Ubisoft",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Sharp Future Academy's game design course gave me all the skills I needed. The placement support was excellent and I got placed at Ubisoft within 2 months of completion.",
  },
  {
    name: "Amit Singh",
    course: "Web Design",
    company: "Freelancer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The web design course was comprehensive and practical. I started freelancing immediately after the course and now have my own web design agency.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our successful alumni have to say about their experience at
            Sharp Future Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6">"{testimonial.text}"</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
