import type { MetadataRoute } from "next";
import { getAllTools, getCollections, getAllCategories, buildCategorySlug } from "@/lib/tools";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getAllTools();
  const collections = getCollections();
  const categories = getAllCategories();

  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const collectionEntries = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${baseUrl}/categories/${buildCategorySlug(category)}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date().toISOString(),
    },
    ...toolEntries,
    ...collectionEntries,
    ...categoryEntries,
  ];
}

