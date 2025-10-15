import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Globe } from "lucide-react"

export function ArenaPlacement() {
  return (
    <section id="arena-placements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Arena <span className="text-primary">Placements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our students are placed in top companies worldwide, working in diverse roles across the media and
            entertainment industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Top Studios</h3>
              <p className="text-muted-foreground">Placements in leading animation and VFX studios</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Diverse Roles</h3>
              <p className="text-muted-foreground">Graphic designers, animators, and AV editors</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Industry Recognition</h3>
              <p className="text-muted-foreground">Students winning awards and recognition</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Global Opportunities</h3>
              <p className="text-muted-foreground">International placements and career growth</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
