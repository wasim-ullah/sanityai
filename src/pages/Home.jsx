import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Monitoring from '../components/home/Monitoring';
import Taxability from '../components/home/Taxability';
import Exemptions from '../components/home/Exemptions';
import Integrations from '../components/home/Integrations';
import Implementation from '../components/home/Implementation';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      // Slight delay to ensure the browser has fully rendered the elements
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-[var(--color-bg-dark)] text-[var(--color-text-primary)]">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Monitoring />
      <Taxability />
      <Exemptions />
      <div id="integrations">
        <Integrations />
      </div>
      <Implementation />
      <div id="testimonials">
        <Testimonials />
      </div>
    </div>
  );
}
