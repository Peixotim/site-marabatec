import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://colegiomarabatec.com.br/sitemap.xml",
    host: "https://colegiomarabatec.com.br",
  };
}