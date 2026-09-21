import React from 'react';
import { X, PhoneCall, Phone, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';
import { emergencyHelplines } from '../data/emergencyHelplines';
import { Language } from '../types';

interface EmergencyHelplinesModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EmergencyHelplinesModal: React.FC<EmergencyHelplinesModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
            {lang === 'hi' ? 'महत्वपूर्ण टोल-फ्री हेल्पलाइन' : 'Official Emergency & Citizen Helplines'}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            {lang === 'hi' ? 'बिहार एवं केंद्र सरकार आवश्यक हेल्पलाइन डायरेक्टरी' : 'Essential Bihar & Govt Toll-Free Directory'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'hi' ? 'किसी भी समस्या के समाधान के लिए सीधे संबंधित विभाग से संपर्क करें।' : 'Direct numbers for government departments and local support.'}
          </p>
        </div>

        <div className="space-y-3">
          {emergencyHelplines.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === 'hi' ? item.nameHi : item.nameEn}
                  </h4>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-semibold">
                    {lang === 'hi' ? item.deptHi : item.deptEn}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>

              <a
                href={`tel:${item.number}`}
                className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{item.number}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
          <span>प्रभाकर ऑनलाइन CS सेंटर हेल्पलाइन: <strong>89696 27706</strong></span>
          <a
            href="tel:8969627706"
            className="text-blue-700 font-bold hover:underline"
          >
            अभी कॉल करें →
          </a>
        </div>
      </div>
    </div>
  );
};
