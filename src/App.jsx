import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Landing from './pages/Landing';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetail from './pages/CaseStudyDetail';

export default function App() {
  return (
    <Routes>
      {/* SanityAI v2 landing — self-contained (own nav + footer), so it sits
          outside the shared Layout. */}
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="case-study/:id" element={<CaseStudyDetail />} />
      </Route>
    </Routes>
  );
}