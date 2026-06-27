import React from 'react';
import integrationImage from '../../assets/images/integration.png';

export default function Integrations() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Top Divider line: section boundary separating previous section and Integrations */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-16 pb-16">
        <div className="w-full max-w-[1080px] flex flex-col items-start">
          
          {/* Header Stack (Left-Aligned, Vertical Stack) */}
          <div className="flex flex-col items-start text-left mb-12">
            <span
              className="block mb-4 uppercase"
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(0, 0, 0)',
                fontSize: '12px',
                lineHeight: '17px',
                letterSpacing: '0.08em'
              }}
            >
              WHY TAXWIRE?
            </span>
            <h2
              className="text-[var(--color-text-primary-dark)] mb-4"
              style={{
                fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                fontWeight: 500,
                color: 'rgb(6, 51, 34)',
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '-0.02em'
              }}
            >
              Integrate across your billing,<br />commerce, and accounting stack.
            </h2>
            <p
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(102, 102, 102)',
                fontSize: '16px',
                lineHeight: '22px'
              }}
            >
              Have a custom billing or commerce setup? Use our API to<br />implement tax calculation.
            </p>
          </div>
          
          {/* Centered Mockup Image */}
          <img 
            src={integrationImage} 
            alt="Integrate across your stack" 
            className="w-full max-w-[1060px] h-auto object-contain mx-auto mb-2"
          />
          
          {/* 3 Columns sub-layout */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
            
            {/* Billing */}
            <div className="w-full max-w-[342px] h-[240px] p-6 bg-[#fafafa] border border-black/5 rounded-none flex flex-col justify-center items-center text-center shadow-lg">
              <h3 
                className="mb-3"
                style={{
                  fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                  fontWeight: 500,
                  color: 'rgb(6, 51, 34)',
                  fontSize: '18px',
                  lineHeight: '22px'
                }}
              >
                Billing
              </h3>
              <p
                style={{
                  fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(102, 102, 102)',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}
              >
                Calculate real-time, accurate tax rates at<br />invoice - across all billing systems.
              </p>
            </div>

            {/* Commerce */}
            <div className="w-full max-w-[342px] h-[240px] p-6 bg-[#fafafa] border border-black/5 rounded-none flex flex-col justify-center items-center text-center shadow-lg">
              <h3 
                className="mb-3"
                style={{
                  fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                  fontWeight: 500,
                  color: 'rgb(6, 51, 34)',
                  fontSize: '18px',
                  lineHeight: '22px'
                }}
              >
                Commerce
              </h3>
              <p
                style={{
                  fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(102, 102, 102)',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}
              >
                Collect the right sales tax amount at<br />checkout across all products and channels.
              </p>
            </div>

            {/* Accounting */}
            <div className="w-full max-w-[342px] h-[240px] p-6 bg-[#fafafa] border border-black/5 rounded-none flex flex-col justify-center items-center text-center shadow-lg">
              <h3 
                className="mb-3"
                style={{
                  fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                  fontWeight: 500,
                  color: 'rgb(6, 51, 34)',
                  fontSize: '18px',
                  lineHeight: '22px'
                }}
              >
                Accounting
              </h3>
              <p
                style={{
                  fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                  fontWeight: 400,
                  color: 'rgb(102, 102, 102)',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}
              >
                Calculate tax natively on invoices in<br />Quickbooks, Xero, Netsuite, and more.
              </p>
            </div>

          </div>
          
        </div>
      </div>

      {/* Bottom Separator Divider */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

    </section>
  );
}
