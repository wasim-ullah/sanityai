import React from 'react';
import { CALCULATE_MOCKUP_ROWS } from '../../../constants/features';

export default function CalculateMockup() {
  return (
    <div className="bg-[#0c462e]/30 backdrop-blur-md border border-white/5 p-5 rounded-sm w-[90%] sm:w-[85%] shadow-2xl flex flex-col gap-4 text-[13px] font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <span className="text-white font-medium text-[15px]">Invoice #10243</span>
        <span className="bg-[#2eb87e]/15 border border-[#2eb87e]/30 text-[#2eb87e] text-[10px] px-2 py-0.5 rounded-sm font-mono uppercase">Calculated</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {CALCULATE_MOCKUP_ROWS.map((row, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-white/60">{row.label}</span>
            <span className="text-white font-medium">{row.value}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2.5 border-t border-white/5">
          <span className="text-white font-medium">Total Tax:</span>
          <span className="text-white font-bold text-base">$99.00</span>
        </div>
      </div>
    </div>
  );
}
