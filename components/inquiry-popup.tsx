"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const courseOptions = [
  "Animation Prime",
  "VFX Prime",
  "Game Art & Design",
  "Web Design & Development",
  "Digital Marketing",
  "Graphic Design",
]

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  message: string
}

export function InquiryPopup() {
  const [open, setOpen] = useState(true)
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "consent" | "submit", string>>>({})
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

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

    if (!form.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
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

    const body = {
      "form-name": "inquiry",
      "bot-field": "",
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      course: form.course,
      message: form.message,
      consent: consent ? "yes" : "no",
    }

    try {
      const response = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(body),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setSubmitted(true)
    } catch (error) {
      setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} size="lg" className="w-full">
        Open Inquiry Form
      </Button>

      <Dialog open={open} onOpenChange={(value) => {
        if (!value) {
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
          setSubmitting(false)
        }
        setOpen(value)
      }}>
        <DialogContent className="sm:max-w-[560px] rounded-2xl p-0 border-0 shadow-2xl">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-600 p-5 text-primary-foreground">
            <DialogHeader className="text-left space-y-2">
              <DialogTitle className="text-2xl font-semibold">Start Your Career Enquiry</DialogTitle>
              <DialogDescription className="text-primary-foreground/90 text-sm">
                Share your details and our team will guide you towards the right course.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-5 space-y-4 bg-background">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <p className="text-sm font-semibold text-emerald-700">Thank you!</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Your enquiry has been sent.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Our team will contact you soon with the right course guidance.
                </p>
                <Button
                  type="button"
                  className="mt-6"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <form
                name="inquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="inquiry" />
                <input type="hidden" name="bot-field" />
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-first-name" className="text-sm font-medium mb-2 block text-slate-900">
                      First Name
                    </label>
                    <Input
                      id="popup-first-name"
                      name="firstName"
                      value={form.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      placeholder="Enter your first name"
                      aria-invalid={Boolean(errors.firstName)}
                    />
                    {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="popup-last-name" className="text-sm font-medium mb-2 block text-slate-900">
                      Last Name
                    </label>
                    <Input
                      id="popup-last-name"
                      name="lastName"
                      value={form.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-email" className="text-sm font-medium mb-2 block text-slate-900">
                      Email
                    </label>
                    <Input
                      id="popup-email"
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
                    <label htmlFor="popup-phone" className="text-sm font-medium mb-2 block text-slate-900">
                      Phone
                    </label>
                    <Input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="Enter your phone number"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-course" className="text-sm font-medium mb-2 block text-slate-900">
                    Course Interest
                  </label>
                  <select
                    id="popup-course"
                    name="course"
                    value={form.course}
                    onChange={(event) => updateField("course", event.target.value)}
                    className="w-full p-3 border border-input rounded-md bg-background"
                    aria-invalid={Boolean(errors.course)}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.course && <p className="text-sm text-destructive mt-1">{errors.course}</p>}
                </div>

                <div>
                  <label htmlFor="popup-message" className="text-sm font-medium mb-2 block text-slate-900">
                    Message
                  </label>
                  <Textarea
                    id="popup-message"
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

                {errors.consent && (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.consent}
                  </p>
                )}

                {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}

                <Button type="submit" size="lg" className="w-full" disabled={!consent || submitting} aria-disabled={!consent || submitting}>
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
