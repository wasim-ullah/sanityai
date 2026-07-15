import React from 'react';
import { UNDERSTAND_MOCKUP_ROWS } from '../../../constants/features';

export default function UnderstandMockup() {
  return (
    <div className="bg-[#1c1c1c]/30 backdrop-blur-md border border-white/5 p-5 rounded-sm w-[90%] sm:w-[85%] shadow-2xl flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
        <div className="w-7 h-7 bg-[#d1d1d1]/15 border border-[#d1d1d1]/30 rounded-sm flex items-center justify-center text-[#d1d1d1]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
          </svg>
        </div>
        <span className="text-white font-medium text-[15px] font-sans">California</span>
      </div>

      {/* Card Rows */}
      <div className="flex flex-col text-[13px] font-sans">
        {UNDERSTAND_MOCKUP_ROWS.map((row, idx) => (
          <div key={idx} className="flex justify-between py-3 border-b border-white/5">
            <span className="text-white/60">{row.label}</span>
            <span className="text-white font-medium">{row.value}</span>
          </div>
        ))}
        <div className="flex justify-between items-center py-3">
          <span className="text-white/60">Estimated Tax Liability:</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">$12,304</span>
            {/* Red error alert tag */}
            <div className="w-4 h-4 bg-red-500/25 border border-red-500/40 rounded-full flex items-center justify-center text-red-400">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
