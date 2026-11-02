import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BusinessIntro } from '../components/BusinessIntro';
import { VehicleGrid } from '../components/VehicleGrid';
import { BookingForm } from '../components/BookingForm';
import { CustomerTestimonials } from '../components/CustomerTestimonials';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Premium Car Rentals | Rent with Trust, Drive with Ease';
  }, []);

  return (
    <main>
      {/* 2. Mercedes-Benz hero section */}
      <Hero />

      {/* 3. Business introduction */}
      <BusinessIntro />

      {/* 4. Complete vehicle listing section (all 26 vehicles) */}
      <VehicleGrid
        title="Our Complete Fleet"
        subtitle="Explore our entire 26-vehicle inventory available for hire in Ghana. Select any vehicle to book directly via WhatsApp."
      />

      {/* 5. Complete functional booking form */}
      <BookingForm />

      {/* 6. Customer Testimonials / Review section */}
      <CustomerTestimonials defaultLayout="carousel" showPillars={true} />
    </main>
  );
};
