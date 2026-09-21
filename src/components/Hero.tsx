import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  FileText, 
  CreditCard,
  Printer,
  Sparkles,
  ArrowRight,
  Send
} from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenRequestModal: (service?: string) => void;
  onOpenQrModal: () => void;
  onSelectCategory: (cat: any) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  searchQuery,
  setSearchQuery,
  onOpenRequestModal,
  onOpenQrModal,
  onSelectCategory
}) => {
  const quickSearchTags = [
    { label: lang === 'hi' ? 'जाति/निवास/आय' : 'Caste/Income', query: 'rtps' },
    { label: lang === 'hi' ? 'Sarkari Result' : 'Sarkari Result', query: 'sarkari' },
    { label: 'PAN Card', query: 'pan' },
    { label: lang === 'hi' ? 'आयुष्मान कार्ड' : 'Ayushman', query: 'ayushman' },
    { label: lang === 'hi' ? 'राशन कार्ड' : 'Ration Card', query: 'ration' },
    { label: lang === 'hi' ? 'PMS स्कॉलरशिप' : 'Scholarship', query: 'scholarship' },
    { label: lang === 'hi' ? 'बिजली बिल' : 'Electricity', query: 'bill' },
    { label: lang === 'hi' ? 'आधार निकासी' : 'AEPS Cash', query: 'aeps' },
    { label: 'PVC Card', query: 'pvc' },
    { label: lang === 'hi' ? 'पासपोर्ट फोटो' : 'Passport Photo', query: 'photo' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Grid & Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'hi' ? 'अधिकृत CSC डिजिटल सेवा केंद्र' : 'Authorized CSC Digital Seva Centre'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{lang === 'hi' ? 'सेंटर खुला है: 8:00 AM - 8:30 PM' : 'Center Open: 8:00 AM - 8:30 PM'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-200 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'hi' ? 'नगरपुरा, बिहार' : 'Nagarpura, Bihar'}</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            {lang === 'hi' ? (
              <>
                <span className="text-amber-400">प्रभाकर</span> ऑनलाइन CS सेंटर
                <span className="block text-2xl sm:text-4xl lg:text-5xl text-blue-100 font-extrabold mt-1">
                  डिजिटल सेवा एवं साइबर कैफे नगरपुरा
                </span>
              </>
            ) : (
              <>
                <span className="text-amber-400">Prabhakar</span> Online CS Centre
                <span className="block text-2xl sm:text-4xl lg:text-5xl text-blue-100 font-extrabold mt-1">
                  Digital Citizen Services & Cyber Cafe Nagarpura
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {lang === 'hi'
              ? 'सभी प्रकार के सरकारी फॉर्म, RTPS जाति/निवास/आय, पैन कार्ड, आयुष्मान कार्ड, स्कॉलरशिप, AEPS आधार निकासी, बिजली बिल, PVC स्मार्ट कार्ड और कलर प्रिंटिंग की विश्वसनीय सेवा।'
              : 'Your trusted one-stop portal for all Govt job forms, RTPS Bihar certificates, PAN card, Ayushman, Scholarships, AEPS Aadhaar banking, bill payments & high-speed color printing in Nagarpura.'}
          </p>
        </div>

        {/* Big Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'सर्विस या फॉर्म खोजें (उदा: जाति प्रमाण पत्र, Sarkari Result, PAN, PVC, बिजली बिल...)'
                  : 'Search any service or portal (e.g. Caste certificate, Sarkari Result, PAN, PVC, Bill...)'
              }
              className="w-full pl-11 pr-24 sm:pr-28 py-3.5 sm:py-4 bg-white text-slate-900 placeholder-slate-400 rounded-2xl text-sm sm:text-base font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400/40 border border-slate-200 transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-1.5 right-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                {lang === 'hi' ? 'साफ करें' : 'Clear'}
              </button>
            ) : (
              <div className="absolute inset-y-1.5 right-2 hidden sm:flex items-center pr-2">
                <span className="text-[11px] font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-lg border border-slate-200">
                  {lang === 'hi' ? '80+ सेवाएं' : '80+ Services'}
                </span>
              </div>
            )}
          </div>

          {/* Quick Search Tag Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3">
            <span className="text-xs text-slate-400 font-medium mr-1">
              {lang === 'hi' ? 'त्वरित खोज:' : 'Quick:'}
            </span>
            {quickSearchTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setSearchQuery(tag.query)}
                className="text-xs bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white px-2.5 py-1 rounded-lg border border-white/10 transition-all cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action CTAs: Call, WhatsApp, Online Request, Pay QR */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="tel:8969627706"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-6 py-3.5 rounded-2xl text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-103 transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5 text-slate-950 fill-current" />
            <span>{lang === 'hi' ? 'कॉल करें: 89696 27706' : 'Call: 89696 27706'}</span>
          </a>

          <a
            href="https://wa.me/918969627706?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A4%B0%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%97%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%20%E0%A4%B2%E0%A5%87%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-103 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर चैट करें' : 'WhatsApp Connect'}</span>
          </a>

          <button
            onClick={() => onOpenRequestModal()}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base border border-blue-400/40 shadow-lg hover:shadow-xl hover:scale-103 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{lang === 'hi' ? 'ऑनलाइन आवेदन भेजें' : 'Send Request Online'}</span>
          </button>

          <button
            onClick={onOpenQrModal}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-2xl text-sm sm:text-base border border-white/20 backdrop-blur-md hover:scale-103 transition-all cursor-pointer"
          >
            <CreditCard className="w-4 h-4 text-emerald-300" />
            <span>{lang === 'hi' ? 'ऑनलाइन पेमेंट करें' : 'Pay Online (UPI)'}</span>
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 text-center hover:bg-white/15 transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">80+</div>
            <div className="text-xs text-slate-300 font-medium">
              {lang === 'hi' ? 'सरकारी एवं प्राइवेट सेवाएं' : 'Govt & Citizen Services'}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 text-center hover:bg-white/15 transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-2">
              <Printer className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">10 Min</div>
            <div className="text-xs text-slate-300 font-medium">
              {lang === 'hi' ? 'अर्जेंट फोटो & PVC स्मार्ट कार्ड' : 'Instant Photo & PVC Card'}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 text-center hover:bg-white/15 transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">100%</div>
            <div className="text-xs text-slate-300 font-medium">
              {lang === 'hi' ? 'सटीक फॉर्म एवं सरकारी दरें' : 'Zero Error & Govt Rates'}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 text-center hover:bg-white/15 transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">7 Days</div>
            <div className="text-xs text-slate-300 font-medium">
              {lang === 'hi' ? 'सुबह 8:00 से रात 8:30 तक' : 'Open 8:00 AM - 8:30 PM'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
