import React from 'react';
import { Sparkles, ExternalLink, Flame } from 'lucide-react';
import { SarkariAlert, Language } from '../types';

interface SarkariTickerProps {
  alerts: SarkariAlert[];
  lang: Language;
}

export const SarkariTicker: React.FC<SarkariTickerProps> = ({ alerts, lang }) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white overflow-hidden py-2 px-3 shadow-inner relative flex items-center border-b border-orange-400">
      {/* Fixed Left Badge */}
      <div className="shrink-0 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold mr-3 border border-white/20 z-10 shadow-xs">
        <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
        <span className="tracking-wide uppercase text-[11px] text-yellow-200">
          {lang === 'hi' ? 'ताज़ा अपडेट्स' : 'Live Alerts'}
        </span>
      </div>

      {/* Marquee Track */}
      <div className="overflow-hidden relative w-full flex items-center">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Double alerts array to ensure seamless infinite loop */}
          {[...alerts, ...alerts].map((alert, idx) => (
            <a
              key={`${alert.id}-${idx}`}
              href={alert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:bg-white/15 px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer group"
            >
              <span className={`inline-block px-1.5 py-0.2 text-[10px] font-black rounded ${
                alert.tagColor === 'red' ? 'bg-red-950 text-red-200 border border-red-500' :
                alert.tagColor === 'emerald' ? 'bg-emerald-950 text-emerald-200 border border-emerald-500' :
                alert.tagColor === 'purple' ? 'bg-purple-950 text-purple-200 border border-purple-500' :
                alert.tagColor === 'amber' ? 'bg-amber-950 text-amber-200 border border-amber-500' :
                'bg-blue-950 text-blue-200 border border-blue-500'
              }`}>
                {alert.tag}
              </span>

              <span className="font-medium text-white/95 group-hover:text-yellow-100 group-hover:underline">
                {lang === 'hi' ? alert.titleHi : alert.titleEn}
              </span>

              {alert.isNew && (
                <span className="flex items-center gap-0.5 bg-yellow-300 text-slate-900 font-extrabold text-[9px] px-1 rounded animate-pulse">
                  <Sparkles className="w-2.5 h-2.5" /> NEW
                </span>
              )}

              <ExternalLink className="w-3 h-3 text-white/70 group-hover:text-white" />
              <span className="text-white/40 ml-2">|</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
