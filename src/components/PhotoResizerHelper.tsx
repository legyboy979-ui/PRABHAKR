import React, { useState } from 'react';
import { Camera, Image as ImageIcon, CheckCircle, Info, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface PhotoResizerHelperProps {
  lang: Language;
}

export const PhotoResizerHelper: React.FC<PhotoResizerHelperProps> = ({ lang }) => {
  const [selectedExam, setSelectedExam] = useState<string>('ssc');

  const examSpecs: Record<string, {
    title: string;
    photoSize: string;
    photoDim: string;
    photoFormat: string;
    photoBg: string;
    sigSize: string;
    sigDim: string;
    sigFormat: string;
    extraNote: string;
  }> = {
    ssc: {
      title: 'SSC (GD, CGL, CHSL, MTS)',
      photoSize: '20 KB to 50 KB (Live Capture on SSC App)',
      photoDim: '3.5 cm (width) x 4.5 cm (height)',
      photoFormat: 'JPEG / JPG',
      photoBg: 'Light / Plain White Background without cap & spectacles',
      sigSize: '10 KB to 20 KB',
      sigDim: '4.0 cm (width) x 2.0 cm (height)',
      sigFormat: 'JPEG / JPG on White Paper with Black/Blue ink',
      extraNote: 'SSC requires Live Photo capture via mobile camera or webcam in good lighting.'
    },
    bpsc: {
      title: 'BPSC (Teacher TRE, 70th/71th CCE)',
      photoSize: '25 KB maximum (Live Webcam Photo)',
      photoDim: '3.5 cm x 4.5 cm',
      photoFormat: 'JPEG / JPG',
      photoBg: 'Plain White / Light Gray Background',
      sigSize: '15 KB maximum (Hindi & English both)',
      sigDim: '3.5 cm x 1.5 cm',
      sigFormat: 'JPEG / JPG (Separate Hindi & English sign files)',
      extraNote: 'Both Hindi & English separate signatures are mandatory for BPSC.'
    },
    biharPolice: {
      title: 'Bihar Police (CSBC Constable / BPSSC SI)',
      photoSize: '20 KB to 50 KB',
      photoDim: '3.5 cm x 4.5 cm',
      photoFormat: 'JPG / JPEG',
      photoBg: 'White Background, 2 months recent',
      sigSize: '10 KB to 25 KB',
      sigDim: '3.5 cm x 1.5 cm',
      sigFormat: 'JPG / JPEG (Separate Hindi & English Sign)',
      extraNote: 'Photo must show both ears clearly. Do not wear sunglasses or masks.'
    },
    railway: {
      title: 'Railway (RRB ALP, NTPC, Group D)',
      photoSize: '30 KB to 70 KB',
      photoDim: '35 mm x 45 mm (3.5 x 4.5 cm)',
      photoFormat: 'JPEG / JPG (100 DPI)',
      photoBg: 'Plain White Background without shadows',
      sigSize: '30 KB to 70 KB',
      sigDim: '3.5 cm x 1.5 cm (Running handwriting, not capital letters)',
      sigFormat: 'JPEG / JPG',
      extraNote: 'Signature in CAPITAL letters is strictly rejected by RRB.'
    },
    panCard: {
      title: 'PAN Card (UTIITSL / NSDL 49A)',
      photoSize: 'Under 30 KB (200 DPI resolution)',
      photoDim: '2.5 cm x 3.5 cm (213 x 213 pixels)',
      photoFormat: 'JPEG / JPG Color',
      photoBg: 'Plain White Background',
      sigSize: 'Under 10 KB to 20 KB (200 DPI)',
      sigDim: '4.5 cm x 2.0 cm (400 x 200 pixels)',
      sigFormat: 'JPEG / JPG Black ink on White paper',
      extraNote: 'Scanned at 200 DPI for crystal clear physical PAN card printing.'
    }
  };

  const active = examSpecs[selectedExam] || examSpecs.ssc;

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-purple-700 font-bold text-xs uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-200 mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'फोटो व हस्ताक्षर साइज गाइड' : 'Photo & Signature Specifications'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {lang === 'hi' ? 'सरकारी फॉर्म हेतु फोटो & साइन साइज गाइड' : 'Exact Photo & Signature Size Cheat Sheet'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'प्रभाकर CS सेंटर पर हम आपके फोटो व हस्ताक्षर को सरकारी नियमों के अनुसार सही KB और DPI में सेट करते हैं ताकि फॉर्म कभी रिजेक्ट न हो।'
              : 'View exact KB size, dimensions, background guidelines for major recruitment exams.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {Object.entries(examSpecs).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setSelectedExam(key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedExam === key
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Specs Display Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xs">
          
          {/* Photo Specs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
              <ImageIcon className="w-5 h-5" />
              <span>{lang === 'hi' ? 'फोटो नियम (Photograph)' : 'Photo Guidelines'}</span>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'फाइल साइज (Size):' : 'File Size:'}</span>
                <span className="font-bold text-slate-900">{active.photoSize}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'डायमेंशन (Dimensions):' : 'Dimensions:'}</span>
                <span className="font-semibold text-slate-900">{active.photoDim}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'फॉर्मेट (Format):' : 'Format:'}</span>
                <span className="font-semibold text-slate-900">{active.photoFormat}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'बैकग्राउंड (Background):' : 'Background:'}</span>
                <span className="font-semibold text-slate-900">{active.photoBg}</span>
              </div>
            </div>
          </div>

          {/* Signature Specs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
              <Sparkles className="w-5 h-5" />
              <span>{lang === 'hi' ? 'हस्ताक्षर नियम (Signature)' : 'Signature Guidelines'}</span>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'फाइल साइज (Size):' : 'File Size:'}</span>
                <span className="font-bold text-slate-900">{active.sigSize}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'डायमेंशन (Dimensions):' : 'Dimensions:'}</span>
                <span className="font-semibold text-slate-900">{active.sigDim}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'फॉर्मेट (Format):' : 'Format:'}</span>
                <span className="font-semibold text-slate-900">{active.sigFormat}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">{lang === 'hi' ? 'स्याही (Ink):' : 'Ink / Style:'}</span>
                <span className="font-semibold text-slate-900">Black or Blue Ball Pen</span>
              </div>
            </div>
          </div>

          {/* Note callout */}
          <div className="md:col-span-2 bg-purple-50 p-4 rounded-2xl border border-purple-200 text-xs text-purple-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <strong>{lang === 'hi' ? 'विशेष ध्यान दें:' : 'Special Instruction:'}</strong> {active.extraNote}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
