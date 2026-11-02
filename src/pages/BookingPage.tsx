import React, { useEffect } from 'react';
import { BookingForm } from '../components/BookingForm';
import { CustomerTestimonials } from '../components/CustomerTestimonials';

export const BookingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Book a Car | Premium Car Rentals';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F5F5F5]">
      {/* Functional booking form with preselection support */}
      <BookingForm />

      {/* Mandatory Customer Review Section */}
      <CustomerTestimonials defaultLayout="grid" showPillars={false} />
    </main>
  );
};
