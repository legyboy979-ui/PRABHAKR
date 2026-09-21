import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Languages, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  HelpCircle,
  FileCheck2,
  Calculator,
  QrCode,
  UserCheck
} from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenHelplines: () => void;
  onOpenRequestModal: (serviceName?: string) => void;
  onOpenBioDataModal: () => void;
  onOpenTrackerModal: () => void;
  onOpenQrModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenHelplines,
  onOpenRequestModal,
  onOpenBioDataModal,
  onOpenTrackerModal,
  onOpenQrModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white text-xs sm:text-sm py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'स्थान: नगरपुरा मुख्य बाजार (बिहार)' : 'Location: Nagarpura Main Market, Bihar'}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'hi' ? 'खुलने का समय: 8:00 AM - 8:30 PM (सोम-रवि)' : 'Hours: 8:00 AM - 8:30 PM (Mon-Sun)'}</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-xs bg-blue-800/80 text-blue-200 px-2 py-0.5 rounded-full border border-blue-700">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>CSC VLE Certified Centre</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Helplines button */}
            <button
              onClick={onOpenHelplines}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Emergency & Toll Free Helplines"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{lang === 'hi' ? 'हेल्पलाइन' : 'Helpline'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-all font-medium text-xs cursor-pointer shadow-xs"
            >
              <Languages className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'hi' ? 'English' : 'हिंदी में पढ़ें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center justify-center p-1">
                <span className="text-[10px] sm:text-[11px] font-black text-blue-800 leading-tight tracking-tighter">CSC</span>
                <span className="text-[8px] font-bold text-amber-600 leading-none">डिजिटल</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-xl text-slate-900 tracking-tight leading-tight">
                  {lang === 'hi' ? 'प्रभाकर ऑनलाइन CS सेंटर' : 'Prabhakar Online CS Centre'}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 px-1.5 py-0.2 rounded">
                  नगरपुरा
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                {lang === 'hi' ? 'सभी प्रकार के ऑनलाइन फॉर्म, सरकारी सेवाएं एवं साइबर कैफे' : 'CSC Digital Seva, Govt Portals & Cyber Cafe Nagarpura'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links & Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="#services"
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {lang === 'hi' ? 'सभी सेवाएं' : 'Services'}
            </a>

            <a
              href="#requirements"
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
            >
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>{lang === 'hi' ? 'दस्तावेज गाइड' : 'Doc Checklist'}</span>
            </a>

            <a
              href="#rates"
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'दर सूची व कैलकुलेटर' : 'Rate Card'}</span>
            </a>

            <button
              onClick={onOpenTrackerModal}
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>{lang === 'hi' ? 'स्टेटस ट्रैक' : 'Track Status'}</span>
            </button>

            <button
              onClick={onOpenBioDataModal}
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'बायोडाटा मेकर' : 'Bio-Data Maker'}
            </button>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Online Pay button */}
            <button
              onClick={onOpenQrModal}
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-semibold text-xs sm:text-sm px-3 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
              title="Pay Online via UPI QR"
            >
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'UPI पेमेंट' : 'Pay Online'}</span>
            </button>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/918969627706?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%97%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Phone Call */}
            <a
              href="tel:8969627706"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-102 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span className="font-mono tracking-tight">89696 27706</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-medium text-sm border border-slate-200"
            >
              <FileCheck2 className="w-4 h-4 text-blue-600" />
              <span>{lang === 'hi' ? 'सभी सेवाएं' : 'All Services'}</span>
            </a>

            <a
              href="#requirements"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-medium text-sm border border-slate-200"
            >
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>{lang === 'hi' ? 'दस्तावेज गाइड' : 'Doc Checklist'}</span>
            </a>

            <a
              href="#rates"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-medium text-sm border border-slate-200"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'दर सूची व दरें' : 'Price Rate Card'}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackerModal();
              }}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-medium text-sm border border-slate-200 text-left cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>{lang === 'hi' ? 'स्टेटस ट्रैकर' : 'Track Status'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBioDataModal();
              }}
              className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-lg font-medium text-sm border border-slate-200 text-left cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 text-amber-600" />
              <span>{lang === 'hi' ? 'बायोडाटा मेकर' : 'Bio-Data Maker'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQrModal();
              }}
              className="flex items-center gap-2 p-2.5 bg-emerald-50 text-emerald-800 rounded-lg font-medium text-sm border border-emerald-200 text-left cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'UPI पेमेंट QR' : 'Pay Online QR'}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequestModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{lang === 'hi' ? '📝 ऑनलाइन सेवा हेतु आवेदन भेजें' : '📝 Send Service Request Online'}</span>
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>स्थान: नगरपुरा, बिहार</span>
              <span>कॉल: 89696 27706</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
