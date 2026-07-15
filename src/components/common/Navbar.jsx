import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navbar';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
      isAboutPage 
        ? 'bg-white border-b border-black/[0.06] text-[#0f0f0f]' 
        : 'bg-[var(--color-bg-dark)] border-b border-white/5 text-white'
    }`}>
      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Lines up exactly with the margins of the logo and action buttons.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {isAboutPage ? (
          <>
            {/* Left side guidelines - About Page (only two right-most lines) */}
            <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-black/[0.06] hidden xl:block"></div>
            <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.06] hidden xl:block"></div>

            {/* Right side guidelines - About Page (only two left-most lines) */}
            <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-black/[0.06] hidden xl:block"></div>
            <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.06] hidden xl:block"></div>
          </>
        ) : (
          <>
            {/* Left side guidelines - Homepage */}
            <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-white/5"></div>
            <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-white/6"></div>
            <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-white/5"></div>
            <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-white/6 hidden xl:block"></div>
            <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-white/5 hidden xl:block"></div>

            {/* Right side guidelines - Homepage */}
            <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-white/5"></div>
            <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-white/6"></div>
            <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-white/5"></div>
            <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-white/6 hidden xl:block"></div>
            <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-white/5 hidden xl:block"></div>
          </>
        )}
      </div>

      <div className="w-full h-16 flex items-center justify-between relative z-10 px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] transition-[padding] duration-200 ease-out">
        {/* Left Side: Logo & Main Navigation */}
        <div className="flex items-center gap-[24px]">
          {/* SanityAI Logo */}
          <Link
            to="/"
            aria-label="SanityAI home"
            className={isAboutPage ? 'text-[#0f0f0f]' : 'text-white'}
          >
            <Logo className="h-5 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-[14px] translate-y-[2px] h-full">
            {NAV_LINKS.map((link) => {
              if (link === 'PLATFORM') {
                return (
                  <div key={link} className="relative group flex items-center h-full cursor-pointer py-4">
                    <span
                      className={`font-['Beausite_Classic_Regular'] text-xs font-normal leading-[14px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                        isAboutPage 
                          ? 'text-[#0f0f0f] group-hover:text-[#0f0f0f]/70' 
                          : 'text-white group-hover:text-white/70'
                      }`}
                    >
                      {link}
                    </span>
                    
                    {/* Hover Dropdown Menu */}
                    <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col gap-1.5 w-[200px] bg-white rounded-xl shadow-xl border border-black/[0.06] p-3 z-50 text-left">
                      
                      <Link 
                        to="/about" 
                        className="font-sans text-[12px] font-medium leading-[14px] text-[#0f0f0f] hover:text-[#454545] uppercase tracking-[0.06em] transition-colors duration-150 px-2 py-1 rounded hover:bg-black/[0.03]"
                      >
                        About
                      </Link>
                      <Link 
                        to="/case-study" 
                        className="font-sans text-[12px] font-medium leading-[14px] text-[#0f0f0f] hover:text-[#454545] uppercase tracking-[0.06em] transition-colors duration-150 px-2 py-1 rounded hover:bg-black/[0.03]"
                      >
                        Case Study
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link}
                  to={`/#${link.toLowerCase()}`}
                  className={`font-['Beausite_Classic_Regular'] text-xs font-normal leading-[14px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                    isAboutPage 
                      ? 'text-[#0f0f0f] hover:text-[#0f0f0f]/70' 
                      : 'text-white hover:text-white/70'
                  }`}
                >
                  {link}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Log In & Request Demo Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant={isAboutPage ? 'about' : 'secondary'} showIcon={true}>
            LOG IN
          </Button>
          <Button variant={isAboutPage ? 'about' : 'primary'} showIcon={true}>
            REQUEST DEMO
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex lg:hidden relative z-20">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`flex items-center justify-center w-10 h-[38px] rounded-none cursor-pointer transition-all duration-200 ${
              isAboutPage 
                ? 'bg-[#0f0f0f]/[0.08] border border-[#0f0f0f]/[0.12] text-[#0f0f0f] hover:bg-[#0f0f0f]/[0.15]' 
                : 'bg-white/[0.08] border border-white/[0.12] text-white hover:bg-white/[0.15]'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`absolute top-0 left-0 right-0 z-50 flex flex-col pb-6 transition-all duration-300 ${
          isAboutPage 
            ? 'bg-white text-[#0f0f0f] border-b border-black/[0.08]' 
            : 'bg-[#0f0f0f] text-white'
        }`}>
          {/* Header row inside drawer */}
          <div className="w-full h-16 px-6 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              aria-label="SanityAI home"
              className={isAboutPage ? 'text-[#0f0f0f]' : 'text-white'}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo className="h-5 w-auto" />
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center w-10 h-10 rounded-none cursor-pointer transition-all duration-200 ${
                isAboutPage 
                  ? 'bg-[#0f0f0f]/[0.08] text-[#0f0f0f] hover:bg-[#0f0f0f]/[0.12]' 
                  : 'bg-white/[0.08] text-white hover:bg-white/[0.12]'
              }`}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer content area */}
          <div className="flex flex-col px-6 pt-5">
            <nav className="flex flex-col gap-6 mb-8">
              {NAV_LINKS.map((link) => {
                if (link === 'PLATFORM') {
                  return (
                    <div key={link} className="flex flex-col gap-3">
                      <span className={`font-['Beausite_Classic_Regular'] text-[15px] font-medium leading-[18px] uppercase tracking-[0.08em] ${
                        isAboutPage ? 'text-[#0f0f0f]' : 'text-white'
                      }`}>
                        PLATFORM
                      </span>
                      <div className="flex flex-col gap-2.5 pl-4 border-l border-current/10 text-left">
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-wider opacity-85">About</Link>
                        <Link to="/case-study" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-wider opacity-85">Case Study</Link>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link}
                    to={`/#${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-['Beausite_Classic_Regular'] text-[15px] font-medium leading-[18px] uppercase tracking-[0.08em] transition-colors duration-200 w-max ${
                      isAboutPage 
                        ? 'text-[#0f0f0f] hover:text-[#0f0f0f]/70' 
                        : 'text-white hover:text-white/70'
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}
            </nav>

            {/* Buttons row at the bottom */}
            <div className="flex flex-row gap-3 w-full">
              <Button 
                variant={isAboutPage ? 'about' : 'secondary'} 
                showIcon={true} 
                onClick={() => setMobileMenuOpen(false)}
              >
                LOG IN
              </Button>
              <Button 
                variant={isAboutPage ? 'about' : 'primary'} 
                showIcon={true} 
                onClick={() => setMobileMenuOpen(false)}
              >
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
