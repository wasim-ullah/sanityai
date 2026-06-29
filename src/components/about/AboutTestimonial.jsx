import React from 'react';
import { ABOUT_TESTIMONIAL } from '../../constants/about';

export default function AboutTestimonial() {
  return (
    <section className="relative z-10 w-full bg-[#053321] text-white overflow-hidden min-h-[340px] py-12 lg:py-0 flex items-center justify-center">
      {/* Dynamic equal-spaced guidelines on the left side */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
        {/* Guidelines matching white block left lines (128, 162) and extending rightwards at 34px equal intervals */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-white/[0.07]"></div>
        <div className="absolute top-0 bottom-0 w-px left-[235px] border-l border-white/[0.07]"></div>
        <div className="absolute top-0 bottom-0 w-px left-[308px] border-l border-white/[0.07]"></div>
        <div className="absolute top-0 bottom-0 w-px left-[381px] border-l border-white/[0.07]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[420px] lg:pr-[105px] xl:pl-[420px] xl:pr-[172px] flex flex-col items-start text-left justify-center h-full">
        {/* Eyebrow */}
        <span 
          style={{
            fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.64)',
            fontSize: '16px',
            lineHeight: '22px'
          }}
          className="tracking-tight uppercase mb-5 block"
        >
          {ABOUT_TESTIMONIAL.eyebrow}
        </span>

        {/* Quote Text */}
        <h2
          style={{
            fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
            fontWeight: 500,
            color: 'rgb(255, 255, 255)',
          }}
          className="tracking-tight mb-8 font-medium text-[22px] md:text-[32px] leading-[28px] md:leading-[35px] max-w-4xl"
        >
          <span className="hidden md:block">
            {ABOUT_TESTIMONIAL.quoteLine1}<br />
            {ABOUT_TESTIMONIAL.quoteLine2}<br />
            {ABOUT_TESTIMONIAL.quoteLine3}
          </span>
          <span className="block md:hidden">
            {ABOUT_TESTIMONIAL.quoteLine1} {ABOUT_TESTIMONIAL.quoteLine2} {ABOUT_TESTIMONIAL.quoteLine3}
          </span>
        </h2>

        {/* Author Block */}
        <div className="flex items-center gap-3">
          <img 
            src={ABOUT_TESTIMONIAL.avatar} 
            alt="Jinal Sanghavi" 
            className="w-[30px] h-[30px] rounded-none object-cover"
          />
          <span 
            style={{
              fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.64)',
              fontSize: '16px',
              lineHeight: '22px'
            }}
          >
            {ABOUT_TESTIMONIAL.author}
          </span>
        </div>
      </div>
    </section>
  );
}
