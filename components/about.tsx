import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Eye, Heart, Award, Users, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Sharp Future Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sharp Future Academy, celebrating several years of vocational training excellence, has transformed countless
            lives by placing students in diverse roles like graphic designers, animators, and AV editors at top studios
            worldwide. Students achieve their highest creative potential, winning awards and working globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/modern-animation-studio-with-students-working-on-c.jpg"
              alt="Sharp Future Academy Studio"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Sharp Future Academy?</h3>
            <div className="space-y-4">
              {[
                "Several years of proven excellence in vocational training",
                "Students working in Hollywood and Bollywood movies",
                "Comprehensive Animation & VFX courses",
                "Industry-relevant curriculum with hands-on training",
                "Strong placement record in top studios worldwide",
                "Award-winning students and global recognition",
                "Expert faculty with real industry experience",
                "State-of-the-art infrastructure and latest software",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Academy Stars</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
              Sharp Future Academy students are the real champions and their names will always be etched in the Academy
              Hall of Fame, where their accomplishments will inspire a whole new generation of students in the years to
              come. Here's a list of our students who have made their mark in the Media and Entertainment industry by
              working in Hollywood and Bollywood movies as VFX Artist, Final QC Artist, Lighting Artist, Animator, Asst.
              Creative Head, etc.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold">VFX Artists</h4>
                <p className="text-muted-foreground text-sm">Working on Hollywood blockbusters and Bollywood hits</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-bold">Creative Heads</h4>
                <p className="text-muted-foreground text-sm">Leading creative teams at top animation studios</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold">Global Recognition</h4>
                <p className="text-muted-foreground text-sm">Award-winning work recognized internationally</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide world-class vocational training in Animation, VFX, Gaming, and Multimedia, transforming lives
                and creating industry-ready professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading institute that places students in top studios worldwide, maintaining our legacy of several
                years of training excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, innovation, and student success drive everything we do. We believe in nurturing talent and
                helping students achieve their highest creative potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
