export type PricingTier = "Free" | "Freemium" | "Paid" | "Enterprise";

export type ToolCategory =
  | "Productivity"
  | "Marketing"
  | "Design"
  | "Customer Support"
  | "Video"
  | "Audio"
  | "Automation"
  | "Research"
  | "Analytics"
  | "Education"
  | "Writing";

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  logo: string;
  category: ToolCategory;
  pricing: PricingTier;
  pricingDetail: string;
  tags: string[];
  useCases: string[];
  integrations: string[];
  rating: number;
  launchYear: number;
  featured?: boolean;
}

export type CollectionFilter =
  | { type: "category"; value: ToolCategory }
  | { type: "pricing"; value: PricingTier }
  | { type: "tag"; value: string }
  | { type: "ratingAtLeast"; value: number }
  | { type: "launchedAfter"; value: number };

export interface Collection {
  slug: string;
  title: string;
  description: string;
  filters: CollectionFilter[];
  ctaLabel?: string;
  heroTag?: string;
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Fast, conversational AI for everyday work.",
    description:
      "ChatGPT helps teams draft content, summarize knowledge, and automate workflows with natural conversation. The latest GPT-4.1 models provide multimodal reasoning and high-quality responses tailored to your context.",
    website: "https://chatgpt.com",
    logo: "https://logo.clearbit.com/openai.com",
    category: "Productivity",
    pricing: "Freemium",
    pricingDetail: "Free tier with GPT-4.1 mini; Plus at $20/mo; Team and Enterprise plans.",
    tags: ["assistant", "multimodal", "automation", "chatbot"],
    useCases: ["Customer support drafting", "Research summaries", "Marketing copywriting"],
    integrations: ["Slack", "Microsoft Teams", "Notion", "Zapier"],
    rating: 4.7,
    launchYear: 2022,
    featured: true,
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Anthropic's AI assistant built for thoughtful reasoning.",
    description:
      "Claude excels at analytical tasks, safe deployment in regulated environments, and large document comprehension. The Claude 3.5 Sonnet model combines high accuracy with speed for enterprise workflows.",
    website: "https://claude.ai",
    logo: "https://logo.clearbit.com/anthropic.com",
    category: "Productivity",
    pricing: "Freemium",
    pricingDetail: "Free tier with Claude 3 Haiku; Pro plan at $20/mo; Teams from $30/seat.",
    tags: ["assistant", "analysis", "enterprise"],
    useCases: ["Research synthesis", "Policy drafting", "Knowledge base analysis"],
    integrations: ["Slack", "Notion", "Zapier", "API"],
    rating: 4.6,
    launchYear: 2023,
    featured: true,
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    tagline: "AI-native research engine with up-to-date answers.",
    description:
      "Perplexity combines web search with conversational intelligence to surface well-cited answers. Follow-up threads help teams dig deeper and co-pilot their research with trusted sources.",
    website: "https://www.perplexity.ai",
    logo: "https://logo.clearbit.com/perplexity.ai",
    category: "Research",
    pricing: "Freemium",
    pricingDetail: "Free fast mode; Pro at $20/mo with higher limits and Pro Search.",
    tags: ["research", "search", "analysis"],
    useCases: ["Competitive analysis", "Market research", "Technical discovery"],
    integrations: ["Chrome", "iOS", "Android"],
    rating: 4.8,
    launchYear: 2022,
    featured: true,
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "Embedded AI that makes Notion docs and projects smarter.",
    description:
      "Notion AI brings writing assistance, summarization, and translation into docs, wikis, and project boards. Teams can speed up documentation and keep project updates consistent.",
    website: "https://www.notion.so/product/ai",
    logo: "https://logo.clearbit.com/notion.so",
    category: "Productivity",
    pricing: "Paid",
    pricingDetail: "$8 per member/month add-on billed annually.",
    tags: ["documentation", "summaries", "team collaboration"],
    useCases: ["Meeting notes", "Project updates", "Team documentation"],
    integrations: ["Slack", "Google Drive", "Figma", "Zapier"],
    rating: 4.4,
    launchYear: 2023,
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "AI copilot for marketing teams that stays on brand.",
    description:
      "Jasper centralizes brand voice, campaign briefing, and AI-assisted writing. Generate blog posts, ads, emails, and briefs with guardrails to keep messaging consistent across channels.",
    website: "https://www.jasper.ai",
    logo: "https://logo.clearbit.com/jasper.ai",
    category: "Marketing",
    pricing: "Paid",
    pricingDetail: "Creator plan from $39/mo; Pro and Business tiers for teams.",
    tags: ["copywriting", "brand voice", "campaign"],
    useCases: ["Content calendars", "Landing page copy", "Email sequences"],
    integrations: ["HubSpot", "Webflow", "Surfer SEO", "Zapier"],
    rating: 4.5,
    launchYear: 2021,
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "AI workflow engine for revenue teams.",
    description:
      "Copy.ai helps go-to-market teams automate outbound, personalize messaging, and orchestrate meeting prep. Prebuilt workflows accelerate pipeline creation with AI agents.",
    website: "https://www.copy.ai",
    logo: "https://logo.clearbit.com/copy.ai",
    category: "Marketing",
    pricing: "Freemium",
    pricingDetail: "Free plan with 2,000 words/month; Pro from $49/mo.",
    tags: ["sales", "copywriting", "automation"],
    useCases: ["Outbound personalization", "Blog drafting", "Social copy"],
    integrations: ["Salesforce", "HubSpot", "Gmail"],
    rating: 4.3,
    launchYear: 2020,
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    tagline: "AI marketing platform with SEO and chatbot automation.",
    description:
      "Writesonic bundles SEO-optimized writing, image generation, and AI agent automation. Sonic Editor and Botsonic help teams craft long-form content and deploy website chatbots.",
    website: "https://writesonic.com",
    logo: "https://logo.clearbit.com/writesonic.com",
    category: "Marketing",
    pricing: "Freemium",
    pricingDetail: "Free 10,000 words/month; Pro from $19/mo; Enterprise custom.",
    tags: ["seo", "chatbot", "copywriting"],
    useCases: ["SEO articles", "Product descriptions", "Support chatbots"],
    integrations: ["WordPress", "Shopify", "Zapier"],
    rating: 4.2,
    launchYear: 2020,
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Text-to-image artistry for creative teams.",
    description:
      "Midjourney turns prompts into high-quality visuals with stylized control. Creative teams use remixing, inpainting, and style references to deliver moodboards and campaign assets fast.",
    website: "https://www.midjourney.com",
    logo: "https://logo.clearbit.com/midjourney.com",
    category: "Design",
    pricing: "Paid",
    pricingDetail: "Plans from $10/mo billed annually; Pro and Mega for studios.",
    tags: ["image generation", "creative", "design system"],
    useCases: ["Campaign concepts", "Storyboards", "Brand exploration"],
    integrations: ["Discord", "Premiere Pro"],
    rating: 4.9,
    launchYear: 2022,
    featured: true,
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    tagline: "Visual asset generation built for production pipelines.",
    description:
      "Leonardo AI accelerates asset creation with model fine-tuning, canvas editing, and image-to-3D pipelines. Ideal for game studios and product teams needing consistent concept art.",
    website: "https://leonardo.ai",
    logo: "https://logo.clearbit.com/leonardo.ai",
    category: "Design",
    pricing: "Freemium",
    pricingDetail: "Free tier with daily credits; Pro from $29/mo with commercial use.",
    tags: ["image generation", "3d", "creative"],
    useCases: ["Concept art", "Product renders", "Marketing visuals"],
    integrations: ["Photoshop", "Blender"],
    rating: 4.4,
    launchYear: 2022,
  },
  {
    slug: "runway",
    name: "Runway",
    tagline: "Next-gen video creation powered by AI.",
    description:
      "Runway offers Gen-2 video generation, rotoscoping, and motion tracking in the browser. Teams produce production-ready footage, replace backgrounds, and remix videos with ease.",
    website: "https://runwayml.com",
    logo: "https://logo.clearbit.com/runwayml.com",
    category: "Video",
    pricing: "Freemium",
    pricingDetail: "Free export with watermark; Standard $15/mo; Pro $35/mo.",
    tags: ["video editing", "motion design", "creative"],
    useCases: ["Campaign videos", "Product explainers", "Film previsualization"],
    integrations: ["Adobe Premiere", "After Effects"],
    rating: 4.6,
    launchYear: 2018,
    featured: true,
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    tagline: "AI avatar videos for training and marketing at scale.",
    description:
      "Synthesia converts scripts into polished videos using AI avatars, voiceovers, and multi-language captions. Enterprises localize training and customer education without studio costs.",
    website: "https://www.synthesia.io",
    logo: "https://logo.clearbit.com/synthesia.io",
    category: "Video",
    pricing: "Paid",
    pricingDetail: "Starter at $29/mo; Creator and Enterprise tiers with custom pricing.",
    tags: ["video generation", "localization", "training"],
    useCases: ["Employee onboarding", "Sales enablement", "Product demos"],
    integrations: ["PowerPoint", "Learning management systems"],
    rating: 4.3,
    launchYear: 2017,
  },
  {
    slug: "luma",
    name: "Luma AI",
    tagline: "Photoreal 3D capture powered by neural rendering.",
    description:
      "Luma lets teams capture 3D assets from any device and render cinematic footage with Ray. Create product visuals, environments, and AR experiences ready for Unreal or Unity.",
    website: "https://lumalabs.ai",
    logo: "https://logo.clearbit.com/lumalabs.ai",
    category: "Video",
    pricing: "Freemium",
    pricingDetail: "Free captures with credits; Pro for higher resolutions and API access.",
    tags: ["3d", "visual effects", "ar"],
    useCases: ["Product marketing", "AR prototypes", "Film visuals"],
    integrations: ["Unreal Engine", "Unity"],
    rating: 4.5,
    launchYear: 2020,
  },
  {
    slug: "descript",
    name: "Descript",
    tagline: "All-in-one audio and video editing with AI workflows.",
    description:
      "Descript pairs screen recording with AI-powered editing, overdub voice cloning, and filler word removal. Creators ship podcasts and product videos using familiar document-style editing.",
    website: "https://www.descript.com",
    logo: "https://logo.clearbit.com/descript.com",
    category: "Audio",
    pricing: "Freemium",
    pricingDetail: "Free 1 hr transcription/mo; Creator $15/mo; Pro $30/mo.",
    tags: ["podcasting", "transcription", "voice"],
    useCases: ["Podcast editing", "Product walkthroughs", "Interview clean-up"],
    integrations: ["Zoom", "Slack", "YouTube"],
    rating: 4.4,
    launchYear: 2017,
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Hyper-realistic AI voices and dubbing studio.",
    description:
      "ElevenLabs delivers instant voiceovers, multilingual dubbing, and voice cloning with production quality. Media teams localize content and create consistent brand narration.",
    website: "https://elevenlabs.io",
    logo: "https://logo.clearbit.com/elevenlabs.io",
    category: "Audio",
    pricing: "Freemium",
    pricingDetail: "Free 10,000 characters/mo; Starter $5/mo; Creator $22/mo.",
    tags: ["voice", "localization", "audio production"],
    useCases: ["Video narration", "Audiobooks", "Product tutorials"],
    integrations: ["Premiere Pro", "Unreal Engine"],
    rating: 4.7,
    launchYear: 2022,
  },
  {
    slug: "tome",
    name: "Tome",
    tagline: "Narrative design platform for decks and product stories.",
    description:
      "Tome turns prompts into beautifully designed presentations with responsive layouts. Teams co-create pitch decks, roadmaps, and interactive stories with AI art baked in.",
    website: "https://beta.tome.app",
    logo: "https://logo.clearbit.com/tome.app",
    category: "Design",
    pricing: "Freemium",
    pricingDetail: "Free creator plan; Pro at $16/mo; Enterprise with SSO and analytics.",
    tags: ["presentations", "storytelling", "collaboration"],
    useCases: ["Sales decks", "Investor updates", "Product storytelling"],
    integrations: ["Figma", "Notion", "Slack"],
    rating: 4.1,
    launchYear: 2020,
  },
  {
    slug: "gamma",
    name: "Gamma",
    tagline: "Create decks, docs, and webpages in minutes.",
    description:
      "Gamma uses AI to craft structured outlines, design slides, and publish docs as shareable microsites. Built-in analytics show audience engagement for every presentation.",
    website: "https://gamma.app",
    logo: "https://logo.clearbit.com/gamma.app",
    category: "Design",
    pricing: "Freemium",
    pricingDetail: "Free 400 credits/mo; Plus from $16/mo; Pro with collaboration controls.",
    tags: ["presentations", "analytics", "no-code"],
    useCases: ["Client proposals", "Knowledge hubs", "Event recaps"],
    integrations: ["Slack", "Notion", "Canva"],
    rating: 4.2,
    launchYear: 2021,
  },
  {
    slug: "durable",
    name: "Durable",
    tagline: "AI website builder engineered for solopreneurs.",
    description:
      "Durable generates entire business websites, CRM, and invoices from a short prompt. Entrepreneurs launch online presences, manage leads, and automate follow-ups within minutes.",
    website: "https://durable.co",
    logo: "https://logo.clearbit.com/durable.co",
    category: "Automation",
    pricing: "Paid",
    pricingDetail: "Starter $15/mo; Business $25/mo; Deluxe $95/mo.",
    tags: ["website builder", "crm", "billing"],
    useCases: ["Service businesses", "Lead capture", "Client portals"],
    integrations: ["Stripe", "Google Analytics"],
    rating: 4.0,
    launchYear: 2022,
  },
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    tagline: "AI agents for workflow automation across 6,000+ apps.",
    description:
      "Zapier AI combines natural language builders, custom actions, and data enrichment to automate processes. Teams deploy task-specific agents without code and monitor activity centrally.",
    website: "https://zapier.com/ai",
    logo: "https://logo.clearbit.com/zapier.com",
    category: "Automation",
    pricing: "Freemium",
    pricingDetail: "Free 100 tasks/mo; Professional $29.99/mo; Enterprise custom.",
    tags: ["automation", "agent", "workflow"],
    useCases: ["Lead routing", "Marketing automation", "Support escalations"],
    integrations: ["Salesforce", "HubSpot", "Slack", "Airtable"],
    rating: 4.3,
    launchYear: 2023,
  },
  {
    slug: "adept",
    name: "Adept",
    tagline: "Action-transforming AI that completes enterprise workflows.",
    description:
      "Adept trains multimodal agents to take actions across complex software. Teams offload repetitive back-office tasks like procurement, reporting, and system updates.",
    website: "https://www.adept.ai",
    logo: "https://logo.clearbit.com/adept.ai",
    category: "Automation",
    pricing: "Enterprise",
    pricingDetail: "Enterprise pilots and custom deployments.",
    tags: ["agent", "enterprise", "automation"],
    useCases: ["ERP updates", "Inventory management", "Financial reporting"],
    integrations: ["Salesforce", "Workday", "SAP"],
    rating: 4.6,
    launchYear: 2021,
  },
  {
    slug: "hubspot-chatspot",
    name: "ChatSpot by HubSpot",
    tagline: "CRM-native AI assistant for marketing and sales.",
    description:
      "ChatSpot layers conversational AI on HubSpot CRM data to generate reports, create sequences, and draft follow-ups without leaving chat. Teams stay aligned on pipeline health.",
    website: "https://www.chatspot.ai",
    logo: "https://logo.clearbit.com/hubspot.com",
    category: "Marketing",
    pricing: "Free",
    pricingDetail: "Included in HubSpot CRM with unlimited usage.",
    tags: ["crm", "sales", "assistant"],
    useCases: ["Pipeline insights", "Follow-up emails", "HubSpot reporting"],
    integrations: ["HubSpot CRM"],
    rating: 4.1,
    launchYear: 2023,
  },
  {
    slug: "intercom-fin",
    name: "Fin by Intercom",
    tagline: "Customer support copilot with enterprise guardrails.",
    description:
      "Fin delivers accurate, secure answers sourced from your product docs and past conversations. Support teams improve resolution time with AI-assisted ticket triage and workflows.",
    website: "https://www.intercom.com/fin",
    logo: "https://logo.clearbit.com/intercom.com",
    category: "Customer Support",
    pricing: "Paid",
    pricingDetail: "$0.99 per resolution with volume discounts; integrated with Intercom plans.",
    tags: ["support", "chatbot", "automation"],
    useCases: ["Help center automation", "Ticket deflection", "Agent assist"],
    integrations: ["Zendesk", "Salesforce", "Slack"],
    rating: 4.5,
    launchYear: 2023,
  },
  {
    slug: "superhuman",
    name: "Superhuman",
    tagline: "AI-accelerated email and calendar for high-output teams.",
    description:
      "Superhuman blends AI triage, instant replies, and calendar scheduling into a focused email client. Teams reclaim time with keyboard-first workflows and personalization.",
    website: "https://superhuman.com",
    logo: "https://logo.clearbit.com/superhuman.com",
    category: "Productivity",
    pricing: "Paid",
    pricingDetail: "$30 per user/month with AI features included.",
    tags: ["email", "productivity", "automation"],
    useCases: ["Inbox triage", "Meeting scheduling", "Follow-up reminders"],
    integrations: ["Gmail", "Outlook", "Calendly"],
    rating: 4.2,
    launchYear: 2016,
  },
  {
    slug: "rewind",
    name: "Rewind",
    tagline: "Personal timeline that remembers everything on your device.",
    description:
      "Rewind records on-device activity privately and lets you query any past meeting, webpage, or app. AI compression keeps data secure while surfacing instant context.",
    website: "https://www.rewind.ai",
    logo: "https://logo.clearbit.com/rewind.ai",
    category: "Productivity",
    pricing: "Paid",
    pricingDetail: "$20/mo personal; Business plan with admin controls.",
    tags: ["memory", "desktop", "search"],
    useCases: ["Meeting recap", "Knowledge retrieval", "Design research"],
    integrations: ["Zoom", "Notion"],
    rating: 4.1,
    launchYear: 2020,
  },
  {
    slug: "magical",
    name: "Magical",
    tagline: "AI autofill and text expander for customer teams.",
    description:
      "Magical saves repetitive responses, enriches contact data, and automates scheduling across apps. Support and sales reps stay consistent while moving faster in their workflows.",
    website: "https://www.getmagical.com",
    logo: "https://logo.clearbit.com/getmagical.com",
    category: "Customer Support",
    pricing: "Freemium",
    pricingDetail: "Free with core features; Teams plan $6/user/mo; Enterprise custom.",
    tags: ["text expander", "automation", "support"],
    useCases: ["Support macros", "Lead enrichment", "Scheduling"],
    integrations: ["Salesforce", "Zendesk", "Gmail"],
    rating: 4.0,
    launchYear: 2020,
  },
  {
    slug: "quillbot",
    name: "QuillBot",
    tagline: "Paraphrasing, summarization, and grammar at warp speed.",
    description:
      "QuillBot helps students and professionals paraphrase content, summarize research, and check grammar in real time. The Chrome extension integrates AI writing into any webpage.",
    website: "https://quillbot.com",
    logo: "https://logo.clearbit.com/quillbot.com",
    category: "Education",
    pricing: "Freemium",
    pricingDetail: "Free paraphrasing limits; Premium $19.95/mo or $99.95/year.",
    tags: ["writing", "summaries", "education"],
    useCases: ["Academic writing", "Plagiarism-safe paraphrasing", "Research notes"],
    integrations: ["Chrome", "Microsoft Word"],
    rating: 4.3,
    launchYear: 2017,
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    tagline: "AI communication assistant across writing and meetings.",
    description:
      "Grammarly analyzes tone, clarity, and intent across emails, docs, and live meetings. Teams use style guides, snippets, and AI rewrites to deliver consistent communication.",
    website: "https://www.grammarly.com",
    logo: "https://logo.clearbit.com/grammarly.com",
    category: "Writing",
    pricing: "Freemium",
    pricingDetail: "Free fundamentals; Premium $12/mo; Business from $15/member/mo.",
    tags: ["writing", "communication", "tone"],
    useCases: ["Email polish", "Knowledge base updates", "Sales outreach"],
    integrations: ["Chrome", "Microsoft Office", "Slack"],
    rating: 4.6,
    launchYear: 2009,
  },
  {
    slug: "heygen",
    name: "HeyGen",
    tagline: "AI-generated spokesperson videos on demand.",
    description:
      "HeyGen enables teams to create localized avatar videos with voice cloning and script to video automation. Perfect for marketing announcements, onboarding, and product explainers.",
    website: "https://www.heygen.com",
    logo: "https://logo.clearbit.com/heygen.com",
    category: "Video",
    pricing: "Freemium",
    pricingDetail: "Free trial with watermarks; Creator $29/mo; Business $89/mo.",
    tags: ["video generation", "avatar", "localization"],
    useCases: ["Product explainers", "Onboarding", "Social content"],
    integrations: ["Zapier", "Canva"],
    rating: 4.2,
    launchYear: 2020,
  },
  {
    slug: "motion",
    name: "Motion",
    tagline: "AI planner that defends your time effortlessly.",
    description:
      "Motion automates task scheduling, meeting blocking, and project prioritization with an AI calendar. Teams rely on Motion to keep roadmaps on track while adapting to interruptions.",
    website: "https://www.usemotion.com",
    logo: "https://logo.clearbit.com/usemotion.com",
    category: "Productivity",
    pricing: "Paid",
    pricingDetail: "Individual $19/mo; Team $12/user/mo; Business $20/user/mo.",
    tags: ["calendar", "task management", "automation"],
    useCases: ["Team roadmaps", "Focus time", "Meeting scheduling"],
    integrations: ["Google Calendar", "Asana", "Slack"],
    rating: 4.4,
    launchYear: 2019,
  },
];

export const collections: Collection[] = [
  {
    slug: "best-free-writing-assistants",
    heroTag: "New this quarter",
    title: "Best Free AI Writing Assistants",
    description:
      "Trusted tools that help you polish content without adding to your software budget.",
    filters: [
      { type: "category", value: "Writing" },
      { type: "pricing", value: "Freemium" },
      { type: "ratingAtLeast", value: 4.3 },
    ],
  },
  {
    slug: "top-video-creation-suites",
    heroTag: "Editor’s pick",
    title: "Top AI Video Creation Suites",
    description:
      "From studio-grade editing to avatar presenters, these apps compress production time dramatically.",
    filters: [
      { type: "category", value: "Video" },
      { type: "ratingAtLeast", value: 4.3 },
    ],
  },
  {
    slug: "customer-support-automation",
    heroTag: "Scale support",
    title: "Customer Support Automation Stack",
    description:
      "Blend AI agents, macros, and knowledge management to deliver delightful support at scale.",
    filters: [
      { type: "category", value: "Customer Support" },
      { type: "tag", value: "automation" },
    ],
  },
  {
    slug: "founder-starter-kit",
    heroTag: "Founder favorite",
    title: "Founder Starter Kit",
    description:
      "Launch faster with AI tools that handle pitching, websites, and investor comms for lean teams.",
    filters: [
      { type: "tag", value: "presentations" },
      { type: "tag", value: "website builder" },
      { type: "pricing", value: "Freemium" },
    ],
  },
  {
    slug: "ai-agents-for-ops",
    heroTag: "Work smarter",
    title: "AI Agents for Operations Teams",
    description:
      "Delegate repetitive back-office tasks to reliable AI operators that integrate with core systems.",
    filters: [
      { type: "category", value: "Automation" },
      { type: "tag", value: "agent" },
      { type: "ratingAtLeast", value: 4.2 },
    ],
  },
];

