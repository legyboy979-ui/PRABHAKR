import React, { useState } from 'react';
import { 
  FileCheck2, 
  CheckSquare, 
  Square, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Printer, 
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { documentRequirementsData } from '../data/documentRequirements';
import { DocumentGuide, Language } from '../types';

interface DocumentChecklistSectionProps {
  lang: Language;
  onOpenDocModal: (guideId: string) => void;
  onRequestService: (serviceName: string) => void;
}

export const DocumentChecklistSection: React.FC<DocumentChecklistSectionProps> = ({
  lang,
  onOpenDocModal,
  onRequestService
}) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(documentRequirementsData[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const activeGuide = documentRequirementsData.find((g) => g.id === selectedGuideId) || documentRequirementsData[0];

  const toggleCheck = (idx: number) => {
    const key = `${activeGuide.id}-${idx}`;
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrintChecklist = () => {
    window.print();
  };

  const mandatoryCount = activeGuide.requiredDocs.filter((d) => d.isMandatory).length;
  const checkedCount = activeGuide.requiredDocs.filter((_, idx) => checkedItems[`${activeGuide.id}-${idx}`]).length;

  return (
    <section id="requirements" className="py-12 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-indigo-700 font-bold text-xs uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-2">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'दस्तावेज आवश्यकता गाइड' : 'Required Documents Assistant'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {lang === 'hi' ? 'फॉर्म भरने से पहले आवश्यक दस्तावेज चेकलिस्ट' : 'Smart Document Checklist Before You Apply'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'किसी भी सरकारी फॉर्म या प्रमाण पत्र के लिए आवश्यक कागजातों की सूची देखें और अपनी तैयारी चेक करें ताकि कोई फॉर्म रिजेक्ट न हो।'
              : 'Select any scheme or certificate below to see the mandatory document list and tick what you have ready.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
              {lang === 'hi' ? 'सेवा चुनें (Select Service)' : 'Choose Service'}
            </div>
            {documentRequirementsData.map((guide) => {
              const isSelected = guide.id === selectedGuideId;
              return (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`w-full text-left p-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <FileCheck2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-indigo-200' : 'text-indigo-600'}`} />
                    <span className="truncate">{lang === 'hi' ? guide.titleHi : guide.titleEn}</span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Checklist & Detail Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                  {activeGuide.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  {lang === 'hi' ? activeGuide.titleHi : activeGuide.titleEn}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrintChecklist}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  title="Print this document checklist"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'प्रिंट चेकलिस्ट' : 'Print Checklist'}</span>
                </button>

                <a
                  href={activeGuide.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-2 rounded-xl border border-blue-200 transition-colors cursor-pointer"
                >
                  <span>{activeGuide.officialPortalName}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Meta badges: Processing days, validity, fees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium block">
                  {lang === 'hi' ? 'समय सीमा (Delivery):' : 'Processing Time:'}
                </span>
                <strong className="text-slate-800 font-bold mt-0.5 block">{activeGuide.processingDays}</strong>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium block">
                  {lang === 'hi' ? 'प्रमाण पत्र वैधता:' : 'Validity:'}
                </span>
                <strong className="text-slate-800 font-bold mt-0.5 block">{activeGuide.validity}</strong>
              </div>

              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-xs">
                <span className="text-emerald-700 font-medium block">
                  {lang === 'hi' ? 'शुल्क (Govt / Center):' : 'Fees Breakdown:'}
                </span>
                <strong className="text-emerald-900 font-bold mt-0.5 block">
                  Govt: {activeGuide.govtFee} | Center: {activeGuide.centerFee}
                </strong>
              </div>
            </div>

            {/* Interactive Document Checklist Items */}
            <div className="space-y-3 my-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>{lang === 'hi' ? 'आवश्यक दस्तावेजों पर टिक करें:' : 'Check Your Available Documents:'}</span>
                <span className="text-indigo-600">
                  {checkedCount} / {activeGuide.requiredDocs.length} तैयार हैं
                </span>
              </div>

              {activeGuide.requiredDocs.map((doc, idx) => {
                const isChecked = !!checkedItems[`${activeGuide.id}-${idx}`];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                        : 'bg-slate-50/60 hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-slate-400 hover:text-emerald-600 shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {lang === 'hi' ? doc.nameHi : doc.nameEn}
                        </span>
                        {doc.isMandatory ? (
                          <span className="text-[10px] bg-red-100 text-red-700 font-black px-1.5 py-0.2 rounded">
                            {lang === 'hi' ? 'अनिवार्य' : 'Mandatory'}
                          </span>
                        ) : (
                          <span className="text-[10px] bg-slate-200 text-slate-600 font-semibold px-1.5 py-0.2 rounded">
                            {lang === 'hi' ? 'वैकल्पिक' : 'Optional'}
                          </span>
                        )}
                      </div>
                      {doc.note && (
                        <p className="text-xs text-slate-500 mt-0.5">{doc.note}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important Tip Callout */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">{lang === 'hi' ? 'महत्वपूर्ण सूचना / टिप:' : 'Crucial Tip:'}</strong>{' '}
                {lang === 'hi' ? activeGuide.importantTipsHi : activeGuide.importantTipsEn}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                {lang === 'hi'
                  ? 'सभी दस्तावेज लेकर प्रभाकर ऑनलाइन CS सेंटर, नगरपुरा आएं या व्हाट्सएप पर भेजें।'
                  : 'Bring these documents to Prabhakar CSC Nagarpura or send clear photos over WhatsApp.'}
              </p>

              <button
                onClick={() => onRequestService(lang === 'hi' ? activeGuide.titleHi : activeGuide.titleEn)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{lang === 'hi' ? 'इसके लिए व्हाट्सएप पर संपर्क करें' : 'Apply via WhatsApp'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
