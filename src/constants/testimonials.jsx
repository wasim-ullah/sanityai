import React from 'react';
import customer1 from '../assets/images/customer1.png';
import customer2 from '../assets/images/customer2.png';
import customer3 from '../assets/images/customer3.png';
import logoItalic from '../assets/images/sub1.png';
import logoPulley from '../assets/images/pulley.png';
import logoLevanta from '../assets/images/levanta.png';

export const TESTIMONIALS_TEXT = {
  eyebrow: "Testimonials",
  heading: "What our customers are saying"
};

export const TESTIMONIALS_LIST = [
  {
    quote: (
      <>
        "Avalra left us with duplicate filings, missed states, and <strong className="font-semibold text-white">nearly $200K in overpayments</strong>. Taxwire recovered the funds, restored compliance across 20+ jurisdictions, and got everything running smoothly again."
      </>
    ),
    avatar: customer1,
    name: "Avi Arora",
    title: "COO AT ITALIC",
    logo: logoItalic,
    logoAlt: "Italic",
    logoClass: "w-[75px] h-[20px]"
  },
  {
    quote: (
      <>
        "We were growing quickly and needed a sales tax process that could keep up. Taxwire helped us implement a clear, scalable compliance framework from the ground up – giving us the clarity, confidence, and automation we needed as we expand."
      </>
    ),
    avatar: customer2,
    name: "Samantha Palmer",
    title: "ACC. MANAGER AT PULLEY",
    logo: logoPulley,
    logoAlt: "Pulley",
    logoClass: "h-[20px] w-auto"
  },
  {
    quote: (
      <>
        "When I discovered <strong className="font-semibold text-white">Avalara was over-collecting our taxes by 2–3× without approval</strong>, I knew we needed real financial controls. With Taxwire, every process is customer-approved and fully transparent. That level of control is non-negotiable for a scaling company."
      </>
    ),
    avatar: customer3,
    name: "Jinal Sanghavi",
    title: "VP FINANCE AT LEVANTA",
    logo: logoLevanta,
    logoAlt: "Levanta",
    logoClass: "h-[20px] w-auto"
  }
];
