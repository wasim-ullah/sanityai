import React from 'react';
import integrationImage from '../../assets/images/integration.png';
import { INTEGRATIONS_TEXT } from '../../constants/integrations';

export default function Integrations() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Top Divider line: section boundary separating previous section and Integrations */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-16 pb-16">
        <div className="w-full max-w-[1080px] flex flex-col items-start">
          
          {/* Header Stack (Left-Aligned, Vertical Stack) */}
          <div className="flex flex-col items-start text-left mb-12">
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
              {INTEGRATIONS_TEXT.eyebrow}
            </span>
            <h2
              className="text-[var(--color-text-primary-dark)] mb-4"
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                color: 'rgb(15, 15, 15)',
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '-0.02em'
              }}
            >
              {INTEGRATIONS_TEXT.heading.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < 2 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(102, 102, 102)',
                fontSize: '16px',
                lineHeight: '22px'
              }}
            >
              {INTEGRATIONS_TEXT.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          
          {/* Centered Mockup Image */}
          <img 
            src={integrationImage} 
            alt="Integrate across your stack" 
            className="w-full max-w-[1060px] h-auto object-contain mx-auto mb-2"
          />
          
          {/* 3 Columns sub-layout */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
            
            {INTEGRATIONS_TEXT.cards.map((card, idx) => (
              <div key={idx} className="w-full max-w-[342px] h-[240px] p-6 bg-[#fafafa] border border-black/5 rounded-none flex flex-col justify-center items-center text-center shadow-lg">
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                    fontWeight: 500,
                    color: 'rgb(15, 15, 15)',
                    fontSize: '18px',
                    lineHeight: '22px'
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: 'rgb(102, 102, 102)',
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                >
                  {card.description.split('\n').map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}

          </div>
          
        </div>
      </div>

      {/* Bottom Separator Divider */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

    </section>
  );
}
