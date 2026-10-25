/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { translations, Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Coverage } from './components/Coverage';
import { DashboardPreview } from './components/DashboardPreview';
import { ProductSection } from './components/ProductSection';
import { IncidentCheck } from './components/IncidentCheck';
import { DefacementGallery } from './components/DefacementGallery';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { HowItWorks } from './components/HowItWorks';
import { WhyDettack } from './components/WhyDettack';
import { Pricing } from './components/Pricing';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ScanModal } from './components/ScanModal';
import { DocumentationView } from './components/DocumentationView';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [viewMode, setViewMode] = useState<'landing' | 'docs'>('landing');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [scanModalOpen, setScanModalOpen] = useState(false);
  const [scanTarget, setScanTarget] = useState<string>('vuln.com');

  const t = translations[lang];

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleOpenScan = (domain?: string) => {
    if (domain) {
      setScanTarget(domain);
    }
    setScanModalOpen(true);
  };

  const handleOpenDocs = () => {
    setViewMode('docs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (viewMode === 'docs') {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-[#fafafa]">
        <DocumentationView
          lang={lang}
          setLang={setLang}
          onBackToApp={() => {
            setViewMode('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenScan={handleOpenScan}
        />

        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authMode}
        />

        <ScanModal
          isOpen={scanModalOpen}
          onClose={() => setScanModalOpen(false)}
          targetDomain={scanTarget}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#fafafa] selection:bg-red-500/30 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenAuth={handleOpenAuth}
        onOpenScan={() => handleOpenScan('vuln.com')}
        onOpenDocs={handleOpenDocs}
      />

      {/* Main Page Flow matching CounterAttack */}
      <main>
        {/* 1. Hero Section with 100x quick domain scanner input */}
        <Hero
          t={t}
          onOpenScan={handleOpenScan}
          onOpenAuth={handleOpenAuth}
          onOpenDocs={handleOpenDocs}
        />

        {/* 2. Trusted By / Partners Ticker */}
        <Partners t={t} />

        {/* 3. Coverage: 1,425,400 rules & 100x engine */}
        <Coverage t={t} />

        {/* 4. Real Operator Dashboard Preview Mockup */}
        <DashboardPreview />

        {/* 5. Product Highlights: Live rendered UI */}
        <ProductSection t={t} />

        {/* 6. Incident Check (Unique to CounterAttack) */}
        <IncidentCheck t={t} />

        {/* 7. Real Defacements / Incident Gallery */}
        <DefacementGallery t={t} />

        {/* 8. Core Features Grid */}
        <Features t={t} />

        {/* 9. 5-Stage Scan Workflow */}
        <Workflow t={t} />

        {/* 10. How It Works (3 Steps) */}
        <HowItWorks t={t} />

        {/* 11. Why CounterAttack & Density-aware Rating */}
        <WhyDettack t={t} />

        {/* 12. Full Pricing Plans in IDR / USD */}
        <Pricing t={t} onOpenAuth={handleOpenAuth} />

        {/* 13. Call To Action Banner */}
        <CtaSection
          t={t}
          onOpenAuth={handleOpenAuth}
          onOpenScan={() => handleOpenScan('vuln.com')}
        />
      </main>

      {/* Footer with By MasJoe, WhatsApp, GitHub, and Made in Indonesia */}
      <Footer t={t} onOpenAuth={handleOpenAuth} onOpenDocs={handleOpenDocs} />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      <ScanModal
        isOpen={scanModalOpen}
        onClose={() => setScanModalOpen(false)}
        targetDomain={scanTarget}
      />
    </div>
  );
}
