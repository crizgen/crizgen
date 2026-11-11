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
  { href: "#ai", label: "AI" },
  { href: "#services", label: "What we do" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const PROCESS = [
  { n: "01", title: "Talk", body: "Goals, users, deadline, budget. Honest advice on what to build." },
  { n: "02", title: "Shape", body: "Wireframes and clickable prototypes before any code." },
  { n: "03", title: "Build", body: "Weekly sprints with a live link every Friday." },
  { n: "04", title: "Launch", body: "Testing, performance checks, a calm release." },
  { n: "05", title: "Grow", body: "Monitoring, fixes and new features after launch." },
];

export const MANIFESTO =
  "We are a design-led engineering studio that builds AI solutions, websites and apps for founders who care how their product feels, not just how it ships. No account managers. No handoffs. Just the people who make it.";

export const ENGAGE_LINE = [
  "Tell us your idea",
  "a free 30-minute call",
  "a written proposal in about 3 days",
];

export const WORK = [
  {
    visual: "chat",
    kind: "AI · Assistant",
    title: "Ask",
    desc: "An AI support assistant that answers from your help content and hands over to a human when unsure.",
  },
  {
    visual: "doc",
    kind: "AI · Automation",
    title: "Reader",
    desc: "An AI invoice reader. It pulls out the vendor, date and total and posts them to your accounts.",
  },
  {
    visual: "crm",
    kind: "Web app · CRM",
    title: "Pipeline",
    desc: "A CRM for a sales team. Leads move across a visual pipeline.",
  },
  {
    visual: "delivery",
    kind: "Mobile app · On-demand",
    title: "Dispatch",
    desc: "A delivery app. Customers track orders live and riders get the route.",
  },
] as const;
