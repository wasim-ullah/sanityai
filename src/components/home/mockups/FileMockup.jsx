import React from 'react';
import { FILE_MOCKUP_SUBMISSIONS } from '../../../constants/features';

export default function FileMockup() {
  return (
    <div className="bg-[#1c1c1c]/30 backdrop-blur-md border border-white/5 p-5 rounded-sm w-[90%] sm:w-[85%] shadow-2xl flex flex-col gap-4 text-[13px] font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <span className="text-white font-medium text-[15px]">Filing Submissions</span>
        <span className="text-white/40 text-[10px] font-mono">Q2 PERIOD</span>
      </div>
      <div className="flex flex-col gap-3">
        {FILE_MOCKUP_SUBMISSIONS.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-b-0 last:pb-0">
            <span className="text-white font-medium">{item.state}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-sm border uppercase ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
