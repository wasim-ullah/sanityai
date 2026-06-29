import React from 'react';
import { ABOUT_CTA } from '../../constants/about';

export default function AboutCta() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
      {/* 1180 x 224 Centered CTA Wrapper */}
      <div className="w-full max-w-[1180px] h-auto lg:h-[224px] py-[60px] flex flex-col items-center justify-between text-center gap-8 lg:gap-0">
        {/* Centered Heading */}
        <h2 
          style={{
            fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
            fontWeight: 500,
            color: 'rgb(6, 51, 34)',
            fontSize: '40px',
            lineHeight: '40px'
          }}
          className="tracking-tight font-medium max-w-2xl text-center"
        >
          {ABOUT_CTA.heading}
        </h2>

        {/* 162 x 32 Action Button */}
        <button 
          style={{
            backgroundColor: '#063322',
            borderRadius: '0px',
            width: '162px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background-color 0.2s ease'
          }}
          className="hover:bg-[#11734b] text-white uppercase flex-shrink-0"
        >
          <span
            style={{
              fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(255, 255, 255)',
              fontSize: '12px',
              lineHeight: '14px',
              letterSpacing: '0.08em'
            }}
          >
            {ABOUT_CTA.buttonText}
          </span>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
