import React from 'react';
import { ABOUT_LOGOS } from '../../constants/about';

export default function AboutLogos() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center">
      <div className="w-full max-w-[1080px] py-[28px] px-6 md:px-[60px] bg-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {ABOUT_LOGOS.map((logo, idx) => (
            <div key={idx} className="bg-[#f5f5f5] h-16 flex items-center justify-center w-full">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-5 w-auto object-contain max-w-[187.2px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
