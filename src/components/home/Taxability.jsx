import React from 'react';
import set2Image from '../../assets/images/set2.png';
import { TAXABILITY_TEXT } from '../../constants/taxability';

export default function Taxability() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-6 pb-6">
        
        {/* White box wrapper: flex-col-reverse on mobile, flex-row-reverse on desktop */}
        <div className="w-full max-w-[1080px] bg-[#fafafa] border border-black/5 rounded-none shadow-none flex flex-col-reverse lg:flex-row-reverse overflow-hidden lg:h-[480px]">
          
          {/* Right Column (displayed on the right on desktop): Text Content */}
          <div className="w-full lg:flex-1 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
            
            {/* Eyebrow header with small green circular bag icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#454545]/10 border border-[#454545]/20 flex items-center justify-center text-[#454545] shrink-0">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <span 
                style={{
                  fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(0, 0, 0)',
                  fontSize: '12px',
                  lineHeight: '17px',
                  letterSpacing: '0.08em'
                }}
                className="uppercase font-medium"
              >
                {TAXABILITY_TEXT.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-[var(--color-text-primary-dark)] mb-6"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                color: 'rgb(15, 15, 15)',
                fontSize: '32px',
                lineHeight: '35px',
                letterSpacing: '-0.02em'
              }}
            >
              {TAXABILITY_TEXT.heading}
            </h2>

            {/* Description */}
            <p
              className="mb-8 max-w-md"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(102, 102, 102)',
                fontSize: '16px',
                lineHeight: '22px'
              }}
            >
              {TAXABILITY_TEXT.description}
            </p>

            {/* Action button */}
            <button 
              className="group inline-flex items-center gap-2 bg-[#111111] hover:bg-[#d1d1d1] text-white hover:text-[#111111] border border-[#111111] hover:border-[#d1d1d1] uppercase tracking-[0.08em] px-5 py-2.5 transition-all duration-200 w-max"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '14px'
              }}
            >
              <span>{TAXABILITY_TEXT.buttonText}</span>
              <svg 
                className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

          {/* Left Column (displayed on the left on desktop): Visualization Image */}
          <div className="w-full aspect-[540/480] lg:aspect-auto lg:w-[540px] lg:h-full shrink-0 border-b lg:border-b-0 lg:border-r border-black/5 overflow-hidden flex items-center justify-center">
            <img 
              src={set2Image} 
              alt="Assistive product labeling visual" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
