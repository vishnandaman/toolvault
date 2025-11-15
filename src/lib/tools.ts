import { collections, tools, type Collection, type CollectionFilter, type PricingTier, type Tool, type ToolCategory } from "@/data/tools";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalize = (value: string) => value.toLowerCase();

const matchesFilter = (tool: Tool, filter: CollectionFilter) => {
  switch (filter.type) {
    case "category":
      return tool.category === filter.value;
    case "pricing":
      return tool.pricing === filter.value;
    case "tag":
      return tool.tags.some((tag) => normalize(tag) === normalize(filter.value));
    case "ratingAtLeast":
      return tool.rating >= filter.value;
    case "launchedAfter":
      return tool.launchYear >= filter.value;
    default:
      return true;
  }
};

export const getAllTools = (): Tool[] => tools;

export const getToolBySlug = (slug: string): Tool | undefined =>
  tools.find((tool) => tool.slug === slug);

export const getAllCategories = (): ToolCategory[] =>
  Array.from(new Set(tools.map((tool) => tool.category))).sort();

export const getAllPricing = (): PricingTier[] =>
  Array.from(new Set(tools.map((tool) => tool.pricing))).sort();

export const getAllTags = (): string[] =>
  Array.from(new Set(tools.flatMap((tool) => tool.tags.map((tag) => normalize(tag)))))
    .map((tag) =>
      tools.find((tool) => tool.tags.some((t) => normalize(t) === tag))?.tags.find((t) => normalize(t) === tag) ?? tag,
    )
    .sort((a, b) => a.localeCompare(b));

export const getCollections = (): Collection[] => collections;

export const getCollectionBySlug = (slug: string): Collection | undefined =>
  collections.find((collection) => collection.slug === slug);

export const filterToolsByCollection = (collection: Collection): Tool[] =>
  tools.filter((tool) => collection.filters.every((filter) => matchesFilter(tool, filter)));

export const filterToolsByCategory = (category: ToolCategory): Tool[] =>
  tools.filter((tool) => tool.category === category);

export const buildCategorySlug = (category: ToolCategory) => slugify(category);

export const resolveCategoryFromSlug = (slug: string): ToolCategory | undefined =>
  getAllCategories().find((category) => buildCategorySlug(category) === slug);

export const searchTools = (query: string): Tool[] => {
  const searchTerm = query.trim().toLowerCase();
  if (!searchTerm) return tools;

  return tools.filter((tool) => {
    const searchText = [
      tool.name,
      tool.tagline,
      tool.description,
      tool.category,
      tool.tags.join(" "),
      tool.useCases.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return searchText.includes(searchTerm);
  });
};

