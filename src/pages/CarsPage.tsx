import React, { useEffect } from 'react';
import { VehicleGrid } from '../components/VehicleGrid';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const CarsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Cars | Premium Car Rentals';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#111111] to-[#1C1C1C] py-12 lg:py-16 border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-semibold text-[#F58220]">
            <span>26 Vehicles in Fleet</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Vehicle Fleet
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Discover our complete Ghanaian rental inventory. Each vehicle is maintained to strict standards and available for direct WhatsApp reservation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#111111] border border-[#2E2E2E] text-white hover:border-[#F58220] hover:text-[#F58220] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Call: {BUSINESS_CONFIG.localPhone}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EA952] text-white font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Quick WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Complete Vehicle Inventory */}
      <VehicleGrid
        title="Browse by Category"
        subtitle="Grouped by Saloon Cars, SUVs, Luxury Vehicles, and Passenger Buses. Use 'Book Now' on any card to preselect it in the booking form."
        showCategoryHeaders={true}
      />

      {/* Mandatory Customer Review Section */}
      <CustomerTestimonials defaultLayout="grid" showPillars={false} />
    </main>
  );
};
