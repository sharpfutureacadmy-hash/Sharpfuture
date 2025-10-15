import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/sharp-future-academy-logo.jpeg" alt="Sharp Future Academy Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Sharp Future Academy</h3>
                <p className="text-sm opacity-80">Chhata Chowk, muzaffarpur</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Shaping creative futures through world-class education in animation, VFX, gaming, and multimedia.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Youtube className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="opacity-80 hover:opacity-100 transition-opacity">
                  Courses
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-80 hover:opacity-100 transition-opacity">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Animation Prime
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  VFX Prime
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Game Art & Design
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="opacity-80">
                  342/109, 1st Floor, Opposite Prashant Honda Showroom
                  <br />
                  Lenin Chowk, Muzaffarpur, Bihar 842001
                </p>
              </div>
              <div>
                <p className="opacity-80">Phone: +91 7319792555</p>
                <p className="text-white opacity-80">Email: info@sharpfuture-edu.in</p>
              </div>
              <div>
                <p className="opacity-80">
                  Mon-Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Sharp Future Academy. Operated by{" "}
            <span className="font-semibold">NN TRADING ENTERPRISES PRIVATE LIMITED</span>. |
            <a href="/privacy-policy" className="hover:opacity-100 transition-opacity ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms" className="hover:opacity-100 transition-opacity ml-1">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
