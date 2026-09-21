import React, { useState } from 'react';
import { X, Search, ExternalLink, ShieldCheck, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface StatusTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const StatusTrackerModal: React.FC<StatusTrackerModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [selectedService, setSelectedService] = useState<'rtps' | 'pan' | 'ration' | 'voter' | 'pmkisan'>('rtps');
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const trackerLinks = {
    rtps: {
      nameHi: 'RTPS बिहार आवेदन स्थिति (जाति/निवास/आय)',
      nameEn: 'RTPS Bihar Certificate Status (ServicePlus)',
      portalUrl: 'https://serviceonline.bihar.gov.in/',
      helpTextHi: 'सर्विस प्लस की पावती रसीद पर 18 अंकों का Application Ref No (जैसे: BICC/2026/XXXXX) दर्ज करें।',
      helpTextEn: 'Enter 18-digit Application Reference Number from your ServicePlus Acknowledgement slip.'
    },
    pan: {
      nameHi: 'पैन कार्ड आवेदन स्थिति (UTI / NSDL)',
      nameEn: 'PAN Card Application Status (UTI / NSDL)',
      portalUrl: 'https://www.trackpan.utiitsl.com/PANONLINE/trackApp',
      helpTextHi: 'UTI कूपन नंबर (10 अंक जैसे U-XXXXXXXXX) या NSDL 15 अंकों का एक्नॉलेजमेंट नंबर दर्ज करें।',
      helpTextEn: 'Enter UTI 10-digit Coupon Number (U-XXXXXXXXX) or NSDL 15-digit Acknowledgement Number.'
    },
    ration: {
      nameHi: 'राशन कार्ड आवेदन स्थिति (Bihar RCMS)',
      nameEn: 'Bihar Ration Card Status (RCMS)',
      portalUrl: 'https://epds.bihar.gov.in/',
      helpTextHi: 'राशन कार्ड पावती रसीद पर दिया गया 18 अंकों का Application ID दर्ज करें।',
      helpTextEn: 'Enter 18-digit RCMS Application ID from your Ration Card submission slip.'
    },
    voter: {
      nameHi: 'वोटर कार्ड Form 6/8 स्थिति (ECI)',
      nameEn: 'Voter ID Form 6/8 Status (ECI Voter Portal)',
      portalUrl: 'https://voters.eci.gov.in/',
      helpTextHi: 'वोटर पोर्टल से प्राप्त रेफरेंस नंबर दर्ज कर BLO वेरिफिकेशन और स्टेटस देखें।',
      helpTextEn: 'Enter ECI Reference Number to track Field Verification and EPIC generation.'
    },
    pmkisan: {
      nameHi: 'PM किसान सम्मान निधि बेनिफिशियरी स्टेटस',
      nameEn: 'PM Kisan Beneficiary & Installment Status',
      portalUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
      helpTextHi: 'अपना रजिस्ट्रेशन नंबर या आधार नंबर दर्ज कर 19वीं/20वीं क़िस्त का स्टेटस चेक करें।',
      helpTextEn: 'Enter Farmer Registration Number or Aadhaar to check installment release status.'
    }
  };

  const active = trackerLinks[selectedService];

  const handleOpenDirect = () => {
    window.open(active.portalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
            {lang === 'hi' ? 'आवेदन स्थिति ट्रैकर' : 'Live Status Tracker'}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            {lang === 'hi' ? 'सरकारी फॉर्म व प्रमाण पत्र की स्थिति जांचें' : 'Track Your Application Status'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'hi'
              ? 'पोर्टल का चयन करें और सीधे आधिकारिक ट्रैकिंग पेज पर जाएं।'
              : 'Select the portal to launch the official tracking system with your reference number.'}
          </p>
        </div>

        {/* Portal selector pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { id: 'rtps', name: 'RTPS जाति/निवास' },
            { id: 'pan', name: 'PAN कार्ड' },
            { id: 'ration', name: 'राशन कार्ड' },
            { id: 'voter', name: 'वोटर कार्ड' },
            { id: 'pmkisan', name: 'PM किसान' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedService(item.id as any)}
              className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                selectedService === item.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Active Tracker Box */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>{lang === 'hi' ? active.nameHi : active.nameEn}</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">
              {lang === 'hi' ? 'रेफरेंस / एक्नॉलेजमेंट नंबर दर्ज करें:' : 'Enter Reference / Acknowledgement Number:'}
            </label>
            <div className="relative">
              <input
                type="text"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                placeholder="उदा: BICC/2026/123456"
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>{lang === 'hi' ? active.helpTextHi : active.helpTextEn}</span>
          </div>

          <button
            onClick={handleOpenDirect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>{lang === 'hi' ? 'आधिकारिक ट्रैकिंग पोर्टल खोलें' : 'Open Official Tracking Portal'}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center text-xs text-slate-500">
          {lang === 'hi'
            ? 'यदि कोई समस्या आ रही है, तो 89696 27706 पर कॉल/व्हाट्सएप करें।'
            : 'Need help checking status? Call or WhatsApp us at 89696 27706.'}
        </div>

      </div>
    </div>
  );
};
