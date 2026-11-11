export const AI_INTRO =
  "Most businesses don't need an \"AI strategy\". They need the slow, repetitive parts of their day to stop eating time. We build AI assistants and automations that take on that work, connect to the tools you already use, and keep a person in charge of the decisions that matter.";

export const AI_FLOW = [
  { label: "New enquiry", sub: "Email, form or WhatsApp" },
  { label: "AI reads & decides", sub: "Understands it, picks the next step", ai: true },
  { label: "Your tools update", sub: "CRM, sheet or accounts" },
  { label: "Reply goes out", sub: "A person approves when it matters" },
];

export const AI_CAPS = [
  { title: "AI assistants & chatbots", body: "Answer customer and team questions from your own documents, policies and product info, on your website, in WhatsApp or inside your app. They hand over to a human when unsure." },
  { title: "Document processing", body: "Read invoices, forms, contracts and receipts, extract the key fields and send them into your accounts or CRM." },
  { title: "Workflow automation", body: "Connect your tools so leads, orders, tickets and approvals move on their own, with no copy-pasting between systems." },
  { title: "Lead qualification & follow-up", body: "Score enquiries, draft replies, book calls and nudge leads who go quiet." },
  { title: "Internal knowledge search", body: "Ask a question in plain language and get the answer from your files, with the source shown." },
  { title: "Reporting & insights", body: "Turn raw data into plain-language summaries, alerts and weekly reports your team will actually read." },
  { title: "Content & communication helpers", body: "Draft emails, product descriptions and replies in your brand voice, always with a person approving before anything is sent." },
  { title: "AI inside your product", body: "Add smart search, recommendations, summaries or generation to a web or mobile app you already have." },
];

export const AI_AREAS = [
  "Customer support",
  "Sales & marketing",
  "Finance & accounting",
  "Operations & logistics",
  "HR & recruitment",
  "Healthcare & clinics",
  "E-commerce",
  "Education",
];

export const AI_TOOLS = ["OpenAI", "Claude", "n8n", "Zapier", "WhatsApp Business API"];

export const AI_STEPS = [
  { n: "1", title: "Find the work", body: "We map your process and pick one task where automation will clearly save time." },
  { n: "2", title: "Prototype fast", body: "A working version in days, so you test it on real examples, not slides." },
  { n: "3", title: "Pilot", body: "It runs alongside your team, and we measure accuracy and time saved." },
  { n: "4", title: "Roll out & improve", body: "We connect it fully, add monitoring, and keep improving it as you use it." },
];

export const AI_SAFE = [
  { title: "Your data stays yours", body: "We don't use your information to train public models." },
  { title: "A person stays in the loop", body: "For anything important, like payments, approvals and customer-facing replies." },
  { title: "Answers come with sources", body: "So your staff can check them." },
  { title: "Honest limits", body: "If an AI answer isn't reliable enough for your case, we'll tell you and propose another approach." },
];

export const AI_CONCEPTS = [
  { visual: "reply", kind: "AI · Email", title: "Reply", desc: "Drafts answers to customer emails from your knowledge base, for a human to approve and send.", tags: ["LLM", "Email", "Approval flow"] },
  { visual: "qualify", kind: "AI · Sales", title: "Qualify", desc: "Scores and sorts incoming leads, drafts the first reply and books the call.", tags: ["Scoring", "CRM", "Calendar"] },
  { visual: "digest", kind: "AI · Reporting", title: "Digest", desc: "A weekly business summary built from your sales, stock and support data, delivered to WhatsApp or email.", tags: ["Automation", "WhatsApp", "Reports"] },
  { visual: "recall", kind: "AI · Search", title: "Recall", desc: "An internal \"ask our files\" search that answers in plain language and cites the source.", tags: ["Retrieval", "Documents", "Citations"] },
] as const;

export const AI_FAQ = [
  { q: "Do we need lots of data to start?", a: "No. Most useful assistants start from documents you already have." },
  { q: "Will it replace my team?", a: "No. It takes over the repetitive parts so your team can focus on the work that needs judgment." },
  { q: "Is our data safe?", a: "We design around your privacy needs, and we can use private or restricted setups when needed." },
  { q: "How long does it take?", a: "A working prototype in days, a pilot in a few weeks. Timelines depend on the tools you use." },
  { q: "What does it cost?", a: "A fixed-scope proposal after a short call. We start small so you see results before you commit more." },
];
