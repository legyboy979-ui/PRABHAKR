export interface FAQItem {
  id: string;
  qHi: string;
  qEn: string;
  aHi: string;
  aEn: string;
  category: 'general' | 'rtps' | 'pan' | 'banking' | 'photos';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    qHi: 'प्रभाकर ऑनलाइन CS सेंटर किस समय खुला रहता है?',
    qEn: 'What are the operating hours of Prabhakar Online CS Centre?',
    aHi: 'हमारा सेंटर प्रतिदिन सोमवार से रविवार सुबह 8:00 AM से रात 8:30 PM तक खुला रहता है। किसी भी सरकारी फॉर्म की अंतिम तिथि पर विशेष समय तक सेवाएं उपलब्ध रहती हैं।',
    aEn: 'Our center is open every day from Monday to Sunday, 8:00 AM to 8:30 PM. On last dates of major sarkari recruitments, we provide extended support.',
    category: 'general'
  },
  {
    id: 'faq-2',
    qHi: 'क्या मैं घर बैठे व्हाट्सएप पर डॉक्यूमेंट भेजकर फॉर्म भरवा सकता हूँ?',
    qEn: 'Can I send documents over WhatsApp to fill my form remotely?',
    aHi: 'हाँ बिल्कुल! आप हमारे नंबर 89696 27706 पर अपने डॉक्यूमेंट की साफ फोटो भेज सकते हैं। हम फॉर्म भरकर आपको प्रीव्यू भेजेंगे, आपके अप्रूवल के बाद सबमिट कर फाइनल पीडीएफ और रसीद भेज दी जाएगी। भुगतान आप UPI (PhonePe / GPay) से कर सकते हैं।',
    aEn: 'Yes, absolutely! Send clear pictures of your documents to 89696 27706 on WhatsApp. We will prepare the application, share the preview for your verification, submit it, and send you the final confirmation PDF. Payment can be made via UPI.',
    category: 'general'
  },
  {
    id: 'faq-3',
    qHi: 'RTPS जाति / निवास / आय प्रमाण पत्र कितने दिनों में बन जाता है?',
    qEn: 'How many days does it take for RTPS Caste / Domicile / Income Certificate?',
    aHi: 'बिहार सरकार के नियमानुसार सामान्यतः 10 से 14 कार्य दिवसों में प्रमाण पत्र निर्गत हो जाता है। यदि आवश्यक हो तो तत्काल (Tatkal) आवेदन भी विशेष प्रयोजन हेतु किया जा सकता है। बनने पर डिजिटल सर्टिफिकेट का प्रिंट हमारे सेंटर से प्राप्त किया जा सकता है।',
    aEn: 'As per Bihar RTPS rules, standard delivery is 10 to 14 working days. Emergency Tatkal provisions are also available for urgent admission/recruitment requirements.',
    category: 'rtps'
  },
  {
    id: 'faq-4',
    qHi: 'आधार से पैसा निकालने (AEPS) के लिए क्या आवश्यक है?',
    qEn: 'What is required for Aadhaar AEPS Cash Withdrawal?',
    aHi: 'आपको केवल अपना आधार नंबर, अपने बैंक का नाम बताना होगा और सेंटर पर उपलब्ध बायोमेट्रिक स्कैनर पर अपना फिंगरप्रिंट (अंगूठा) लगाना होगा। आप ₹100 से ₹10,000 तक तुरंत नकद निकाल सकते हैं और मिनी स्टेटमेंट भी ले सकते हैं।',
    aEn: 'You only need your Aadhaar number, bank name, and fingerprint on our biometric device. You can withdraw instant cash (₹100 to ₹10,000) and get mini bank statements on the spot.',
    category: 'banking'
  },
  {
    id: 'faq-5',
    qHi: 'नया पैन कार्ड कितने दिनों में बन जाता है?',
    qEn: 'How long does a new PAN Card take to arrive?',
    aHi: 'डिजिटल ई-पैन (e-PAN) 3 से 5 दिनों में आपकी ईमेल आईडी पर आ जाता है, जिसका उपयोग तुरंत सभी सरकारी/बैंक कार्यों में किया जा सकता है। ओरिजिनल प्लास्टिक PVC पैन कार्ड डाक द्वारा 10 से 15 दिनों में आपके घर के पते पर पहुंचता है।',
    aEn: 'Digital e-PAN is generated in 3 to 5 business days and emailed to you. The physical plastic PVC PAN card is delivered by India Post speed post to your home address within 10 to 15 days.',
    category: 'pan'
  },
  {
    id: 'faq-6',
    qHi: 'क्या सेंटर पर तुरंत 10 मिनट में पासपोर्ट फोटो और PVC स्मार्ट कार्ड मिल जाता है?',
    qEn: 'Can I get urgent passport photos and PVC Smart Cards in 10 minutes?',
    aHi: 'हाँ! हमारे पास हाई-स्पीड स्टूडियो फोटो प्रिंटर और हाई-क्वालिटी थर्मल PVC कार्ड प्रिंटिंग मशीन उपलब्ध है। आप 10 मिनट में 12/24 पासपोर्ट फोटो और आधार/पैन/आयुष्मान का वॉटरप्रूफ प्लास्टिक स्मार्ट कार्ड तुरंत प्राप्त कर सकते हैं।',
    aEn: 'Yes! We have high-speed instant photo printers and heavy-duty PVC smart card thermal printers. You can receive 12/24 passport photos and PVC plastic ATM-style cards in just 10 minutes.',
    category: 'photos'
  }
];
