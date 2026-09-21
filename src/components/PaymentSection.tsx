import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  Copy, 
  Check, 
  Smartphone, 
  ShieldCheck, 
  Printer, 
  Download,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface PaymentSectionProps {
  lang: Language;
  presetAmount?: number;
  serviceName?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  lang,
  presetAmount = 50,
  serviceName = 'Prabhakar CS Centre Online Service',
  isModal = false,
  onCloseModal
}) => {
  const [amount, setAmount] = useState<number>(presetAmount);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [utrNumber, setUtrNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receiptDate, setReceiptDate] = useState('');
  const [receiptId, setReceiptId] = useState('');

  const upiId = '8969627706@paytm';
  const merchantName = 'Prabhakar Online CS Centre';
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(serviceName)}`;

  const presetAmounts = [10, 20, 50, 100, 250, 500];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert(lang === 'hi' ? 'कृपया नाम और मोबाइल नंबर भरें' : 'Please enter name and mobile number');
      return;
    }

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }

    const now = new Date();
    setReceiptDate(now.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }));
    setReceiptId(`TXN-${Math.floor(100000 + Math.random() * 900000)}`);
    setPaymentSuccess(true);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const content = (
    <div className="max-w-4xl mx-auto">
      
      {!paymentSuccess ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>100% Secure Instant UPI Payment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                {lang === 'hi' ? 'प्रभाकर ऑनलाइन CS सेंटर - QR पेमेंट' : 'Prabhakar CS Centre - Digital Payment'}
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                {lang === 'hi' ? 'PhonePe, Google Pay, Paytm, BHIM द्वारा तुरंत भुगतान करें' : 'Scan & Pay instantly using any UPI App'}
              </p>
            </div>

            <div className="bg-white/15 px-3 py-1.5 rounded-2xl border border-white/20 text-center shrink-0">
              <span className="text-[10px] text-emerald-200 block uppercase font-bold">UPI ID</span>
              <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide">{upiId}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Dynamic QR Code Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <div className="bg-white p-3 rounded-2xl shadow-md border border-slate-200">
                <QRCodeSVG
                  value={upiLink}
                  size={190}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div className="mt-3 font-mono text-xl font-black text-slate-900">
                ₹{amount}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {merchantName}
              </div>

              {/* Direct UPI Mobile Link */}
              <a
                href={upiLink}
                className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>{lang === 'hi' ? 'मोबाइल UPI ऍप में खोलें' : 'Open in UPI App'}</span>
              </a>

              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
                <span>UPI ID: <strong className="text-slate-700">{upiId}</strong></span>
                <button
                  onClick={handleCopyUpi}
                  className="text-blue-600 hover:text-blue-800 p-1 rounded cursor-pointer"
                  title="Copy UPI ID"
                >
                  {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Right: Amount Selector & Confirmation Form */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Select Amount */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'भुगतान राशि चुनें (Select Amount):' : 'Choose Amount (₹):'}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        amount === amt
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 font-bold text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                    placeholder="कस्टम राशि दर्ज करें"
                    className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Submit Payment Confirmation */}
              <form onSubmit={handleConfirmPayment} className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  {lang === 'hi' ? 'पेमेंट रसीद प्राप्त करने हेतु विवरण भरें:' : 'Enter details for instant digital receipt:'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={lang === 'hi' ? 'आपका नाम (Full Name)' : 'Your Full Name'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder={lang === 'hi' ? 'मोबाइल नंबर (Mobile No)' : 'Mobile Number'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <input
                  type="text"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  placeholder={lang === 'hi' ? 'UPI UTR / Ref No (यदि उपलब्ध हो)' : 'UPI Reference / UTR Number (Optional)'}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'भुगतान पुष्टि करें एवं रसीद पाएं' : 'Confirm & Generate Receipt'}</span>
                </button>
              </form>

            </div>

          </div>

          <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>सत्यापित केंद्र: <strong>प्रभाकर ऑनलाइन CS सेंटर, नगरपुरा</strong></span>
            <span>संपर्क: <strong>89696 27706</strong></span>
          </div>

        </div>
      ) : (
        /* Printable Digital Payment Receipt */
        <div className="bg-white rounded-3xl border-2 border-emerald-500 p-6 sm:p-8 shadow-2xl max-w-xl mx-auto animate-in zoom-in-95 duration-200">
          
          <div className="text-center pb-5 border-b border-dashed border-slate-200">
            <div className="w-14 h-14 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full uppercase">
              {lang === 'hi' ? 'भुगतान सफल / Verified' : 'Payment Success'}
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-2">
              प्रभाकर ऑनलाइन CS सेंटर नगरपुरा
            </h3>
            <p className="text-xs text-slate-500">
              डिजिटल सेवा रसीद (Official CSC Digital Receipt)
            </p>
          </div>

          {/* Receipt Data Details */}
          <div className="py-5 space-y-2.5 text-xs text-slate-700">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'रसीद संख्या:' : 'Receipt ID:'}</span>
              <span className="font-mono font-bold text-slate-900">{receiptId}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'ग्राहक का नाम:' : 'Customer Name:'}</span>
              <span className="font-bold text-slate-900">{customerName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'मोबाइल नंबर:' : 'Mobile Number:'}</span>
              <span className="font-mono text-slate-900">{customerPhone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'सेवा / कार्य:' : 'Service:'}</span>
              <span className="font-semibold text-slate-900">{serviceName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'दिनांक एवं समय:' : 'Date & Time:'}</span>
              <span className="text-slate-900">{receiptDate}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400">{lang === 'hi' ? 'UPI UTR No:' : 'UTR / Ref:'}</span>
              <span className="font-mono text-slate-900">{utrNumber || 'UPI-DIRECT-OK'}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-emerald-50 px-3 rounded-xl">
              <span className="font-bold text-emerald-900 text-sm">{lang === 'hi' ? 'कुल भुगतान राशि:' : 'Amount Paid:'}</span>
              <span className="font-mono text-xl font-black text-emerald-700">₹{amount}.00</span>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-400 pt-2 pb-5">
            प्रभाकर ऑनलाइन CS सेंटर, नगरपुरा मुख्य बाजार (बिहार) | फोन: 89696 27706
          </div>

          <div className="flex items-center gap-3 no-print">
            <button
              onClick={handlePrintReceipt}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'hi' ? 'रसीद प्रिंट करें' : 'Print Receipt'}</span>
            </button>

            <button
              onClick={() => {
                setPaymentSuccess(false);
                if (onCloseModal) onCloseModal();
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs cursor-pointer"
            >
              {lang === 'hi' ? 'नया भुगतान' : 'New Payment'}
            </button>
          </div>

        </div>
      )}

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
        <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 z-20 bg-slate-800/60 hover:bg-slate-900 text-white p-2 rounded-full cursor-pointer"
          >
            ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="payment" className="py-14 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
          <QrCode className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'डिजिटल पेमेंट गेटवे' : 'Digital UPI Payment'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {lang === 'hi' ? 'ऑनलाइन सेवा शुल्क भुगतान (UPI QR)' : 'Instant UPI Payment & Digital Receipt'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          {lang === 'hi'
            ? 'किसी भी काम का घर बैठे भुगतान करें और तुरंत डिजिटल रसीद प्राप्त करें।'
            : 'Scan with PhonePe, Google Pay, Paytm or BHIM to pay for your service instantly.'}
        </p>
      </div>
      {content}
    </section>
  );
};
