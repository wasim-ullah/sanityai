import React from 'react';
import { ABOUT_VALUES } from '../../constants/about';

export default function AboutValues() {
  const renderIcon = (id) => {
    switch (id) {
      case 'inputs':
        return (
          <svg viewBox="0 0 640 640" className="w-9 h-9 text-[#2bff8e] flex-shrink-0" fill="currentColor">
            <path d="M352.5 32C383.4 32 408.5 57.1 408.5 88C408.5 118.9 383.4 144 352.5 144C321.6 144 296.5 118.9 296.5 88C296.5 57.1 321.6 32 352.5 32zM219.6 240C216.3 240 213.4 242 212.2 245L190.2 299.9C183.6 316.3 165 324.3 148.6 317.7C132.2 311.1 124.2 292.5 130.8 276.1L152.7 221.2C163.7 193.9 190.1 176 219.6 176L316.9 176C345.4 176 371.7 191.1 386 215.7L418.8 272L480.4 272C498.1 272 512.4 286.3 512.4 304C512.4 321.7 498.1 336 480.4 336L418.8 336C396 336 375 323.9 363.5 304.2L353.5 287.1L332.8 357.5L408.2 380.1C435.9 388.4 450 419.1 438.3 445.6L381.7 573C374.5 589.2 355.6 596.4 339.5 589.2C323.4 582 316.1 563.1 323.3 547L372.5 436.2L276.6 407.4C243.9 397.6 224.6 363.7 232.9 330.6L255.6 240L219.7 240zM211.6 421C224.9 435.9 242.3 447.3 262.8 453.4L267.5 454.8L260.6 474.1C254.8 490.4 244.6 504.9 231.3 515.9L148.9 583.8C135.3 595 115.1 593.1 103.9 579.5C92.7 565.9 94.6 545.7 108.2 534.5L190.6 466.6C195.1 462.9 198.4 458.1 200.4 452.7L211.6 421z"/>
          </svg>
        );
      case 'details':
        return (
          <svg viewBox="0 0 640 640" className="w-9 h-9 text-[#2bff8e] flex-shrink-0" fill="currentColor">
            <path d="M320 576C214 576 128 490 128 384C128 292.8 258.2 109.9 294.6 60.5C300.5 52.5 309.8 48 319.8 48L320.2 48C330.2 48 339.5 52.5 345.4 60.5C381.8 109.9 512 292.8 512 384C512 490 426 576 320 576zM240 376C240 362.7 229.3 352 216 352C202.7 352 192 362.7 192 376C192 451.1 252.9 512 328 512C341.3 512 352 501.3 352 488C352 474.7 341.3 464 328 464C279.4 464 240 424.6 240 376z"/>
          </svg>
        );
      case 'play':
        return (
          <svg viewBox="0 0 640 640" className="w-9 h-9 text-[#2bff8e] flex-shrink-0" fill="currentColor">
            <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/>
          </svg>
        );
      case 'love':
        return (
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#2bff8e] stroke-[1.5] flex-shrink-0" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" fill="#2bff8e" fillOpacity="0.15" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
            <path d="M16.5 5.5a1.2 1.2 0 0 0-1.8 0l-.2.2-.2-.2a1.2 1.2 0 0 0-1.8 1.8l2 2 2-2a1.2 1.2 0 0 0 0-1.8z" fill="#2bff8e" stroke="#2bff8e" strokeWidth="0.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] py-[100px] flex flex-col items-center">
      <div className="w-full max-w-[1080px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0">
        {/* Left Column */}
        <div className="w-auto text-left flex-shrink-0">
          <span 
            style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontWeight: 400,
              color: 'rgba(0, 0, 0, 0.64)',
              fontSize: '14px',
              lineHeight: '20px'
            }}
            className="uppercase block tracking-[0.08em]"
          >
            {ABOUT_VALUES.eyebrow}
          </span>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[820px] flex-shrink-0">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-[194px] md:gap-y-[68px]">
            {ABOUT_VALUES.items.map((item, idx) => (
              <div key={idx} className="w-full md:w-[313px] flex flex-col items-start text-left">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  {renderIcon(item.id)}
                  <h3 
                    style={{
                      fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                      fontWeight: 400,
                      color: 'rgb(5, 51, 33)',
                      fontSize: '20px',
                      lineHeight: '24px'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: 'rgb(0, 0, 0)',
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
