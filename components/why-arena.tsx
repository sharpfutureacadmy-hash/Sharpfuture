import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Zap } from "lucide-react"

export function WhyArena() {
  return (
    <section id="why-arena" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Why <span className="text-primary">Sharp Future Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Sharp Future Academy, celebrating several years of vocational training excellence, has transformed countless
            lives by placing students in diverse roles like graphic designers, animators, and AV editors at top studios
            worldwide. Students achieve their highest creative potential, winning awards and working globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Several Years Excellence</h3>
              <p className="text-muted-foreground">Celebrating over two decades of vocational training excellence</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Global Placements</h3>
              <p className="text-muted-foreground">
                Students placed at top studios worldwide in diverse creative roles
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Industry Experts</h3>
              <p className="text-muted-foreground">Learn from professionals working in animation and VFX industry</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Award Winners</h3>
              <p className="text-muted-foreground">Students achieve their highest creative potential and win awards</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
