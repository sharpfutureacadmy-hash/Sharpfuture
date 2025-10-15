import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Enquire about Sharp Future Academy Classes today...
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Your future is in your hands with Sharp Future Academy. Our friendly team are on hand to help answer your
            questions and give you the information you need. Complete our form and let's get started.
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Location</h3>
            <p className="text-muted-foreground">Visit us at our convenient location at Lenin Chowk, Muzaffarpur</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3757822547236!2d85.37458697635!3d26.119287793735133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e7be60043d%3A0x90dc84a5cc09f4fb!2sPrashant%20Honda!5e0!3m2!1sen!2sin!4v1750242956335!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharp Future Academy Location"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              342/109, 1st Floor, Opposite Prashant Honda Showroom, Lenin Chowk, Muzaffarpur, Bihar 842001
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://maps.google.com/?q=Lenin+Chowk+Muzaffarpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      342/109, 1st Floor, Opposite Prashant Honda Showroom
                      <br />
                      Chhata Chowk, Muzaffarpur, Bihar 842001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Phone</h4>
                    <p className="text-slate-700">
                      +91 7319792555
                      <br />
                      +91 9430958067
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Email</h4>
                    <p className="text-muted-foreground">
                      info@sharpfuture-edu.in
                      <br />
                      admissions@sharpfuture-edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-slate-950">Quick Enquiry</h4>
              <p className="text-black mb-4">Call us now for immediate assistance and course information.</p>
              <Button size="lg" className="w-full">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 7319792555
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
