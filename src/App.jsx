import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Monitoring from './components/home/Monitoring';
import Taxability from './components/home/Taxability';
import Exemptions from './components/home/Exemptions';
import Integrations from './components/home/Integrations';
import Implementation from './components/home/Implementation';
import Testimonials from './components/home/Testimonials';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-primary)] overflow-x-hidden">
      {/* Stick navbar to top */}
      <Navbar />
      <Hero />
      <Features />
      <Monitoring />
      <Taxability />
      <Exemptions />
      <Integrations />
      <Implementation />
      <Testimonials />
      <Footer />
    </div>
  );
}