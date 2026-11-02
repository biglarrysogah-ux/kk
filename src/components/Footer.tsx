import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#2E2E2E] text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand & Closing statement with official logo */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group" aria-label="Premium Car Rentals - Home">
              <div className="h-14 w-14 rounded-xl bg-white p-1.5 shadow-lg border border-white/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <img
                  src="/public/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.27.53_AM_2467c6fd.jpeg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo.jpeg';
                  }}
                  alt="Premium Car Rentals Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs font-semibold text-[#F58220] block">
                  Rent with Trust, Drive with Ease
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Providing dependable vehicle hire across Ghana. Explore our saloon cars, SUVs, luxury models, and passenger buses with direct telephone and WhatsApp reservation support.
            </p>

            <div className="pt-2 text-xs text-[#F58220] font-semibold">
              Rent with trust, drive with ease.
            </div>
          </div>

          {/* Quick Navigation Links with Orange Hover */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-[#F58220] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-neutral-300 hover:text-[#F58220] transition-colors">
                  Our Cars
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-300 hover:text-[#F58220] transition-colors">
                  Book a Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <p className="text-xs text-neutral-300">
              Reach out directly to verify fleet availability or receive customized rental rates.
            </p>
            <div className="pt-1 flex flex-col space-y-2.5">
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="inline-flex items-center space-x-2.5 text-sm font-semibold text-neutral-200 hover:text-[#F58220] transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-[#1C1C1C] flex items-center justify-center border border-[#2E2E2E]">
                  <Phone className="w-3.5 h-3.5 text-[#F58220]" />
                </div>
                <span>Call Now: {BUSINESS_CONFIG.localPhone}</span>
              </a>

              {/* Green WhatsApp Contact Button */}
              <a
                href={BUSINESS_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-sm font-semibold text-neutral-200 hover:text-[#25D366] transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-[#1C1C1C] flex items-center justify-center border border-[#2E2E2E]">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <span>WhatsApp: {BUSINESS_CONFIG.internationalPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="mt-12 pt-8 border-t border-[#2E2E2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-neutral-400 hover:text-[#F58220] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
