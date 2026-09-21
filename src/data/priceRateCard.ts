import { PriceItem } from '../types';

export const priceRateCard: PriceItem[] = [
  {
    id: 'xerox-bw',
    titleHi: 'ब्लैक & व्हाइट फोटोकॉपी (B&W Xerox)',
    titleEn: 'Black & White Photocopy / Xerox',
    category: 'print',
    price: 2,
    unitHi: 'प्रति पृष्ठ (Single Side)',
    unitEn: 'per page (Single Side)',
    descriptionHi: '75 GSM प्रीमियम पेपर पर क्रिस्प लेजर फोटोकॉपी। (Double side ₹3)',
    descriptionEn: 'High quality 75 GSM crisp laser xerox. Double side ₹3.',
    popular: true
  },
  {
    id: 'print-color',
    titleHi: 'कलर प्रिंट आउट (A4 Color Print)',
    titleEn: 'Full Color Laser Printout (A4)',
    category: 'print',
    price: 10,
    unitHi: 'प्रति पृष्ठ',
    unitEn: 'per page',
    descriptionHi: 'हाई-डेफिनिशन कलर प्रिंट (दस्तावेज, एडमिट कार्ड, फॉर्म, प्रोजेक्ट)।',
    descriptionEn: 'HD vibrant laser color prints for admit cards, certificates, forms.',
    popular: true
  },
  {
    id: 'photo-glossy',
    titleHi: 'फोटो ग्लॉसी पेपर प्रिंट (Photo Paper Print)',
    titleEn: 'Glossy Photo Paper High-Res Print',
    category: 'print',
    price: 25,
    unitHi: 'प्रति A4 शीट',
    unitEn: 'per A4 sheet',
    descriptionHi: '220 GSM वॉटरप्रूफ ग्लॉसी पेपर पर हाई-क्वालिटी फोटो प्रिंट।',
    descriptionEn: '220 GSM premium high gloss waterproof photo print.'
  },
  {
    id: 'pvc-card-print',
    titleHi: 'PVC स्मार्ट कार्ड प्रिंट (आधार / पैन / आयुष्मान)',
    titleEn: 'PVC Smart Plastic Card Print',
    category: 'card',
    price: 50,
    unitHi: 'प्रति कार्ड',
    unitEn: 'per card',
    descriptionHi: 'ATM जैसा मजबूत प्लास्टिक कार्ड, वॉटरप्रूफ, चिप/QR सपोर्ट, कभी न मिटने वाला।',
    descriptionEn: 'Durable waterproof ATM-style plastic PVC card with chip & QR code.',
    popular: true
  },
  {
    id: 'passport-photos-12',
    titleHi: 'पासपोर्ट साइज फोटो (12 कॉपियां)',
    titleEn: 'Passport Size Photos (Pack of 12)',
    category: 'photo',
    price: 40,
    unitHi: '12 फोटो',
    unitEn: '12 photos',
    descriptionHi: '10 मिनट में रेडी! बैकग्राउंड कलर चेंज, लाइट करेक्शन एवं एचडी प्रिंट।',
    descriptionEn: 'Ready in 10 mins! Background change, light touch-up & HD print.',
    popular: true
  },
  {
    id: 'passport-photos-24',
    titleHi: 'पासपोर्ट साइज फोटो (24 कॉपियां)',
    titleEn: 'Passport Size Photos (Pack of 24)',
    category: 'photo',
    price: 70,
    unitHi: '24 फोटो',
    unitEn: '24 photos',
    descriptionHi: 'बंपर छूट के साथ 24 कॉपियां। फॉर्म और परीक्षाओं हेतु पर्याप्त।',
    descriptionEn: 'Value pack of 24 photos with touch-up for competitive exams.'
  },
  {
    id: 'lamination-a4',
    titleHi: 'A4 हैवी पाउच लैमिनेशन',
    titleEn: 'Heavy Duty A4 Pouch Lamination',
    category: 'print',
    price: 15,
    unitHi: 'प्रति दस्तावेज',
    unitEn: 'per document',
    descriptionHi: '125 माइक्रोन हैवी डस्टप्रूफ & वाटरप्रूफ पाउच लैमिनेशन।',
    descriptionEn: '125 micron durable waterproof & dustproof pouch lamination.'
  },
  {
    id: 'sarkari-form-filling',
    titleHi: 'सरकारी नौकरी फॉर्म फिलिंग (Job Form Fillup)',
    titleEn: 'Sarkari Job Online Form Filling Assistance',
    category: 'form',
    price: 70,
    unitHi: 'प्रति फॉर्म',
    unitEn: 'per application',
    descriptionHi: '100% सटीक फॉर्म फिलिंग, फोटो-सिग्नेचर रिसाइजिंग, फाइनल प्रिंटआउट सहित।',
    descriptionEn: 'Zero-error form filling, photo resizing & color final print included.',
    popular: true
  },
  {
    id: 'rtps-form-service',
    titleHi: 'RTPS जाति / निवास / आय आवेदन',
    titleEn: 'RTPS Bihar Certificate Application',
    category: 'certificate',
    price: 50,
    unitHi: 'प्रति प्रमाण पत्र',
    unitEn: 'per certificate',
    descriptionHi: 'सर्विस प्लस पर ऑनलाइन सबमिशन + पावती रसीद + बनने पर फ्री प्रिंट।',
    descriptionEn: 'Online submission on ServicePlus, receipt and SMS notification.'
  },
  {
    id: 'pan-card-service',
    titleHi: 'नया पैन कार्ड ऑनलाइन (Form 49A)',
    titleEn: 'New PAN Card Application Assist',
    category: 'form',
    price: 50,
    unitHi: 'सर्विस चार्ज (+ ₹107 govt fee)',
    unitEn: 'service charge (+ ₹107 govt fee)',
    descriptionHi: 'UTIITSL / NSDL पर नया पैन कार्ड, 3 दिन में ई-पैन, 10 दिन में कार्ड डिलीवरी।',
    descriptionEn: 'Complete PAN application, 3-day e-PAN & physical card doorstep delivery.'
  },
  {
    id: 'resume-biodata-making',
    titleHi: 'बायोडाटा / रिज्यूम निर्माण (Resume Drafting)',
    titleEn: 'Job Resume / Bio-Data Drafting & Print',
    category: 'form',
    price: 40,
    unitHi: 'प्रति रिज्यूम (2 कॉपियां)',
    unitEn: 'per resume (2 copies)',
    descriptionHi: 'हिंदी अथवा इंग्लिश में प्रोफेशनल फॉर्मेटिंग + 2 लेजर प्रिंटआउट्स।',
    descriptionEn: 'Professional formatting in Hindi or English with 2 clean laser prints.'
  },
  {
    id: 'train-ticket-tatkal',
    titleHi: 'आईआरसीटीसी ट्रेन टिकट बुकिंग (IRCTC Rail)',
    titleEn: 'IRCTC Train Ticket Reservation',
    category: 'travel',
    price: 50,
    unitHi: 'स्लीपर / ₹80 AC (+ रेलवे किराया)',
    unitEn: 'Sleeper / ₹80 AC (+ Rail fare)',
    descriptionHi: 'कंफर्म सीट खोज, तत्काल टिकट सहायता एवं एसएमएस कंफर्मेशन।',
    descriptionEn: 'Authorized railway ticket booking assistance with PNR tracking.'
  }
];
