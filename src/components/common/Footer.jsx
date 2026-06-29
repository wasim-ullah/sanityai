import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Footer() {
  const location = useLocation();
  const isCompactFooter = location.pathname === '/about' || location.pathname.startsWith('/case-study');

  return (
    <footer className={`relative bg-[var(--color-bg-dark)] w-full overflow-hidden flex flex-col z-10 justify-between ${
      isCompactFooter 
        ? 'h-auto' 
        : 'h-auto lg:h-[calc(100vh-64px)] min-h-[650px] lg:min-h-[500px]'
    }`}>
      
      {/* Symmetric Left & Right Grid Guidelines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
        <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-white/5 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-white/5 hidden xl:block"></div>

        <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-white/5 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-white/5 hidden xl:block"></div>
      </div>

      {/* BOX 1: Top Section (27% height on desktop, fluid typography on mobile) */}
      <div className={`relative z-10 w-full h-auto flex items-center ${
        isCompactFooter ? 'py-16 lg:py-20' : 'lg:h-[27%] pt-16 pb-12 lg:py-0'
      }`}>
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px]">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            <div className="w-full lg:max-w-[650px]">
              {/* Responsive fluid heading */}
              <h2 
                className="tracking-tight text-[28px] leading-[32px] sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[40px]"
                style={{
                  fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                  fontWeight: 500,
                  color: 'rgb(255, 255, 255)'
                }}
              >
                Save time, money, and headache<br />on sales tax compliance.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5 w-full sm:max-w-[280px]">
              {/* Responsive fluid description */}
              <p 
                className="text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px]"
                style={{
                  fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(255, 255, 255)'
                }}
              >
                Built by tax experts to shield<br />your business from risk.
              </p>
              <Button variant="primary" showIcon={true}>
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line 1: Spanning whole screen from left-most to right-most corner */}
      <div className="w-full border-t border-white/5 relative z-10"></div>

      {/* BOX 2: Middle Links Section (25% height on desktop, stacking columns on mobile) */}
      <div className={`relative z-10 w-full h-auto flex items-center ${
        isCompactFooter ? 'py-16 pb-20' : 'lg:h-[25%] py-12 lg:py-0'
      }`}>
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-start">
            
            {/* Left Column: Logo + Copyright + SOC 2 (centered on mobile, left-aligned on desktop) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
              <Link to="/" className="flex items-center gap-[2px] text-white font-['Roobert'] font-bold text-xl tracking-[-0.01em]">
                <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h14v11c0 3.87-3.13 7-7 7s-7-3.13-7-7V3z" />
                  <path d="M9 7v5c0 1.66 1.34 3 3 3s3-1.34 3-3V7" />
                  <path d="M12 3v12" />
                </svg>
                <span>Taxwire</span>
              </Link>
              <span 
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.47)',
                  fontSize: '16px',
                  lineHeight: 'normal'
                }}
              >
                Taxwire © 2026
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-[7px] font-bold text-white shadow-sm border border-blue-400/20 shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span 
                  style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: '14px',
                    lineHeight: 'normal'
                  }}
                >
                  SOC 2 Type II Certified
                </span>
              </div>
            </div>

            {/* Right Columns: Links Flex Container (side-by-side and centered on mobile, right-aligned on desktop) */}
            <div className="col-span-12 lg:col-span-7 w-full flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-start gap-8 lg:gap-10 xl:gap-14">
              
              {/* Column 1: Company */}
              <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto">
                <span 
                  className="w-full text-center lg:text-left"
                  style={{
                    fontFamily: '"Roobert TRIAL", "Roobert TRIAL Placeholder", sans-serif',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.64)',
                    fontSize: '13px',
                    lineHeight: '12px'
                  }}
                >
                  COMPANY
                </span>
                <Link 
                  to="/#careers" 
                  style={{
                    fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                  className="hover:text-white transition-colors w-full text-center lg:text-left"
                >
                  Careers
                </Link>
              </div>
              
              {/* Column 2: Socials */}
              <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto">
                <span 
                  className="w-full text-center lg:text-left"
                  style={{
                    fontFamily: '"Roobert TRIAL", "Roobert TRIAL Placeholder", sans-serif',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.64)',
                    fontSize: '13px',
                    lineHeight: '12px'
                  }}
                >
                  SOCIALS
                </span>
                <div className="flex flex-col items-center lg:items-start gap-2.5 w-full">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                      fontWeight: 400,
                      color: '#ffffff',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                    className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors w-full"
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#2c9a6b]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                      fontWeight: 400,
                      color: '#ffffff',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                    className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors w-full"
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#2c9a6b]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </div>
                    <span>Twitter / X</span>
                  </a>
                </div>
              </div>

              {/* Column 3: Support */}
              <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto">
                <span 
                  className="w-full text-center lg:text-left"
                  style={{
                    fontFamily: '"Roobert TRIAL", "Roobert TRIAL Placeholder", sans-serif',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.64)',
                    fontSize: '13px',
                    lineHeight: '12px'
                  }}
                >
                  SUPPORT
                </span>
                <div className="flex flex-col items-center lg:items-start gap-2.5 w-full">
                  <Link 
                    to="/privacy" 
                    style={{
                      fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                      fontWeight: 400,
                      color: '#ffffff',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                    className="hover:text-white transition-colors w-full text-center lg:text-left"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms" 
                    style={{
                      fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                      fontWeight: 400,
                      color: '#ffffff',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                    className="hover:text-white transition-colors w-full text-center lg:text-left"
                  >
                    Terms of use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line 2: Spanning whole screen from left-most to right-most corner */}
      {!isCompactFooter && <div className="w-full border-t border-white/5 relative z-10"></div>}

      {/* BOX 3: Bottom Section (48% height on desktop, contains massive background logo) */}
      {!isCompactFooter && (
        <div className="relative w-full h-[120px] sm:h-[150px] lg:h-[48%] z-10 flex items-end">
          <div className="absolute bottom-0 left-6 right-6 lg:left-[97px] lg:right-[97px] xl:left-[162px] xl:right-[162px] h-[90px] sm:h-[120px] lg:h-[85%] flex items-end overflow-hidden">
            <svg 
              className="w-full h-auto text-white/[0.03]" 
              viewBox="0 0 800 220" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8"
            >
              <g transform="translate(-42.5, 10) scale(8.5)" fill="#063a24">
                <path d="M5 3h14v11c0 3.87-3.13 7-7 7s-7-3.13-7-7V3z" />
                <path d="M9 7v5c0 1.66 1.34 3 3 3s3-1.34 3-3V7" />
                <path d="M12 3v12" />
              </g>
              <text 
                x="150" 
                y="172" 
                fontFamily="'Roobert TRIAL Variable Medium', 'Roobert TRIAL Variable Medium Placeholder', 'Roobert TRIAL Medium', 'Roobert', sans-serif" 
                fontSize="200" 
                fontWeight="500" 
                letterSpacing="-0.03em" 
                textLength="650"
                lengthAdjust="spacingAndGlyphs"
                fill="#063a24" 
                stroke="currentColor" 
                strokeWidth="0.6"
              >
                Taxwire
              </text>
            </svg>
          </div>
        </div>
      )}

    </footer>
  );
}
