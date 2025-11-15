import Link from "next/link";
import { ArrowRight, Sparkles, Compass, LibraryBig } from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { getAllTools, getCollections } from "@/lib/tools";
import { formatNumber } from "@/lib/utils";

export default function Home() {
  const tools = getAllTools();
  const collections = getCollections();
  const featuredTools = tools.filter((tool) => tool.featured).slice(0, 4);
  const newestTools = [...tools].sort((a, b) => b.launchYear - a.launchYear).slice(0, 3);

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8">
      <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/50 bg-white p-10 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl dark:bg-purple-500/10" aria-hidden />
        <div className="absolute -left-14 bottom-0 h-40 w-40 rounded-full bg-pink-100/40 blur-3xl dark:bg-pink-500/10" aria-hidden />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-purple-700 shadow-sm dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-200">
              <Sparkles className="h-3.5 w-3.5" /> Curated Collection
            </span>
            <div className="space-y-3">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                Build better products with <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">ToolVault</span>
              </h1>
              <p className="max-w-lg text-lg leading-7 text-neutral-700 dark:text-neutral-300">
                Discover the most impactful tools for design, marketing, automation, and customer experience. Search, compare, and explore curated collections.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30"
              >
                Browse the directory
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30 dark:hover:text-purple-200"
              >
                See curated stacks
              </Link>
            </div>
            <dl className="grid grid-cols-1 gap-4 pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">Tools indexed</dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">{formatNumber(tools.length)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">Collections</dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">{formatNumber(collections.length)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">Latest addition</dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">{newestTools[0]?.launchYear ?? "—"}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
            <div className="flex w-full items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Spotlight tools</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Handpicked favorites from our directory</p>
              </div>
              <Compass className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-3">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 shadow-sm transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:-translate-y-0.5 dark:hover:border-purple-500/40 dark:hover:bg-purple-900/40 dark:hover:text-purple-200"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="inline-flex items-center gap-2 text-xs text-neutral-500 transition group-hover:translate-x-1 dark:text-neutral-400 dark:group-hover:text-purple-200">
                    {tool.category}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Recently added</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Latest tools added to the directory</p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30"
          >
            View all tools
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {newestTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} showDescription={false} className="bg-white shadow-lg dark:bg-neutral-900" />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Curated collections</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Hand-picked stacks to ship faster across common workflows</p>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30"
          >
            All collections
            <LibraryBig className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:hover:-translate-y-1 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">
                  <span>{collection.heroTag ?? "Curated"}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 transition dark:text-white dark:group-hover:text-purple-200">
                  {collection.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{collection.description}</p>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-gradient-to-br from-purple-100 to-pink-100 dark:border-neutral-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <LibraryBig className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
