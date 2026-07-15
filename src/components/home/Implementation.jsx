import React, { useState, useEffect } from 'react';
import { IMPLEMENTATION_TEXT, IMPLEMENTATION_STAGES, IMPLEMENTATION_CARDS } from '../../constants/implementation';

export default function Implementation() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatic progression logic (every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stages = IMPLEMENTATION_STAGES;
  const cards = IMPLEMENTATION_CARDS;

  // Minimalist checkmark icon
  const CheckIcon = ({ isActive }) => (
    <svg 
      className={`w-4 h-4 shrink-0 transition-colors duration-500 ${isActive ? 'text-[#454545]' : 'text-black/15'}`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" className="transition-colors duration-500" stroke="currentColor" fill="none" />
      <polyline points="8 12 11 15 16 10"></polyline>
    </svg>
  );

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Top Divider line: separating Integrations and Implementation */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-10 pb-10">
        <div className="w-full max-w-[1080px] flex flex-col items-center">
          
          {/* Header Stack (Centered) */}
          <div className="flex flex-col items-center text-center mb-4">
            <span
              className="block mb-4 uppercase"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(0, 0, 0)',
                fontSize: '12px',
                lineHeight: '17px',
                letterSpacing: '0.08em'
              }}
            >
              {IMPLEMENTATION_TEXT.eyebrow}
            </span>
            <h2
              className="text-[28px] sm:text-4xl md:text-[40px] leading-[34px] sm:leading-[40px] mb-4 text-[#0f0f0f]"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em'
              }}
            >
              {IMPLEMENTATION_TEXT.heading}
            </h2>
            <p
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(0, 0, 0)',
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              {IMPLEMENTATION_TEXT.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx === 0 && <br className="hidden md:inline" />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Timeline Bar Row */}
          <div className="relative w-full max-w-[800px] h-10 flex items-center justify-between mb-5 mx-auto mt-3">
            {/* Gray Timeline Base Line */}
            <div className="absolute left-[30px] right-[30px] sm:left-[40px] sm:right-[40px] top-1/2 -translate-y-1/2 h-[1px] bg-black/[0.06] pointer-events-none"></div>
            {/* Green Progress Fill Line */}
            <div 
              className="absolute left-[30px] sm:left-[40px] top-1/2 -translate-y-1/2 h-[1px] bg-[#454545] pointer-events-none transition-all duration-1000"
              style={{
                width: activeStep === 0 ? '0%' : activeStep === 1 ? '50%' : '100%',
                right: activeStep === 0 ? 'auto' : activeStep === 1 ? 'auto' : '30px',
                // Adjust responsive right boundary for Week 4 active step
                ...(activeStep === 2 ? { right: '30px' } : {})
              }}
            ></div>
            
            {stages.map((stage, idx) => {
              const isActive = activeStep >= stage.activeAt;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(stage.activeAt)}
                  className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 transition-all duration-500 rounded-none text-[10px] sm:text-xs font-semibold uppercase tracking-[0.05em] sm:tracking-[0.08em] ${
                    isActive 
                      ? 'bg-[#454545] text-white border border-[#454545]' 
                      : 'bg-white text-black/60 border border-black/[0.08] hover:border-black/25'
                  }`}
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    lineHeight: '17px'
                  }}
                >
                  <span className={`w-1.5 h-1.5 rounded-none shrink-0 ${isActive ? 'bg-white' : 'bg-black/20'}`}></span>
                  <span>{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3 Columns progress cards layout */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5 w-full mt-4">
            {cards.map((card, idx) => {
              const isActive = activeStep >= card.activeAt;
              return (
                <div 
                  key={idx} 
                  className={`w-full max-w-[342px] p-6 rounded-none flex flex-col justify-start text-left transition-all duration-500 border ${
                    isActive 
                      ? 'bg-[#fafafa] border-[#454545] shadow-none' 
                      : 'bg-[#fafafa] border-black/5 shadow-none'
                  }`}
                >
                  {/* Card items stack */}
                  <ul className="flex flex-col gap-4">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          <CheckIcon isActive={isActive} />
                        </div>
                        <span 
                          style={{
                            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px'
                          }}
                          className={`transition-colors duration-500 ${
                            isActive ? 'text-[rgba(15,15,15,0.85)]' : 'text-black/40'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Divider line: separating Implementation and Testimonials */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

    </section>
  );
}
