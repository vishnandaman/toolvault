export const siteConfig = {
  name: "ToolVault",
  shortName: "ToolVault",
  description:
    "Discover, compare, and shortlist the most useful tools across writing, design, automation, and customer support workflows.",
  url: "https://toolvault.vercel.app",
  author: "Product Team",
  keywords: [
    "software directory",
    "productivity tools",
    "automation",
    "design tools",
    "marketing tools",
    "tool directory",
  ],
  links: {
    github: "https://github.com/vishnandaman/toolvault",
    vercel: "https://vercel.com/",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Collections", href: "/collections" },
    { name: "Categories", href: "/categories" },
  ],
  contactEmail: "hello@toolvault.com",
};

export type SiteConfig = typeof siteConfig;

