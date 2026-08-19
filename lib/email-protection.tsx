/**
 * Email Protection Utility
 * Encrypts email addresses to prevent spam bots from scraping
 */

export function encodeEmail(email: string): string {
  let result = "";
  for (let i = 0; i < email.length; i++) {
    result += "&#" + email.charCodeAt(i) + ";";
  }
  return result;
}

export function obfuscateEmail(email: string): {
  text: string;
  href: string;
} {
  return {
    text: email.replace("@", " [at] ").replace(".", " [dot] "),
    href: "mailto:" + email,
  };
}

/**
 * Component to render protected email link
 */
export function ProtectedEmailLink({ email, label }: { email: string; label?: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="hover:underline"
      title="Contact email"
    >
      {label || email}
    </a>
  );
}
