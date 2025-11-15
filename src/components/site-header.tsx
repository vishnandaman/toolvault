"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900 transition hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-xs font-bold text-white shadow-sm">
            TV
          </span>
          <span className="hidden text-sm font-medium uppercase tracking-[0.12em] text-neutral-600 sm:inline-flex dark:text-neutral-300">
            {siteConfig.shortName}
          </span>
          <span className="text-base font-semibold text-neutral-900 dark:text-white sm:hidden">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-white px-1.5 py-1 text-sm shadow-sm ring-1 ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800 dark:ring-neutral-500/10 md:flex">
          {siteConfig.navLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/collections/ai-agents-for-ops"
            className="hidden rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30 md:inline-flex"
          >
            Explore Agents
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

