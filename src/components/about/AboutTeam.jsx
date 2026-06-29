import React from 'react';
import { ABOUT_TEAM } from '../../constants/about';

export default function AboutTeam() {
  return (
    <section className="relative z-10 w-full max-w-[1440px] px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] pt-[100px] pb-12 flex flex-col items-center">
      <div className="w-full max-w-[1080px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 text-left flex flex-col items-start">
          <span 
            style={{
              fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
              fontWeight: 400,
              color: 'rgb(0, 0, 0)',
              fontSize: '12px',
              lineHeight: '17px',
              letterSpacing: '0.08em'
            }}
            className="uppercase mb-4 block"
          >
            {ABOUT_TEAM.eyebrow}
          </span>
          
          <h2 
            style={{
              fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(6, 51, 34)',
              fontSize: '40px',
              lineHeight: '40px'
            }}
            className="tracking-tight mb-6"
          >
            {ABOUT_TEAM.heading}
          </h2>
          
          <div className="max-w-md flex flex-col">
            <p
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(0, 0, 0)',
                fontSize: '16px',
                lineHeight: '19px'
              }}
            >
              {ABOUT_TEAM.description1}
            </p>
            <p
              style={{
                fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                fontWeight: 400,
                color: 'rgb(0, 0, 0)',
                fontSize: '16px',
                lineHeight: '19px'
              }}
              className="mt-6"
            >
              {ABOUT_TEAM.description2}
            </p>
          </div>
        </div>

        {/* Right Column: 3 Team Members */}
        <div className="lg:col-span-7 w-full flex lg:justify-end">
          <div className="flex flex-row gap-4 sm:gap-[36px] justify-start sm:justify-end w-full sm:w-auto overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 scrollbar-none">
            {ABOUT_TEAM.members.map((member, idx) => (
              <div key={idx} className="flex flex-col items-start text-left w-[130px] flex-shrink-0">
                <div className="w-[140px] h-[140px] aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <h3 
                  style={{
                    fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
                    fontWeight: 500,
                    color: '#11734b',
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                  className="mb-1"
                >
                  {member.name}
                </h3>
                <span 
                  style={{
                    fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: 'rgba(0, 0, 0, 0.64)',
                    fontSize: '12px',
                    lineHeight: '16px'
                  }}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
