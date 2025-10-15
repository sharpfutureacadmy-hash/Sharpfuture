import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Sharp Future Academy",
  description:
    "This Privacy Policy explains how Sharp Future Academy collects, uses, and protects your personal information when you visit our website or use our services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 prose prose-slate max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to <strong>Sharp Future Academy</strong> (“we”, “our”, “us”). This Privacy Policy explains how we
        collect, use, and protect your personal information when you visit{" "}
        <a href="https://www.sharpfuture-edu.in" target="_blank" rel="noopener noreferrer">
          https://www.sharpfuture-edu.in
        </a>{" "}
        (“Website”) or use our educational services (“Services”).
      </p>
      <p>
        By accessing or using our Website, you agree to the terms of this Privacy Policy. You will also be asked to
        confirm your consent through a checkbox reading <strong>“I consent to the Privacy Policy”</strong> before
        submitting any form or registration on our Website.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <h3>a. Personal Information (you provide voluntarily)</h3>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Educational details or preferences (optional)</li>
      </ul>

      <h3>b. Usage and Technical Data (collected automatically)</h3>
      <ul>
        <li>IP address, browser type and version</li>
        <li>Pages visited, time spent, and user interactions</li>
        <li>Device information, cookies, and analytics data</li>
      </ul>

      <hr />

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and improve educational content and services</li>
        <li>Personalize your learning experience</li>
        <li>Respond to inquiries and support requests</li>
        <li>Send updates, offers, and promotional communications (only with your consent)</li>
        <li>Ensure website security and prevent fraud</li>
      </ul>

      <hr />

      <h2>3. Opt-In / Sign-Up Policy</h2>
      <p>
        <strong>
          By providing your phone number during the sign-up or contact process, you explicitly consent to receive calls
          and SMS messages from Sharp Future Academy regarding your account, services, and promotional offers, in
          accordance with applicable laws and regulations.
        </strong>
      </p>
      <p>
        If at any time you wish to stop receiving promotional messages, you can opt out by replying “STOP” or emailing
        us at <a href="mailto:privacy@sharpfuture-edu.in">privacy@sharpfuture-edu.in</a>.
      </p>

      <hr />

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tools to enhance your experience. These help us remember preferences and login
        sessions, analyze performance and user activity, and improve our content and services. You may disable cookies
        in your browser settings, though some parts of the website may not function properly without them.
      </p>
      <p>
        For more details, please see our Cookie Policy (if applicable) or contact us at{" "}
        <a href="mailto:privacy@sharpfuture-edu.in">privacy@sharpfuture-edu.in</a>.
      </p>

      <hr />

      <h2>5. Data Storage and Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal data from unauthorized access,
        alteration, or disclosure. Your data is stored securely on servers within India or with trusted third-party
        service providers that comply with data protection laws.
      </p>

      <hr />

      <h2>6. Sharing of Information</h2>
      <p>We do not sell or rent your personal data. We may share data only with:</p>
      <ul>
        <li>
          Authorized service providers or vendors assisting in operations (e.g., hosting, analytics, SMS gateways)
        </li>
        <li>Legal authorities, if required by law</li>
      </ul>
      <p>All third-party partners are obligated to maintain data confidentiality.</p>

      <hr />

      <h2>7. Your Rights</h2>
      <ul>
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent for marketing communications</li>
        <li>Request clarification on how your data is processed</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:privacy@sharpfutureacademy.com">privacy@sharpfutureacademy.com</a>.
      </p>

      <hr />

      <h2>8. Consent Checkbox Requirement</h2>
      <p>
        Before submitting any form or registration, users must check the box labeled{" "}
        <strong>“I consent to the Privacy Policy.”</strong> This confirms that you have read, understood, and agreed to
        our Privacy Policy and consent to the collection and use of your data as described herein.
      </p>

      <hr />

      <h2>9. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any significant changes will be communicated on this page with
        an updated “Last Updated” date.
      </p>

      <hr />

      <h2>10. Contact Information</h2>
      <p>
        For questions or concerns, please contact:
        <br />
        <strong>Email:</strong> <a href="mailto:privacy@sharpfuture-edu.in">privacy@sharpfuture-edu.in</a>
        <br />
        <strong>Organization:</strong> Sharp Future Academy
        <br />
        <strong>Website:</strong>{" "}
        <a href="https://www.sharpfuture-edu.in" target="_blank" rel="noopener noreferrer">
          https://www.sharpfuture-edu.in
        </a>
      </p>

      <p className="text-sm text-muted-foreground">Last Updated: 2025-10-15</p>
    </main>
  )
}
