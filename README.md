# ToolVault

A curated directory of AI tools built with Next.js App Router. Helps product teams discover and compare the best software for design, marketing, automation, and customer support workflows.

## Features

- Home page with featured tools and curated collections
- Full directory with search, filters, and sorting
- Individual tool pages with detailed information
- Category and collection pages for different use cases
- Responsive design with dark mode support
- SEO optimized with sitemap and metadata
- Programmatic page generation with ISR (Incremental Static Regeneration)

## Dataset

- **Location:** `src/data/tools.ts`
- **Source:** Curated from public sources including:
  - Product Hunt AI tools section
  - "There's an AI for That" directory
  - Company websites and official documentation
  - Community directories and tool aggregators
- **Fields:** name, slug, tagline, description, website, logo, category, pricing, pricingDetail, tags, useCases, integrations, rating, launchYear, featured
- **Size:** 30+ curated AI tools across 11 categories

### How the Dataset was Generated

The dataset was manually curated and structured from multiple public sources:

1. **Research Phase:** Collected tool information from Product Hunt, "There's an AI for That", and various AI tool directories
2. **Data Extraction:** Manually extracted key information including:
   - Tool names, descriptions, and taglines from official websites
   - Pricing information from pricing pages
   - Categories and tags based on primary use cases
   - Ratings based on public reviews and community feedback
   - Launch years from company history and public records
3. **Data Structuring:** Organized into TypeScript types with consistent formatting
4. **Logo URLs:** Used Clearbit logo API for consistent logo display
5. **Collections:** Created programmatic collections using filter combinations (category, pricing, tags, ratings, launch year)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Dark Mode:** next-themes
- **Icons:** lucide-react
- **Code Quality:** ESLint + Prettier
- **Deployment:** Vercel (recommended)

## Design Inspiration

The design draws inspiration from modern SaaS directory sites:

- **Primary Reference:** Clean, card-based layouts similar to Product Hunt and Awwwards
- **Visual Style:** Gradient accents (purple → pink → rose) for CTAs and highlights
- **Typography:** Geist Sans for body text with uppercase tracking for labels
- **Spacing:** Generous padding and rounded corners (rounded-3xl) for a modern feel
- **Dark Mode:** Carefully tuned neutral palette with purple accent overlays
- **Interactions:** Subtle hover effects with translate and shadow transitions

## AI Prompt Examples

### 1. Component Structure
```
Create a responsive tool directory component with search, category filters, pricing filters, and sort options. Use Tailwind CSS with a modern card-based layout. Include grid/list view toggle.
```

### 2. Data Filtering Logic
```
Implement a collection filter system that can combine multiple filter types: category, pricing tier, tags, minimum rating, and launch year. Each collection should dynamically filter tools based on these criteria.
```

### 3. SEO and Metadata
```
Generate static metadata for each tool detail page including OpenGraph tags. Also create a sitemap.ts that includes all tools, collections, and categories with proper URL structure.
```

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Build

```bash
npm run build
```

## Code Quality

```bash
npm run lint
npm run format
```

## Deployment

Deploy to Vercel by connecting your GitHub repository:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Update `src/config/site.ts` with your production URL after deployment

The site uses ISR (Incremental Static Regeneration) with a 1-hour revalidation period for optimal performance.

## Project Structure

```
src/
  app/              # Next.js app router pages
    tools/          # Tool listing and detail pages
    collections/    # Collection listing and detail pages
    categories/     # Category listing and detail pages
  components/       # React components
  config/           # Site configuration
  data/             # Static dataset
  lib/              # Utility functions
```

## Page Permutations

The site creates different views of the same dataset through:

1. **Collections:** Pre-filtered tool sets (e.g., "Best Free AI Writing Assistants", "AI Agents for Operations Teams")
2. **Categories:** Tools grouped by primary category (Design, Marketing, Automation, etc.)
3. **Search & Filters:** Dynamic filtering on the main tools page
4. **Sorting:** Multiple sort options (rating, newest, alphabetical, recommended)

## What Would I Improve with 2 More Days

1. **Enhanced Search:** Implement full-text search with fuzzy matching and search result highlighting
2. **Tool Comparison:** Add a comparison feature allowing users to compare 2-3 tools side-by-side
3. **User Interactions:** Add bookmarking/favorites functionality with localStorage persistence
4. **Analytics Integration:** Add Vercel Analytics or similar to track popular tools and search queries
5. **More Collections:** Create additional curated collections like "Best Tools for Startups", "Enterprise-Ready AI Tools", etc.
6. **Tool Submission Form:** Allow users to submit new tools with a simple form (could use Vercel Forms or similar)
7. **Performance:** Add image optimization with Next.js Image component and implement lazy loading for tool cards
8. **Accessibility:** Enhanced ARIA labels, keyboard navigation improvements, and screen reader optimizations

## License

MIT
