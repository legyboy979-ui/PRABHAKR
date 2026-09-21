import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  ExternalLink, 
  Heart,
  QrCode,
  FileCheck2,
  Calculator,
  UserCheck
} from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenHelplines: () => void;
  onOpenBioDataModal: () => void;
  onOpenTrackerModal: () => void;
  onOpenQrModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenHelplines,
  onOpenBioDataModal,
  onOpenTrackerModal,
  onOpenQrModal
}) => {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center p-1">
                  <span className="text-[11px] font-black text-blue-400">CSC</span>
                  <span className="text-[8px] font-bold text-amber-400">डिजिटल</span>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white">
                  {lang === 'hi' ? 'प्रभाकर ऑनलाइन CS सेंटर' : 'Prabhakar Online CS Centre'}
                </h3>
                <span className="text-xs text-amber-400 font-semibold">
                  नगरपुरा, बिहार | CSC VLE Digital Portal
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'hi'
                ? 'सभी प्रकार के सरकारी नौकरी फॉर्म, RTPS जाति/निवास/आय, पैन कार्ड, आयुष्मान कार्ड, बैंकिंग निकासी (AEPS), बिजली बिल एवं हाई-स्पीड कलर प्रिंटिंग का विश्वसनीय केंद्र।'
                : 'Your trusted Digital Citizen Center in Nagarpura for online forms, RTPS Bihar certificates, PAN card, scholarships, AEPS banking and high-speed PVC smart card printing.'}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified CSC VLE Centre</span>
              </span>
              <button
                onClick={onOpenQrModal}
                className="inline-flex items-center gap-1.5 text-xs bg-emerald-950 text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-800 hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>UPI Pay</span>
              </button>
            </div>
          </div>

          {/* Column 2: Direct Official Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              {lang === 'hi' ? 'मुख्य सरकारी पोर्टल' : 'Official Portals'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://www.sarkariresult.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Sarkari Result 2026</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>RTPS Bihar (जाति/निवास/आय)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://www.pan.utiitsl.com/PAN/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>UTIITSL PAN Card Online</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://beneficiary.nha.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Ayushman Bharat (PM-JAY)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://pmsonline.bih.nic.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Bihar PMS Scholarship</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="http://biharboardonline.bihar.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>BSEB Bihar Board 10th/12th</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              {lang === 'hi' ? 'संपर्क एवं केंद्र का पता' : 'Contact & Address'}
            </h4>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>स्थान: नगरपुरा मुख्य बाजार (Nagarpura Main Market), बिहार</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:8969627706" className="font-bold font-mono text-white hover:text-emerald-300 text-sm">
                  89696 27706
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918969627706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp: 89696 27706
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">खुलने का समय:</span>
                  <span className="text-slate-400">सुबह 8:00 AM से रात 8:30 PM (सोमवार - रविवार)</span>
                </div>
              </div>
            </div>

            {/* Helpline trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenHelplines}
                className="text-xs text-blue-400 hover:text-blue-300 font-bold hover:underline cursor-pointer"
              >
                📞 बिहार एवं राष्ट्रीय टोल-फ्री हेल्पलाइन सूची देखें →
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="py-4 text-[11px] text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
          <strong>अस्वीकरण (Disclaimer):</strong> प्रभाकर ऑनलाइन CS सेंटर, नगरपुरा भारत सरकार एवं बिहार सरकार के अधिकृत कॉमन सर्विस सेंटर (CSC) दिशा-निर्देशों के तहत सहायता प्रदान करता है। आधिकारिक सरकारी शुल्क सरकारी नियमों के अनुसार ही लिया जाता है।
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; 2026 Prabhakar Online CS Centre Nagarpura. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>सम्पर्क सूत्र:</span>
            <strong className="text-amber-400 font-mono">89696 27706</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
