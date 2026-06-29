import React from 'react';
import set1Image from '../../assets/images/set1.png';
import { MONITORING_TEXT } from '../../constants/monitoring';

export default function Monitoring() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Divider line: section boundary separating Features and Monitoring */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-16 pb-6">
        
        {/* White box wrapper enclosing left and right columns with equal spacing */}
        <div className="w-full max-w-[1080px] bg-[#fafafa] border border-black/5 rounded-none shadow-none flex flex-col lg:flex-row overflow-hidden lg:h-[480px]">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:flex-1 flex flex-col justify-center text-left p-8 md:p-12 lg:p-16">
            
            {/* Eyebrow header with small green circular icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#11734b]/10 border border-[#11734b]/20 flex items-center justify-center text-[#11734b] shrink-0">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <span 
                style={{
                  fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(0, 0, 0)',
                  fontSize: '12px',
                  lineHeight: '17px',
                  letterSpacing: '0.08em'
                }}
                className="uppercase font-medium"
              >
                {MONITORING_TEXT.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-[var(--color-text-primary-dark)] mb-6"
              style={{
                fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                color: 'rgb(6, 51, 34)',
                fontSize: '32px',
                lineHeight: '35px',
                letterSpacing: '-0.02em'
              }}
            >
              {MONITORING_TEXT.heading}
            </h2>

            {/* Description */}
            <p
              className="mb-8 max-w-md"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(102, 102, 102)',
                fontSize: '16px',
                lineHeight: '22px'
              }}
            >
              {MONITORING_TEXT.description}
            </p>

            {/* Action button */}
            <button 
              className="group inline-flex items-center gap-2 bg-[#073322] hover:bg-[#2eb87e] text-white hover:text-[#073322] border border-[#073322] hover:border-[#2eb87e] uppercase tracking-[0.08em] px-5 py-2.5 transition-all duration-200 w-max"
              style={{
                fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '14px'
              }}
            >
              <span>{MONITORING_TEXT.buttonText}</span>
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

          {/* Right Column: Visualization Image */}
          <div className="w-full aspect-[540/480] lg:aspect-auto lg:w-[540px] lg:h-full shrink-0 border-t lg:border-t-0 lg:border-l border-black/5 overflow-hidden flex items-center justify-center">
            <img 
              src={set1Image} 
              alt="Unified tax notice inbox visual" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
