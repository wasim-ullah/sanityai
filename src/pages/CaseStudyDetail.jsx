import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CASE_STUDY_DETAILS } from '../constants/casestudy';

// Image assets imports
import singlecase1 from '../assets/images/singlecase1.png';
import caseStudy1 from '../assets/images/caseStudy1.png';
import casestudy2 from '../assets/images/casestudy2.png';

// Local asset map for sidebar logos
const logoMap = {
  levanta_logo_white: singlecase1,
  italic_logo_white: singlecase1
};

// Detail page hero image map
const detailImageMap = {
  '/assets/images/levanta.png': caseStudy1,
  '/assets/images/casestudy2.png': casestudy2
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const details = CASE_STUDY_DETAILS[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // If ID doesn't exist, redirect back to case study index
  if (!details) {
    useEffect(() => {
      navigate('/case-study');
    }, [navigate]);
    return null;
  }

  const keys = Object.keys(CASE_STUDY_DETAILS);
  const currentIndex = keys.indexOf(id);
  const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
  const nextIndex = (currentIndex + 1) % keys.length;

  const prevKey = keys[prevIndex];
  const nextKey = keys[nextIndex];

  const prevCase = CASE_STUDY_DETAILS[prevKey];
  const nextCase = CASE_STUDY_DETAILS[nextKey];

  return (
    <div className="relative w-full bg-white text-black min-h-screen pt-10 overflow-x-hidden flex flex-col items-center">

      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Drawn in very light gray opacity (border-black/[0.04]).
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
        {/* Left guideline — matches navbar left-[162px] */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.06]"></div>
        {/* Right guideline — matches navbar right-[162px] */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.06]"></div>
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 w-full px-6 lg:pl-[162px] lg:pr-[162px] flex flex-col lg:flex-row items-stretch pt-16 pb-16 gap-0">

        {/* 
          LEFT COLUMN: Sidebar attached to the leftmost line.
          Divided from main content by its right border.
        */}
        <div className="w-full lg:w-[216px] flex-shrink-0 flex flex-col border-b lg:border-b-0 lg:border-r border-black/[0.08] pb-12 lg:pb-0">

          {/* Sidebar Dark Green Card Container (sticky, top 88px, width 216px, padding 6px) */}
          <div className="w-full sticky top-[30px] h-fit bg-[#0f0f0f] border border-white/10 p-[6px] flex flex-col rounded-none select-none z-10">

            {/* Top Logo Container (size: 204 x 64 with transparent white background) */}
            <div className="w-full h-[64px] bg-white/[0.04] flex items-center justify-center p-2 rounded-none mb-4">
              {logoMap[details.sidebarLogoKey] ? (
                <img
                  src={logoMap[details.sidebarLogoKey]}
                  alt="Client Logo"
                  className="max-h-[32px] max-w-[180px] object-contain"
                />
              ) : (
                <span className="text-white font-extrabold text-lg tracking-[0.12em]">
                  {id.includes('italic') ? 'ITALIC' : details.category.toUpperCase()}
                </span>
              )}
            </div>

            {/* Sidebar body texts */}
            <div className="flex flex-col px-2 pb-2">

              {/* Problem Section (size: 188 x 89.2) */}
              <div className="flex flex-col gap-2 text-left mb-3">
                <span
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: 'rgba(255, 255, 255, 0.4)'
                  }}
                  className="uppercase"
                >
                  PROBLEM:
                </span>
                <p
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                  className="text-white/90"
                >
                  {details.problem}
                </p>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full border-t border-white/10 mb-3"></div>

              {/* Solution Section (size: 181 x 89.2) */}
              <div className="flex flex-col gap-2 text-left mb-4">
                <span
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: 'rgba(255, 255, 255, 0.4)'
                  }}
                  className="uppercase"
                >
                  SOLUTION:
                </span>
                <p
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}
                  className="text-white/90"
                >
                  {details.solution}
                </p>
              </div>

              {/* Bottom White CTA Button (size: 204 x 32) */}
              <a
                href="#demo"
                className="w-full h-[32px] bg-white text-[#0f0f0f] flex items-center justify-center gap-1.5 font-sans font-bold text-[11px] tracking-wider uppercase rounded-none transition-colors duration-150 hover:bg-[#ffffff] hover:text-[#0f0f0f]"
              >
                <span>{details.buttonText}</span>
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Case Study Details Narrative Text */}
        <div className="flex-1 pt-12 lg:pt-[55px] pb-12 flex flex-col items-center text-left">

          {/* Inner content wrapper — 619px wide, centered between both guideline lines */}
          <div style={{ width: '100%', maxWidth: '619px' }} className="mx-auto">

            {/* Breadcrumb: CASE STUDY > NAME */}
            <div className="flex items-center gap-[8px] mb-5">
              <Link
                to="/case-study"
                style={{
                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.04em',
                  color: 'rgba(15, 15, 15, 0.73)',
                  textDecoration: 'none'
                }}
                className="hover:underline"
              >
                CASE STUDY
              </Link>
              <span
                style={{
                  color: 'rgba(15, 15, 15, 0.5)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: '"Beausite Classic Regular", Inter, sans-serif'
                }}
              >
                &gt;
              </span>
              <span
                style={{
                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.04em',
                  color: 'rgb(0, 0, 0)'
                }}
              >
                {details.name?.toUpperCase()}
              </span>
            </div>

            {/* Article Title — 40px/40px, black, Roobert Medium */}
            <h1
              style={{
                fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '40px',
                color: 'rgb(0, 0, 0)'
              }}
              className="mb-8"
            >
              {details.title}
            </h1>

            {/* Detail Hero Image — 619 x 200 */}
            {details.detailImage && (
              <div className="w-full mb-10 overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={detailImageMap[details.detailImage] || details.detailImage}
                  alt={`${details.name} Case Study`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Sections — headings, paragraphs, blockquotes, metrics, lists */}
            {(details.sections || []).map((section, sIdx) => (
              <div key={sIdx} className="mb-10">

                {/* Section Heading */}
                {section.heading && (
                  <h2
                    style={{
                      fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                      fontWeight: 500,
                      fontSize: '40px',
                      lineHeight: '40px',
                      color: 'rgb(15, 15, 15)'
                    }}
                    className="mb-5"
                  >
                    {section.heading}
                  </h2>
                )}

                {/* Section Content Items */}
                <div className="flex flex-col gap-5">
                  {(section.content || []).map((item, iIdx) => {

                    if (item.type === 'paragraph') {
                      return (
                        <p
                          key={iIdx}
                          style={{
                            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '22px',
                            color: 'rgb(102, 102, 102)'
                          }}
                        >
                          {item.text}
                        </p>
                      );
                    }

                    if (item.type === 'blockquote') {
                      return (
                        <blockquote
                          key={iIdx}
                          style={{
                            borderLeft: '2px solid rgb(15, 15, 15)',
                            paddingLeft: '16px',
                            marginLeft: '0',
                            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular Italic", "Roobert TRIAL Regular Italic Placeholder", sans-serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '29px',
                            color: 'rgb(0, 0, 0)'
                          }}
                        >
                          {item.text}
                        </blockquote>
                      );
                    }

                    if (item.type === 'metrics') {
                      return (
                        <div key={iIdx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                          {item.items.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="flex flex-col gap-1 p-4 border border-black/[0.08]"
                            >
                              <span
                                style={{
                                  fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '20px',
                                  lineHeight: '24px',
                                  color: 'rgb(15, 15, 15)'
                                }}
                              >
                                {m.stat}
                              </span>
                              <span
                                style={{
                                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                                  fontWeight: 400,
                                  fontSize: '12px',
                                  lineHeight: '16px',
                                  color: 'rgba(0, 0, 0, 0.55)'
                                }}
                              >
                                {m.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    if (item.type === 'list') {
                      return (
                        <ul key={iIdx} className="flex flex-col gap-[6px] my-1 pl-1">
                          {item.items.map((li, liIdx) => (
                            <li key={liIdx} className="flex items-start gap-2">
                              {/* Small dot bullet matching reference */}
                              <span
                                style={{
                                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                                  fontSize: '16px',
                                  lineHeight: '22px',
                                  color: 'rgb(102, 102, 102)',
                                  flexShrink: 0,
                                  marginTop: '1px'
                                }}
                              >
                                ·
                              </span>
                              <span
                                style={{
                                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                                  fontWeight: 400,
                                  fontSize: '16px',
                                  lineHeight: '22px',
                                  color: 'rgb(102, 102, 102)'
                                }}
                              >
                                <strong
                                  style={{
                                    fontWeight: 700,
                                    color: 'rgb(102, 102, 102)'
                                  }}
                                >
                                  {li.label}
                                </strong>
                                {li.description ? ` ${li.description}` : ''}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>

              </div>
            ))}

            {/* Bottom CTA — dark green box matching reference image */}
            {details.ctaHeading && (
              <div
                className="w-full mt-6 p-8"
                style={{ background: 'rgb(15, 15, 15)' }}
              >
                <h3
                  style={{
                    fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                    fontWeight: 500,
                    fontSize: '32px',
                    lineHeight: '36px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="mb-8"
                >
                  {details.ctaHeading}
                </h3>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    border: '1px solid rgb(255, 255, 255)',
                    color: 'rgb(15, 15, 15)',
                    background: 'rgb(255, 255, 255)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = 'rgb(15, 15, 15)';
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgb(255, 255, 255)';
                    e.currentTarget.style.color = 'rgb(15, 15, 15)';
                    e.currentTarget.style.borderColor = 'rgb(255, 255, 255)';
                  }}
                >
                  REQUEST DEMO
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Written by banner spanning full viewport width with edge-to-edge lines */}
      <div className="relative z-10 w-full border-t border-b border-black/[0.08] mb-16">
        <div 
          className="w-full px-6 lg:pl-[162px] lg:pr-[162px] py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{
            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            color: 'rgb(0, 0, 0)'
          }}
        >
          <span>Written by: Taxwire Research Team</span>
          <span>Helping companies stay compliant worldwide.</span>
        </div>
      </div>

      {/* Relevant Case Studies Section */}
      <div className="relative z-10 w-full px-6 lg:pl-[162px] lg:pr-[162px] mb-24 flex flex-col items-center">
        <h2 
          className="mb-12 text-center"
          style={{
            fontFamily: '"Beausite Classic Regular", "Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '40px',
            color: 'rgb(0, 0, 0)'
          }}
        >
          Relevant Case Studies
        </h2>
        
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 max-w-[586px] mx-auto">
          {/* Previous Card */}
          <Link 
            to={`/case-study/${prevKey}`}
            className="block bg-[#fafafa] hover:bg-black/[0.04] transition-colors duration-200 text-left flex flex-col"
            style={{
              width: '281px',
              height: '163.6px',
              padding: '16px'
            }}
          >
            <span 
              className="mb-4"
              style={{
                fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '16px',
                color: 'rgba(0, 0, 0, 0.64)'
              }}
            >
              &larr; Previous
            </span>
            <span 
              className="mb-2 uppercase tracking-wider"
              style={{
                fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(0, 0, 0, 0.64)'
              }}
            >
              {prevCase.name}
            </span>
            <h4 
              style={{
                fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: 'rgb(0, 0, 0)'
              }}
            >
              {prevCase.title}
            </h4>
          </Link>

          {/* Up Next Card */}
          <Link 
            to={`/case-study/${nextKey}`}
            className="block bg-[#fafafa] hover:bg-black/[0.04] transition-colors duration-200 text-left flex flex-col"
            style={{
              width: '281px',
              height: '163.6px',
              padding: '16px'
            }}
          >
            <div className="w-full flex justify-end mb-4">
              <span 
                style={{
                  fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '16px',
                  color: 'rgba(0, 0, 0, 0.64)'
                }}
              >
                Up Next &rarr;
              </span>
            </div>
            <span 
              className="mb-2 uppercase tracking-wider"
              style={{
                fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(0, 0, 0, 0.64)'
              }}
            >
              {nextCase.name}
            </span>
            <h4 
              style={{
                fontFamily: '"Beausite Classic Regular", Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: 'rgb(0, 0, 0)'
              }}
            >
              {nextCase.title}
            </h4>
          </Link>
        </div>
      </div>

    </div>
  );
}
