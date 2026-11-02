import React from 'react';
import { ShieldCheck, MessageCircle, Phone, Compass, Users, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const BusinessIntro: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#F5F5F5] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#F58220] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Premium Car Rentals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Vehicle Hire Services in Ghana
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Premium Car Rentals provides reliable vehicle hire across Ghana. Customers can explore our diverse fleet of saloon cars, SUVs, luxury models, and passenger buses, then contact our team directly by phone or WhatsApp to enquire about availability and arrange their rental.
          </p>
        </div>

        {/* Core Service Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs hover:border-[#F58220]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center border border-[#E5E7EB]">
              <Compass className="w-6 h-6 text-[#F58220]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Explore the Fleet</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Browse our complete 26-vehicle inventory across Saloon Cars, SUVs, Luxury Vehicles, and Buses to find the right vehicle for your travel needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs hover:border-[#F58220]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center border border-[#E5E7EB]">
              <MessageCircle className="w-6 h-6 text-[#F58220]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Direct WhatsApp Booking</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Submit your enquiry directly to WhatsApp with your preferred dates, duration, and vehicle selection for straightforward rate and availability confirmation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs hover:border-[#F58220]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center border border-[#E5E7EB]">
              <Users className="w-6 h-6 text-[#F58220]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Chauffeur &amp; Self-Drive</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We offer both self-drive options and dedicated chauffeur-driven executive vehicles clearly designated in our fleet listings.
            </p>
          </div>
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-sm text-[#111111]">
            <Phone className="w-5 h-5 text-[#F58220] flex-shrink-0" />
            <span>Have questions or a custom schedule? Contact us directly at <strong className="text-[#111111]">{BUSINESS_CONFIG.localPhone}</strong></span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#111111] bg-[#F5F5F5] border border-[#E5E7EB] hover:border-[#F58220] hover:text-[#F58220] transition-colors"
            >
              Call {BUSINESS_CONFIG.localPhone}
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EA952] transition-colors shadow-xs"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
