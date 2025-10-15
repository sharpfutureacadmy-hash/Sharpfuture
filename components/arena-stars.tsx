import { Card, CardContent } from "@/components/ui/card"
import { Star, Trophy, Users } from "lucide-react"

export function ArenaStars() {
  return (
    <section id="arena-stars" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Sharp Future <span className="text-primary">Stars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Sharp Future Academy students are the real champions and their names will always be etched in the Academy
            Hall of Fame, where their accomplishments will inspire a whole new generation of students in the years to
            come. Here's a list of our students who have made their mark in the Media and Entertainment industry by
            working in Hollywood and Bollywood movies as VFX Artist, Final QC Artist, Lighting Artist, Animator, Asst.
            Creative Head, etc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Hollywood Projects</h3>
              <p className="text-muted-foreground">Our students work as VFX Artists in major Hollywood productions</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Bollywood Success</h3>
              <p className="text-muted-foreground">
                Alumni working as Lighting Artists and Animators in Bollywood films
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Creative Leadership</h3>
              <p className="text-muted-foreground">
                Students achieving roles as Final QC Artists and Assistant Creative Heads
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
