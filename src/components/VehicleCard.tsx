import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Gauge, Wind, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { Vehicle } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const [imgSrc, setImgSrc] = useState(vehicle.image);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('/images/cars/fallback-car.jpg');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col hover:border-[#F58220]/60 transition-all duration-300 group shadow-xs hover:shadow-md">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
        <img
          src={imgSrc}
          alt={`${vehicle.name} - ${vehicle.category} for rent in Ghana`}
          onError={handleImageError}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#111111] border border-[#E5E7EB] shadow-2xs">
          {vehicle.category}
        </div>

        {/* Special Badges: 2026 Registered or Chauffeur Only */}
        {vehicle.badge === '2026 Registered' && (
          <div className="absolute top-3 right-3 bg-[#111111]/90 border border-[#F58220] backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#F58220] flex items-center space-x-1 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#F58220]" />
            <span>2026 Registered</span>
          </div>
        )}

        {vehicle.badge === 'Chauffeur Only' && (
          <div className="absolute top-3 right-3 bg-[#1C1C1C] border border-[#F58220] backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#F58220] flex items-center space-x-1 shadow-sm">
            <ShieldAlert className="w-3 h-3 text-[#F58220]" />
            <span>Chauffeur Only</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-[#111111] tracking-tight leading-snug">
              {vehicle.name}
            </h3>
          </div>

          <p className="mt-2 text-xs text-[#6B7280] leading-relaxed line-clamp-2">
            {vehicle.description}
          </p>

          {/* Key factual specs */}
          <div className="mt-3.5 pt-3 border-t border-[#E5E7EB] flex items-center gap-3 text-[11px] text-[#6B7280]">
            {vehicle.seats && (
              <span className="flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#6B7280]" />
                <span>{vehicle.seats} Seats</span>
              </span>
            )}
            {vehicle.transmission && (
              <span className="flex items-center space-x-1">
                <Gauge className="w-3.5 h-3.5 text-[#6B7280]" />
                <span>{vehicle.transmission}</span>
              </span>
            )}
            {vehicle.airConditioning && (
              <span className="flex items-center space-x-1">
                <Wind className="w-3.5 h-3.5 text-[#6B7280]" />
                <span>A/C</span>
              </span>
            )}
          </div>
        </div>

        {/* Pricing notice & Primary Orange Book Now button */}
        <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6B7280] block">
              Rental Rate
            </span>
            <span className="text-xs font-bold text-[#F58220]">
              {vehicle.pricingNotice}
            </span>
          </div>

          <Link
            to={`/booking?vehicle=${encodeURIComponent(vehicle.id)}`}
            className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#F58220] hover:bg-[#FF6A00] shadow-sm hover:shadow-md transition-all duration-200 transform active:scale-95"
            aria-label={`Book ${vehicle.name} now`}
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
