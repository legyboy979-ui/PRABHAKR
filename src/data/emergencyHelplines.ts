export interface HelplineItem {
  id: string;
  nameHi: string;
  nameEn: string;
  number: string;
  deptHi: string;
  deptEn: string;
  descHi: string;
  descEn: string;
  iconName: string;
}

export const emergencyHelplines: HelplineItem[] = [
  {
    id: 'prabhakar-csc-center',
    nameHi: 'प्रभाकर ऑनलाइन CS सेंटर हेल्पलाइन',
    nameEn: 'Prabhakar Online CS Centre Helpdesk',
    number: '8969627706',
    deptHi: 'नगरपुरा, बिहार',
    deptEn: 'Nagarpura, Bihar',
    descHi: 'सभी ऑनलाइन सेवाओं, फॉर्म व पूछताछ के लिए डायरेक्ट कॉल या व्हाट्सएप करें।',
    descEn: 'Direct call or WhatsApp for any online service enquiry and urgent assistance.',
    iconName: 'PhoneCall'
  },
  {
    id: 'rtps-bihar-help',
    nameHi: 'RTPS बिहार लोक सेवा अधिकार',
    nameEn: 'RTPS Bihar Right to Public Services',
    number: '18003456145',
    deptHi: 'बिहार सरकार लोक शिकायत',
    deptEn: 'Govt of Bihar Public Grievance',
    descHi: 'जाति, निवास, आय प्रमाण पत्र में देरी या शिकायत हेतु टोल-फ्री नंबर।',
    descEn: 'Toll-free helpline for delay or complaints in RTPS certificates.',
    iconName: 'Building2'
  },
  {
    id: 'ayushman-pmjay-help',
    nameHi: 'आयुष्मान भारत PM-JAY हेल्पलाइन',
    nameEn: 'Ayushman Bharat National Helpline',
    number: '14555',
    deptHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण',
    deptEn: 'National Health Authority (NHA)',
    descHi: 'मुफ्त इलाज, अस्पताल सूची और आयुष्मान कार्ड संबंधी किसी भी सहायता हेतु।',
    descEn: '24x7 toll free support for free hospital treatment and card verification.',
    iconName: 'HeartPulse'
  },
  {
    id: 'cyber-crime-help',
    nameHi: 'साइबर अपराध राष्ट्रीय हेल्पलाइन',
    nameEn: 'National Cyber Crime Reporting Helpline',
    number: '1930',
    deptHi: 'गृह मंत्रालय भारत सरकार',
    deptEn: 'Ministry of Home Affairs, GoI',
    descHi: 'ऑनलाइन बैंकिंग फ्रॉड, ओटीपी फ्रॉड होने पर तुरंत 1930 पर कॉल करें।',
    descEn: 'Immediate financial cyber fraud reporting to freeze stolen funds.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'voter-eci-help',
    nameHi: 'चुनाव आयोग वोटर हेल्पलाइन',
    nameEn: 'ECI National Voter Helpline',
    number: '1950',
    deptHi: 'भारत निर्वाचन आयोग',
    deptEn: 'Election Commission of India',
    descHi: 'वोटर लिस्ट में नाम जांचने, बूथ और बीएलओ (BLO) जानकारी हेतु।',
    descEn: 'Toll-free voter ID helpline for BLO contact and epic status.',
    iconName: 'Vote'
  },
  {
    id: 'electricity-bihar-help',
    nameHi: 'बिहार विद्युत उपभोक्ता हेल्पलाइन (SBPDCL/NBPDCL)',
    nameEn: 'Bihar Electricity Consumer Helpline',
    number: '1912',
    deptHi: 'ऊर्जा विभाग, बिहार',
    deptEn: 'Energy Dept, Govt of Bihar',
    descHi: 'बिजली फॉल्ट, मीटर समस्या एवं बिल संबंधी किसी भी शिकायत हेतु 24x7।',
    descEn: '24x7 power outage, meter issues and billing complaint resolution.',
    iconName: 'Zap'
  },
  {
    id: 'pm-kisan-help',
    nameHi: 'PM किसान सम्मान निधि हेल्पलाइन',
    nameEn: 'PM Kisan Samman Nidhi Helpline',
    number: '155261',
    deptHi: 'कृषि एवं किसान कल्याण मंत्रालय',
    deptEn: 'Ministry of Agriculture, GoI',
    descHi: 'क़िस्त न आने, लैंड सीडिंग व eKYC संबंधी समस्याओं के समाधान हेतु।',
    descEn: 'Toll free farmer assistance for installment tracking and grievance.',
    iconName: 'Wheat'
  },
  {
    id: 'bihar-police-emergency',
    nameHi: 'बिहार आपातकालीन सेवा (ERSS 112)',
    nameEn: 'Bihar Emergency Response Support System',
    number: '112',
    deptHi: 'बिहार पुलिस / एम्बुलेंस / फायर',
    deptEn: 'Police / Ambulance / Fire 24x7',
    descHi: 'पुलिस, एम्बुलेंस अथवा अग्निशमन सहायता हेतु ऑल-इन-वन इमरजेंसी नंबर।',
    descEn: 'Single unified emergency helpline for police, ambulance and fire in Bihar.',
    iconName: 'AlertCircle'
  }
];
