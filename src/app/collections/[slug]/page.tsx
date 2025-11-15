import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/tool-card";
import { filterToolsByCollection, getCollectionBySlug, getCollections } from "@/lib/tools";

export function generateStaticParams() {
  return getCollections().map((collection) => ({ slug: collection.slug }));
}

type CollectionPageParams = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CollectionPageParams): Promise<Metadata> {
  const { slug } = params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return { title: "Collection not found" };
  }

  return {
    title: `${collection.title} Toolkit`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageParams) {
  const { slug } = params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const tools = filterToolsByCollection(collection);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <header className="rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">{collection.heroTag ?? "Curated stack"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">{collection.title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">{collection.description}</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2 text-xs font-medium uppercase tracking-[0.28em] text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {tools.length} tools • built for shipping fast
        </div>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300">
        Want a custom playbook?{" "}
        <Link href="mailto:hello@toolvault.com" className="font-medium text-purple-600 hover:underline dark:text-purple-300">
          Reach out with your use case →
        </Link>
      </div>
    </div>
  );
}

