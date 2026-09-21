import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Cpu, 
  Printer, 
  Fingerprint, 
  Wifi, 
  Award, 
  Sparkles,
  CheckCircle2,
  Users,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';

interface AboutCenterProps {
  lang: Language;
  onOpenRequestModal: () => void;
}

export const AboutCenter: React.FC<AboutCenterProps> = ({ lang, onOpenRequestModal }) => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Trust */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'नगरपुरा का भरोसेमंद डिजिटल केंद्र' : 'About Prabhakar CSC Nagarpura'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'hi' ? (
                <>
                  डिजिटल इंडिया को <span className="text-blue-600">नगरपुरा</span> के हर नागरिक तक पहुंचाना हमारा लक्ष्य है
                </>
              ) : (
                <>
                  Empowering every citizen of <span className="text-blue-600">Nagarpura</span> with fast, reliable digital governance
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {lang === 'hi'
                ? 'प्रभाकर ऑनलाइन CS सेंटर, नगरपुरा मुख्य बाजार में स्थित एक अधिकृत कॉमन सर्विस सेंटर (CSC) एवं आधुनिक साइबर कैफे है। हमारे संचालक प्रभाकर कुमार (CSC VLE Certified) द्वारा ग्रामीण एवं शहरी नागरिकों, छात्रों और किसानों को सरकारी योजनाओं, ऑनलाइन फॉर्म, छात्रवृत्ति, बैंकिंग और डिजिटल प्रिंटिंग की पारदर्शी सेवाएं प्रदान की जाती हैं।'
                : 'Prabhakar Online CS Centre is an authorized Common Services Centre (CSC) and cyber cafe located at Nagarpura Main Market, Bihar. Managed by certified VLE operator Prabhakar Kumar, we deliver zero-error govt job applications, RTPS Bihar certificates, AEPS banking, and high-speed PVC smart card printing.'}
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                lang === 'hi' ? 'सरकारी दरों पर पारदर्शी कार्य' : '100% Genuine Govt Approved Rates',
                lang === 'hi' ? 'फॉर्म में 0% गलती की गारंटी' : 'Zero-Error Online Form Filling',
                lang === 'hi' ? '10 मिनट में पासपोर्ट फोटो & PVC कार्ड' : '10-Min Instant Photo & PVC Cards',
                lang === 'hi' ? 'गोपनीय दस्तावेज सुरक्षा' : 'Strict Data Privacy & Document Safety',
                lang === 'hi' ? 'हाई-स्पीड फाइबर इंटरनेट बैकअप' : 'High-Speed Fiber Net with Inverter',
                lang === 'hi' ? 'व्हाट्सएप से घर बैठे फॉर्म सुविधा' : 'Remote WhatsApp Document Booking'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick contact badge */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="tel:8969627706"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-2xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>89696 27706</span>
              </a>

              <a
                href="https://wa.me/918969627706"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3 rounded-2xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Center Profile Card & Infrastructure Showcase */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Operator Card */}
            <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-xl shadow-md">
                P
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  VLE OPERATOR & MANAGER
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  {lang === 'hi' ? 'प्रभाकर कुमार' : 'Prabhakar Kumar'}
                </h3>
                <p className="text-xs text-slate-500">
                  Ministry of Electronics & IT (MeitY) CSC VLE
                </p>
              </div>
            </div>

            {/* Hardware & Infrastructure list */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {lang === 'hi' ? 'सेंटर पर उपलब्ध आधुनिक उपकरण:' : 'Advanced Hardware & Equipment:'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <Printer className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">EPSON EcoTank & Canon Laser</strong>
                    <div className="text-slate-500">हाई-स्पीड कलर & B/W प्रिंटर एवं हेवी फोटोकॉपियर</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <Fingerprint className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mantra MFS100 Biometric Scanner</strong>
                    <div className="text-slate-500">आधार निकासी (AEPS), PM किसान व पेंशन eKYC हेतु</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <Cpu className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">PVC Smart Card Thermal Printer</strong>
                    <div className="text-slate-500">वाटरप्रूफ एटीएम जैसा आधार, पैन व आयुष्मान स्मार्ट कार्ड</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <Wifi className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">High-Speed Fiber Net + Solar/Inverter</strong>
                    <div className="text-slate-500">बिना रुकावट फॉर्म सबमिशन व तत्काल टिकट बुकिंग</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Hours Pill */}
            <div className="pt-2 text-xs text-slate-600 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>स्थान: नगरपुरा मुख्य बाजार, बिहार</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>प्रतिदिन: सुबह 8:00 AM से रात 8:30 PM (सोमवार - रविवार)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
