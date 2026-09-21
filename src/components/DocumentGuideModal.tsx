import React, { useState } from 'react';
import { X, FileCheck2, ExternalLink, Printer, MessageCircle, Info, CheckSquare, Square } from 'lucide-react';
import { documentRequirementsData } from '../data/documentRequirements';
import { Language } from '../types';

interface DocumentGuideModalProps {
  guideId: string | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onRequestService: (serviceName: string) => void;
}

export const DocumentGuideModal: React.FC<DocumentGuideModalProps> = ({
  guideId,
  isOpen,
  onClose,
  lang,
  onRequestService
}) => {
  if (!isOpen || !guideId) return null;

  const guide = documentRequirementsData.find((g) => g.id === guideId) || documentRequirementsData[0];
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
            {guide.category}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            {lang === 'hi' ? guide.titleHi : guide.titleEn}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'hi' ? 'दस्तावेज चेकलिस्ट एवं आवेदन प्रक्रिया' : 'Document Checklist & Step-by-Step Guide'}
          </p>
        </div>

        {/* Processing and Validity */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
          <div>
            <span className="text-slate-400 block">{lang === 'hi' ? 'समय:' : 'Time:'}</span>
            <strong className="text-slate-800">{guide.processingDays}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">{lang === 'hi' ? 'वैधता:' : 'Validity:'}</span>
            <strong className="text-slate-800">{guide.validity}</strong>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-slate-400 block">{lang === 'hi' ? 'सरकारी शुल्क:' : 'Govt Fee:'}</span>
            <strong className="text-emerald-700">{guide.govtFee}</strong>
          </div>
        </div>

        {/* Document Checklist */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {lang === 'hi' ? 'आवश्यक दस्तावेज (Tick if ready):' : 'Mandatory Documents Checklist:'}
          </h4>
          {guide.requiredDocs.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => toggle(idx)}
              className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer"
            >
              <button type="button" className="mt-0.5 shrink-0">
                {checked[idx] ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Square className="w-4 h-4 text-slate-300" />
                )}
              </button>
              <div className="text-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className={checked[idx] ? 'line-through text-slate-400' : ''}>
                    {lang === 'hi' ? doc.nameHi : doc.nameEn}
                  </span>
                  {doc.isMandatory && (
                    <span className="text-[9px] bg-red-100 text-red-700 font-bold px-1 rounded">अनिवार्य</span>
                  )}
                </div>
                {doc.note && <div className="text-slate-500 mt-0.5">{doc.note}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Steps to apply */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {lang === 'hi' ? 'आवेदन करने के चरण:' : 'Step-by-step Process:'}
          </h4>
          <div className="space-y-1.5 text-xs text-slate-700 bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100">
            {(lang === 'hi' ? guide.stepsHi : guide.stepsEn).map((step, idx) => (
              <div key={idx} className="leading-relaxed">
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>टिप: </strong>
            {lang === 'hi' ? guide.importantTipsHi : guide.importantTipsEn}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <a
            href={guide.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
          >
            <span>{guide.officialPortalName} खोलें</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestService(lang === 'hi' ? guide.titleHi : guide.titleEn);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर अप्लाई करें' : 'Apply via WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
