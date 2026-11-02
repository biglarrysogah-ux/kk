import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] min-h-[580px] lg:min-h-[660px] flex items-center border-b border-[#2E2E2E]">
      {/* Luxury Mercedes-Benz Car in Full Section Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-mercedes.jpg"
          alt="Luxury Mercedes-Benz Background - Premium Car Rentals"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.45] contrast-[1.1] scale-105 transform motion-safe:scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />

        {/* Cinematic dark gradients to guarantee crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/92 to-[#111111]/40 lg:via-[#111111]/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#111111]/40 to-[#111111]/90" />

        {/* Ambient brand orange warmth glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-[#F58220]/20 via-[#FF6A00]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 lg:py-24">
        {/* Main Hero Content */}
        <div className="max-w-3xl space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C]/90 backdrop-blur-md border border-[#2E2E2E] text-xs font-semibold text-[#F58220] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#F58220]" />
            <span>Premier Vehicle Hire in Ghana</span>
          </div>

          {/* Exact required heading with orange brand emphasis */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
            rent with trust <span className="text-[#F58220]">Drive with Ease</span>
          </h1>

          {/* Exact required supporting text */}
          <p className="text-base sm:text-lg text-neutral-200 max-w-xl leading-relaxed drop-shadow-sm">
            Discover the right vehicle for your journey. Explore our fleet and contact us directly to arrange your rental.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/cars"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#F58220] hover:bg-[#FF6A00] shadow-lg shadow-[#F58220]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Cars</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-black/40 hover:bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#F58220]" />
              <span>Book a Car</span>
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 max-w-md">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">26</div>
              <div className="text-xs text-neutral-300 font-medium">Verified Vehicles</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#F58220]">Direct</div>
              <div className="text-xs text-neutral-300 font-medium">WhatsApp Booking</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">Ghana</div>
              <div className="text-xs text-neutral-300 font-medium">Nationwide Service</div>
            </div>
          </div>
        </div>

        {/* Brand Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
            Trusted Vehicle Brands Available in Our Fleet
          </p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">TOYOTA</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">MERCEDES-BENZ</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">LEXUS</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">HYUNDAI</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">HONDA</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">MAZDA</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">KIA</span>
            <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-300">MITSUBISHI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
