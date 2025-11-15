import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/tool-card";
import { buildCategorySlug, filterToolsByCategory, getAllCategories, resolveCategoryFromSlug } from "@/lib/tools";

type CategoryPageParams = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60 * 60;

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    slug: buildCategorySlug(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageParams): Promise<Metadata> {
  const { slug } = await params;
  const category = resolveCategoryFromSlug(slug);

  if (!category) {
    return { title: "Category not found" };
  }

  return {
    title: `${category} Tools`,
    description: `Curated tools tailored for ${category.toLowerCase()} teams.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  const { slug } = await params;
  const category = resolveCategoryFromSlug(slug);

  if (!category) {
    notFound();
  }

  const tools = filterToolsByCategory(category);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          {category} workflows
        </h1>
        <p className="max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
          The best assistants, agents, and creative tools for {category.toLowerCase()} use cases. Start with the featured picks, then explore complementary tools.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}

