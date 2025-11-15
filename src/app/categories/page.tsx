import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getAllTools, buildCategorySlug } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Browse by Category",
  description: "Explore tools grouped by design, marketing, automation, customer support, and more.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();
  const tools = getAllTools();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <header className="space-y-3 rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Browse categories</h1>
        <p className="max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
          Each category includes curated recommendations to help you build a best-in-class stack quickly.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const categoryTools = tools.filter((tool) => tool.category === category);
          return (
            <Link
              key={category}
              href={`/categories/${buildCategorySlug(category)}`}
              className="group flex items-center gap-6 overflow-hidden rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:hover:-translate-y-1 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30"
            >
              <div className="flex-1 space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-600 dark:text-neutral-400">Category</p>
                <h2 className="text-xl font-semibold text-neutral-900 transition dark:text-white dark:group-hover:text-purple-200">
                  {category}
                </h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {categoryTools.length} curated tools & playbooks crafted for teams exploring {category.toLowerCase()} workflows.
                </p>
                <div className="pt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                  Dive in →
                </div>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-gradient-to-br from-purple-100 to-pink-100 dark:border-neutral-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{category.charAt(0)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

