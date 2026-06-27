import React from 'react';
import WorldMap from './WorldMap';
import Button from '../common/Button';
import { WIDGET_BAR_CHART_HEIGHTS, WIDGET_ACTIVITIES, TRUSTED_COMPANIES } from '../../constants/hero';

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--color-bg-dark)] pt-[95px] pb-10 md:pt-[115px] overflow-hidden flex flex-col items-center justify-center">
      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Aligned perfectly with the header guidelines.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
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

      {/* Radial green glow behind map */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(46,184,126,0.08)_0%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
        {/* Heading */}
        <h1
          className="text-white text-4xl sm:text-5xl md:text-[64px] tracking-tight leading-[1.0] md:leading-[64px] mb-4 max-w-4xl text-center"
          style={{
            fontFamily: '"Roobert TRIAL Variable Light", "Roobert TRIAL Variable Light Placeholder", sans-serif',
            fontWeight: 300
          }}
        >
          Global sales tax solved
        </h1>

        {/* Subheading */}
        <p
          className="text-white text-sm sm:text-base md:text-[16px] leading-[19px] max-w-xl mb-6 text-center"
          style={{
            fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
            fontWeight: 400
          }}
        >
          We automate global sales tax compliance,<br className="hidden sm:inline" /> saving finance teams time and money.
        </p>

        {/* Call-to-action (Request Demo ONLY) */}
        <div className="flex justify-center">
          <Button variant="primary" showIcon={true}>
            REQUEST DEMO
          </Button>
        </div>

        {/* Unified Dashboard Mockup Box */}
        <div
          className="relative w-full max-w-[1080px] aspect-[1080/576] bg-[rgba(3,29,19,0.25)] border-[0.09cqw] border-white/5 rounded-[0.37cqw] flex flex-row z-10 shadow-2xl mt-8 mb-6 overflow-hidden"
          style={{ containerType: 'inline-size' }}
        >

          {/* Left Panel */}
          <div className="flex flex-col justify-between p-[1.11cqw] w-[24%] shrink-0 h-full gap-[0.74cqw]">
            {/* Widget 1: Overview */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-[#056240]/40 w-[5.9cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="h-[5.92cqw] bg-white/[0.01] border border-white/5 w-full flex items-center justify-center rounded-[0.18cqw]">
                <div className="h-[0.55cqw] bg-[#056240]/20 w-[7.4cqw] rounded-[0.18cqw]"></div>
              </div>
            </div>

            {/* Widget 2: Status Indicators */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-[#056240]/40 w-[5.9cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="flex flex-col gap-[0.92cqw] pt-[0.18cqw]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-[0.92cqw]">
                    <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/15 border border-[#2eb87e]/30 rounded-[0.18cqw]"></div>
                    <div className="h-[0.55cqw] bg-white/[0.03] w-[10.37cqw] rounded-[0.18cqw]"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Control Grid */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-white/[0.04] w-[7.4cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="grid grid-cols-2 gap-[0.74cqw]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-[2.59cqw] bg-white/[0.02] border border-white/5 rounded-[0.18cqw] flex items-center px-[1.11cqw]">
                    <div className="h-[0.55cqw] bg-white/[0.04] w-full rounded-[0.18cqw]"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Bar Chart Card */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-white/[0.04] w-[8.8cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="h-[4.44cqw] bg-white/[0.01] border border-white/5 w-full flex items-end justify-between px-[1.3cqw] pb-[0.55cqw] pt-[0.37cqw] rounded-[0.18cqw] gap-[0.74cqw]">
                {WIDGET_BAR_CHART_HEIGHTS.map((heightClass, idx) => (
                  <div
                    key={idx}
                    className={`${heightClass} bg-[#2eb87e]/30 border border-[#2eb87e]/40 w-full rounded-[0.18cqw] shadow-[0_0_0.55cqw_rgba(46,184,126,0.1)]`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel (Map & Stats) */}
          <div className="w-[52%] grow p-[1.11cqw] pb-[0.92cqw] flex flex-col justify-between h-full">
            {/* The SVG World Map */}
            <div className="flex-1 flex items-center justify-center h-[39.81cqw] max-h-[39.81cqw]">
              <WorldMap />
            </div>

            {/* Stats list footer */}
            <div className="border-t border-white/5 pt-[1.48cqw] flex flex-row items-center justify-between w-full px-[0.09cqw] gap-[0.74cqw] text-[0.83cqw] font-['Roobert_Mono'] text-white/40 uppercase tracking-[0.06em] whitespace-nowrap">
              <div className="flex items-center gap-[0.37cqw]">
                <svg className="w-[1.11cqw] h-[1.11cqw] text-[var(--color-accent-green-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                Active Jurisdictions <span className="text-white font-bold ml-[0.18cqw]">24</span>
              </div>
              <div className="flex items-center gap-[0.37cqw]">
                <svg className="w-[1.11cqw] h-[1.11cqw] text-[var(--color-accent-green-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                Threshold Crossed <span className="text-white font-bold ml-[0.18cqw]">6</span>
              </div>
              <div className="flex items-center gap-[0.37cqw]">
                <svg className="w-[1.11cqw] h-[1.11cqw] text-[var(--color-accent-green-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                Filings Submitted <span className="text-white font-bold ml-[0.18cqw]">18</span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col justify-between p-[1.11cqw] w-[24%] shrink-0 h-full gap-[0.74cqw]">
            {/* Widget 1: Activities list */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-white/[0.04] w-[7.4cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="flex flex-col">
                {WIDGET_ACTIVITIES.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[0.55cqw] py-[0.55cqw] border-b-[0.09cqw] border-white/5 last:border-b-0 last:pb-0 first:pt-0">
                    <div className={`h-[0.55cqw] bg-white/[0.04] ${item.w1} rounded-[0.18cqw]`}></div>
                    <div className={`h-[0.37cqw] bg-white/[0.02] ${item.w2} rounded-[0.18cqw]`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Middle Status Indicators */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-white/[0.04] w-[7.4cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="flex flex-col gap-[0.92cqw] pt-[0.18cqw]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-[0.92cqw]">
                    <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/15 border border-[#2eb87e]/30 rounded-[0.18cqw]"></div>
                    <div className="h-[0.55cqw] bg-white/[0.03] w-[8.8cqw] rounded-[0.18cqw]"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Compliance progress bars */}
            <div className="bg-[#0c462e]/20 border border-white/5 p-[1.11cqw] flex flex-col gap-[0.92cqw] rounded-[0.74cqw] w-full">
              <div className="flex items-center gap-[0.74cqw]">
                <div className="w-[1.3cqw] h-[1.3cqw] bg-[#2eb87e]/20 border border-[#2eb87e]/40 rounded-[0.18cqw]"></div>
                <div className="h-[0.55cqw] bg-white/[0.04] w-[5.9cqw] rounded-[0.18cqw]"></div>
              </div>
              <div className="flex flex-col gap-[0.55cqw] pt-[0.18cqw]">
                <div className="h-[0.55cqw] bg-white/[0.02] w-[8.8cqw] rounded-[0.18cqw]"></div>
                <div className="w-full bg-[#053321] h-[1.3cqw] rounded-[0.18cqw] overflow-hidden border-[0.09cqw] border-white/5">
                  <div className="bg-[#2eb87e] h-full w-[65%] shadow-[0_0_0.74cqw_rgba(46,184,126,0.4)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width horizontal line spanning left end to right end */}
      <div className="w-full border-t border-white/5 mt-6 mb-6 z-10"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
        {/* Trusted By Logo Wall Section */}
        <div className="w-full max-w-[1080px] z-10">
          <div className="flex items-center mb-6">
            <span className="w-1.5 h-1.5 bg-[#2eb87e] mr-2.5"></span>
            <span
              className="text-white"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              Trusted by fast-growing companies across industries
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {TRUSTED_COMPANIES.map((company, index) => (
              <div key={index} className="bg-[#0f3b2a] border border-white/5 flex items-center justify-center h-[56px]">
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

      </div>
    </section>
  );
}
