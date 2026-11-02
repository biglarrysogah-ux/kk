import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { CarsPage } from './pages/CarsPage';
import { BookingPage } from './pages/BookingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#111111] font-sans">
        {/* 1. Navigation bar */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* 7. Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
