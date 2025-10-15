import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

const courses = [
  {
    title: "Animation Prime",
    duration: "18 Months",
    students: "2500+",
    level: "Professional",
    description: "Complete animation course covering 2D & 3D animation, character design, and storytelling.",
    image: "/3d-character-animation-scene.jpg",
    highlights: ["Maya", "After Effects", "Character Animation", "Storyboarding"],
  },
  {
    title: "VFX(Video Editing) Prime",
    duration: "15 Months",
    students: "1800+",
    level: "Professional",
    description: "Master visual effects for films and television with industry-standard tools and techniques.",
    image: "/vfx-compositing-and-special-effects.jpg",
    highlights: ["Nuke", "Houdini", "Compositing", "Motion Graphics"],
  },
  {
    title: "Game Art & Design",
    duration: "12 Months",
    students: "1200+",
    level: "Professional",
    description: "Create stunning game assets, characters, and environments for the gaming industry.",
    image: "/game-character-design-and-3d-modeling.jpg",
    highlights: ["Unity", "Unreal Engine", "3D Modeling", "Texturing"],
  },
  {
    title: "Web Design & Development",
    duration: "8 Months",
    students: "2000+",
    level: "Intermediate",
    description: "Build responsive websites and web applications with modern technologies.",
    image: "/web-development-and-responsive-design.jpg",
    highlights: ["HTML/CSS", "JavaScript", "React", "UI/UX Design"],
  },
  {
    title: "Digital Marketing",
    duration: "6 Months",
    students: "1500+",
    level: "Beginner",
    description: "Learn digital marketing strategies, SEO, social media marketing, and analytics.",
    image: "/digital-marketing-analytics-dashboard.jpg",
    highlights: ["SEO", "Social Media", "Google Ads", "Analytics"],
  },
  {
    title: "Graphic Design",
    duration: "4 Months",
    students: "3000+",
    level: "Beginner",
    description: "Master graphic design principles and create stunning visual communications.",
    image: "/graphic-design-portfolio-and-branding.jpg",
    highlights: ["Photoshop", "Illustrator", "InDesign", "Branding"],
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sharp Future Academy offers comprehensive courses in Animation, VFX, Gaming, Web Design, and Digital
            Marketing designed to give you industry-relevant skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{course.level}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{course.description}</p>

                <div className="flex flex-wrap gap-2">
                  {course.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">Enroll Now</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
