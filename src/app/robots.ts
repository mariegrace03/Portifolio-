import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://grace-portfolio-sepia.vercel.app/sitemap.xml",
  };
}
