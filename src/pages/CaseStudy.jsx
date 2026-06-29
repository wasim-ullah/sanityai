import React from 'react';
import { Link } from 'react-router-dom';
import { TRUSTED_COMPANIES } from '../constants/hero';
import { CASE_STUDY_HERO, FEATURED_CASE_STUDY, ALL_CASE_STUDIES } from '../constants/casestudy';

// Image assets imports
import caseStudy1 from '../assets/images/caseStudy1.png';
import casestudy2 from '../assets/images/casestudy2.png';
import levantaLogo from '../assets/images/levanta.png';

// Local asset registry map
const imageMap = {
  levanta_diagram: caseStudy1,
  italic_diagram: casestudy2,
  levanta_logo: levantaLogo
};

export default function CaseStudy() {
  return (
    <div className="relative w-full bg-[#053321] text-white min-h-screen pt-20 overflow-hidden flex flex-col items-center">
      
      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Aligned perfectly with the header guidelines.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
        {/* Left side guidelines */}
        <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-white/5 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-white/5 hidden xl:block"></div>

        {/* Right side guidelines */}
        <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-white/5 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-white/5 hidden xl:block"></div>
      </div>

      {/* BOX 1: Upper Section (Eyebrow & Heading) */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-[95px] pb-16">
        {/* Centered Eyebrow */}
        <span 
          style={{
            fontFamily: 'Inter, "Inter Placeholder", sans-serif',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.08em'
          }}
          className="uppercase mb-4 text-center"
        >
          {CASE_STUDY_HERO.eyebrow}
        </span>

        {/* Centered Heading */}
        <h1 
          style={{
            fontFamily: '"Roobert TRIAL Variable Light", "Roobert TRIAL Variable Light Placeholder", sans-serif',
            fontWeight: 300,
            color: 'rgb(255, 255, 255)'
          }}
          className="text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[64px] tracking-tight text-center max-w-4xl"
        >
          {CASE_STUDY_HERO.title.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx === 0 && <br className="hidden md:inline" />}
            </React.Fragment>
          ))}
        </h1>
      </section>

      {/* Divider line spanning left end to right end */}
      <div className="w-full border-t border-white/5 z-10"></div>

      {/* BOX 2: Lower Section (Logo Wall Grid) */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center py-10 pb-20">
        <div className="w-full max-w-[1080px] z-10">
          
          {/* Centered Heading & Bullet */}
          <div className="flex items-center justify-center mb-6">
            <span className="w-1.5 h-1.5 bg-[#2eb87e] mr-2.5"></span>
            <span
              className="text-white/60"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              {CASE_STUDY_HERO.logoWallTitle}
            </span>
          </div>

          {/* Logo Wall grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {TRUSTED_COMPANIES.map((company, index) => (
              <div key={index} className="bg-[#0f3b2a] border border-white/5 flex items-center justify-center h-[56px] transition-colors duration-150">
                {company.hasIcon === 'middesk' && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="14" width="3" height="6" transform="skewX(-20)" />
                      <rect x="9" y="8" width="3" height="12" transform="skewX(-20)" />
                      <rect x="15" y="4" width="3" height="16" transform="skewX(-20)" />
                    </svg>
                    <span className="text-white font-bold text-lg tracking-tight">{company.name}</span>
                  </div>
                )}
                {company.hasIcon === 'spellbook' && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 3 L20 11 L12 19 L4 11 Z" />
                    </svg>
                    <span className="text-white font-bold text-base tracking-wide font-['Roobert']">{company.name}</span>
                  </div>
                )}
                {!company.hasIcon && (
                  <span className={`text-white ${company.fontClass}`}>{company.name}</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOX 3: Featured Case Study Section (White Background) */}
      <section className="w-full bg-white text-black py-0 flex flex-col items-center border-t border-black/[0.06] relative z-10">
        
        {/* Symmetric Left & Right Grid Guidelines for Light Theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
          <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-black/[0.04] hidden xl:block"></div>
          <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04] hidden xl:block"></div>

          <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-black/[0.04] hidden xl:block"></div>
          <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04] hidden xl:block"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1180px] min-h-[624px] pt-[100px] pb-[50px] flex flex-col items-center justify-center">
          
          {/* Centered Heading */}
          <h2
            style={{
              fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(0, 0, 0)',
              fontSize: '40px',
              lineHeight: '40px'
            }}
            className="tracking-tight text-center mb-16"
          >
            {FEATURED_CASE_STUDY.sectionTitle}
          </h2>

          {/* Levanta Card Container */}
          <div className="flex flex-col md:flex-row items-stretch bg-white border border-black/[0.08] w-full max-w-[1026px] h-auto md:h-[354px] rounded-none overflow-hidden z-10 shadow-sm">
            
            {/* Left Box: Image */}
            <div className="w-full md:w-[568px] h-[240px] sm:h-[300px] md:h-full flex-shrink-0">
              <img 
                src={imageMap[FEATURED_CASE_STUDY.imageKey]} 
                alt="Featured Case Study" 
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            {/* Right Box: Content & Button */}
            <div className="w-full md:w-[458px] flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/[0.08]">
              
              {/* Top content area with 20px padding */}
              <div className="p-5 flex flex-col items-start gap-4">
                <img 
                  src={imageMap[FEATURED_CASE_STUDY.logoKey]} 
                  alt="Featured Client Logo" 
                  className="h-6 object-contain"
                />
                
                <h3
                  style={{
                    fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                    fontWeight: 500,
                    color: 'rgb(6, 51, 34)',
                    fontSize: '32px',
                    lineHeight: '35px'
                  }}
                  className="tracking-tight text-left"
                >
                  {FEATURED_CASE_STUDY.title}
                </h3>
              </div>

              {/* Bottom full-width button */}
              <Link to="/case-study/levanta-control" className="w-full">
                <div className="py-[10px] px-4 border-t border-black/[0.08] flex items-center justify-between w-full cursor-pointer hover:bg-black/[0.02] transition-colors duration-150">
                  <span className="font-sans text-[13px] font-medium text-[#063322] tracking-wide">
                    {FEATURED_CASE_STUDY.buttonText}
                  </span>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#063322]" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* BOX 4: All Case Studies Section (White Background) */}
      <section className="w-full bg-white text-black py-0 flex flex-col items-center border-t border-black/[0.06] relative z-10">
        
        {/* Symmetric Left & Right Grid Guidelines for Light Theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
          <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-black/[0.04] hidden xl:block"></div>
          <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04] hidden xl:block"></div>

          <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-black/[0.04]"></div>
          <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-black/[0.04] hidden xl:block"></div>
          <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04] hidden xl:block"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1180px] min-h-[1094px] pt-[50px] pb-[100px] flex flex-col items-center">
          
          {/* Centered Heading */}
          <h2
            style={{
              fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(0, 0, 0)',
              fontSize: '40px',
              lineHeight: '40px'
            }}
            className="tracking-tight text-center mb-16"
          >
            {ALL_CASE_STUDIES.sectionTitle}
          </h2>

          {/* 2-Column Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1180px] px-0 z-10">
            {ALL_CASE_STUDIES.list.map((card) => (
              <div key={card.id} className="flex flex-col bg-white border border-black/[0.08] w-full max-w-[580px] rounded-none overflow-hidden hover:shadow-md transition-shadow duration-150">
                {/* Card Image */}
                <div className="w-full h-[237px] flex-shrink-0">
                  <img 
                    src={imageMap[card.imageKey]} 
                    alt={card.title} 
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                {/* Card Info Content */}
                <div className="py-5 px-4 flex flex-col justify-between flex-1 gap-4 text-left">
                  <div className="flex flex-col gap-3">
                    {/* Category with bullet ○ */}
                    <div className="flex items-center text-left">
                      <span className="w-2 h-2 rounded-full border border-[#666666] mr-2 inline-block shrink-0"></span>
                      <span 
                        style={{
                          fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                          fontWeight: 400,
                          color: 'rgb(102, 102, 102)',
                          fontSize: '16px',
                          lineHeight: '22px'
                        }}
                      >
                        {card.category}
                      </span>
                    </div>
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                        fontWeight: 400,
                        color: 'rgb(0, 0, 0)',
                        fontSize: '24px',
                        lineHeight: '24px'
                      }}
                      className="tracking-tight"
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom button */}
                <Link to={`/case-study/${card.id}`} className="w-full">
                  <div className="py-[10px] px-4 border-t border-black/[0.08] flex items-center justify-between w-full cursor-pointer hover:bg-black/[0.02] transition-colors duration-150">
                    <span className="font-sans text-[13px] font-medium text-[#063322] tracking-wide">
                      {card.buttonText}
                    </span>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#063322]" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
