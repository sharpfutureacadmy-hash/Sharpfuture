"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ContactForm() {
  const [consent, setConsent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!consent) {
      e.preventDefault()
    }
    // You can add your submission logic here.
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block text-slate-900">First Name</label>
          <Input placeholder="Enter your first name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block text-slate-900">Last Name</label>
          <Input placeholder="Enter your last name" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block text-slate-900">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block text-slate-900">Phone</label>
        <Input type="tel" placeholder="Enter your phone number" />
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

      {/* Consent row above the submit button, as requested */}
      <div className="flex items-start gap-3 rounded-md border border-border p-3">
        <Checkbox
          id="privacy-consent"
          checked={consent}
          onCheckedChange={(v) => setConsent(Boolean(v))}
          aria-describedby="privacy-consent-hint"
        />
        <div className="text-sm">
          <label htmlFor="privacy-consent" className="font-medium text-slate-900">
            I consent to the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Privacy Policy
            </a>
            .
          </label>
          <p id="privacy-consent-hint" className="text-muted-foreground mt-1">
            By consenting, you agree that your data may be stored and that you may receive calls/SMS regarding your
            enquiry. Read our{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Terms &amp; Conditions
            </a>
            .
            <PrivacyPolicyPreview />
          </p>
        </div>
      </div>

      {!consent && (
        <p className="text-sm text-destructive" role="alert">
          Please check the consent box to proceed.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={!consent} aria-disabled={!consent}>
        Send Message
      </Button>
    </form>
  )
}

function PrivacyPolicyPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="ml-2 underline text-primary">
          View summary
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Privacy Policy Summary</DialogTitle>
          <DialogDescription>
            We collect your name, email, phone, and enquiry details to respond to your request and provide course
            information. By providing your phone number, you consent to receive calls and SMS messages related to your
            enquiry, services, and promotional offers, in accordance with applicable laws and regulations.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm space-y-3">
          <p>Read the full policy and terms for complete details on data handling, retention, and your rights.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Open Privacy Policy
            </a>
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Open Terms & Conditions
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
