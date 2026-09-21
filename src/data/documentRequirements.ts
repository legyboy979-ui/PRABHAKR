import { DocumentGuide } from '../types';

export const documentRequirementsData: DocumentGuide[] = [
  {
    id: 'rtps-certificates',
    titleHi: 'जाति, निवास एवं आय प्रमाण पत्र (RTPS Bihar)',
    titleEn: 'Caste, Domicile & Income Certificate (RTPS)',
    category: 'RTPS Government',
    iconName: 'FileText',
    processingDays: '10 से 14 कार्य दिवस (Working Days)',
    validity: 'निवास: आजीवन | जाति: आजीवन | आय: 1 वर्ष (वित्तीय वर्ष)',
    officialPortalUrl: 'https://serviceonline.bihar.gov.in/',
    officialPortalName: 'ServicePlus RTPS Bihar',
    requiredDocs: [
      { nameHi: 'आवेदक का आधार कार्ड (Aadhaar Card)', nameEn: 'Applicant Aadhaar Card', isMandatory: true, note: 'मोबाइल नंबर लिंक हो तो OTP द्वारा तुरंत सत्यापन' },
      { nameHi: 'हाल का पासपोर्ट साइज फोटो (Passport Photo)', nameEn: 'Recent Passport Size Photo', isMandatory: true, note: 'स्पष्ट चेहरा, सादा बैकग्राउंड' },
      { nameHi: 'मोबाइल नंबर एवं सक्रिय ईमेल आईडी', nameEn: 'Active Mobile & Email', isMandatory: true, note: 'SMS द्वारा डाउनलोड लिंक प्राप्त करने हेतु' },
      { nameHi: 'पारिवारिक वार्षिक आय विवरण (आय प्रमाण पत्र हेतु)', nameEn: 'Family Annual Income Details', isMandatory: true, note: 'कृषि, व्यवसाय, वेतन व अन्य स्रोतों से आय' },
      { nameHi: 'जमीन का रसीद/खतियान या पुराना जाति प्रमाण पत्र (जाति हेतु)', nameEn: 'Old Caste Proof / Land Record (Optional)', isMandatory: false, note: 'जाति की सही पहचान हेतु सहायक' }
    ],
    stepsHi: [
      '1. प्रभाकर ऑनलाइन CS सेंटर पर अपने आधार कार्ड व फोटो के साथ आएं या ऑनलाइन भेजें।',
      '2. ऑपरेटर द्वारा RTPS सर्विस प्लस पोर्टल पर फॉर्म भरकर ऑनलाइन सबमिट किया जाएगा।',
      '3. आपको एक आवेदन पावती (Acknowledgement Slip / Application Ref Number) दी जाएगी।',
      '4. 10 से 14 दिनों के भीतर आपके मोबाइल पर SMS द्वारा सर्टिफिकेट डाउनलोड लिंक आ जाएगी।',
      '5. हमारे सेंटर से आप डिजिटल हस्ताक्षरित ओरिजिनल रंगीन सर्टिफिकेट प्रिंट करवा सकते हैं।'
    ],
    stepsEn: [
      '1. Visit Prabhakar CSC Nagarpura with your Aadhaar card and photo, or submit online.',
      '2. The operator will fill the accurate RTPS ServicePlus application form with correct details.',
      '3. You will receive an official Acknowledgement Slip with Application Reference Number.',
      '4. Within 10 to 14 working days, you will receive an SMS with the download link.',
      '5. Get your digitally signed official color certificate printed at our center.'
    ],
    importantTipsHi: 'ध्यान दें: यदि पिता के नाम या जन्मतिथि में आधार में कोई त्रुटि हो, तो पहले सुधार करवाएं। विवाहित महिला के मामले में जाति प्रमाण पत्र हमेशा उनके पिता के पते से निर्गत होता है।',
    importantTipsEn: 'Note: For married women, Caste Certificate is always issued from their father\'s permanent address per Bihar Government rules.',
    govtFee: '₹0 (निःशुल्क)',
    centerFee: '₹40 - ₹50'
  },
  {
    id: 'ayushman-card-guide',
    titleHi: 'आयुष्मान भारत गोल्डन कार्ड (₹5 लाख मुफ्त इलाज)',
    titleEn: 'Ayushman Bharat Golden Card (PM-JAY)',
    category: 'Health Welfare',
    iconName: 'HeartPulse',
    processingDays: '10 मिनट में तुरंत जारी (Instant Approval)',
    validity: 'आजीवन (Lifetime Validity)',
    officialPortalUrl: 'https://beneficiary.nha.gov.in/',
    officialPortalName: 'NHA Beneficiary Portal',
    requiredDocs: [
      { nameHi: 'राशन कार्ड (Ration Card)', nameEn: 'Ration Card Copy / Number', isMandatory: true, note: 'राशन कार्ड में आवेदक का नाम होना अनिवार्य है' },
      { nameHi: 'आधार कार्ड (Aadhaar Card)', nameEn: 'Aadhaar Card of all family members', isMandatory: true, note: 'eKYC सत्यापन हेतु' },
      { nameHi: 'आधार से जुड़ा मोबाइल (OTP) अथवा फिंगरप्रिंट (बायोमेट्रिक)', nameEn: 'Aadhaar OTP or Fingerprint', isMandatory: true, note: 'सेंटर पर मंत्रा फिंगरप्रिंट स्कैनर उपलब्ध है' }
    ],
    stepsHi: [
      '1. अपना राशन कार्ड नंबर लेकर सेंटर पर आएं।',
      '2. ऑपरेटर NHA पोर्टल पर राशन कार्ड डालकर परिवार के सभी पात्र सदस्यों की सूची चेक करेगा।',
      '3. फिंगरप्रिंट स्कैनर या आधार OTP द्वारा eKYC की जाएगी।',
      '4. तुरंत लाइव फोटो लेकर आयुष्मान कार्ड जनरेट कर दिया जाएगा।',
      '5. हमारे सेंटर से वॉटरप्रूफ PVC स्मार्ट कार्ड प्रिंट प्राप्त करें।'
    ],
    stepsEn: [
      '1. Bring your Ration card number to Prabhakar CSC center.',
      '2. Operator searches your family name in the NHA Beneficiary Database.',
      '3. Perform biometric fingerprint or OTP based eKYC.',
      '4. Instant live photo capture and immediate card approval.',
      '5. Get high quality waterproof PVC plastic card print on the spot.'
    ],
    importantTipsHi: 'यदि आपके राशन कार्ड में नाम नहीं है, तो बिहार मुख्यमंत्री जन आरोग्य योजना (CMJAY) के तहत भी नाम चेक किया जा सकता है। परिवार के प्रत्येक सदस्य का अलग आयुष्मान कार्ड बनता है।',
    importantTipsEn: 'Each family member gets an individual card with unique PMJAY ID. Free medical treatment up to ₹5 Lakh/year in government and empaneled private hospitals.',
    govtFee: '₹0 (निःशुल्क)',
    centerFee: '₹30 - ₹50 (PVC प्लास्टिक कार्ड सहित)'
  },
  {
    id: 'pan-card-guide',
    titleHi: 'नया पैन कार्ड / सुधार (PAN Card 49A & Correction)',
    titleEn: 'New PAN Card & Correction (UTI / NSDL)',
    category: 'Identity & Tax',
    iconName: 'CreditCard',
    processingDays: 'ई-पैन: 3-5 दिन | फिजिकल कार्ड: 10-15 दिन घर के पते पर',
    validity: 'आजीवन (Lifetime Validity)',
    officialPortalUrl: 'https://www.pan.utiitsl.com/PAN/',
    officialPortalName: 'UTIITSL / NSDL PAN Portal',
    requiredDocs: [
      { nameHi: 'आधार कार्ड (Aadhaar Card)', nameEn: 'Aadhaar Card (Name, DOB & Gender match)', isMandatory: true, note: 'आधार में पूरी जन्मतिथि (DD/MM/YYYY) होनी चाहिए' },
      { nameHi: '2 पासपोर्ट साइज रंगीन फोटो', nameEn: '2 Passport Size Color Photos', isMandatory: true, note: 'साफ बैकग्राउंड, हालिया फोटो' },
      { nameHi: 'हस्ताक्षर अथवा बाएं हाथ के अंगूठे का निशान', nameEn: 'Signature or Thumb Impression', isMandatory: true, note: 'सफेद कागज पर स्पष्ट' },
      { nameHi: 'सक्रिय मोबाइल नंबर एवं ईमेल', nameEn: 'Active Mobile & Email ID', isMandatory: true, note: 'e-PAN PDF ईमेल पर प्राप्त होगा' }
    ],
    stepsHi: [
      '1. आवश्यक दस्तावेजों के साथ सेंटर आएं।',
      '2. Form 49A में नाम, पिता का नाम, जन्मतिथि एवं पता सावधानीपूर्वक भरा जाएगा।',
      '3. दस्तावेज स्कैन कर UTIITSL पोर्टल पर अपलोड किए जाएंगे।',
      '4. आपको तुरंत PAN एक्नॉलेजमेंट स्लिप (पावती रसीद) मिल जाएगी।',
      '5. 3 दिनों में डिजिटल e-PAN ईमेल पर आएगा और डाक द्वारा फिजिकल कार्ड आपके घर पहुंचेगा।'
    ],
    stepsEn: [
      '1. Visit with Aadhaar, 2 photos, signature, and mobile number.',
      '2. Accurate Form 49A application filling with father\'s name and DOB.',
      '3. Upload high-res scanned documents and biometric authentication.',
      '4. Receive instant PAN Acknowledgement receipt with tracking number.',
      '5. Digital e-PAN delivered in 3-5 days; physical PVC card by India Post in 10-15 days.'
    ],
    importantTipsHi: '18 वर्ष से कम आयु (नाबालिग/Minor) के पैन कार्ड हेतु माता या पिता में से किसी एक का आधार कार्ड व हस्ताक्षर भी संलग्न होता है।',
    importantTipsEn: 'For minors (under 18), parent\'s Aadhaar and signature are also required. Correction in name or DOB requires supporting documents.',
    govtFee: '₹107 (Physical PAN Govt Fee)',
    centerFee: '₹50'
  },
  {
    id: 'pms-scholarship-guide',
    titleHi: 'बिहार पोस्ट मैट्रिक स्कॉलरशिप (PMS BC/EBC/SC/ST)',
    titleEn: 'Bihar Post Matric Scholarship (PMS Guide)',
    category: 'Education & Scholarship',
    iconName: 'GraduationCap',
    processingDays: 'सत्यापन के बाद सीधे बैंक खाते में (DBT Transfer)',
    validity: 'वार्षिक (Academic Year)',
    officialPortalUrl: 'https://pmsonline.bih.nic.in/',
    officialPortalName: 'PMS Online Bihar Portal',
    requiredDocs: [
      { nameHi: 'अंतिम उत्तीर्ण परीक्षा की मार्कशीट (Last Exam Marksheet)', nameEn: 'Previous Year Marksheet (10th/12th/Graduation)', isMandatory: true },
      { nameHi: 'कॉलेज द्वारा जारी बोनाफाइड सर्टिफिकेट (Bonafide Certificate)', nameEn: 'College Bonafide Certificate with Seal', isMandatory: true, note: 'कॉलेज के लेटरहेड पर प्रिंसिपल के हस्ताक्षर सहित' },
      { nameHi: 'वर्तमान सत्र की कॉलेज फीस रसीद (Fee Receipt)', nameEn: 'Current Academic Year Fee Receipt', isMandatory: true, note: 'ट्यूशन फीस व अन्य मदों का स्पष्ट विवरण' },
      { nameHi: 'जाति, निवास एवं आय प्रमाण पत्र (वर्तमान वित्तीय वर्ष)', nameEn: 'Caste, Domicile & Income Certificate', isMandatory: true, note: 'वार्षिक पारिवारिक आय ₹3 लाख से कम हो' },
      { nameHi: 'आधार सीडेड बैंक खाता पासबुक (DBT Active Bank)', nameEn: 'Aadhaar Seeded Bank Account Passbook', isMandatory: true, note: 'NPCI DBT मैपिंग होना अनिवार्य' },
      { nameHi: 'पासपोर्ट साइज फोटो एवं हस्ताक्षर', nameEn: 'Passport Photo & Signature', isMandatory: true }
    ],
    stepsHi: [
      '1. कॉलेज से बोनाफाइड सर्टिफिकेट और फीस रसीद बनवाएं।',
      '2. जाति, निवास और चालू वित्तीय वर्ष का आय प्रमाण पत्र तैयार रखें।',
      '3. सेंटर पर आकर PMS पोर्टल पर स्टूडेंट रजिस्ट्रेशन व यूजर आईडी/पासवर्ड बनवाएं।',
      '4. एकेडमिक विवरण, कोर्स और सभी दस्तावेज सही साइज (400KB PDF) में अपलोड करवाएं।',
      '5. फाइनल सबमिशन के बाद रसीद का प्रिंट लेकर अपने कॉलेज में जमा करें।'
    ],
    stepsEn: [
      '1. Obtain official Bonafide Certificate and Fee Receipt from your college.',
      '2. Ensure Caste, Residence and latest Income Certificate are ready.',
      '3. Create Student Login on PMS Bihar portal at Prabhakar CSC.',
      '4. Enter course details, upload clean scanned PDFs of all documents.',
      '5. Print the final submitted application form and submit a copy to your college.'
    ],
    importantTipsHi: 'बैंक खाते में DBT (Direct Benefit Transfer) / NPCI लिंक होना बेहद जरूरी है। यदि DBT नहीं है तो तुरंत बैंक जाकर आधार NPCI लिंक करवाएं।',
    importantTipsEn: 'Crucial: Your bank account must be NPCI/DBT linked to receive scholarship funds directly. Joint accounts are not accepted.',
    govtFee: '₹0 (निःशुल्क)',
    centerFee: '₹80 - ₹100'
  },
  {
    id: 'ration-card-guide',
    titleHi: 'राशन कार्ड नया आवेदन एवं सदस्य जोड़ना (RCMS Bihar)',
    titleEn: 'New Ration Card & Member Addition (RCMS)',
    category: 'Civil Supplies & PDS',
    iconName: 'Utensils',
    processingDays: '30 कार्य दिवस (SRA & BDO सत्यापन उपरांत)',
    validity: 'आजीवन (नवीनीकरण योग्य)',
    officialPortalUrl: 'https://epds.bihar.gov.in/',
    officialPortalName: 'Bihar EPDS RCMS Portal',
    requiredDocs: [
      { nameHi: 'परिवार के सभी सदस्यों का आधार कार्ड (Aadhaar of all members)', nameEn: 'Aadhaar cards of every family member', isMandatory: true },
      { nameHi: 'परिवार का संयुक्त रंगीन फोटो (Joint Family Photo)', nameEn: 'Joint Family Color Photograph', isMandatory: true, note: 'सभी सदस्य एक साथ हों' },
      { nameHi: 'परिवार की मुख्य महिला का बैंक पासबुक', nameEn: 'Head of Family (Female) Bank Passbook', isMandatory: true, note: 'राशन कार्ड परिवार की महिला मुखिया के नाम से बनता है' },
      { nameHi: 'आय प्रमाण पत्र (Income Certificate)', nameEn: 'Income Certificate (Under ₹1.80 Lakh)', isMandatory: true },
      { nameHi: 'निवास प्रमाण पत्र (Residential Proof)', nameEn: 'Residence Certificate (Bihar)', isMandatory: true },
      { nameHi: 'स्वयं घोषणा शपथ पत्र (Self Declaration)', nameEn: 'Self-declaration affidavit', isMandatory: true }
    ],
    stepsHi: [
      '1. परिवार के सभी सदस्यों के आधार और संयुक्त फोटो के साथ सेंटर पर संपर्क करें।',
      '2. EPDS RCMS पोर्टल पर महिला मुखिया के नाम से नया यूजर रजिस्ट्रेशन किया जाएगा।',
      '3. प्रत्येक सदस्य का नाम, आयु, पिता का नाम और आधार नंबर दर्ज किया जाएगा।',
      '4. सभी सहायक दस्तावेज पीडीएफ में अपलोड कर फाइनल आवेदन सबमिट होगा।',
      '5. प्राप्त पावती रसीद को सुरक्षित रखें और स्थिति (Status) ट्रैक करें।'
    ],
    stepsEn: [
      '1. Gather all family Aadhaar cards, joint photo, and bank passbook.',
      '2. Create head-of-family registration on Bihar RCMS portal.',
      '3. Enter details for each family member accurately.',
      '4. Upload merged PDF proofs and finalize online submission.',
      '5. Retain the application acknowledgement receipt for BDO verification tracking.'
    ],
    importantTipsHi: 'राशन कार्ड परिवार की वरिष्ठ महिला के नाम पर ही जारी किया जाता है। यदि महिला न हो तभी पुरुष मुखिया हो सकते हैं।',
    importantTipsEn: 'Under NFSA guidelines, the eldest female in the household is designated as the Head of the Family.',
    govtFee: '₹0 (निःशुल्क)',
    centerFee: '₹60 - ₹80'
  },
  {
    id: 'pm-kisan-guide',
    titleHi: 'PM किसान सम्मान निधि (eKYC & New Registration)',
    titleEn: 'PM Kisan Samman Nidhi (₹6,000/year)',
    category: 'Agriculture & Farmer Welfare',
    iconName: 'Wheat',
    processingDays: 'eKYC तुरंत (2 मिनट) | नया पंजीकरण 15-30 दिन',
    validity: 'निरंतर (eKYC प्रतिवर्ष अनिवार्य)',
    officialPortalUrl: 'https://pmkisan.gov.in/',
    officialPortalName: 'PM Kisan Official Portal',
    requiredDocs: [
      { nameHi: 'किसान का आधार कार्ड (Farmer Aadhaar Card)', nameEn: 'Farmer Aadhaar Card', isMandatory: true },
      { nameHi: 'जमीन की वर्तमान लगान रसीद / जमाबंदी / LPC', nameEn: 'Land Revenue Receipt / LPC / Jamabandi', isMandatory: true, note: 'जमीन किसान के अपने नाम या पैतृक खतियान में होनी चाहिए' },
      { nameHi: 'बैंक खाता पासबुक (DBT सक्रिय)', nameEn: 'Aadhaar-seeded Bank Passbook', isMandatory: true },
      { nameHi: 'मोबाइल नंबर (Aadhaar Linked)', nameEn: 'Aadhaar-linked Mobile Number', isMandatory: true }
    ],
    stepsHi: [
      '1. आधार कार्ड व मोबाइल लेकर सेंटर पर आएं।',
      '2. बायोमेट्रिक फिंगरप्रिंट मशीन पर अंगूठा लगाकर तुरंत e-KYC पूर्ण करें।',
      '3. यदि नया किसान रजिस्ट्रेशन कराना हो तो जमीन की रसीद और खतियान विवरण दर्ज करवाएं।',
      '4. कृषि विभाग द्वारा सत्यापन के बाद आगामी क़िस्त आपके खाते में आना शुरू हो जाएगी।'
    ],
    stepsEn: [
      '1. Bring Aadhaar card to the center.',
      '2. Place finger on biometric scanner to complete instant biometric eKYC.',
      '3. For new registration, provide land jamabandi and revenue receipt.',
      '4. Receive confirmation receipt and monitor upcoming installments.'
    ],
    importantTipsHi: 'यदि क़िस्त रुकी हुई है तो आधार सीडिंग स्टेटस या लैंड सीडिंग (Land Seeding) की समस्या हो सकती है। सेंटर पर आकर स्टेटस चेक करवाएं।',
    importantTipsEn: 'If installments are stopped, verify Land Seeding (YES) and Aadhaar Bank Seeding (Active) status with us.',
    govtFee: '₹0 (निःशुल्क)',
    centerFee: '₹30 - ₹50'
  }
];
