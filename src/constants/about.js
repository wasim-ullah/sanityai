import aboutLogo1 from '../assets/images/about1.png';
import aboutLogo2 from '../assets/images/about2.png';
import aboutLogo3 from '../assets/images/about3.png';
import aboutLogo4 from '../assets/images/about4.png';
import customer1 from '../assets/images/customer1.png';
import customer2 from '../assets/images/customer2.png';
import customer3 from '../assets/images/customer3.png';
import customer4 from '../assets/images/customer4.png';

export const ABOUT_HERO = {
  eyebrow: "COMPANY",
  titleLine1: "The people simplifying tax for",
  titleLine2: "modern business.",
};

export const ABOUT_MISSION = {
  eyebrow: "OUR MISSION",
  heading: "To make compliance invisible",
  description: "Finance teams waste hundreds of hours every year navigating shifting state tax lines, custom billing logic, and audit notices. We believe tax compliance should be a solved utility, not a manual chore. By combining developer-first APIs with automated filings, we allow companies to scale globally without friction."
};

export const ABOUT_STATS = [
  { value: "99.9%", label: "ROOFTOP ACCURACY", description: "Precision geo-location data maps exact sales tax rates for every order." },
  { value: "$12B+", label: "VOLUME PROCESSED", description: "Trusted to calculate and file for fast-growing startups and enterprises." },
  { value: "24/7", label: "SLACK DEPLOYMENT", description: "Direct expert tax support embedded directly inside your team's channels." },
  { value: "50+", label: "STATES COVERED", description: "Full autofiling coverage across all US states, territories, and local jurisdictions." }
];

export const ABOUT_VALUES = {
  eyebrow: "COMPANY VALUES",
  items: [
    {
      id: "inputs",
      title: "Inputs > outputs",
      description: "We don't 100% control our outcomes, but we 100% control our inputs. Get those right and the score takes care of itself."
    },
    {
      id: "details",
      title: "Sweat the details",
      description: "We operate in an industry where trust matters and mistakes are expensive. Going the extra mile to get details right is how we earn trust from customers."
    },
    {
      id: "play",
      title: "Play to win",
      description: "Some play not to lose. We play to win. Our orientation is to do whatever it takes to achieve victory. (within ethical bounds ofc)"
    },
    {
      id: "love",
      title: "Love our customers",
      description: "We strive to not just obsess over but to love our customers, full stop. Everyone talks to customers. We spend the time to truly understand them: their problems, goals, fears, and genuinely care how we can make their lives a little bit better."
    }
  ]
};

export const ABOUT_CTA = {
  heading: "Let's build something incredible.",
  buttonText: "VIEW OPEN ROLES"
};

export const ABOUT_LOGOS = [
  { src: aboutLogo1, alt: "Capacity" },
  { src: aboutLogo2, alt: "Italic" },
  { src: aboutLogo3, alt: "Unspun" },
  { src: aboutLogo4, alt: "Omni" }
];

export const ABOUT_TESTIMONIAL = {
  eyebrow: "HOW OUR CUSTOMERS DESCRIBE US",
  quoteLine1: "Taxwire has been an extension of our finance",
  quoteLine2: "team. We now have clarity, confidence, and a",
  quoteLine3: "tax engine we can trust as we scale.",
  avatar: customer4,
  author: "Jinal Sanghavi - VP Finance at Levanta"
};

export const ABOUT_TEAM = {
  eyebrow: "OUR TEAM",
  heading: "Who we are.",
  description1: "We’re a small, focused group of problem-solvers with backgrounds in fintech, data engineering, and compliance automation.",
  description2: "Our team includes tax engine veterans from Stripe, TaxJar, Fonoa, and Avalara; global indirect tax consultants from the Big Four, and former VC-funded founders and operators.",
  members: [
    {
      name: "Andrew Rea",
      role: "Co-Founder / CEO",
      image: customer1
    },
    {
      name: "Steven Schmatz",
      role: "Co-founder / CTO",
      image: customer2
    },
    {
      name: "Graham Martin",
      role: "Head of Tax",
      image: customer3
    }
  ]
};


