import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navbar';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)] border-b border-white/5 w-full">
      {/* 
        Symmetric Left & Right Grid Guidelines in the background.
        Lines up exactly with the margins of the logo and action buttons.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Left side guidelines */}
        <div className="absolute top-0 bottom-0 w-px left-[46px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[69px] border-l border-dashed border-white/6"></div>
        <div className="absolute top-0 bottom-0 w-px left-[97px] border-l border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px left-[128px] border-l border-dashed border-white/6 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-white/5 hidden xl:block"></div>

        {/* Right side guidelines */}
        <div className="absolute top-0 bottom-0 w-px right-[46px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[69px] border-r border-dashed border-white/6"></div>
        <div className="absolute top-0 bottom-0 w-px right-[97px] border-r border-white/5"></div>
        <div className="absolute top-0 bottom-0 w-px right-[128px] border-r border-dashed border-white/6 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-white/5 hidden xl:block"></div>
      </div>

      <div className="w-full h-16 flex items-center justify-between relative z-10 px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] transition-[padding] duration-200 ease-out">
        {/* Left Side: Logo & Main Navigation */}
        <div className="flex items-center gap-[24px]">
          {/* Taxwire Logo & Icon */}
          <Link to="/" className="flex items-center gap-[2px] text-white font-['Roobert'] font-bold text-xl tracking-[-0.01em]">
            <svg 
              className="w-5 h-5 text-white flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Shield outer boundary */}
              <path d="M5 3h14v11c0 3.87-3.13 7-7 7s-7-3.13-7-7V3z" />
              {/* Inner U element */}
              <path d="M9 7v5c0 1.66 1.34 3 3 3s3-1.34 3-3V7" />
              {/* Inner T vertical divider */}
              <path d="M12 3v12" />
            </svg>
            <span className="text-white font-bold text-xl tracking-tight font-['Roobert']">
              Taxwire
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-[14px] translate-y-[2px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase()}`}
                className="text-white font-['Roobert_TRIAL_Regular'] text-xs font-normal leading-[14px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-white/70"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Log In & Request Demo Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="secondary" showIcon={true}>
            LOG IN
          </Button>
          <Button variant="primary" showIcon={true}>
            REQUEST DEMO
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex lg:hidden relative z-20">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center w-10 h-[38px] bg-white/[0.08] border border-white/[0.12] rounded-none text-white cursor-pointer transition-all duration-200 hover:bg-white/[0.15] hover:border-white/[0.25]"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-[#053321] z-50 flex flex-col pb-6">
          {/* Header row inside drawer */}
          <div className="w-full h-16 px-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-[2px] text-white font-['Roobert'] font-bold text-xl tracking-[-0.01em]" onClick={() => setMobileMenuOpen(false)}>
              <svg 
                className="w-5 h-5 text-white flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Shield outer boundary */}
                <path d="M5 3h14v11c0 3.87-3.13 7-7 7s-7-3.13-7-7V3z" />
                {/* Inner U element */}
                <path d="M9 7v5c0 1.66 1.34 3 3 3s3-1.34 3-3V7" />
                {/* Inner T vertical divider */}
                <path d="M12 3v12" />
              </svg>
              <span className="text-white font-bold text-xl tracking-tight font-['Roobert']">
                Taxwire
              </span>
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 bg-white/[0.08] text-white cursor-pointer transition-all duration-200 hover:bg-white/[0.12]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Drawer content area */}
          <div className="flex flex-col px-6 pt-5">
            <nav className="flex flex-col gap-6 mb-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link}
                  to={`/#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-['Roobert_TRIAL_Medium'] text-[15px] font-medium leading-[18px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-white/70 w-max"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Buttons row at the bottom */}
            <div className="flex flex-row gap-3 w-full">
              <Button 
                variant="secondary" 
                showIcon={true} 
                onClick={() => setMobileMenuOpen(false)}
              >
                LOG IN
              </Button>
              <Button 
                variant="primary" 
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
