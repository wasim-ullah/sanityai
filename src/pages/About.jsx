import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutLogos from '../components/about/AboutLogos';
import AboutTeam from '../components/about/AboutTeam';
import AboutValues from '../components/about/AboutValues';
import Testimonials from '../components/home/Testimonials';
// import AboutMission from '../components/about/AboutMission';
// import AboutStats from '../components/about/AboutStats';
import AboutCta from '../components/about/AboutCta';

export default function About() {
  return (
    <div className="relative w-full bg-white text-[#063322] min-h-screen pt-20 overflow-hidden flex flex-col items-center">
      {/* 
        Symmetric Left & Right Grid Guidelines matching the Navbar.
        Only the 2 right-most left lines (128px, 162px) and 2 left-most right lines (128px, 162px) are displayed.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block z-0">
        <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-black/[0.05]"></div>
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.05]"></div>
        <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-black/[0.05]"></div>
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.05]"></div>
      </div>

      {/* About Page Sections called in sequence */}
      <AboutHero />
      
      <AboutLogos />
      
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>
      
      <AboutTeam />
      
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>
      
      <AboutValues />
      
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>
      
      <Testimonials />
      
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>
      
      {/* <AboutMission /> */}
      
      {/* <AboutStats /> */}
      
      <AboutCta />
    </div>
  );
}
