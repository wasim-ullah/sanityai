export const CASE_STUDY_HERO = {
  eyebrow: "CUSTOMERS",
  title: "Real results from real\ncompanies",
  logoWallTitle: "Trusted by fast-growing companies across industries"
};

export const FEATURED_CASE_STUDY = {
  sectionTitle: "Featured Case Study",
  imageKey: "levanta_diagram",
  logoKey: "levanta_logo",
  title: "How Levanta Regained Financial Control After a Costly Sales Tax Misstep",
  buttonText: "Read Full Case Study"
};

export const ALL_CASE_STUDIES = {
  sectionTitle: "All Case Studies",
  list: [
    {
      id: "italic-recovery",
      imageKey: "italic_diagram",
      category: "Marketplace",
      title: "Recovering $200K in Growth Capital: Italic's Rapid Tax Compliance Recovery",
      buttonText: "Read Story"
    },
    {
      id: "levanta-control",
      imageKey: "levanta_diagram",
      category: "SaaS",
      title: "How Levanta Regained Financial Control After a Costly Sales Tax Misstep",
      buttonText: "Read Story"
    },
  ]
};

export const CASE_STUDY_DETAILS = {
  "levanta-control": {
    category: "SaaS",
    name: "Levanta",
    title: "How Levanta Regained Financial Control After a Costly Sales Tax Misstep",
    logoKey: "levanta_logo_white",
    sidebarLogoKey: "levanta_logo_white",
    detailImage: "/assets/images/levanta.png",
    problem: "Avalara over-collected sales tax by 2-3x, withdrawing funds automatically without approval.",
    solution: "Taxwire recovered $13K+ and implemented customer-approved controls over every filing.",
    buttonText: "BOOK A DEMO",
    sections: [
      {
        heading: "When trust turns into a costly surprise",
        content: [
          { type: "paragraph", text: "Levanta's growth was explosive. In just over a year, the affiliate platform powering Amazon sellers was pacing toward $286 million in annualized GMV. Amid the surge, VP of Finance Jinal Sanghavi assumed their tax compliance was running smoothly. They had Avalara in place, surely it could keep up with the scale." },
          { type: "paragraph", text: "But as transaction volumes rose, something started to feel off. When Jinal dug in, she uncovered that Avalara had been over-remitting sales tax by 2–3× the correct amount, without any internal approval." },
          { type: "blockquote", text: "\"Our previous tax provider always processed payments automatically without our approval.\"" }
        ]
      },
      {
        heading: "The turning point: Uncovering tax savings and rebuilding trust through control",
        content: [
          { type: "paragraph", text: "The discovery was more than a financial issue, it was a trust issue. For Jinal, the bigger question became: How do we rebuild financial operations so we never lose sight of our tax and cash flow again?" },
          { type: "blockquote", text: "\"When I discovered Avalara was over-collecting our taxes by 2-3x without our approval, I knew we needed a partner who understood the controls that a scaling SaaS company requires.\"" },
          { type: "paragraph", text: "Switching to Taxwire wasn't just about recovering the $13K+ Avalara had over-collected—it was about rebuilding trust in their financial systems." },
          { type: "blockquote", text: "\"With Taxwire, every process is customer-approved. Nothing moves without our green light. For a scaling SaaS company, that level of control is non-negotiable.\"" }
        ]
      },
      {
        heading: "The Taxwire effect: Building modern compliance workflows with oversight and accuracy",
        content: [
          { type: "paragraph", text: "Taxwire helped Levanta implement a modern compliance workflow that balanced automation with oversight." },
          {
            type: "metrics",
            items: [
              { stat: "Recovered $13K+", description: "in overpaid sales tax within weeks" },
              { stat: "Eliminated 100%", description: "of over-collection risk" },
              { stat: "Protected $230K MRR", description: "growth trajectory with full compliance confidence" }
            ]
          },
          { type: "blockquote", text: "\"Taxwire loves to see their customers succeed, and they know how to help them do it. Their team has helped us iron out all of our compliance problems, however big or small. Plus, they've been so positive every step of the way. We never thought we'd find a provider like them.\"" }
        ]
      },
      {
        heading: "What changed: Building a foundation for confident growth",
        content: [
          { type: "paragraph", text: "Today, Jinal views tax compliance not as a burden, but as an essential control system in Levanta's financial architecture." },
          {
            type: "list",
            items: [
              { label: "Transparent, customer-approved", description: "processing replaced blind auto-withdrawals" },
              { label: "Lean, scalable", description: "compliance infrastructure ready for rapid growth" },
              { label: "A responsive partner", description: "who treats every issue, big or small, as critical" }
            ]
          },
          { type: "blockquote", text: "\"Switching to Taxwire wasn't just about recovering the $13K+ Avalara had over-collected, it was about establishing the operational foundation we need to support our growth. Now we have the transparency and control that enables us to focus on scaling to our next milestones.\"" }
        ]
      }
    ],
    ctaHeading: "Ready to scale your compliance too?",
    relatedIds: ["italic-recovery"]
  },
  "italic-recovery": {
    category: "Marketplace",
    name: "Italic",
    title: "Recovering $200K in Growth Capital: Italic's Rapid Tax Compliance Recovery",
    logoKey: "italic_logo_white",
    sidebarLogoKey: "italic_logo_white",
    detailImage: "/assets/images/casestudy2.png",
    problem: "Italic struggled with nexus exposure across 15+ states and lacked a reliable filing partner.",
    solution: "Taxwire automated their nexus tracking and completed back-filings in less than 2 weeks.",
    buttonText: "BOOK A DEMO",
    sections: [
      {
        heading: "When compliance gaps become capital risk",
        content: [
          { type: "paragraph", text: "Italic, a premium marketplace connecting consumers with direct-to-consumer manufacturers, operates a complex logistics and commerce network. With business scaling quickly, their tax footprint expanded to over 15 states, triggering nexus thresholds they couldn't track reliably." },
          { type: "paragraph", text: "Without clear records or automated filing pipelines, Italic faced major compliance penalties and struggled to get clear answers on their actual tax exposure." },
          { type: "blockquote", text: "\"We had no visibility into our actual nexus exposure across states. Every month felt like a compliance liability waiting to surface.\"" }
        ]
      },
      {
        heading: "Finding a partner built for marketplace complexity",
        content: [
          { type: "paragraph", text: "The team at Italic needed more than a tool — they needed a compliance partner who understood the nuances of marketplace tax law, including economic nexus, marketplace facilitator laws, and back-filing obligations." },
          { type: "blockquote", text: "\"We needed someone who could move as fast as we do and still get it right. Taxwire did exactly that.\"" },
          { type: "paragraph", text: "After evaluating options, Italic chose Taxwire for its hands-on approach and expertise in marketplace tax compliance." }
        ]
      },
      {
        heading: "The Taxwire effect: Back-filings completed, capital recovered",
        content: [
          { type: "paragraph", text: "Taxwire immediately deployed tracking agents across Italic's billing databases, automated nexus updates, and completed all outstanding back-filings in record time." },
          {
            type: "metrics",
            items: [
              { stat: "$200K+", description: "in potential penalties avoided through timely back-filings" },
              { stat: "15+ States", description: "nexus exposure mapped and resolved" },
              { stat: "2 Weeks", description: "to complete full back-filing and compliance audit" }
            ]
          },
          { type: "blockquote", text: "\"Taxwire completed our entire back-filing backlog in under two weeks. The speed and accuracy were unlike anything we'd seen from a compliance provider.\"" }
        ]
      },
      {
        heading: "What changed: Growth capital freed, compliance confidence gained",
        content: [
          { type: "paragraph", text: "With Taxwire handling compliance, Italic's finance team could redirect energy toward growth initiatives instead of tax firefighting." },
          {
            type: "list",
            items: [
              { label: "Automated nexus tracking", description: "across all 15+ active states" },
              { label: "Full back-filing", description: "completed in under 2 weeks" },
              { label: "Ongoing compliance monitoring", description: "with real-time alerts on threshold changes" }
            ]
          },
          { type: "blockquote", text: "\"The $200K we would have lost to penalties is now invested in our product roadmap. That's what a real compliance partner makes possible.\"" }
        ]
      }
    ],
    ctaHeading: "Ready to scale your compliance too?",
    relatedIds: ["levanta-control"]
  }
};
