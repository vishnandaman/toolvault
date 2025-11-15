import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { label: "Video Creation Suites", href: "/collections/top-video-creation-suites" },
      { label: "Customer Support Automation", href: "/collections/customer-support-automation" },
      { label: "Founder Starter Kit", href: "/collections/founder-starter-kit" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Design Tools", href: "/categories/design" },
      { label: "Automation & Agents", href: "/categories/automation" },
      { label: "Writing Assistants", href: "/categories/writing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Submit a Tool", href: "mailto:hello@toolvault.com" },
      { label: "GitHub Repository", href: siteConfig.links.github },
      { label: "Launch on Vercel", href: siteConfig.links.vercel },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800/50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-xs font-bold text-white shadow-sm">
                TV
              </span>
              {siteConfig.shortName}
            </div>
            <p className="mt-4 max-w-xs text-sm text-neutral-700 dark:text-neutral-300">
              {siteConfig.description}
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-neutral-900 hover:underline dark:hover:text-white"
                      target={link.href?.startsWith("http") ? "_blank" : undefined}
                      rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with Next.js & Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <Link href={siteConfig.links.github} className="transition hover:text-neutral-900 dark:hover:text-white">
              GitHub
            </Link>
            <Link href={siteConfig.links.vercel} className="transition hover:text-neutral-900 dark:hover:text-white">
              Vercel
            </Link>
            <Link
              href="https://tailwindcss.com"
              className="transition hover:text-neutral-900 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

