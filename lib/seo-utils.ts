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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Sharp Future Academy",
      url: "https://sharpfuture.com",
    },
    image: course.image,
    learningResourceType: "Course",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sharp Future Academy",
    description:
      "Leading animation, VFX, game design, web development, and digital marketing institute in Muzaffarpur, Bihar",
    url: "https://sharpfuture.com",
    telephone: "+91-7319792555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lenin Chowk",
      addressLocality: "Muzaffarpur",
      addressRegion: "Bihar",
      postalCode: "842002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.1209",
      longitude: "85.3648",
    },
    sameAs: [
      "https://www.facebook.com/sharpfutureacademy",
      "https://www.instagram.com/sharpfutureacademy",
      "https://www.linkedin.com/company/sharpfutureacademy",
      "https://www.youtube.com/sharpfutureacademy",
    ],
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
