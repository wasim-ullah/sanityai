import React from 'react';
import { TESTIMONIALS_TEXT, TESTIMONIALS_LIST } from '../../constants/testimonials.jsx';

export default function Testimonials() {
  const testimonials = TESTIMONIALS_LIST;

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Divider line: section boundary separating previous section and Testimonials */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-24 pb-24">
        <div className="w-full max-w-[1080px] flex flex-col items-start text-left">
          
          {/* Eyebrow Header */}
          <span 
            style={{
              fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
              fontWeight: 400,
              color: 'rgb(0, 0, 0)',
              fontSize: '12px',
              lineHeight: '17px',
              letterSpacing: '0.08em'
            }}
            className="uppercase mb-4"
          >
            {TESTIMONIALS_TEXT.eyebrow}
          </span>

          {/* Heading */}
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(15, 15, 15)',
              fontSize: '40px',
              lineHeight: '40px',
              letterSpacing: '-0.02em'
            }}
          >
            {TESTIMONIALS_TEXT.heading}
          </h2>

          {/* Testimonial Cards Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#0f0f0f] p-4 pb-3 flex flex-col justify-between rounded-none shadow-none w-full max-w-[340px] aspect-[340/480] lg:aspect-auto lg:w-[340px] lg:h-[480px]"
              >
                {/* Quote Text */}
                <p 
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: 'rgb(255, 255, 255)',
                    fontSize: '18px',
                    lineHeight: '22px'
                  }}
                  className="mb-4 text-white/90"
                >
                  {t.quote}
                </p>

                {/* Footer Row: Avatar (Left) and Text + Logo Stack (Right) */}
                <div className="flex flex-row items-center gap-3.5 mt-auto">
                  {/* Square Avatar Photo */}
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-[100px] h-[100px] object-cover rounded-none shrink-0"
                  />
                  
                  {/* Name, Title, and Logo Stack */}
                  <div className="flex flex-col text-left">
                    <span 
                      style={{
                        fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                        fontWeight: 400,
                        color: 'rgb(255, 255, 255)',
                        fontSize: '18px',
                        lineHeight: '22px'
                      }}
                    >
                      {t.name}
                    </span>
                    <span 
                      style={{
                        fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                        fontWeight: 400,
                        color: 'rgba(255, 255, 255, 0.45)',
                        fontSize: '12px',
                        lineHeight: '17px'
                      }}
                      className="mt-0.5 uppercase tracking-wide"
                    >
                      {t.title}
                    </span>
                    {/* Company Logo Image */}
                    <div className="mt-2 flex items-center h-5">
                      <img 
                        src={t.logo} 
                        alt={t.logoAlt} 
                        className={`${t.logoClass} object-contain opacity-40 hover:opacity-80 transition-opacity`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
