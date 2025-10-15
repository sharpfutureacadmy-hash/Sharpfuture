"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleDial = () => {
    window.open("tel:+917319792555", "_self")
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917319792555?text=Hi, I would like to apply for courses at Sharp Future Academy. Please provide more details.",
      "_blank",
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 7319792555</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">info@sharpfuture-edu.in</span>
              <span className="lg:hidden hidden sm:inline">Email Us</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Follow us on social media for updates!</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm font-medium">
              Get free career counselling today. Call us:
              <span className="hidden lg:inline">
                {" "}
                +91 73197 92555 | +91 90310 46031 | +91 90310 46033 | +91 94309 58067
              </span>
              <span className="lg:hidden"> +91 73197 92555</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/sharp-future-academy-logo.jpeg" alt="Sharp Future Academy Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">Sharp Future Academy</h1>
              <p className="text-xs text-muted-foreground">Design Your Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={handleDial} className="flex items-center gap-2 bg-transparent">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button size="sm" onClick={handleWhatsApp} className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors py-2">
                Courses
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors py-2">
                Team
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors py-2">
                Gallery
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors py-2">
                Testimonials
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors py-2">
                FAQ
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent flex items-center gap-2"
                  onClick={handleDial}
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button className="w-full flex items-center gap-2" onClick={handleWhatsApp}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
