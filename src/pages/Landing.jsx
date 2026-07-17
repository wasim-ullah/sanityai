import React, { useState, useEffect } from 'react';
import SanityLogo from '../components/common/SanityLogo';
import MockPanel from '../components/landing/MockPanel';
import {
  CAL_URL, leftBars, rightBars, closerBars, heroMocks, stackLogos,
  featureDefs, steps, plans, faqData, decorate,
} from '../components/landing/landingData';

const MONO = 'monospace';

// Injected once: keyframes + scrollbar hiding the design relies on.
const globalCss = `
  .lp a { color: inherit; text-decoration: none; }
  .lp a:hover { color: #777; }
  @keyframes lpMarqueeR { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  @keyframes rowIn { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: none; } }
  @keyframes barGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
  @keyframes pulseDot { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
  @keyframes floatNum { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
  .lp [data-scroll-row] { scrollbar-width: none; }
  .lp [data-scroll-row]::-webkit-scrollbar { display: none; }
  @media (max-width: 640px) { .lp [data-hide-mobile] { display: none !important; } }
`;

const tabOn = { border: '#0a0a0a', bg: '#0a0a0a', fg: '#f5f5f2' };
const tabOff = { border: '#e4e4df', bg: '#ffffff', fg: '#6e6e68' };

function DashChrome({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: '1px solid #eeeee9' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e4e4df' }} />
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e4e4df' }} />
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e4e4df' }} />
      <span style={{ marginLeft: 12, fontSize: 11, color: '#9a9a94', fontFamily: MONO }}>SANITYAI · {label}</span>
    </div>
  );
}

function FeatureSection({ feat, sel, onSelect }) {
  const active = decorate(feat.mocks[sel]);
  return (
    <section style={{ maxWidth: 1040, margin: '0 auto', padding: '64px clamp(20px, 4vw, 40px)' }}>
      <div style={{ maxWidth: 480, marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#9a9a94', marginBottom: 14 }}>
          <span style={{ width: 7, height: 7, background: '#e8541e', display: 'inline-block' }} />{feat.eyebrow}
        </div>
        <h2 style={{ fontSize: 27, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.2, margin: '0 0 14px' }}>{feat.title}</h2>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6e6e68', margin: 0, textWrap: 'pretty' }}>{feat.desc}</p>
      </div>

      <div data-scroll-row style={{ display: 'flex', gap: 8, flexWrap: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 18, paddingBottom: 2 }}>
        {feat.tabNames.map((t, ti) => {
          const c = ti === sel ? tabOn : tabOff;
          return (
            <button key={ti} onClick={() => onSelect(ti)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, padding: '7px 14px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0, border: `1px solid ${c.border}`, background: c.bg, color: c.fg, fontWeight: 500 }}>{t}</button>
          );
        })}
      </div>

      <div style={{ background: '#fff', border: '1px solid #e4e4df', borderRadius: 12, overflow: 'hidden' }}>
        <DashChrome label={active.label} />
        <div style={{ padding: '20px 24px 24px', minHeight: 250, boxSizing: 'border-box' }}>
          <MockPanel mock={active} />
        </div>
        <div style={{ padding: '14px 20px', borderTop: '1px solid #eeeee9', fontSize: 12, color: '#9a9a94', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>What does this look like for your stack?</span>
          <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ color: '#141414', fontWeight: 500 }}>Ask on a call →</a>
        </div>
      </div>

      <div data-scroll-row style={{ display: 'flex', gap: 8, flexWrap: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch', alignItems: 'center', marginTop: 18, paddingBottom: 2 }}>
        <span style={{ fontSize: 12, color: '#9a9a94', marginRight: 4, flexShrink: 0 }}>Works across</span>
        {feat.chips.map((chip, i) => (
          <div key={i} style={{ fontSize: 11.5, padding: '5px 12px', borderRadius: 999, background: '#f0f0eb', color: '#55554f', whiteSpace: 'nowrap', flexShrink: 0 }}>{chip}</div>
        ))}
      </div>
    </section>
  );
}

export default function Landing() {
  const [heroTab, setHeroTab] = useState(0);
  const [featTabs, setFeatTabs] = useState([0, 0, 0]);
  const [openFaq, setOpenFaq] = useState(0);

  // The shared app shell paints html/body dark; this page is light. Match the
  // page background on both while mounted so overscroll (rubber-band) doesn't
  // flash the dark canvas, then restore the originals on unmount.
  useEffect(() => {
    const html = document.documentElement;
    const prevHtml = html.style.backgroundColor;
    const prevBody = document.body.style.backgroundColor;
    html.style.backgroundColor = '#fbfbfa';
    document.body.style.backgroundColor = '#fbfbfa';
    return () => {
      html.style.backgroundColor = prevHtml;
      document.body.style.backgroundColor = prevBody;
    };
  }, []);

  const heroMock = decorate(heroMocks[heroTab] ?? heroMocks[0]);

  return (
    <div className="lp" style={{ background: '#fbfbfa', color: '#141414', fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <style>{globalCss}</style>

      {/* Announcement bar */}
      <div style={{ background: '#0a0a0a', color: '#d8d8d4', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '9px 16px' }}>
        <span>SanityAI is now taking Q3 engagements</span>
        <span style={{ width: 13, height: 13, background: '#e8541e', display: 'inline-block' }} />
        <a href="#contact" style={{ color: '#d8d8d4' }}>→</a>
      </div>

      {/* Nav */}
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '20px clamp(20px, 4vw, 40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}><SanityLogo height={13} color="#0a0a0a" /></a>
        <div style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 28px)', fontSize: 13, color: '#6e6e68', flexWrap: 'wrap' }}>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={CAL_URL} target="_blank" rel="noreferrer" data-hide-mobile style={{ background: '#0a0a0a', color: '#f5f5f2', fontSize: 13, fontWeight: 500, padding: '8px 18px', borderRadius: 999 }}>Book a call</a>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px, 7vw, 72px) clamp(20px, 4vw, 40px) 0' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5.4vw, 52px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.03em', margin: '0 0 22px', maxWidth: 640 }}>Automation &amp; marketing systems for teams that want to scale up.</h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: '#6e6e68', margin: '0 0 30px', maxWidth: 460, textWrap: 'pretty' }}>SanityAI is the agency behind your growth engine — CRM, lifecycle, paid, and AI-powered ops automation, built as one system your team ends up owning.</p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ background: '#0a0a0a', color: '#f5f5f2', fontSize: 14, fontWeight: 500, padding: '11px 22px', borderRadius: 999, display: 'inline-flex', gap: 8, alignItems: 'center' }}>Book a demo <span>→</span></a>
          <a href="#services" style={{ fontSize: 14, color: '#444440', border: '1px solid #d8d8d3', padding: '11px 22px', borderRadius: 999 }}>View services</a>
        </div>
      </section>

      {/* Hero visual: bar field + dashboard */}
      <section style={{ position: 'relative', marginTop: 56, padding: '48px 0 72px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
          <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start', height: '100%' }}>
            {leftBars.map((b, i) => <div key={i} style={{ width: 3, height: `${b.h}%`, background: '#141414', opacity: b.o }} />)}
          </div>
          <div style={{ display: 'flex', gap: 7, alignItems: 'flex-end', height: '100%' }}>
            {rightBars.map((b, i) => <div key={i} style={{ width: 3, height: `${b.h}%`, background: '#e8541e', opacity: b.o }} />)}
          </div>
        </div>
        <div style={{ position: 'relative', width: 'min(880px, calc(100% - 40px))', margin: '0 auto', background: '#fff', border: '1px solid #e4e4df', borderRadius: 12, boxShadow: '0 24px 60px rgba(20,20,20,.10)', overflow: 'hidden' }}>
          <DashChrome label={heroMock.label} />
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(130px, 170px) 1fr' }}>
            <div style={{ borderRight: '1px solid #eeeee9', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 3 }}>
              {heroMocks.map((m, i) => {
                const on = heroTab === i;
                return (
                  <button key={i} onClick={() => setHeroTab(i)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11.5, fontWeight: on ? 600 : 400, color: on ? '#141414' : '#9a9a94', background: on ? '#f0f0eb' : 'transparent', borderRadius: 6, padding: '7px 9px', display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                    <span style={{ width: 6, height: 6, background: on ? '#e8541e' : '#d9d9d3', display: 'inline-block', borderRadius: 2, flexShrink: 0 }} />{m.t}
                  </button>
                );
              })}
            </div>
            <div style={{ padding: '20px 24px 24px', height: 'clamp(300px, 42vw, 340px)', overflowY: 'auto', boxSizing: 'border-box' }}>
              <MockPanel mock={heroMock} barsHeight={118} />
            </div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section style={{ padding: '12px 0 72px', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9a9a94', marginBottom: 28 }}>Our tech stack</div>
        <div style={{ display: 'flex', width: 'max-content', gap: 56, alignItems: 'center', animation: 'lpMarqueeR 40s linear infinite' }}>
          {[...stackLogos, ...stackLogos].map((name, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 500, color: '#82827c', whiteSpace: 'nowrap' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <div id="services" />
      {featureDefs.map((feat, fi) => (
        <FeatureSection key={fi} feat={feat} sel={featTabs[fi]} onSelect={(ti) => setFeatTabs((s) => { const n = [...s]; n[fi] = ti; return n; })} />
      ))}

      {/* Process */}
      <section id="process" style={{ background: '#f0f0eb', marginTop: 40 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: 'clamp(48px, 8vw, 88px) clamp(20px, 4vw, 40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(32px, 6vw, 72px)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.18, margin: '0 0 16px' }}>Audit the funnel. Then put it on autopilot.</h2>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6e6e68', margin: '0 0 28px', maxWidth: 380, textWrap: 'pretty' }}>Every engagement runs the same arc: map what leaks, build the system, prove it against revenue, and hand it over documented.</p>
            <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ background: '#0a0a0a', color: '#f5f5f2', fontSize: 13, fontWeight: 500, padding: '10px 20px', borderRadius: 999, display: 'inline-flex', gap: 8 }}>Start with an audit <span>→</span></a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e4e4df', borderRadius: 10, padding: '18px 20px', display: 'grid', gridTemplateColumns: '26px 1fr', gap: 14, alignItems: 'start' }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#0a0a0a', color: '#f5f5f2', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{step.n}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: '#6e6e68' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(56px, 8vw, 96px) clamp(20px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-.02em', margin: '0 0 44px' }}>Engagements.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 208px), 1fr))', gap: 'clamp(12px, 1.6vw, 20px)', alignItems: 'stretch' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ border: `1px solid ${plan.border}`, background: plan.bg, color: plan.fg, borderRadius: 12, padding: '28px 26px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: plan.muted, marginBottom: 14 }}>{plan.label}</div>
              <div style={{ fontSize: 25, fontWeight: 600, letterSpacing: '-.02em', marginBottom: 2 }}>{plan.price}</div>
              <div style={{ fontSize: 12, color: plan.muted, marginBottom: 20 }}>{plan.per}</div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: plan.muted, marginBottom: 22, textWrap: 'pretty' }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 26 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ fontSize: 13, display: 'flex', gap: 10, alignItems: 'baseline' }}><span style={{ color: '#e8541e' }}>—</span><span>{f}</span></div>
                ))}
              </div>
              <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', textAlign: 'center', fontSize: 13, fontWeight: 500, padding: '10px 0', borderRadius: 999, background: plan.btnBg, color: plan.btnFg, border: `1px solid ${plan.btnBorder}` }}>{plan.cta}</a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, border: '1px dashed #c9c9c4', borderRadius: 12, padding: '26px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 5 }}>Need something custom?</div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: '#6e6e68', maxWidth: 520, textWrap: 'pretty' }}>Larger scope, multiple brands, or a one-off automation project — we'll shape an engagement around it and quote it on the call.</div>
          </div>
          <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 500, padding: '10px 20px', borderRadius: 999, border: '1px solid #0a0a0a', color: '#0a0a0a', whiteSpace: 'nowrap' }}>Get a custom quote →</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ maxWidth: 1040, margin: '0 auto', padding: '24px clamp(20px, 4vw, 40px) 96px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 64px)', alignItems: 'start' }}>
        <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.15, margin: 0 }}>Questions, answered.</h2>
        <div>
          {faqData.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ borderTop: '1px solid #e4e4df' }}>
                <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '20px 0', fontSize: 15, fontWeight: 500, letterSpacing: '-.01em', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: '#9a9a94', fontWeight: 400 }}>{open ? '−' : '+'}</span>
                </button>
                {open && <div style={{ fontSize: 13, lineHeight: 1.65, color: '#6e6e68', padding: '0 60px 22px 0', maxWidth: 540 }}>{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Dark closer */}
      <section id="contact" style={{ background: '#0a0a0a', color: '#f2f2ee', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'flex-end', gap: 7 }}>
          {closerBars.map((b, i) => <div key={i} style={{ width: 3, height: `${b.h}%`, background: '#e8541e', opacity: b.o, alignSelf: 'flex-end' }} />)}
        </div>
        <div style={{ position: 'relative', maxWidth: 1040, margin: '0 auto', padding: 'clamp(56px, 9vw, 100px) clamp(20px, 4vw, 40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 5vw, 64px)', alignItems: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.15, margin: 0 }}>Your growth requires a system, not more headcount.</h2>
          <div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#a5a59f', margin: '0 0 26px', maxWidth: 380, textWrap: 'pretty' }}>Bring us your funnel, your stack, and your targets. We'll show you where the automation is hiding — on the first call.</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ background: '#f2f2ee', color: '#0a0a0a', fontSize: 14, fontWeight: 500, padding: '11px 22px', borderRadius: 999, display: 'inline-flex', gap: 8 }}>Book a call <span>→</span></a>
              <a href="mailto:wasim@sanity.ai" style={{ fontSize: 13, color: '#a5a59f' }}>wasim@sanity.ai</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px, 4vw, 40px) 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
          <SanityLogo height={11} color="#0a0a0a" />
          <div style={{ display: 'flex', gap: 64 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              <div style={{ color: '#9a9a94', fontSize: 12 }}>Company</div>
              <a href="#services" style={{ color: '#444440' }}>Services</a>
              <a href="#process" style={{ color: '#444440' }}>Process</a>
              <a href="#pricing" style={{ color: '#444440' }}>Pricing</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              <div style={{ color: '#9a9a94', fontSize: 12 }}>Connect</div>
              <a href={CAL_URL} target="_blank" rel="noreferrer" style={{ color: '#444440' }}>Book a call</a>
              <a href="mailto:wasim@sanity.ai" style={{ color: '#444440' }}>wasim@sanity.ai</a>
              <a href="https://www.linkedin.com/company/sanityhq/" target="_blank" rel="noreferrer" style={{ color: '#444440' }}>LinkedIn</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 56, paddingTop: 22, borderTop: '1px solid #e4e4df', fontSize: 12, color: '#9a9a94' }}>
          <span>© SanityAI 2026</span>
          <span>We are 100% remote.</span>
        </div>
      </footer>

      {/* Oversized wordmark */}
      <div style={{ overflow: 'hidden', userSelect: 'none', pointerEvents: 'none', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
        <svg viewBox="0 0 709 104" style={{ width: '100%', display: 'block', transform: 'translateY(28%)' }}>
          <defs>
            <pattern id="lpStripes" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#fbfbfa" />
              <rect width="8" height="2" fill="#cfcfca" />
              <rect width="2" height="8" fill="#cfcfca" />
            </pattern>
          </defs>
          <text x="0" y="82" fill="url(#lpStripes)" fontFamily="'Instrument Sans', 'Helvetica Neue', sans-serif" fontSize="104" fontWeight="600" letterSpacing="-4">sanityai</text>
        </svg>
      </div>
    </div>
  );
}
