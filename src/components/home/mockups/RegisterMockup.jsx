import React from 'react';
import { REGISTER_COMPANY_DATA, REGISTERED_STATES } from '../../../constants/features';

export default function RegisterMockup() {
  return (
    <div className="w-[90%] sm:w-[85%] flex flex-col items-center gap-3">
      {/* Node 1: Company Info */}
      <div className="bg-[#1c1c1c]/30 backdrop-blur-md border border-white/5 p-4 rounded-sm w-full flex flex-col gap-2.5 text-[12px] font-sans">
        <div className="flex items-center gap-2 pb-1.5 border-b border-white/5">
          <div className="w-6 h-6 bg-[#d1d1d1]/15 border border-[#d1d1d1]/30 rounded-sm flex items-center justify-center text-[#d1d1d1]">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
          </div>
          <span className="text-white font-medium">Company Data</span>
        </div>
        {REGISTER_COMPANY_DATA.map((row, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-white/50">{row.label}</span>
            <span className="text-white font-medium">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Down Connector */}
      <div className="h-6 w-px bg-[#d1d1d1]/30"></div>

      {/* Preparing badge */}
      <div className="bg-[#d1d1d1]/15 border border-[#d1d1d1]/30 text-[#d1d1d1] text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-sm flex items-center gap-2">
        <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeDasharray="6 4" /></svg>
        Preparing Forms..
      </div>

      {/* Down Connector */}
      <div className="h-6 w-px bg-[#d1d1d1]/30"></div>

      {/* Grid of registered states */}
      <div className="grid grid-cols-2 gap-3.5 w-full">
        {REGISTERED_STATES.map((state, i) => (
          <div key={i} className="bg-[#1c1c1c]/30 backdrop-blur-md border border-white/5 p-3 rounded-sm flex flex-col gap-2 text-[11px] font-sans">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-[#d1d1d1]/10 border border-[#d1d1d1]/20 rounded-sm flex items-center justify-center text-[#d1d1d1]">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /></svg>
              </div>
              <span className="text-white font-medium">{state}</span>
            </div>
            <div className="h-1 bg-white/[0.04] w-full rounded-sm overflow-hidden">
              <div className="bg-[#d1d1d1]/50 h-full w-[65%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
