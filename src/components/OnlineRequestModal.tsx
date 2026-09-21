import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, FileUp, CheckCircle2, User, Phone, MapPin, Layers, Clock } from 'lucide-react';
import { Language, ServiceRequest } from '../types';

interface OnlineRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  defaultServiceName?: string;
}

export const OnlineRequestModal: React.FC<OnlineRequestModalProps> = ({
  isOpen,
  onClose,
  lang,
  defaultServiceName = ''
}) => {
  const [formData, setFormData] = useState<ServiceRequest>({
    fullName: '',
    mobile: '',
    village: 'नगरपुरा (Nagarpura)',
    serviceType: defaultServiceName || 'सरकारी नौकरी फॉर्म (Govt Job Form)',
    details: '',
    urgency: 'normal',
    preferredContact: 'whatsapp'
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (defaultServiceName) {
      setFormData((prev) => ({ ...prev, serviceType: defaultServiceName }));
    }
  }, [defaultServiceName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(token);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    let text = `*प्रभाकर ऑनलाइन CS सेंटर - ऑनलाइन आवेदन अनुरोध*%0A%0A`;
    text += `• *आवेदक का नाम:* ${formData.fullName || 'N/A'}%0A`;
    text += `• *मोबाइल नंबर:* ${formData.mobile || 'N/A'}%0A`;
    text += `• *गाँव / पंचायत:* ${formData.village || 'नगरपुरा'}%0A`;
    text += `• *वांछित सेवा:* ${formData.serviceType}%0A`;
    text += `• *प्राथमिकता:* ${formData.urgency === 'urgent' ? '⚡ अति-आवश्यक (Urgent)' : 'सामान्य (Normal)'}%0A`;
    if (formData.details) {
      text += `• *अतिरिक्त विवरण:* ${formData.details}%0A`;
    }
    text += `%0Aकृपया इस सेवा को शुरू करने में सहायता करें।`;

    window.open(`https://wa.me/918969627706?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                {lang === 'hi' ? 'घर बैठे ऑनलाइन सेवा' : 'Remote Service Booking'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {lang === 'hi' ? 'ऑनलाइन सेवा अनुरोध / फॉर्म भरवाएं' : 'Online Service Request & Form Filling'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi'
                  ? 'अपना विवरण भरें। हम व्हाट्सएप पर संपर्क कर आपका काम पूरा करेंगे।'
                  : 'Submit your request. Prabhakar CS Centre will connect with you immediately.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Your name'}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="8969627706"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Village / Area & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'गाँव / कस्बा / वार्ड' : 'Village / Area'}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      placeholder="नगरपुरा (Nagarpura)"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'सेवा का प्रकार *' : 'Service Type *'}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="सरकारी नौकरी फॉर्म (Govt Job Form)">सरकारी नौकरी फॉर्म (Sarkari Job Form)</option>
                    <option value="जाति / निवास / आय प्रमाण पत्र (RTPS)">जाति / निवास / आय प्रमाण पत्र (RTPS)</option>
                    <option value="नया पैन कार्ड / सुधार (PAN Card)">नया पैन कार्ड / सुधार (PAN Card)</option>
                    <option value="आयुष्मान भारत कार्ड (₹5 Lakh)">आयुष्मान भारत कार्ड (₹5 Lakh)</option>
                    <option value="राशन कार्ड में नाम जोड़ना / नया">राशन कार्ड में नाम जोड़ना / नया</option>
                    <option value="PMS पोस्ट मैट्रिक स्कॉलरशिप">PMS पोस्ट मैट्रिक स्कॉलरशिप</option>
                    <option value="BSEB / CBSE रिजल्ट या फॉर्म">BSEB / CBSE रिजल्ट या फॉर्म</option>
                    <option value="आधार से पैसा निकासी / AEPS">आधार से पैसा निकासी / AEPS</option>
                    <option value="बिजली बिल भुगतान (SBPDCL/NBPDCL)">बिजली बिल भुगतान (SBPDCL/NBPDCL)</option>
                    <option value="कलर प्रिंट / फोटोकॉपी / PVC कार्ड">कलर प्रिंट / फोटोकॉपी / PVC कार्ड</option>
                    <option value="अन्य ऑनलाइन कार्य (Other)">अन्य ऑनलाइन कार्य (Other)</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'अतिरिक्त विवरण या निर्देश (वैकल्पिक)' : 'Additional Notes / Instructions'}
                </label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder={lang === 'hi' ? 'जैसे: SSC GD फॉर्म भरना है, अंतिम तिथि 2 दिन बाद है...' : 'Any details or deadline...'}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Urgency selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'प्राथमिकता (Urgency):' : 'Priority:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold ${
                    formData.urgency === 'normal' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="urgency"
                      checked={formData.urgency === 'normal'}
                      onChange={() => setFormData({ ...formData, urgency: 'normal' })}
                      className="text-blue-600"
                    />
                    <span>{lang === 'hi' ? 'सामान्य (Normal - 24 घंटे)' : 'Normal (24h)'}</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold ${
                    formData.urgency === 'urgent' ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="urgency"
                      checked={formData.urgency === 'urgent'}
                      onChange={() => setFormData({ ...formData, urgency: 'urgent' })}
                      className="text-amber-600"
                    />
                    <span>{lang === 'hi' ? '⚡ अर्जेंट (Same Day / Fast)' : '⚡ Urgent (Same Day)'}</span>
                  </label>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर तुरंत भेजें (89696 27706)' : 'Send directly on WhatsApp'}</span>
                </button>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'वेब पोर्टल पर अनुरोध दर्ज करें' : 'Submit via Web Portal'}</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full uppercase">
                {lang === 'hi' ? 'अनुरोध प्राप्त हुआ' : 'Request Received'}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                {lang === 'hi' ? 'धन्यवाद! आपका आवेदन दर्ज कर लिया गया है' : 'Thank You! Request Logged'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {lang === 'hi'
                  ? 'प्रभाकर ऑनलाइन CS सेंटर द्वारा शीघ्र ही आपके नंबर पर संपर्क किया जाएगा।'
                  : 'We will review your documents and connect with you shortly.'}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">टोकन नंबर:</span>
                <span className="font-mono font-bold text-slate-900">{refNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">आवेदक:</span>
                <span className="font-semibold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">सेवा:</span>
                <span className="font-semibold text-slate-900">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">हेल्पलाइन:</span>
                <span className="font-bold text-blue-700">89696 27706</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                onClick={handleSendWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{lang === 'hi' ? 'व्हाट्सएप चैट खोलें' : 'Open WhatsApp Chat'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs cursor-pointer"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
