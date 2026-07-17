// Content + generated visual data for the SanityAI v2 landing page.
// Ported from the SanityAI Landing v2 design (DCLogic template).

export const CAL_URL = 'https://cal.com/wasim/sanity';

// --- bar-field generators -------------------------------------------------
export const mkBars = (n, seed) => {
  const arr = [];
  for (let i = 0; i < n; i++) arr.push({ h: 35 + ((i * seed) % 60), o: 0.25 + ((i * 29) % 60) / 100 });
  return arr;
};

export const leftBars = mkBars(18, 17);
export const rightBars = mkBars(18, 23);
export const closerBars = mkBars(14, 19).map((b) => ({ ...b, h: Math.round(b.h * 0.7) }));

const chartBars = (() => {
  const out = [];
  for (let i = 0; i < 42; i++) {
    const h = 18 + Math.round(38 * (0.5 + 0.5 * Math.sin(i / 3.1)) + ((i * 13) % 24));
    out.push({ h: Math.min(h, 96), bg: i % 7 === 5 ? '#e8541e' : '#d9d9d3' });
  }
  return out;
})();

const mkBars2 = (n, seed, every) => {
  const a = [];
  for (let i = 0; i < n; i++) {
    const h = 22 + Math.round(36 * (0.5 + 0.5 * Math.sin(i / 2.7)) + ((i * seed) % 26));
    a.push({ h: Math.min(h, 96), bg: i % every === every - 1 ? '#e8541e' : '#d9d9d3' });
  }
  return a;
};

// --- pill / stage palettes ------------------------------------------------
const pOk = { pillBg: '#e9f2ea', pillFg: '#2c6a3f' };
const pHot = { pillBg: '#fdeee6', pillFg: '#c14a17' };
const pMut = { pillBg: '#f0f0eb', pillFg: '#55554f' };

const stOn = { border: '#0a0a0a', bg: '#0a0a0a', fg: '#f5f5f2', subC: '#8f8f89' };
const stOff = { border: '#e4e4df', bg: '#ffffff', fg: '#444440', subC: '#9a9a94' };
const mkFlow = (list) =>
  list.map(([t, sub], i) => ({ t, sub, arrow: i < list.length - 1, ...(i === 0 ? stOn : stOff) }));

// --- hero dashboard tabs --------------------------------------------------
export const heroMocks = [
  { t: 'Overview', label: 'revenue system', vis: 'bars', bars: chartBars, metrics: [
    { v: 'AED 2.4M', l: 'pipeline influenced' }, { v: '184', l: 'workflows live' },
    { v: '96%', l: 'leads routed < 5 min' }, { v: '+38%', l: 'SQLs this quarter', c: '#e8541e' }] },
  { t: 'Lifecycle flows', label: 'lifecycle flows', vis: 'flow',
    metrics: [{ v: '24', l: 'flows live' }, { v: '12.4k', l: 'contacts enrolled' }],
    stages: mkFlow([['Trigger', 'form fill'], ['Enrich', '38 fields'], ['Score', 'model v2'], ['Route', 'to owner'], ['Sequence', 'day 0–14']]) },
  { t: 'Lead routing', label: 'lead routing', vis: 'rows',
    metrics: [{ v: '4m 12s', l: 'median time to owner' }, { v: '100%', l: 'leads owned', c: '#e8541e' }], rows: [
      { a: 'Demo request · website', pill: 'assigned', ...pOk, b: '38s' },
      { a: 'Pricing page · 3rd visit', pill: 'assigned', ...pOk, b: '2m 05s' },
      { a: 'Webinar signup', pill: 'assigned', ...pOk, b: '4m 44s' },
      { a: 'Content download', pill: 'nurture', ...pMut, b: '—' }] },
  { t: 'Paid campaigns', label: 'paid campaigns', vis: 'rows',
    metrics: [{ v: 'AED 184k', l: 'monthly spend' }, { v: '4.1×', l: 'pipeline : spend', c: '#e8541e' }], rows: [
      { a: 'Search · high-intent keywords', pill: 'scaling', ...pHot, b: 'AED 61k' },
      { a: 'LinkedIn · ABM tier 1', pill: 'live', ...pOk, b: 'AED 48k' },
      { a: 'Retargeting · pricing visitors', pill: 'live', ...pOk, b: 'AED 22k' },
      { a: 'Display · prospecting', pill: 'paused', ...pMut, b: 'AED 0' }] },
  { t: 'Content engine', label: 'content engine', vis: 'rows',
    metrics: [{ v: '28.4k', l: 'organic sessions / mo' }, { v: '112', l: 'keywords in top 10', c: '#e8541e' }], rows: [
      { a: 'Comparison pages · programmatic', pill: 'published', ...pOk, b: '34 pages' },
      { a: 'Buyer guides · ICP tier 1', pill: 'published', ...pOk, b: '12 pages' },
      { a: 'Case study engine', pill: 'drafting', ...pMut, b: 'agent' },
      { a: 'Newsletter · monthly', pill: 'scheduled', ...pMut, b: 'day 28' }] },
  { t: 'AI agents', label: 'ai agents', vis: 'flow',
    metrics: [{ v: '9', l: 'agents deployed' }, { v: '100%', l: 'actions logged', c: '#e8541e' }],
    stages: mkFlow([['Intake', 'email + slack'], ['Triage', 'agent'], ['Draft', 'reply v1'], ['Review', 'human'], ['Done', 'logged']]) },
  { t: 'Reporting', label: 'reporting', vis: 'rows',
    metrics: [{ v: '1', l: 'source of truth' }, { v: '4', l: 'live dashboards' }], rows: [
      { a: 'Revenue & pipeline overview', pill: 'live', ...pOk, b: 'exec team' },
      { a: 'Campaign performance', pill: 'live', ...pOk, b: 'marketing' },
      { a: 'Lead flow & routing health', pill: 'live', ...pOk, b: 'sales ops' },
      { a: 'Automation run log', pill: 'live', ...pOk, b: 'everyone' }] },
];

export const stackLogos = [
  'HubSpot', 'Salesforce', 'Claude', 'Zapier', 'Make', 'n8n', 'Segment',
  'Google Ads', 'Google Analytics', 'LinkedIn', 'Slack',
];

// --- feature sections -----------------------------------------------------
export const featureDefs = [
  {
    eyebrow: 'Marketing automation & CRM',
    title: 'Lifecycle flows that nurture, score, and route — automatically.',
    desc: 'Email and CRM automation built around real buying behavior. Leads get scored, enriched, and handed to the right rep in minutes, not days.',
    chips: ['HubSpot', 'Salesforce', 'Marketo', 'Customer.io'],
    tabNames: ['Lifecycle flows', 'Lead scoring', 'Routing', 'Nurture', 'CRM hygiene'],
    mocks: [
      { label: 'lifecycle flows', vis: 'flow', metrics: [{ v: '24', l: 'flows live' }, { v: '12.4k', l: 'contacts enrolled' }, { v: '96%', l: 'fully automated', c: '#e8541e' }], stages: mkFlow([['Trigger', 'form fill'], ['Enrich', '38 fields'], ['Score', 'model v2'], ['Route', 'to owner'], ['Sequence', 'day 0–14']]) },
      { label: 'lead scoring', vis: 'rows', metrics: [{ v: '38', l: 'scoring signals' }, { v: '2.1×', l: 'SQL conversion', c: '#e8541e' }], rows: [
        { a: 'VP Operations · mid-market SaaS', pill: 'Score 94', ...pHot, b: 'route → AE' },
        { a: 'Head of RevOps · logistics', pill: 'Score 81', ...pHot, b: 'route → AE' },
        { a: 'Marketing Manager · fintech', pill: 'Score 62', ...pMut, b: 'nurture' },
        { a: 'Analyst · consulting firm', pill: 'Score 34', ...pMut, b: 'newsletter' }] },
      { label: 'routing', vis: 'rows', metrics: [{ v: '4m 12s', l: 'median time to owner' }, { v: '100%', l: 'leads with an owner', c: '#e8541e' }], rows: [
        { a: 'Demo request · website', pill: 'assigned', ...pOk, b: '38s' },
        { a: 'Pricing page · 3rd visit', pill: 'assigned', ...pOk, b: '2m 05s' },
        { a: 'Webinar signup', pill: 'assigned', ...pOk, b: '4m 44s' },
        { a: 'Content download', pill: 'nurture pool', ...pMut, b: '—' }] },
      { label: 'nurture', vis: 'bars', metrics: [{ v: '11', l: 'sequences running' }, { v: '41%', l: 'open rate' }, { v: '8.2%', l: 'reply rate', c: '#e8541e' }], bars: mkBars2(42, 11, 6) },
      { label: 'crm hygiene', vis: 'rows', metrics: [{ v: '1,840', l: 'records cleaned / mo' }], rows: [
        { a: 'Duplicate contacts merged', pill: 'auto', ...pOk, b: '312 / mo' },
        { a: 'Missing fields enriched', pill: 'auto', ...pOk, b: '947 / mo' },
        { a: 'Stale deals flagged', pill: 'review', ...pMut, b: '58 / mo' },
        { a: 'Bounced emails suppressed', pill: 'auto', ...pOk, b: '523 / mo' }] },
    ],
  },
  {
    eyebrow: 'Workflow & ops automation',
    title: 'AI agents that clear the manual work between your tools.',
    desc: 'Enrichment, triage, drafting, follow-ups, handoffs — automated with logging and human checkpoints. No black boxes in your revenue path.',
    chips: ['Clay', 'n8n', 'Zapier', 'Make', 'Slack'],
    tabNames: ['AI agents', 'Enrichment', 'Integrations', 'Handoffs', 'Runbooks'],
    mocks: [
      { label: 'ai agents', vis: 'flow', metrics: [{ v: '9', l: 'agents deployed' }, { v: '100%', l: 'actions logged', c: '#e8541e' }], stages: mkFlow([['Intake', 'email + slack'], ['Agent triage', 'claude'], ['Draft', 'reply v1'], ['Human review', '1-click'], ['Done', 'logged']]) },
      { label: 'enrichment', vis: 'rows', metrics: [{ v: '38', l: 'fields per record' }, { v: '92%', l: 'match rate', c: '#e8541e' }], rows: [
        { a: 'Company size & industry', pill: 'enriched', ...pOk, b: 'Clay' },
        { a: 'Tech stack detection', pill: 'enriched', ...pOk, b: 'Clay' },
        { a: 'Decision-maker mapping', pill: 'enriched', ...pOk, b: 'LinkedIn' },
        { a: 'Intent signals', pill: 'queued', ...pMut, b: 'agent' }] },
      { label: 'integrations', vis: 'rows', metrics: [{ v: '17', l: 'active syncs' }], rows: [
        { a: 'HubSpot ↔ Slack', pill: 'synced', ...pOk, b: 'real-time' },
        { a: 'Website ↔ CRM ↔ ad platforms', pill: 'synced', ...pOk, b: 'real-time' },
        { a: 'Billing ↔ CRM lifecycle stage', pill: 'synced', ...pOk, b: 'hourly' },
        { a: 'Support ↔ account health score', pill: 'synced', ...pOk, b: 'daily' }] },
      { label: 'handoffs', vis: 'flow', metrics: [{ v: '0', l: 'leads lost in handoff', c: '#e8541e' }], stages: mkFlow([['Form fill', 'website'], ['CRM record', 'hubspot'], ['Slack alert', '#sales'], ['Task assigned', 'owner']]) },
      { label: 'runbooks', vis: 'rows', metrics: [{ v: '100%', l: 'workflows documented', c: '#e8541e' }], rows: [
        { a: 'Lead routing runbook', pill: 'passing', ...pOk, b: 'run 2h ago' },
        { a: 'Weekly reporting runbook', pill: 'passing', ...pOk, b: 'run 1d ago' },
        { a: 'Enrichment pipeline runbook', pill: 'passing', ...pOk, b: 'run 4h ago' },
        { a: 'Agent escalation runbook', pill: 'review', ...pMut, b: 'run 3d ago' }] },
    ],
  },
  {
    eyebrow: 'Demand & analytics',
    title: 'Paid, content, and SEO wired straight to revenue data.',
    desc: 'Campaigns and content report to one dashboard tied to closed pipeline — so spend follows revenue, and every stakeholder sees the same numbers.',
    chips: ['Google Ads', 'LinkedIn Ads', 'GA4', 'Looker Studio', 'Segment'],
    tabNames: ['Attribution', 'Paid media', 'Content & SEO', 'Dashboards'],
    mocks: [
      { label: 'attribution', vis: 'rows', metrics: [{ v: 'AED 2.4M', l: 'pipeline attributed' }], rows: [
        { a: 'Paid search', pill: '32% of pipeline', ...pHot, b: 'AED 768k' },
        { a: 'LinkedIn campaigns', pill: '24% of pipeline', ...pMut, b: 'AED 576k' },
        { a: 'Organic & content', pill: '21% of pipeline', ...pMut, b: 'AED 504k' },
        { a: 'Outbound sequences', pill: '15% of pipeline', ...pMut, b: 'AED 360k' }] },
      { label: 'paid media', vis: 'bars', metrics: [{ v: 'AED 184k', l: 'monthly spend managed' }, { v: '4.1×', l: 'pipeline : spend', c: '#e8541e' }], bars: mkBars2(42, 17, 7) },
      { label: 'content & seo', vis: 'bars', metrics: [{ v: '28.4k', l: 'organic sessions / mo' }, { v: '112', l: 'keywords in top 10' }, { v: '+64%', l: 'YoY growth', c: '#e8541e' }], bars: mkBars2(42, 23, 8) },
      { label: 'dashboards', vis: 'rows', metrics: [{ v: '1', l: 'source of truth' }], rows: [
        { a: 'Revenue & pipeline overview', pill: 'live', ...pOk, b: 'exec team' },
        { a: 'Campaign performance', pill: 'live', ...pOk, b: 'marketing' },
        { a: 'Lead flow & routing health', pill: 'live', ...pOk, b: 'sales ops' },
        { a: 'Automation run log', pill: 'live', ...pOk, b: 'everyone' }] },
    ],
  },
];

export const steps = [
  { n: '1', title: 'Audit — map the funnel and the friction', desc: 'Two weeks inside your stack and pipeline. We document what runs, what leaks, and a costed build plan.' },
  { n: '2', title: 'Build — ship the core system', desc: 'Automations, CRM structure, campaigns, and dashboards in weekly increments, live in your accounts from day one.' },
  { n: '3', title: 'Prove — attribute pipeline to the machine', desc: 'Every workflow reports to one dashboard, held against revenue targets — not vanity metrics.' },
  { n: '4', title: 'Hand over — your team owns it', desc: 'Documentation, training, and runbooks. You keep the system; we stay on retainer only if it earns it.' },
];

const dark = { border: '#0a0a0a', bg: '#0a0a0a', fg: '#f2f2ee', muted: '#8f8f89', btnBg: '#f2f2ee', btnFg: '#0a0a0a', btnBorder: '#f2f2ee' };
const light = { border: '#e4e4df', bg: '#ffffff', fg: '#141414', muted: '#82827c', btnBg: 'transparent', btnFg: '#141414', btnBorder: '#c9c9c4' };

export const plans = [
  { ...light, label: 'Audit', price: 'AED 6,500', per: 'one-time · 2 weeks', desc: 'The full map of your funnel, stack, and automation opportunities — with a build plan you can run anywhere.', features: ['Stack & funnel audit', 'Automation opportunity map', 'Costed 90-day roadmap', 'Credited toward a build'], cta: 'Start with an audit' },
  { ...dark, label: 'Build', price: 'AED 20,000', per: 'per month · 3-month min.', desc: 'The core engagement. We design, build, and run your automation and marketing system end to end.', features: ['Dedicated pod: strategist, builder, marketer', 'Weekly shipped increments', 'CRM, lifecycle, paid & content', 'Live revenue dashboard'], cta: 'Book a call' },
  { ...light, label: 'Retainer', price: 'AED 8,000', per: 'per month', desc: 'Post-handover: optimization, new workflows, and campaign support without a full pod.', features: ['Monthly optimization sprints', 'New automation requests', 'Quarterly system review', 'Slack-level response times'], cta: 'Book a call' },
];

export const faqData = [
  { q: 'Who is this for?', a: 'Most companies with a working product and a real sales motion — typically SaaS, professional services, and mid-market ops teams. If you’re pre-revenue, start with the audit only.' },
  { q: 'What tools do you work in?', a: 'HubSpot, Salesforce, Marketo, Clay, Zapier/Make, n8n, Segment, and the major ad platforms. We build in your accounts — you own every asset from day one.' },
  { q: 'How is this different from a marketing agency?', a: 'Agencies ship campaigns and keep the machinery. We ship the machinery. Campaigns are one output of a system your team ends up owning and understanding.' },
  { q: 'How fast do we see results?', a: 'Automation wins (routing, follow-up, hygiene) land in the first 2–3 weeks. Pipeline impact from demand work typically shows within one quarter.' },
  { q: 'Do you use AI agents?', a: 'Where they beat a deterministic workflow, yes — enrichment, drafting, triage. Every agent runs with logging and human checkpoints. No black boxes in your revenue path.' },
];

// Attach animation delays the way the design's decorate() did.
export function decorate(m) {
  return {
    label: m.label,
    metrics: m.metrics.map((x, i) => ({ c: '#141414', d: i * 0.9 + 's', ...x })),
    isBars: m.vis === 'bars', isRows: m.vis === 'rows', isFlow: m.vis === 'flow',
    bars: (m.bars ?? []).map((b, i) => ({ ...b, d: i * 0.018 + 's' })),
    rows: (m.rows ?? []).map((r, i) => ({ ...r, d: 0.05 + i * 0.1 + 's' })),
    stages: (m.stages ?? []).map((s, i) => ({ ...s, d: 0.05 + i * 0.14 + 's' })),
  };
}
