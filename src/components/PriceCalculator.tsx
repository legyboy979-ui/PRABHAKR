import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Minus, 
  RotateCcw, 
  Printer, 
  CreditCard, 
  MessageCircle, 
  Sparkles,
  ShoppingBag,
  Check
} from 'lucide-react';
import { priceRateCard } from '../data/priceRateCard';
import { PriceItem, Language } from '../types';

interface PriceCalculatorProps {
  lang: Language;
  onOpenPaymentWithAmount: (amount: number, serviceName?: string) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  lang,
  onOpenPaymentWithAmount
}) => {
  // Store quantities for each price item
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'xerox-bw': 0,
    'print-color': 0,
    'pvc-card-print': 0,
    'passport-photos-12': 0,
    'lamination-a4': 0,
    'sarkari-form-filling': 0,
    'rtps-form-service': 0,
    'pan-card-service': 0,
    'resume-biodata-making': 0
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleReset = () => {
    const empty: Record<string, number> = {};
    priceRateCard.forEach((item) => (empty[item.id] = 0));
    setQuantities(empty);
  };

  // Compute Total
  const totalAmount = priceRateCard.reduce((sum, item) => {
    const qty = quantities[item.id] || 0;
    return sum + item.price * qty;
  }, 0);

  const selectedItems = priceRateCard.filter((item) => (quantities[item.id] || 0) > 0);

  const handleSendWhatsAppOrder = () => {
    if (selectedItems.length === 0) return;

    let text = `*प्रभाकर ऑनलाइन CS सेंटर नगरपुरा - दर/ऑर्डर विवरण*%0A%0A`;
    text += `*चयनित सेवाएं:*%0A`;
    selectedItems.forEach((item) => {
      const qty = quantities[item.id];
      text += `• ${item.titleHi} x ${qty} = ₹${item.price * qty}%0A`;
    });
    text += `%0A*कुल अनुमानित राशि:* ₹${totalAmount}%0A%0Aकृपया इस कार्य को पूरा करने की पुष्टि करें।`;

    window.open(`https://wa.me/918969627706?text=${text}`, '_blank');
  };

  return (
    <section id="rates" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'पारदर्शी दर सूची एवं कैलकुलेटर' : 'Transparent Rate Card & Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {lang === 'hi' ? 'सेंटर सेवा शुल्क एवं डिजिटल कैलकुलेटर' : 'Service Charges & Instant Cost Estimator'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'नगरपुरा में सबसे किफायती व पारदर्शी दरें! नीचे किसी भी सेवा की मात्रा जोड़कर तुरंत कुल खर्च का अनुमान लगाएं।'
              : 'Add quantities below to get an instant cost calculation and send your order directly to WhatsApp or pay via UPI.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Rate Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {priceRateCard.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    qty > 0
                      ? 'bg-emerald-50/40 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">
                        {lang === 'hi' ? item.titleHi : item.titleEn}
                      </h4>
                      {item.popular && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded shrink-0">
                          लोकप्रिय
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {lang === 'hi' ? item.descriptionHi : item.descriptionEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black text-slate-900">₹{item.price}</span>
                      <span className="text-[11px] text-slate-500 ml-1">
                        / {lang === 'hi' ? item.unitHi : item.unitEn}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-xl p-1 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                        disabled={qty === 0}
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="w-7 text-center font-bold text-xs text-slate-900">
                        {qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Calculation Summary Box */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 shadow-xl sticky top-24 border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-400" />
                <h3 className="font-extrabold text-base">
                  {lang === 'hi' ? 'ऑर्डर सारांश / अनुमान' : 'Estimated Total'}
                </h3>
              </div>

              {selectedItems.length > 0 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{lang === 'hi' ? 'रीसेट' : 'Reset'}</span>
                </button>
              )}
            </div>

            {/* Selected Items List */}
            <div className="py-4 space-y-2.5 max-h-56 overflow-y-auto no-scrollbar">
              {selectedItems.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  {lang === 'hi'
                    ? 'बाईं तरफ से सेवाओं की मात्रा (+) जोड़ें।'
                    : 'Add service quantities (+) from the left to calculate total.'}
                </div>
              ) : (
                selectedItems.map((item) => {
                  const qty = quantities[item.id];
                  return (
                    <div key={item.id} className="flex items-center justify-between text-xs text-slate-300">
                      <div className="truncate pr-2">
                        <span>{lang === 'hi' ? item.titleHi : item.titleEn}</span>
                        <span className="text-slate-500 ml-1">x {qty}</span>
                      </div>
                      <span className="font-mono font-bold text-white shrink-0">
                        ₹{item.price * qty}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Total Price Display */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {lang === 'hi' ? 'कुल राशि (Estimated Total):' : 'Estimated Total:'}
                </span>
                <span className="text-3xl font-black text-emerald-400 font-mono">
                  ₹{totalAmount}
                </span>
              </div>

              <p className="text-[11px] text-slate-400">
                {lang === 'hi'
                  ? '*सरकारी फीस (जैसे पैन कार्ड ₹107) अलग से देय हो सकती है।'
                  : '*Official government portal fees are added as per guidelines.'}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-5 space-y-2.5">
              <button
                onClick={handleSendWhatsAppOrder}
                disabled={selectedItems.length === 0}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पर ऑर्डर भेजें' : 'Send Order to WhatsApp'}</span>
              </button>

              <button
                onClick={() => onOpenPaymentWithAmount(totalAmount > 0 ? totalAmount : 50, 'Online Service Payment')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>{lang === 'hi' ? `UPI से भुगतान करें (₹${totalAmount > 0 ? totalAmount : 50})` : 'Pay via UPI QR'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
