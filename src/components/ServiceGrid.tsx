import React from 'react';
import { 
  ExternalLink, 
  Clock, 
  FileText, 
  CheckCircle, 
  HelpCircle,
  Briefcase,
  Bell,
  Award,
  FileCheck,
  Shield,
  Layers,
  TrainTrack,
  Flame,
  CheckCircle2,
  CreditCard,
  HeartPulse,
  Utensils,
  Vote,
  Users,
  Wheat,
  FileBadge,
  HardHat,
  Landmark,
  Car,
  Globe,
  GraduationCap,
  BookOpenCheck,
  Sparkles,
  BookMarked,
  School,
  Compass,
  Fingerprint,
  Send,
  Zap,
  Smartphone,
  ShieldCheck,
  QrCode,
  Printer,
  Camera,
  Ticket,
  ShieldAlert,
  FileSpreadsheet,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { ServiceItem, ServiceCategory, Language } from '../types';

interface ServiceGridProps {
  services: ServiceItem[];
  selectedCategory: ServiceCategory;
  setSelectedCategory: (cat: ServiceCategory) => void;
  searchQuery: string;
  lang: Language;
  onOpenDocGuide: (serviceId?: string) => void;
  onRequestService: (serviceName: string) => void;
}

// Icon resolver helper
const renderIcon = (name: string, className: string = "w-6 h-6") => {
  const icons: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className={className} />,
    Bell: <Bell className={className} />,
    Award: <Award className={className} />,
    FileCheck: <FileCheck className={className} />,
    Shield: <Shield className={className} />,
    Layers: <Layers className={className} />,
    TrainTrack: <TrainTrack className={className} />,
    Flame: <Flame className={className} />,
    FileText: <FileText className={className} />,
    CheckCircle2: <CheckCircle2 className={className} />,
    CreditCard: <CreditCard className={className} />,
    HeartPulse: <HeartPulse className={className} />,
    Utensils: <Utensils className={className} />,
    Vote: <Vote className={className} />,
    Users: <Users className={className} />,
    Wheat: <Wheat className={className} />,
    FileBadge: <FileBadge className={className} />,
    HardHat: <HardHat className={className} />,
    Landmark: <Landmark className={className} />,
    Car: <Car className={className} />,
    Globe: <Globe className={className} />,
    GraduationCap: <GraduationCap className={className} />,
    BookOpenCheck: <BookOpenCheck className={className} />,
    Sparkles: <Sparkles className={className} />,
    BookMarked: <BookMarked className={className} />,
    School: <School className={className} />,
    Compass: <Compass className={className} />,
    Fingerprint: <Fingerprint className={className} />,
    Send: <Send className={className} />,
    Zap: <Zap className={className} />,
    Smartphone: <Smartphone className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
    QrCode: <QrCode className={className} />,
    Printer: <Printer className={className} />,
    Camera: <Camera className={className} />,
    Ticket: <Ticket className={className} />,
    ShieldAlert: <ShieldAlert className={className} />,
    FileSpreadsheet: <FileSpreadsheet className={className} />
  };

  return icons[name] || <FileText className={className} />;
};

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  lang,
  onOpenDocGuide,
  onRequestService
}) => {
  // Category tabs configuration
  const categories: { id: ServiceCategory; labelHi: string; labelEn: string; icon: string; count?: number }[] = [
    { id: 'all', labelHi: 'सभी सेवाएं', labelEn: 'All Services', icon: 'Sparkles' },
    { id: 'jobs', labelHi: '🔥 सरकारी नौकरी एवं फॉर्म', labelEn: '🔥 Govt Jobs & Forms', icon: 'Briefcase' },
    { id: 'govt', labelHi: '📜 मुख्य सरकारी सेवाएं (RTPS)', labelEn: '📜 RTPS & Govt Portals', icon: 'FileText' },
    { id: 'education', labelHi: '🎓 बोर्ड एवं शिक्षा (10th/12th)', labelEn: '🎓 Board & Education', icon: 'GraduationCap' },
    { id: 'banking', labelHi: '💳 बैंकिंग, AEPS & पेमेंट', labelEn: '💳 Banking & Payments', icon: 'CreditCard' },
    { id: 'cyber', labelHi: '🖨️ साइबर कैफे & प्रिंटिंग', labelEn: '🖨️ Cyber Cafe & Printing', icon: 'Printer' }
  ];

  // Filtering services based on category and search query
  const filteredServices = services.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      item.titleHi.toLowerCase().includes(query) ||
      item.titleEn.toLowerCase().includes(query) ||
      item.descHi.toLowerCase().includes(query) ||
      item.descEn.toLowerCase().includes(query) ||
      item.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'आधिकारिक एवं अधिकृत सेवाएं' : 'Official Portal Directory'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {lang === 'hi' ? 'सभी सरकारी एवं डिजिटल सेवाएं' : 'All Digital & Citizen Services'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'hi'
              ? 'आधिकारिक पोर्टल लिंक खोलें अथवा हमारे सेंटर से आवेदन करवाने हेतु संपर्क करें।'
              : 'Open direct official portals or request complete assistance from Prabhakar CS Centre.'}
          </p>
        </div>

        {/* Count Badge */}
        <div className="text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl self-start md:self-auto border border-slate-200">
          {lang === 'hi'
            ? `दिखाए जा रहे: ${filteredServices.length} सेवाएं`
            : `Showing: ${filteredServices.length} Services`}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{lang === 'hi' ? cat.labelHi : cat.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            {lang === 'hi' ? 'कोई सेवा नहीं मिली' : 'No Services Found'}
          </h3>
          <p className="text-sm text-slate-500 mt-1 mb-5">
            {lang === 'hi'
              ? `"${searchQuery}" से मेल खाता कोई फॉर्म या लिंक नहीं मिला। कृपया सीधे हमसे संपर्क करें।`
              : `No service matching "${searchQuery}". Please contact us directly for assistance.`}
          </p>
          <button
            onClick={() => onRequestService(searchQuery || 'Custom Enquiry')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all cursor-pointer shadow-sm"
          >
            {lang === 'hi' ? 'कस्टम सेवा हेतु पूछें (WhatsApp)' : 'Ask via WhatsApp'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Bar: Icon + Badge */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-108"
                    style={{ backgroundColor: service.bgColor, color: service.accentColor }}
                  >
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {service.badge && (
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        service.badgeType === 'urgent' ? 'bg-red-100 text-red-700 border border-red-200' :
                        service.badgeType === 'popular' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                        service.badgeType === 'verified' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                        'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {service.badge}
                      </span>
                    )}

                    {service.estTimeHi && (
                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{lang === 'hi' ? service.estTimeHi : service.estTimeEn}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {lang === 'hi' ? service.titleHi : service.titleEn}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {lang === 'hi' ? service.descHi : service.descEn}
                </p>

                {/* Requirements Peek */}
                {service.requirements && service.requirements.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1">
                      <FileCheck className="w-3 h-3 text-indigo-500" />
                      <span>{lang === 'hi' ? 'मुख्य दस्तावेज:' : 'Required Docs:'}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.requirements.slice(0, 2).map((req, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                          {req}
                        </span>
                      ))}
                      {service.requirements.length > 2 && (
                        <button
                          onClick={() => onOpenDocGuide(service.id)}
                          className="text-[11px] text-blue-600 hover:text-blue-800 font-bold px-1.5 py-0.5 hover:underline cursor-pointer"
                        >
                          +{service.requirements.length - 2} और
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions & Price Strip */}
              <div className="mt-5 pt-3 border-t border-slate-100 space-y-3">
                {/* Fees Strip if available */}
                {(service.govtFee || service.centerFee) && (
                  <div className="flex items-center justify-between text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                    <span className="text-slate-500 font-medium">
                      {lang === 'hi' ? 'सरकारी शुल्क:' : 'Govt Fee:'}{' '}
                      <strong className="text-slate-800">{service.govtFee}</strong>
                    </span>
                    <span className="text-slate-500 font-medium">
                      {lang === 'hi' ? 'सेंटर चार्ज:' : 'Center Fee:'}{' '}
                      <strong className="text-emerald-700">{service.centerFee}</strong>
                    </span>
                  </div>
                )}

                {/* Button actions */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Official Portal Link */}
                  <a
                    href={service.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2 px-2.5 rounded-xl transition-all text-center border border-slate-200 cursor-pointer"
                    title="Open official government / portal link"
                  >
                    <span>{lang === 'hi' ? 'आधिकारिक लिंक' : 'Official Portal'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  {/* Apply via Center / WhatsApp */}
                  <button
                    onClick={() => onRequestService(lang === 'hi' ? service.titleHi : service.titleEn)}
                    className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-2.5 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
                    <span>{lang === 'hi' ? 'सेंटर से कराएं' : 'Apply via Us'}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA for unlisted services */}
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-black">
            {lang === 'hi' ? 'क्या आपकी ज़रूरत की सेवा ऊपर नहीं मिली?' : 'Looking for a service not listed here?'}
          </h3>
          <p className="text-xs sm:text-sm text-blue-200">
            {lang === 'hi'
              ? 'चिंता न करें! प्रभाकर ऑनलाइन CS सेंटर नगरपुरा में सभी प्रकार के ऑनलाइन, प्रिंटिंग व बैंकिंग कार्य किए जाते हैं।'
              : 'No problem! Contact us directly for any government application, college form, or custom document drafting.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:8969627706"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            📞 89696 27706
          </a>
          <button
            onClick={() => onRequestService('Custom Request')}
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2.5 rounded-xl text-sm border border-white/30 transition-all cursor-pointer"
          >
            {lang === 'hi' ? 'पूछताछ करें' : 'Enquire Now'}
          </button>
        </div>
      </div>

    </section>
  );
};
