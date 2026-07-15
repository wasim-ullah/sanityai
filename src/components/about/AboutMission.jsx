import React from 'react';
import { ABOUT_MISSION } from '../../constants/about';

export default function AboutMission() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] py-20 flex flex-col items-center">
      <div className="w-full max-w-[1080px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 text-left">
          <span className="block mb-4 uppercase tracking-[0.08em] font-semibold text-xs text-[#454545]">
            {ABOUT_MISSION.eyebrow}
          </span>
          <h2 className="text-3xl font-medium tracking-tight font-['Beausite_Classic_Regular'] leading-tight">
            {ABOUT_MISSION.heading}
          </h2>
        </div>
        <div className="lg:col-span-8 text-left">
          <p className="text-[#666666] text-base md:text-[18px] leading-[26px] font-['Beausite_Classic_Regular']">
            {ABOUT_MISSION.description}
          </p>
        </div>
      </div>
    </section>
  );
}
