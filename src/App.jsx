import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetail from './pages/CaseStudyDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="case-study/:id" element={<CaseStudyDetail />} />
      </Route>
    </Routes>
  );
}