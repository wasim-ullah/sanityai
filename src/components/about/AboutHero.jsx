import React from 'react';
import aboutHeroImage from '../../assets/images/about.png';
import { ABOUT_HERO } from '../../constants/about';

export default function AboutHero() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] pt-6 pb-6 flex flex-col items-center">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span 
          style={{
            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
            fontWeight: 400,
            color: 'rgb(0, 0, 0)',
            fontSize: '12px',
            lineHeight: '17px',
            letterSpacing: '0.08em'
          }}
          className="uppercase mb-4 block"
        >
          {ABOUT_HERO.eyebrow}
        </span>

        {/* Heading */}
        <h1 
          style={{
            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Variable Light", "Roobert TRIAL Variable Light Placeholder", sans-serif',
            fontWeight: 300,
            color: 'rgb(15, 15, 15)',
          }}
          className="tracking-tight mb-8 text-center text-3xl sm:text-5xl md:text-[64px] leading-tight md:leading-[64px] max-w-4xl"
        >
          <span className="hidden md:block">
            {ABOUT_HERO.titleLine1}<br />
            <span className="stress">modern</span> business.
          </span>
          <span className="block md:hidden">
            {ABOUT_HERO.titleLine1} <span className="stress">modern</span> business.
          </span>
        </h1>

        {/* About Grid Image (642 x 290 on desktop) */}
        <div className="w-full flex justify-center mt-2">
          <img 
            src={aboutHeroImage} 
            alt="The people simplifying tax for modern business" 
            className="w-full max-w-[642px] h-auto md:w-[642px] md:h-[290px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
