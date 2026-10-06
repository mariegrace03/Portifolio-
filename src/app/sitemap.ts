import type { MetadataRoute } from "next";

const baseUrl = "https://grace-portfolio-sepia.vercel.app";

const routes = ["", "/about", "/skills", "/projects", "/experience", "/services", "/blog", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
