export const CONTACT = {
  email: "crizgen2026@gmail.com",
  phone: "+91 90926 56327",
  phoneHref: "tel:+919092656327",
  whatsapp:
    "https://wa.me/919092656327?text=Hi%20Crizgen,%20I'd%20like%20to%20discuss%20a%20new%20project.",
  address:
    "No. 29/14, Anna Nagar West Extension, Chennai - 600101, Tamil Nadu, India",
  github: "https://github.com/crizgen",
  linkedin: "https://www.linkedin.com/in/crizgen-technologies-957a34445/",
  web3formsKey: "a36a7bc4-94f9-43da-9a90-aef23a661abf",
};

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ai", label: "AI" },
  { href: "#builds", label: "What we build" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const PROCESS = [
  {
    n: "01",
    title: "Talk",
    body: "We start with a conversation, not a form. Your goals, your users, your deadline, your budget. We tell you honestly what we would and wouldn't build.",
  },
  {
    n: "02",
    title: "Shape",
    body: "Wireframes, then clickable Figma prototypes. You see and test the product before a single line of production code exists.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly sprints with a live staging link every Friday. You talk directly to the people writing the code.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Cross-device testing, performance and accessibility checks, then a calm, zero-downtime release.",
  },
  {
    n: "05",
    title: "Grow",
    body: "Monitoring, security patches and new features as your users grow. We stay on after launch day.",
  },
];

export const MANIFESTO =
  "We are a design-led engineering studio that builds websites, apps and AI solutions for founders who care how their product feels, not just how it ships. No account managers. No handoffs. Just the people who make it.";

export const BUILDS = [
  {
    group: "Web apps",
    items: [
      { name: "CRM systems", desc: "Track leads, customers and follow-ups in one place, built around how your team actually sells." },
      { name: "E-commerce stores", desc: "Fast storefronts with catalogues, carts, payments and order management." },
      { name: "Booking & appointment platforms", desc: "Online scheduling, reminders and payments for clinics, salons, studios and services." },
      { name: "Dashboards & admin panels", desc: "Reporting, analytics and internal tools that replace spreadsheets." },
      { name: "Customer portals", desc: "Secure logins where clients can view orders, invoices and support tickets." },
      { name: "SaaS products", desc: "Multi-user subscription platforms, from first version to scale." },
      { name: "Business websites & landing pages", desc: "Fast, SEO-ready sites that turn visitors into enquiries." },
    ],
  },
  {
    group: "Mobile apps",
    items: [
      { name: "Delivery & on-demand apps", desc: "Ordering, live tracking and notifications." },
      { name: "Business & field-team apps", desc: "Attendance, tasks, inventory and order capture on the go." },
      { name: "Customer apps", desc: "Loyalty, bookings and account features for your own brand." },
    ],
  },
  {
    group: "AI solutions",
    items: [
      { name: "AI assistants & chatbots", desc: "Support and sales assistants that answer from your own content, on your website or WhatsApp." },
      { name: "Document & data extraction", desc: "Read invoices, forms and PDFs, pull out the fields and send them straight into your system." },
      { name: "Workflow automation", desc: "Connect your tools and let AI handle repetitive steps like routing, drafting and follow-ups." },
      { name: "Search & recommendations", desc: "Smarter search and product suggestions inside your app or store." },
      { name: "AI inside your product", desc: "Add summaries, generation or insights to something you already run." },
    ],
  },
];


export const STACK =
  "React · Next.js · TypeScript · Node.js · Python · PostgreSQL · Flutter · React Native";

export const ENGAGE = [
  { n: "1", title: "Tell us your idea", body: "Use the form or WhatsApp. A few lines is enough to start." },
  { n: "2", title: "Free intro call", body: "We reply within 24 hours and set up a 30-minute call. No cost, no obligation." },
  { n: "3", title: "Clear proposal", body: "Scope, timeline and price in writing, usually within 3 working days." },
];

export const TIMELINES = [
  ["Business website", "2–4 weeks"],
  ["Web app", "6–12 weeks"],
  ["Mobile app", "8–14 weeks"],
  ["AI assistant or automation", "3–8 weeks"],
];

export const WORK = [
  {
    visual: "crm",
    kind: "Web app · CRM",
    title: "Pipeline",
    desc: "A CRM for a growing sales team. Leads move across a visual pipeline, follow-ups are automatic and managers see everything at a glance.",
    tags: ["Next.js", "PostgreSQL", "Dashboards"],
  },
  {
    visual: "chat",
    kind: "AI · Assistant",
    title: "Ask",
    desc: "A support assistant that answers customer questions from a company's own help content, instantly, and hands over to a human when it is unsure.",
    tags: ["LLM", "Retrieval", "Python", "WhatsApp"],
  },
  {
    visual: "shop",
    kind: "Web app · E-commerce",
    title: "Hand&Made",
    desc: "A fast online store for a handmade brand with a simple one-page checkout and an admin to manage stock and orders.",
    tags: ["Next.js", "Payments", "Admin"],
  },
  {
    visual: "delivery",
    kind: "Mobile app · On-demand",
    title: "Dispatch",
    desc: "Customers watch their order arrive live. Riders get the route and a one-tap status update.",
    tags: ["Flutter", "Maps", "Live tracking"],
  },
  {
    visual: "doc",
    kind: "AI · Automation",
    title: "Reader",
    desc: "Reads invoices and forms, pulls out the vendor, date and total, and posts them to your accounting tool.",
    tags: ["OCR", "AI extraction", "Automation"],
  },
] as const;
