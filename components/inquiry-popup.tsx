"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function InquiryPopup() {
  const [open, setOpen] = useState(true)
  const [consent, setConsent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!consent) {
      e.preventDefault()
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} size="lg" className="w-full">
        Open Inquiry Form
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[560px] rounded-2xl p-0 overflow-hidden border-0 shadow-2xl">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-600 p-5 text-primary-foreground">
            <DialogHeader className="text-left space-y-2">
              <DialogTitle className="text-2xl font-semibold">Start Your Career Enquiry</DialogTitle>
              <DialogDescription className="text-primary-foreground/90 text-sm">
                Share your details and our team will guide you towards the right course.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-5 space-y-4 bg-background">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-900">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-900">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-900">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-900">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-slate-900">Course Interest</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select a course</option>
                  <option>Animation Prime</option>
                  <option>VFX Prime</option>
                  <option>Game Art & Design</option>
                  <option>Web Design & Development</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-slate-900">Message</label>
                <Textarea placeholder="Tell us about your goals and any questions you have" rows={4} />
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border p-3">
                <Checkbox
                    id="popup-consent"
                    className="border border-black data-[state=checked]:border-black"
                    checked={consent}
                    onCheckedChange={(v) => setConsent(Boolean(v))}
                    aria-describedby="popup-consent-hint"
                />
                <div className="text-sm">
                  <label htmlFor="popup-consent" className="font-medium text-slate-900">
                    I consent to the{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                      Privacy Policy
                    </a>
                    .
                  </label>
                  <p id="popup-consent-hint" className="text-muted-foreground mt-1">
                    By consenting, you agree that your data may be stored and that you may receive calls/SMS regarding your enquiry.
                  </p>
                </div>
              </div>

              {!consent && (
                <p className="text-sm text-destructive" role="alert">
                  Please check the consent box to proceed.
                </p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={!consent} aria-disabled={!consent}>
                Submit Enquiry
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
