import { SITE_CONFIG } from "./seo-keywords";

/**
 * SEO Utilities for structured data and schema generation
 */

export function generateCourseSchema(course: {
  id: number;
  title: string;
  description: string;
  duration: string;
  fees: string;
  eligibility: string;
  image: string;
  overview?: string;
}) {
  const courseUrl = `${SITE_CONFIG.url}/course/${course.id}`;
  const imageUrl = course.image.startsWith("http")
    ? course.image
    : `${SITE_CONFIG.url}${course.image.startsWith("/") ? "" : "/"}${course.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": courseUrl,
    name: course.title,
    description: course.overview || course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_CONFIG.name,
      sameAs: SITE_CONFIG.url,
    },
    image: imageUrl,
    url: courseUrl,
    inLanguage: "en-IN",
    timeRequired: course.duration,
    educationalCredentialAwarded: "Industry Recognized Certificate & Portfolio Review",
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "INR",
      price: course.fees.replace(/[^\d]/g, "") || "0",
      availability: "https://schema.org/InStock",
      url: courseUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "blended"],
      location: {
        "@type": "Place",
        name: `${SITE_CONFIG.name} Campus`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.location.streetAddress,
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.state,
          postalCode: SITE_CONFIG.location.postalCode,
          addressCountry: SITE_CONFIG.location.addressCountry,
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "320",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,
    priceRange: "₹₹",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/sharp-future-academy-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.streetAddress,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.postalCode,
      addressCountry: SITE_CONFIG.location.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Muzaffarpur",
      },
      {
        "@type": "State",
        name: "Bihar",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/sharpfutureacademy",
      "https://www.instagram.com/sharpfutureacademy",
      "https://www.linkedin.com/company/sharpfutureacademy",
      "https://www.youtube.com/sharpfutureacademy",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

