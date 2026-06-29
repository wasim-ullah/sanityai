import React from 'react';
import { CustomBulbIcon, CustomStampIcon, CustomCalculatorIcon, CustomFileIcon } from '../icons';
import { UnderstandMockup, RegisterMockup, CalculateMockup, FileMockup } from './mockups';
import { FEATURES_TEXT, FEATURES_TABS } from '../../constants/features';

export default function Features() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [hoveredTab, setHoveredTab] = React.useState(null);

  const tabIcons = [CustomBulbIcon, CustomStampIcon, CustomCalculatorIcon, CustomFileIcon];
  const tabs = FEATURES_TABS.map((tab, idx) => ({
    ...tab,
    icon: tabIcons[idx]
  }));

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Only the outermost guidelines are visible (left-[162px] and right-[162px]), others are hidden.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Header Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
        <div className="w-full max-w-[1080px] pt-8 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <span
              className="block mb-4"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgba(0, 0, 0, 0.64)',
                fontSize: '12px',
                lineHeight: '17px'
              }}
            >
              {FEATURES_TEXT.eyebrow}
            </span>
            <h2
              className="text-[var(--color-text-primary-dark)]"
              style={{
                fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                color: 'rgb(6, 51, 34)',
                fontSize: '40px',
                lineHeight: '40px'
              }}
            >
              {FEATURES_TEXT.heading.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div className="max-w-md">
            <p
              className="text-black"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              {FEATURES_TEXT.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < 2 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Full-width horizontal line spanning left end to right end */}
      <div className="w-full border-t border-black/[0.06] z-10"></div>

      {/* Tabs and Visuals Content Grid */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
        <div className="w-full max-w-[1080px] pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:self-stretch w-full pt-8 lg:pt-0">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              const isHovered = hoveredTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setHoveredTab(idx)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="text-left w-full flex flex-col bg-transparent border-none focus:outline-none cursor-pointer py-3.5 first:pt-0 last:pb-0 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 w-full">
                    {/* Icon Container */}
                    <div className={`transition-colors duration-300 ${isActive
                      ? 'text-[rgb(5,51,33)]'
                      : isHovered
                        ? 'text-[#2cff8e]'
                        : 'text-black/35'
                      }`}>
                      {React.createElement(tab.icon, {
                        size: 28,
                        strokeWidth: 1.2,
                        fill: (isActive || isHovered) ? '#2cff8e' : 'none',
                        className: 'transition-all duration-300'
                      })}
                    </div>
                    {/* Title */}
                    <h3
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '20px',
                        color: isActive ? 'rgb(5, 51, 33)' : 'rgba(5, 51, 33, 0.48)'
                      }}
                    >
                      {tab.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p
                    className="mt-2 transition-colors duration-300 text-left"
                    style={{
                      fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: isActive ? 'rgb(102, 102, 102)' : 'rgba(102, 102, 102, 0.64)'
                    }}
                  >
                    {tab.description}
                  </p>

                  {/* Mobile Visualization Card (Nested inside the active tab) */}
                  {isActive && (
                    <div className="lg:hidden mt-6 w-full flex justify-center">
                      <div className="relative w-full max-w-[500px] aspect-[327.2/400] bg-[#063322] border border-white/5 rounded-none shadow-2xl overflow-hidden flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,184,126,0.08)_0%,transparent_70%)] pointer-events-none"></div>
                        <div className="w-full h-full flex items-center justify-center">
                          {activeTab === 0 && <UnderstandMockup />}
                          {activeTab === 1 && <RegisterMockup />}
                          {activeTab === 2 && <CalculateMockup />}
                          {activeTab === 3 && <FileMockup />}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visualization Card (Only visible on desktop) */}
          <div className="hidden lg:flex lg:col-span-7 justify-center lg:justify-end w-full pt-0 lg:translate-x-[calc(50vw-710px)]">
            {/* Box typestyle with gray-colored borders matching the inspect properties: size 500x640px */}
            <div className="relative w-full max-w-[500px] aspect-[327.2/400] bg-[#063322] border border-white/5 rounded-none shadow-2xl overflow-hidden flex items-center justify-center p-8">
              {/* Pulsing light green background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,184,126,0.08)_0%,transparent_70%)] pointer-events-none"></div>

              {/* Active tab content switcher with transition animations */}
              <div className="w-full h-full flex items-center justify-center transition-all duration-500">
                {activeTab === 0 && <UnderstandMockup />}
                {activeTab === 1 && <RegisterMockup />}
                {activeTab === 2 && <CalculateMockup />}
                {activeTab === 3 && <FileMockup />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
