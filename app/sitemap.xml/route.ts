import { courseData } from "@/lib/course";
import { SITE_CONFIG } from "@/lib/seo-keywords";

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    "",
    "/privacy-policy",
    "/terms",
  ];

  // Generate static page URLs
  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: page === "" ? "daily" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));

  // Generate course URLs
  const courseUrls = courseData.map((course) => ({
    url: `${baseUrl}/course/${course.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Combine all URLs
  const allUrls = [...staticUrls, ...courseUrls];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
