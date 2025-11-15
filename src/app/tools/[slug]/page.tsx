import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { buildCategorySlug, getAllTools, getToolBySlug } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { ToolLogo } from "@/components/tool-logo";

export const revalidate = 60 * 60;

type ToolPageParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageParams): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool not found",
    };
  }

  return {
    title: tool.name,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
      url: `https://toolvault.vercel.app/tools/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: ToolPageParams) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getAllTools()
    .filter(
      (candidate) =>
        candidate.slug !== tool.slug &&
        (candidate.category === tool.category || candidate.tags.some((tag) => tool.tags.includes(tag))),
    )
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-10 lg:px-8">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to directory
      </Link>

      <section className="mt-6 overflow-hidden rounded-[32px] border border-neutral-200/50 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 p-10 shadow-lg dark:border-neutral-800/50 dark:from-neutral-900 dark:via-purple-950/20 dark:to-pink-950/10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <ToolLogo
                name={tool.name}
                logo={tool.logo}
                className="relative h-16 w-16 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-inner shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800"
                imageClassName="p-3"
                fallbackClassName="text-base"
                sizes="80px"
              />
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                  <span>{tool.category}</span>
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span>{tool.pricing}</span>
                </div>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                  {tool.name}
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-7 text-neutral-600 dark:text-neutral-300">{tool.description}</p>

            <div className="grid gap-6 rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-sm ring-1 ring-neutral-900/5 dark:border-neutral-800/50 dark:bg-neutral-900 dark:ring-neutral-500/10 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Pricing</dt>
                <dd className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">{tool.pricingDetail}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Rating</dt>
                <dd className="mt-2 inline-flex items-center gap-2 rounded-full border border-transparent bg-neutral-900 px-4 py-1.5 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
                  ⭐ {tool.rating.toFixed(1)}
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 dark:text-neutral-700">user score</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Launched</dt>
                <dd className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">{tool.launchYear}</dd>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-purple-500/40 dark:hover:bg-purple-500/10 dark:hover:text-purple-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="w-full max-w-xs space-y-4 rounded-[28px] border border-purple-200/60 bg-white p-6 shadow-lg shadow-purple-500/10 dark:border-purple-500/30 dark:bg-purple-950/30">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-600 dark:text-purple-200">Quick actions</h2>
            <Link
              href={tool.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-between rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30"
            >
              Visit website
              <ExternalLink className="h-4 w-4" />
            </Link>
            <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              <p className="font-medium text-neutral-700 dark:text-neutral-200">Integrations</p>
              <ul className="space-y-2 text-sm">
                {tool.integrations.map((integration) => (
                  <li key={integration} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                    <Check className="h-4 w-4 text-purple-500" />
                    {integration}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Where this shines</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tool.useCases.map((useCase) => (
            <div
              key={useCase}
              className="rounded-3xl border border-neutral-200/50 bg-white p-5 text-sm text-neutral-600 shadow-sm transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:-translate-y-0.5 dark:hover:border-purple-500/40 dark:hover:bg-purple-900/40 dark:hover:text-purple-200"
            >
              {useCase}
            </div>
          ))}
        </div>
      </section>

      {relatedTools.length > 0 && (
        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Related alternatives</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Other tools loved by teams exploring {tool.category.toLowerCase()} workflows.
              </p>
            </div>
            <Link
              href={`/categories/${buildCategorySlug(tool.category)}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              View full category
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/tools/${related.slug}`}
                className="group flex items-center justify-between rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:hover:-translate-y-1 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">{related.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-neutral-900 transition dark:text-white dark:group-hover:text-purple-200">
                    {related.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{related.tagline}</p>
                </div>
                <span
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-600 transition group-hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800",
                  )}
                >
                  ⭐ {related.rating.toFixed(1)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

