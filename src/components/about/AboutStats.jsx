import React from 'react';
import { ABOUT_STATS } from '../../constants/about';

export default function AboutStats() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] pb-12 flex flex-col items-center">
      <div className="w-full max-w-[1080px] bg-[#fafafa] border border-black/5 rounded-none p-8 md:p-12 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ABOUT_STATS.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-start text-left border-l border-black/5 pl-4 sm:border-l-0 sm:pl-0 sm:first:border-l-0">
            <span className="text-[38px] md:text-[44px] font-medium leading-none text-[#11734b] font-['Roobert'] mb-2">
              {stat.value}
            </span>
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#063322] mb-2">
              {stat.label}
            </span>
            <p className="text-[#666666] text-xs leading-[16px] font-['Roobert_TRIAL_Regular']">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
