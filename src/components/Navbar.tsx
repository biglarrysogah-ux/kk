import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Cars', path: '/cars' },
    { label: 'Book a Car', path: '/booking' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name using official uploaded image */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Premium Car Rentals - Home">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white p-1 border border-[#E5E7EB] shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
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
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#111111] block leading-tight">
                Premium Car Rentals
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#F58220] block tracking-tight uppercase">
                Rent with Trust, Drive with Ease
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    active
                      ? 'text-[#F58220] font-bold'
                      : 'text-[#111111] hover:text-[#F58220] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#F58220] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct Contact CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#111111] bg-white border border-[#E5E7EB] hover:border-[#F58220] hover:text-[#F58220] transition-colors shadow-2xs"
              title="Call Premium Car Rentals directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>{BUSINESS_CONFIG.localPhone}</span>
            </a>

            {/* Recognized Green WhatsApp CTA */}
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EA952] shadow-md shadow-[#25D366]/25 transition-all duration-200 hover:shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="p-2 rounded-lg text-[#111111] bg-[#F5F5F5] border border-[#E5E7EB]"
              aria-label="Call direct"
            >
              <Phone className="w-4 h-4 text-[#F58220]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111111] hover:text-[#F58220] hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#F58220]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#F5F5F5] text-[#F58220] font-bold border-l-4 border-[#F58220]'
                      : 'text-[#111111] hover:text-[#F58220] hover:bg-[#F5F5F5]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E5E7EB] grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-[#111111] bg-[#F5F5F5] border border-[#E5E7EB]"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Call: {BUSINESS_CONFIG.localPhone}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EA952]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
