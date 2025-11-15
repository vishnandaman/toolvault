"use client";

import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import { Search, SlidersHorizontal, ListFilter, LayoutGrid, LayoutList } from "lucide-react";
import type { PricingTier, Tool, ToolCategory } from "@/data/tools";
import { cn, sentenceCase } from "@/lib/utils";
import { ToolCard } from "@/components/tool-card";

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Rating", value: "rating" },
  { label: "Newest", value: "newest" },
  { label: "Alphabetical", value: "alphabetical" },
];

type ViewMode = "grid" | "list";

type ToolDirectoryProps = {
  tools: Tool[];
  categories: ToolCategory[];
  pricing: PricingTier[];
};

export function ToolDirectory({ tools, categories, pricing }: ToolDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ToolCategory | "all">("all");
  const [pricingFilter, setPricingFilter] = useState<PricingTier | "all">("all");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [view, setView] = useState<ViewMode>("grid");

  const filteredTools = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const filtered = tools.filter((tool) => {
      const matchesQuery =
        !query ||
        [
          tool.name,
          tool.tagline,
          tool.description,
          tool.category,
          tool.pricing,
          tool.tags.join(" "),
          tool.useCases.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter;
      const matchesPricing = pricingFilter === "all" || tool.pricing === pricingFilter;

      return matchesQuery && matchesCategory && matchesPricing;
    });

    switch (sortBy) {
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "newest":
        return filtered.sort((a, b) => b.launchYear - a.launchYear);
      case "alphabetical":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false) || b.rating - a.rating);
    }
  }, [tools, searchTerm, categoryFilter, pricingFilter, sortBy]);

  const resultLabel = filteredTools.length === 1 ? "tool" : "tools";

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 rounded-3xl border border-neutral-200/50 bg-white p-4 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" />
            <input
              type="search"
              placeholder="Search by tool, use case, or tag…"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="h-11 w-full rounded-full border border-transparent bg-neutral-100 pl-11 pr-4 text-sm text-neutral-700 transition focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-purple-500/30 dark:focus:ring-purple-500/20"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
            <SlidersHorizontal className="h-4 w-4" />
            {filteredTools.length} {resultLabel} curated
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterPill
              icon={ListFilter}
              label="All categories"
              isActive={categoryFilter === "all"}
              onClick={() => setCategoryFilter("all")}
            />
            {categories.map((category) => (
              <FilterPill
                key={category}
                label={category}
                isActive={categoryFilter === category}
                onClick={() => setCategoryFilter(category)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All pricing"
                isActive={pricingFilter === "all"}
                onClick={() => setPricingFilter("all")}
              />
              {pricing.map((tier) => (
                <FilterPill
                  key={tier}
                  label={tier}
                  isActive={pricingFilter === tier}
                  onClick={() => setPricingFilter(tier)}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Sort
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-10 rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-700 transition focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-purple-500/40 dark:focus:ring-purple-500/20"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1 text-sm shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <button
                type="button"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition",
                  view === "grid"
                    ? "bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-200",
                )}
                onClick={() => setView("grid")}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition",
                  view === "list"
                    ? "bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-200",
                )}
                onClick={() => setView("list")}
                aria-label="List view"
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {filteredTools.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-16 text-center dark:border-neutral-700 dark:bg-neutral-900/50">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">No tools match your filters yet</h3>
          <p className="mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-300">
            Try broadening your search or reset filters to explore our curated picks.
          </p>
        </div>
      ) : (
        <div
          className={cn(
            "grid gap-6",
            view === "grid" ? "md:grid-cols-2" : "md:grid-cols-1",
          )}
        >
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </section>
  );
}

type FilterPillProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: ComponentType<{ className?: string }>;
};

function FilterPill({ label, isActive, onClick, icon: Icon }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
        isActive
          ? "border-transparent bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900"
          : "border-neutral-200 bg-white text-neutral-600 hover:border-purple-300 hover:text-purple-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-purple-500/40 dark:hover:text-purple-300",
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {sentenceCase(label)}
    </button>
  );
}

