export const IMPLEMENTATION_TEXT = {
  eyebrow: "IMPLEMENTATION",
  heading: "Go live in weeks, not months",
  description: "From system connections to compliance configuration – you can start automating filings and reducing \nexposure <24 hours."
};

export const IMPLEMENTATION_STAGES = [
  { label: "DAY 1", activeAt: 0 },
  { label: "WEEK 1", activeAt: 1 },
  { label: "WEEK 4", activeAt: 2 }
];

export const IMPLEMENTATION_CARDS = [
  {
    activeAt: 0,
    badge: "DAY 1",
    items: [
      "Sync historical transactions from your billing, ERP, and accounting systems",
      "Receive a global tax exposure report",
      "Review historical compliance, back-filings, and migrations",
      "Kick off automated registration and filing"
    ]
  },
  {
    activeAt: 1,
    badge: "WEEK 1",
    items: [
      "Collect tax using no-code integrations and API",
      "Upload and validate exemption certificates",
      "Associate products with categories and other tax attributes",
      "Configure filing schedules and jurisdiction rules"
    ]
  },
  {
    activeAt: 2,
    badge: "WEEK 4",
    items: [
      "Receive labeled, triage state mail and notices in your virtual mailbox",
      "Monitor and receive alerts from new nexus thresholds and data issues",
      "Review filings with reconciliation assistance",
      "Get support from tax experts, right in Slack"
    ]
  }
];
