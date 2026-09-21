import React, { useState } from 'react';
import { Header } from './components/Header';
import { SarkariTicker } from './components/SarkariTicker';
import { Hero } from './components/Hero';
import { ServiceGrid } from './components/ServiceGrid';
import { DocumentChecklistSection } from './components/DocumentChecklistSection';
import { DocumentGuideModal } from './components/DocumentGuideModal';
import { PriceCalculator } from './components/PriceCalculator';
import { PaymentSection } from './components/PaymentSection';
import { OnlineRequestModal } from './components/OnlineRequestModal';
import { BioDataMakerModal } from './components/BioDataMakerModal';
import { StatusTrackerModal } from './components/StatusTrackerModal';
import { PhotoResizerHelper } from './components/PhotoResizerHelper';
import { EmergencyHelplinesModal } from './components/EmergencyHelplinesModal';
import { AboutCenter } from './components/AboutCenter';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { servicesData } from './data/servicesData';
import { sarkariAlerts } from './data/sarkariAlerts';
import { documentRequirementsData } from './data/documentRequirements';
import { Language, ServiceCategory } from './types';
import { Phone, MessageCircle, QrCode, ArrowUp, Send } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [docModalGuideId, setDocModalGuideId] = useState<string | null>(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestServiceName, setRequestServiceName] = useState('');
  
  const [isBioDataModalOpen, setIsBioDataModalOpen] = useState(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isHelplinesModalOpen, setIsHelplinesModalOpen] = useState(false);

  const [paymentAmount, setPaymentAmount] = useState<number>(50);
  const [paymentServiceName, setPaymentServiceName] = useState<string>('Online Service Payment');

  // Handlers
  const handleOpenDocGuide = (serviceId?: string) => {
    if (serviceId) {
      // Find matching guide by serviceId or default to first
      const matched = documentRequirementsData.find(
        (g) => g.id.includes(serviceId) || serviceId.includes(g.id) || g.id === 'rtps-certificates'
      );
      setDocModalGuideId(matched ? matched.id : documentRequirementsData[0].id);
    } else {
      setDocModalGuideId(documentRequirementsData[0].id);
    }
  };

  const handleOpenRequestModal = (serviceName?: string) => {
    setRequestServiceName(serviceName || 'सरकारी फॉर्म / ऑनलाइन सेवा');
    setIsRequestModalOpen(true);
  };

  const handleOpenPaymentWithAmount = (amount: number, serviceName?: string) => {
    setPaymentAmount(amount);
    setPaymentServiceName(serviceName || 'Prabhakar CS Centre Online Service');
    setIsQrModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* 1. Top Header with Navigation & Quick Actions */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenHelplines={() => setIsHelplinesModalOpen(true)}
        onOpenRequestModal={handleOpenRequestModal}
        onOpenBioDataModal={() => setIsBioDataModalOpen(true)}
        onOpenTrackerModal={() => setIsTrackerModalOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* 2. Live Sarkari Alerts Marquee Bar */}
      <SarkariTicker alerts={sarkariAlerts} lang={lang} />

      {/* 3. Main Hero Banner & Search Filter */}
      <Hero
        lang={lang}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenRequestModal={handleOpenRequestModal}
        onOpenQrModal={() => setIsQrModalOpen(true)}
        onSelectCategory={setSelectedCategory}
      />

      {/* 4. Complete Categorized Service Grid & Portals */}
      <main className="flex-1">
        <ServiceGrid
          services={servicesData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          lang={lang}
          onOpenDocGuide={handleOpenDocGuide}
          onRequestService={handleOpenRequestModal}
        />

        {/* 5. Smart Document Checklist Assistant */}
        <DocumentChecklistSection
          lang={lang}
          onOpenDocModal={handleOpenDocGuide}
          onRequestService={handleOpenRequestModal}
        />

        {/* 6. Transparent Price Rate Card & Instant Estimator Calculator */}
        <PriceCalculator
          lang={lang}
          onOpenPaymentWithAmount={handleOpenPaymentWithAmount}
        />

        {/* 7. Photo & Signature Specifications Helper */}
        <PhotoResizerHelper lang={lang} />

        {/* 8. Digital UPI Payment Gateway with Live QR */}
        <PaymentSection
          lang={lang}
          presetAmount={paymentAmount}
          serviceName={paymentServiceName}
        />

        {/* 9. About Prabhakar Online CS Centre & Equipment Showcase */}
        <AboutCenter
          lang={lang}
          onOpenRequestModal={() => handleOpenRequestModal('General Enquiry')}
        />

        {/* 10. Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* 11. Complete Footer */}
      <Footer
        lang={lang}
        onOpenHelplines={() => setIsHelplinesModalOpen(true)}
        onOpenBioDataModal={() => setIsBioDataModalOpen(true)}
        onOpenTrackerModal={() => setIsTrackerModalOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Floating Sticky Quick Action Bar (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end no-print">
        {/* Quick WhatsApp Pill */}
        <a
          href="https://wa.me/918969627706?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%97%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-106 transition-all border-2 border-white/40 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs">WhatsApp</span>
        </a>

        {/* Quick Call Pill */}
        <a
          href="tel:8969627706"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-106 transition-all border-2 border-white/40 cursor-pointer"
          title="Call 89696 27706"
        >
          <Phone className="w-5 h-5 fill-current animate-pulse" />
        </a>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full shadow-lg transition-all cursor-pointer backdrop-blur-sm"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* MODALS */}
      {/* 1. Document Requirements Guide Modal */}
      <DocumentGuideModal
        guideId={docModalGuideId}
        isOpen={!!docModalGuideId}
        onClose={() => setDocModalGuideId(null)}
        lang={lang}
        onRequestService={handleOpenRequestModal}
      />

      {/* 2. Online Request / Booking Modal */}
      <OnlineRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        lang={lang}
        defaultServiceName={requestServiceName}
      />

      {/* 3. Bio-Data / Resume Maker Modal */}
      <BioDataMakerModal
        isOpen={isBioDataModalOpen}
        onClose={() => setIsBioDataModalOpen(false)}
        lang={lang}
      />

      {/* 4. Status Tracker Modal */}
      <StatusTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        lang={lang}
      />

      {/* 5. Emergency Helplines Directory Modal */}
      <EmergencyHelplinesModal
        isOpen={isHelplinesModalOpen}
        onClose={() => setIsHelplinesModalOpen(false)}
        lang={lang}
      />

      {/* 6. Dedicated UPI Payment Modal */}
      {isQrModalOpen && (
        <PaymentSection
          lang={lang}
          presetAmount={paymentAmount}
          serviceName={paymentServiceName}
          isModal={true}
          onCloseModal={() => setIsQrModalOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
