"use server"

type InquiryEmailPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  message: string
  consent: boolean
  botField?: string
}

const RESEND_API_URL = "https://api.resend.com/emails"

export async function sendInquiryEmail(data: InquiryEmailPayload) {
  if (data.botField && data.botField.trim().length > 0) {
    throw new Error("Bot submission detected.")
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromAddress = process.env.RESEND_FROM
  const toAddress = process.env.RESEND_TO || "sharpfutureacadmy@gmail.com"

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.")
  }

  if (!fromAddress) {
    throw new Error("Missing RESEND_FROM environment variable.")
  }

  const subject = `New Career Inquiry from ${data.firstName} ${data.lastName}`
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
      <h1 style="font-size: 22px; margin-bottom: 0.5rem;">New Sharpfuture Inquiry</h1>
      <p>A new inquiry has been submitted through the Sharpfuture enquiry form.</p>
      <h2 style="font-size: 18px; margin-top: 1.5rem;">Contact details</h2>
      <ul style="list-style: none; padding: 0;">
        <li><strong>First name:</strong> ${data.firstName}</li>
        <li><strong>Last name:</strong> ${data.lastName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Course interest:</strong> ${data.course}</li>
      </ul>
      <h2 style="font-size: 18px; margin-top: 1.5rem;">Message</h2>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
      <p style="margin-top: 1.5rem; font-size: 14px; color: #555;">Consent given: ${data.consent ? "Yes" : "No"}</p>
    </div>
  `

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      reply_to: data.email,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend request failed: ${response.status} ${response.statusText} - ${errorText}`)
  }

  return await response.json()
}
