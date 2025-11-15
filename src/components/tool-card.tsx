import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/data/tools";
import { cn } from "@/lib/utils";
import { ToolLogo } from "@/components/tool-logo";

type ToolCardProps = {
  tool: Tool;
  showDescription?: boolean;
  className?: string;
};

export function ToolCard({ tool, showDescription = true, className }: ToolCardProps) {
  return (
    <article
      className={cn(
        "group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-neutral-200/50 bg-white p-6 shadow-lg transition dark:border-neutral-800/50 dark:bg-neutral-900 dark:hover:-translate-y-1 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/30",
        className,
      )}
    >
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          <span>{tool.category}</span>
          <span className="text-neutral-300 dark:text-neutral-600">•</span>
          <span>{tool.pricing}</span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 transition dark:text-white dark:group-hover:text-purple-300">
          <Link href={`/tools/${tool.slug}`} className="inline-flex items-center gap-1">
            {tool.name}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
          </Link>
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{tool.tagline}</p>

        {showDescription && (
          <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            {tool.description.slice(0, 120)}
            {tool.description.length > 120 ? "…" : ""}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600 transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:border-purple-500/40 dark:group-hover:bg-purple-500/10 dark:group-hover:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <span className="inline-flex h-7 items-center rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            ⭐ {tool.rating.toFixed(1)}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">since {tool.launchYear}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <ToolLogo
          name={tool.name}
          logo={tool.logo}
          className="relative h-20 w-20 overflow-hidden rounded-2xl border border-neutral-200 bg-white ring-1 ring-neutral-900/5 transition duration-300 dark:border-neutral-700 dark:bg-neutral-800 dark:ring-neutral-500/10 dark:group-hover:ring-purple-500/20"
          imageClassName="p-3"
        />
        <div className="mt-4 space-y-1 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Use cases</p>
          <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-300">
            {tool.useCases.slice(0, 2).map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

