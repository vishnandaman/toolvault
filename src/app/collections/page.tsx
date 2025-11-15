import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getCollections, filterToolsByCollection } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Curated Collections",
  description: "Pre-built stacks for marketing, support, design, and operations teams.",
};

export default function CollectionsPage() {
  const allCollections = getCollections();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <header className="flex flex-col gap-4 rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700 shadow-sm dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-200">
          <Sparkles className="h-3.5 w-3.5" />
          Curated Collections
        </span>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Toolkits built for high-impact launches
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
            Ready-to-ship tool combinations. Use them as a blueprint, remix with your stack, and ship faster.
          </p>
        </div>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {allCollections.map((collection) => {
          const tools = filterToolsByCollection(collection);
          return (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group flex h-full items-center gap-6 overflow-hidden rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:hover:-translate-y-1 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30"
            >
              <div className="flex-1 space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
                  {collection.heroTag ?? "Featured stack"}
                </p>
                <h2 className="text-xl font-semibold text-neutral-900 transition dark:text-white dark:group-hover:text-purple-200">
                  {collection.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{collection.description}</p>
                <div className="pt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Includes {tools.length} tools • Tap to view roadmap →
                </div>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-gradient-to-br from-purple-100 to-pink-100 dark:border-neutral-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

