"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { sendInquiryEmail } from "@/app/actions/sendInquiry"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  message: string
}

export default function ContactForm() {
  const [consent, setConsent] = useState(false)
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "consent" | "submit", string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof FormState>(field: K, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function encodeFormData(data: Record<string, string>) {
    return Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&")
  }

  function validate() {
    const newErrors: typeof errors = {}

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required."
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required."
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required."
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number."
    }

    if (!form.course.trim()) {
      newErrors.course = "Please select a course interest."
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message."
    }

    if (!consent) {
      newErrors.consent = "You must agree to the privacy policy to submit."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (submitting) {
      return
    }

    if (!validate()) {
      return
    }

    setSubmitting(true)

    try {
      const result = await sendInquiryEmail({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        course: form.course,
        message: form.message,
        consent,
        botField: "",
      })

      if (!result || !result.success) {
        setErrors((prev) => ({ ...prev, submit: result?.message || "Something went wrong. Please try again." }))
      } else {
        setSubmitted(true)
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }))
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-sm font-semibold text-emerald-700">Thank you!</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Your message has been sent.</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          We will contact you soon with the right course guidance.
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => {
            setSubmitted(false)
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              course: "",
              message: "",
            })
            setConsent(false)
            setErrors({})
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" value="" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-first-name" className="text-sm font-medium mb-2 block text-slate-900">
            First Name
          </label>
          <Input
            id="contact-first-name"
            name="firstName"
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            placeholder="Enter your first name"
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="contact-last-name" className="text-sm font-medium mb-2 block text-slate-900">
            Last Name
          </label>
          <Input
            id="contact-last-name"
            name="lastName"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium mb-2 block text-slate-900">
          Email
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Enter your email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="text-sm font-medium mb-2 block text-slate-900">
          Phone
        </label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="Enter your phone number"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="contact-course" className="text-sm font-medium mb-2 block text-slate-900">
          Course Interest
        </label>
        <select
          id="contact-course"
          name="course"
          value={form.course}
          onChange={(event) => updateField("course", event.target.value)}
          className="w-full p-3 border border-input rounded-md bg-background"
          aria-invalid={Boolean(errors.course)}
        >
          <option value="">Select a course</option>
          <option value="Animation Prime">Animation Prime</option>
          <option value="VFX Prime">VFX Prime</option>
          <option value="Game Art & Design">Game Art & Design</option>
          <option value="Web Design & Development">Web Design & Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
        {errors.course && <p className="text-sm text-destructive mt-1">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium mb-2 block text-slate-900">
          Message
        </label>
        <Textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your goals and any questions you have"
          rows={4}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3 rounded-md border border-border p-3">
        <Checkbox
          id="popup-consent"
          className="border border-black data-[state=checked]:border-black"
          checked={consent}
          onCheckedChange={(v) => {
            setConsent(Boolean(v))
            setErrors((prev) => ({ ...prev, consent: undefined }))
          }}
          aria-describedby="popup-consent-hint"
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

      {errors.consent && (
        <p className="text-sm text-destructive" role="alert">
          {errors.consent}
        </p>
      )}

      {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={!consent || submitting} aria-disabled={!consent || submitting}>
        {submitting ? "Sending..." : "Send Message"}
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
