import React from 'react';
import customer1 from '../../assets/images/customer1.png';
import customer2 from '../../assets/images/customer2.png';
import customer3 from '../../assets/images/customer3.png';
import logoItalic from '../../assets/images/sub1.png';
import logoPulley from '../../assets/images/pulley.png';
import logoLevanta from '../../assets/images/levanta.png';

export default function Testimonials() {
  const testimonials = [
    {
      quote: (
        <>
          "Avalra left us with duplicate filings, missed states, and <strong className="font-semibold text-white">nearly $200K in overpayments</strong>. Taxwire recovered the funds, restored compliance across 20+ jurisdictions, and got everything running smoothly again."
        </>
      ),
      avatar: customer1,
      name: "Avi Arora",
      title: "COO AT ITALIC",
      logo: logoItalic,
      logoAlt: "Italic",
      logoClass: "w-[75px] h-[20px]"
    },
    {
      quote: (
        <>
          "We were growing quickly and needed a sales tax process that could keep up. Taxwire helped us implement a clear, scalable compliance framework from the ground up – giving us the clarity, confidence, and automation we needed as we expand."
        </>
      ),
      avatar: customer2,
      name: "Samantha Palmer",
      title: "ACC. MANAGER AT PULLEY",
      logo: logoPulley,
      logoAlt: "Pulley",
      logoClass: "h-[20px] w-auto"
    },
    {
      quote: (
        <>
          "When I discovered <strong className="font-semibold text-white">Avalara was over-collecting our taxes by 2–3× without approval</strong>, I knew we needed real financial controls. With Taxwire, every process is customer-approved and fully transparent. That level of control is non-negotiable for a scaling company."
        </>
      ),
      avatar: customer3,
      name: "Jinal Sanghavi",
      title: "VP FINANCE AT LEVANTA",
      logo: logoLevanta,
      logoAlt: "Levanta",
      logoClass: "h-[20px] w-auto"
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
      
      {/* Symmetric Left & Right Grid Guidelines in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full hidden lg:block">
        {/* Only the rightmost guideline of the left group */}
        <div className="absolute top-0 bottom-0 w-px left-[162px] border-l border-black/[0.04]"></div>

        {/* Only the leftmost guideline of the right group */}
        <div className="absolute top-0 bottom-0 w-px right-[162px] border-r border-black/[0.04]"></div>
      </div>

      {/* Divider line: section boundary separating previous section and Testimonials */}
      <div className="w-full border-t border-black/[0.06] relative z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:pl-[105px] lg:pr-[105px] xl:pl-[172px] xl:pr-[172px] flex flex-col items-center pt-24 pb-24">
        <div className="w-full max-w-[1080px] flex flex-col items-start text-left">
          
          {/* Eyebrow Header */}
          <span 
            style={{
              fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
              fontWeight: 400,
              color: 'rgb(0, 0, 0)',
              fontSize: '12px',
              lineHeight: '17px',
              letterSpacing: '0.08em'
            }}
            className="uppercase mb-4"
          >
            Testimonials
          </span>

          {/* Heading */}
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Roobert TRIAL Medium", "Roobert TRIAL Medium Placeholder", sans-serif',
              fontWeight: 500,
              color: 'rgb(6, 51, 34)',
              fontSize: '40px',
              lineHeight: '40px',
              letterSpacing: '-0.02em'
            }}
          >
            What our customers are saying
          </h2>

          {/* Testimonial Cards Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#063322] p-4 pb-3 flex flex-col justify-between rounded-none shadow-none w-full max-w-[340px] aspect-[340/480] lg:aspect-auto lg:w-[340px] lg:h-[480px]"
              >
                {/* Quote Text */}
                <p 
                  style={{
                    fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                    fontWeight: 400,
                    color: 'rgb(255, 255, 255)',
                    fontSize: '18px',
                    lineHeight: '22px'
                  }}
                  className="mb-4 text-white/90"
                >
                  {t.quote}
                </p>

                {/* Footer Row: Avatar (Left) and Text + Logo Stack (Right) */}
                <div className="flex flex-row items-center gap-3.5 mt-auto">
                  {/* Square Avatar Photo */}
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-[100px] h-[100px] object-cover rounded-none shrink-0"
                  />
                  
                  {/* Name, Title, and Logo Stack */}
                  <div className="flex flex-col text-left">
                    <span 
                      style={{
                        fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                        fontWeight: 400,
                        color: 'rgb(255, 255, 255)',
                        fontSize: '18px',
                        lineHeight: '22px'
                      }}
                    >
                      {t.name}
                    </span>
                    <span 
                      style={{
                        fontFamily: '"Roobert TRIAL Regular", "Roobert TRIAL Regular Placeholder", sans-serif',
                        fontWeight: 400,
                        color: 'rgba(255, 255, 255, 0.45)',
                        fontSize: '12px',
                        lineHeight: '17px'
                      }}
                      className="mt-0.5 uppercase tracking-wide"
                    >
                      {t.title}
                    </span>
                    {/* Company Logo Image */}
                    <div className="mt-2 flex items-center h-5">
                      <img 
                        src={t.logo} 
                        alt={t.logoAlt} 
                        className={`${t.logoClass} object-contain opacity-40 hover:opacity-80 transition-opacity`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
