import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Sharp Future Academy",
  description: "Terms & Conditions for using Sharp Future Academy's website and services.",
}

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12 prose prose-slate max-w-3xl">
      <h1>Terms & Conditions</h1>
      <p>
        By using this website and submitting an enquiry, you agree to these Terms & Conditions. We provide course
        information and related services subject to applicable laws and the policies described here and in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>Communications Consent</h2>
      <p>
        When you provide your phone number or email, you consent to be contacted by call, SMS, or email for updates,
        service information, and promotional offers. You can opt out of promotional messages at any time by contacting
        us.
      </p>

      <h2>Use of Website</h2>
      <ul>
        <li>You will provide accurate information when submitting any form.</li>
        <li>You will not misuse or attempt to disrupt the website.</li>
        <li>Content on this site is owned by Sharp Future Academy or its licensors.</li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>
        We strive for accuracy but do not guarantee that all information is error-free. We are not liable for any
        indirect or consequential loss arising from use of this website.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms at any time. Continued use of the site indicates acceptance of the updated terms.</p>

      <p className="text-sm text-muted-foreground">Last updated: 2025-10-15</p>
    </main>
  )
}
