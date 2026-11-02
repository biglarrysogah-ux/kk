import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 pointer-events-auto">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="bg-[#111111] text-white text-xs font-medium px-3.5 py-2 rounded-xl border border-[#2E2E2E] shadow-xl flex items-center space-x-2 animate-in fade-in duration-200">
          <span>Chat with us on WhatsApp ({BUSINESS_CONFIG.localPhone})</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Recognizable Green WhatsApp Floating CTA Button */}
      <a
        href={BUSINESS_CONFIG.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
        aria-label="Open WhatsApp conversation with Premium Car Rentals"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
