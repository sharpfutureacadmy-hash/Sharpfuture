export const SEO_KEYWORDS = [
  // Brand & Variations
  "Sharp Future Academy",
  "Sharp Future Academy Muzaffarpur",
  "Sharp Future Academy Bihar",
  "Sharp Future Institute",
  "Sharp Future Lenin Chowk",

  // Creative & Multimedia
  "animation institute Muzaffarpur",
  "animation course in Muzaffarpur",
  "best animation institute in Bihar",
  "graphic design course Muzaffarpur",
  "best graphic design institute in Bihar",
  "VFX training Muzaffarpur",
  "VFX course in Bihar",
  "video editing course Muzaffarpur",
  "digital photography course Muzaffarpur",
  "game design course Bihar",
  "game art and design training",
  "Graphics animation course Muzaffarpur",
  "interior design course Muzaffarpur",
  "CAD architectural modeling course Muzaffarpur",

  // IT, Coding & Web Development
  "web development course Muzaffarpur",
  "web designing institute in Muzaffarpur",
  "coding classes in Muzaffarpur",
  "software development training Muzaffarpur",
  "UI UX design course Muzaffarpur",
  "digital marketing course Muzaffarpur",
  "best digital marketing institute in Bihar",

  // BCA & MCA Internship / Live Project Training
  "BCA internship Muzaffarpur",
  "BCA industrial training Bihar",
  "BCA live project training",
  "BCA software development internship",
  "BCA web development internship",
  "MCA internship Muzaffarpur",
  "MCA industrial training Bihar",
  "MCA live project training",
  "MCA software development internship",
  "MCA web development internship",
  "summer internship for BCA MCA students in Bihar",

  // Placement & Career
  "job oriented courses in Muzaffarpur",
  "job oriented courses Bihar",
  "career training institute Muzaffarpur",
  "IT training institute Bihar",
  "skill development institute Muzaffarpur",
  "industry oriented training Bihar with placement",
];

export const SITE_CONFIG = {
  name: "Sharp Future Academy",
  legalName: "NN TRADING ENTERPRISES PRIVATE LIMITED",
  title: "Sharp Future Academy | Best Animation, VFX, Web Design & IT Training Institute in Muzaffarpur",
  description:
    "Sharp Future Academy in Lenin Chowk, Muzaffarpur, Bihar offers industry-certified courses and BCA/MCA internships in Animation, VFX, Web Development, Graphic Design, Digital Marketing, and UI/UX with 100% placement support & live projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sharpfuture-edu.in",
  ogImage: "/og-image.jpg",
  logo: "/sharp-future-academy-logo.png",
  twitterHandle: "@sharpfuture",
  telephone: "+91-7319792555",
  email: "info@sharpfuture-edu.in",
  location: {
    streetAddress: "342/109, 1st Floor, Opposite Prashant Honda Showroom, Lenin Chowk",
    city: "Muzaffarpur",
    state: "Bihar",
    postalCode: "842001",
    country: "India",
    addressCountry: "IN",
  },
  geo: {
    latitude: "26.1209",
    longitude: "85.3648",
  },
  openingHours: [
    "Monday-Saturday 09:00-19:00",
    "Sunday 10:00-17:00",
  ],
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  legalName: SITE_CONFIG.legalName,
  alternateName: [
    "Sharp Future Academy Muzaffarpur",
    "Sharp Future Academy Bihar",
    "Sharp Future Academy",
    "Sharp Future",
    "Star Future Academy Muzaffarpur",
    "Sharp Future Institute",
  ],
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/sharp-future-academy-logo.png`,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.telephone,
  email: SITE_CONFIG.email,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI, Net Banking, EMI",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", "name": "Priya Sharma" },
      datePublished: "2025-05-12",
      reviewBody: "Sharp Future Academy transformed my passion into a career. The faculty is amazing and the curriculum is industry-relevant. I landed my dream job at DreamWorks!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", "name": "Rahul Kumar" },
      datePublished: "2025-07-18",
      reviewBody: "The hands-on training and real-world projects at Sharp Future Academy prepared me perfectly for the VFX industry. Highly recommend to anyone serious about VFX.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", "name": "Sneha Patel" },
      datePublished: "2025-09-04",
      reviewBody: "Sharp Future Academy's game design course gave me all the skills I needed. The placement support was excellent and I got placed at Ubisoft within 2 months of completion.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", "name": "Amit Singh" },
      datePublished: "2025-10-10",
      reviewBody: "The web design course was comprehensive and practical. I started freelancing immediately after the course and now have my own web design agency.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Admissions & Student Counselling",
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Professional Training Courses & Internships",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Animation & VFX Courses",
          description: "Professional training in 2D/3D Animation, Character Design and Visual Effects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Web Designing & Coding",
          description: "Full-stack web development and responsive UI design with live projects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "BCA & MCA Industrial Internship",
          description: "Live project internship and placement training for BCA and MCA students.",
        },
      },
    ],
  },
};

export const FAQ_DATA = [
  {
    question: "Who can apply for Sharp Future Academy courses?",
    answer:
      "Anyone who is passionate about Animation, VFX, Gaming, Design, or Digital Media. Beginners are welcome—no prior design or coding background is required for foundation tracks.",
  },
  {
    question: "What is the course duration and schedule?",
    answer:
      "Programs range from 2-month short modules to 41-month advanced diplomas. We offer weekday, weekend, and fast-track batches. Exact timelines vary by course and pace.",
  },
  {
    question: "How much are the fees? Do you offer EMI?",
    answer:
      "Fees depend on the program depth and duration. We provide flexible EMI plans and occasional scholarships based on merit or need. Speak with our counsellor for a personalized fee plan.",
  },
  {
    question: "Which software and tools will I learn?",
    answer:
      "Based on your track, modules include industry tools like Adobe Creative Cloud, Blender/Maya, 3ds Max, Unreal/Unity (for real-time), DaVinci Resolve, Nuke, Substance Suite, ZBrush and more—kept current with industry updates.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. Our placement cell supports with portfolio reviews, mock interviews, referrals, and placement drives with studios, agencies, and production houses. Your work portfolio is the key focus.",
  },
  {
    question: "Is there a demo class or counselling session?",
    answer:
      "Absolutely. Book a free counselling + demo session to experience the class flow, tools, and mentor interaction before enrolling.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, you'll receive an industry-recognized certificate on successful completion, along with a capstone portfolio review.",
  },
  {
    question: "What are the system requirements for online learners?",
    answer:
      "A modern Windows/macOS machine with 16GB RAM (32GB recommended for 3D/VFX), a mid-range GPU, and stable broadband (20 Mbps+). We'll share an exact spec sheet per track.",
  },
  {
    question: "How do I apply?",
    answer:
      'Click "Apply Now", fill your details, and our counsellor will call to schedule a counselling/demo. You can also walk in to our Lenin Chowk centre for on-the-spot guidance.',
  },
];


