import type { Metadata } from "next";
import Link from "next/link";
import { CircleDashed, Sparkles } from "lucide-react";
import { ToolDirectory } from "@/components/tool-directory";
import { getAllCategories, getAllPricing, getAllTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools Directory",
  description:
    "Search, filter, and sort the latest tools across design, content, automation, and support use cases.",
};

export const revalidate = 60 * 60;

export default function ToolsPage() {
  const tools = getAllTools();
  const categories = getAllCategories();
  const pricing = getAllPricing();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <header className="flex flex-col gap-4 rounded-[32px] border border-neutral-200/50 bg-white p-8 shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            <CircleDashed className="h-3.5 w-3.5" />
            Directory
          </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Discover the fastest-growing products
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Filter by category, pricing, and rating to assemble your perfect stack.
            </p>
          </div>
          <Link
            href="mailto:hello@toolvault.com"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30"
          >
            <Sparkles className="h-4 w-4" />
            Submit a tool
          </Link>
        </div>
      </header>

      <div className="mt-10 space-y-6">
        <ToolDirectory tools={tools} categories={categories} pricing={pricing} />
      </div>
    </div>
  );
}

