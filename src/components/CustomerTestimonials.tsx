import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  ShieldCheck,
  Sparkles,
  Car,
  AlertCircle,
  Wrench,
  Wind,
  Clock,
  Award,
} from 'lucide-react';
import { REVIEWS, SAMPLE_REVIEWS_NOTICE, FLEET_SERVICE_PILLARS, Review } from '../data/reviews';

interface CustomerTestimonialsProps {
  defaultLayout?: 'carousel' | 'grid';
  showPillars?: boolean;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  defaultLayout = 'carousel',
  showPillars = true,
}) => {
  const [layout, setLayout] = useState<'carousel' | 'grid'>(defaultLayout);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = REVIEWS.length;

  useEffect(() => {
    if (layout !== 'carousel' || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [layout, isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderCard = (review: Review) => (
    <div
      key={review.id}
      className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E7EB] flex flex-col justify-between space-y-5 relative group hover:border-[#F58220]/60 hover:shadow-md transition-all duration-300 h-full shadow-xs"
    >
      <div className="space-y-4">
        {/* Rating, Badge & Service Highlight */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#F58220] fill-[#F58220]" />
              ))}
            </div>
            <div className="mt-1.5 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-[#FFF7ED] border border-[#FED7AA] text-[11px] font-bold text-[#C2410C]">
              <Sparkles className="w-3 h-3 text-[#F58220]" />
              <span>{review.serviceHighlight}</span>
            </div>
          </div>

          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F5F5F5] border border-[#E5E7EB] text-[#6B7280]">
            Sample
          </span>
        </div>

        {/* Quote text */}
        <div className="relative pt-1">
          <Quote className="w-7 h-7 text-[#F58220]/30 mb-2" />
          <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed italic">
            "{review.comment}"
          </p>
        </div>
      </div>

      {/* Author & Vehicle Details */}
      <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-[#111111] tracking-tight">
              {review.authorLabel}
            </div>
            <div className="text-xs text-[#6B7280] font-medium">
              {review.roleOrContext}
            </div>
          </div>
          <span className="text-[11px] text-[#9CA3AF] font-medium">
            {review.dateText.split('•')[1]?.trim() || ''}
          </span>
        </div>

        {/* Vehicle Badge */}
        <div className="p-2.5 rounded-xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-center space-x-2 text-xs text-[#111111]">
          <Car className="w-3.5 h-3.5 text-[#F58220] flex-shrink-0" />
          <span className="font-semibold text-[#111111] truncate">{review.vehicleRented}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E7EB] text-xs font-semibold text-[#F58220] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fleet Service Excellence • Social Proof</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Customer Testimonials
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-2xl leading-relaxed">
              Read how clients experience our high-quality rental fleet in Ghana—from rigorous maintenance standards to punctual airport and chauffeur transfers.
            </p>
          </div>

          {/* Layout Controls (Carousel vs Grid) */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider hidden sm:inline">
              Layout:
            </span>
            <div className="flex items-center p-1 bg-[#F5F5F5] rounded-xl border border-[#E5E7EB]">
              <button
                type="button"
                onClick={() => setLayout('carousel')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  layout === 'carousel'
                    ? 'bg-[#F58220] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
                aria-label="Carousel layout view"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>

              <button
                type="button"
                onClick={() => setLayout('grid')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  layout === 'grid'
                    ? 'bg-[#F58220] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111]'
                }`}
                aria-label="Grid layout view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof Metric Highlights */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-center space-x-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Star className="w-5 h-5 text-[#F58220] fill-[#F58220]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#111111]">5.0 / 5.0</div>
              <div className="text-xs text-[#6B7280]">Fleet Quality Rating</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-center space-x-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Wrench className="w-5 h-5 text-[#F58220]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#111111]">100% Checked</div>
              <div className="text-xs text-[#6B7280]">Pre-Trip Inspections</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-center space-x-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Wind className="w-5 h-5 text-[#F58220]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#111111]">Ice-Cold A/C</div>
              <div className="text-xs text-[#6B7280]">Guaranteed Climate Control</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-center space-x-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Clock className="w-5 h-5 text-[#F58220]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#111111]">Punctual Handover</div>
              <div className="text-xs text-[#6B7280]">Direct WhatsApp Dispatch</div>
            </div>
          </div>
        </div>

        {/* Sample Content Transparency Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-start space-x-3 text-xs sm:text-sm text-[#9A3412]">
          <AlertCircle className="w-5 h-5 text-[#F58220] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#C2410C]">Sample Content Notice:</strong> {SAMPLE_REVIEWS_NOTICE}
          </p>
        </div>

        {/* Testimonials Display (Carousel OR Grid) */}
        {layout === 'carousel' ? (
          <div
            className="mt-10 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Desktop 3-Card Carousel Window */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const itemIndex = (currentIndex + offset) % totalSlides;
                const review = REVIEWS[itemIndex];
                return (
                  <div key={`${review.id}-${offset}`} className="transition-all duration-300">
                    {renderCard(review)}
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons and Pager Dots */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-[#F58220]' : 'w-2 bg-[#E5E7EB] hover:bg-[#9CA3AF]'
                    }`}
                    aria-label={`Jump to testimonial slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111111] hover:text-[#F58220] hover:border-[#F58220] hover:bg-[#F5F5F5] transition-all shadow-2xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111111] hover:text-[#F58220] hover:border-[#F58220] hover:bg-[#F5F5F5] transition-all shadow-2xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => renderCard(review))}
          </div>
        )}

        {/* Fleet Service Pillars */}
        {showPillars && (
          <div className="mt-16 pt-12 border-t border-[#E5E7EB]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#F58220] uppercase tracking-widest mb-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Our Quality Commitment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                How We Maintain Our Fleet Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FLEET_SERVICE_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F5F5F5] border border-[#E5E7EB] space-y-2 hover:border-[#F58220]/50 transition-colors shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#F58220] font-bold text-xs shadow-2xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">{pillar.title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
