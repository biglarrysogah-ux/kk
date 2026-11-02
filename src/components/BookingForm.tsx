import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  VEHICLES,
  getVehicleById,
  getVehicleDropdownLabel,
  Vehicle,
} from '../data/vehicles';
import {
  BUSINESS_CONFIG,
  BookingFormData,
  createBookingMessage,
  generateWhatsAppUrl,
} from '../data/config';
import {
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  Car,
  User,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Info,
} from 'lucide-react';

export const DURATION_OPTIONS = [
  '1 Day',
  '2 Days',
  '3 Days',
  '4 Days',
  '5 Days',
  '6 Days',
  '1 Week',
  '2 Weeks',
  '3 Weeks',
  '1 Month',
  'More Than 1 Month',
  'Other / Specify',
] as const;

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  vehicleId?: string;
  duration?: string;
  customDuration?: string;
}

export const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const vehicleParam = searchParams.get('vehicle') || '';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    vehicleId: '',
    duration: '',
    customDuration: '',
    preferredPickupDate: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  // Auto pre-select vehicle if valid query parameter is passed
  useEffect(() => {
    if (vehicleParam) {
      const match = getVehicleById(vehicleParam);
      if (match) {
        setFormData((prev) => ({ ...prev, vehicleId: match.id }));
      }
    }
  }, [vehicleParam]);

  const selectedVehicle: Vehicle | undefined = getVehicleById(formData.vehicleId);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name
    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    // 2. Phone Number
    const phoneClean = formData.phoneNumber.replace(/[\s\-()]/g, '');
    if (!phoneClean) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (phoneClean.length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 8 digits).';
    }

    // 3. WhatsApp Number
    const waClean = formData.whatsappNumber.replace(/[\s\-()]/g, '');
    if (!waClean) {
      newErrors.whatsappNumber = 'WhatsApp Number is required.';
    } else if (waClean.length < 8) {
      newErrors.whatsappNumber = 'Please enter a valid WhatsApp number (at least 8 digits).';
    }

    // 4. Vehicle Selection
    if (!formData.vehicleId) {
      newErrors.vehicleId = 'Please select a vehicle from our fleet.';
    }

    // 5. Rental Duration
    if (!formData.duration) {
      newErrors.duration = 'Please choose how long you would like to rent the car.';
    } else if (
      formData.duration === 'Other / Specify' &&
      (!formData.customDuration || !formData.customDuration.trim())
    ) {
      newErrors.customDuration = 'Please specify your requested rental duration.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const vehicleName = selectedVehicle ? getVehicleDropdownLabel(selectedVehicle) : 'Vehicle of Choice';
    const message = createBookingMessage(formData, vehicleName);
    const whatsappUrl = generateWhatsAppUrl(formData, vehicleName);

    setPreparedMessage(message);
    setSubmittedWhatsAppUrl(whatsappUrl);

    // Attempt to open WhatsApp window safely
    try {
      window.location.href = whatsappUrl;
    } catch {
      // Fallback modal is displayed below
    }
  };

  return (
    <section id="booking-section" className="py-16 sm:py-20 bg-[#F5F5F5] border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#F58220] shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Instant Direct Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Book Your Car
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Complete the form below and continue to WhatsApp to send your rental enquiry directly to Premium Car Rentals.
          </p>

          {/* Business Phone & Direct Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="text-[#6B7280]">
              Direct Telephone: <strong className="text-[#111111]">{BUSINESS_CONFIG.localPhone}</strong> ({BUSINESS_CONFIG.internationalPhone})
            </span>
            <span className="text-[#6B7280]">•</span>
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="inline-flex items-center space-x-1 text-[#111111] hover:text-[#F58220] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Call Now</span>
            </a>
            <span className="text-[#6B7280]">•</span>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[#25D366] hover:text-[#1EA952] font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Selected Vehicle Preview Banner if preselected */}
        {selectedVehicle && (
          <div className="mb-8 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-12 rounded-lg bg-[#F5F5F5] overflow-hidden flex-shrink-0 border border-[#E5E7EB]">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#F58220] uppercase tracking-wide block">
                  Preselected Vehicle
                </span>
                <span className="text-sm sm:text-base font-bold text-[#111111] block">
                  {selectedVehicle.name} {selectedVehicle.badge && `(${selectedVehicle.badge})`}
                </span>
                <span className="text-xs text-[#6B7280]">
                  {selectedVehicle.category} • {selectedVehicle.pricingNotice}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, vehicleId: '' }))}
              className="text-xs text-[#6B7280] hover:text-[#F58220] underline font-medium transition-colors"
            >
              Change
            </button>
          </div>
        )}

        {/* Booking Form Card */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Row 1: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                Full Name <span className="text-[#F58220]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Kwame Mensah"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                  }`}
                  required
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Row 2: Phone Number & WhatsApp Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                  Phone Number <span className="text-[#F58220]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    placeholder="e.g. 054 800 9285 or +233..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                      errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                    }`}
                    required
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="whatsappNumber" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                  WhatsApp Number <span className="text-[#F58220]">*</span>
                </label>
                <div className="relative">
                  <MessageCircle className="w-4 h-4 text-[#25D366] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsappNumber: e.target.value });
                      if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: undefined });
                    }}
                    placeholder="e.g. 054 800 9285 or +233..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                      errors.whatsappNumber ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                    }`}
                    required
                  />
                </div>
                {errors.whatsappNumber && (
                  <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.whatsappNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Select Your Vehicle */}
            <div>
              <label htmlFor="vehicleId" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                Select Your Vehicle <span className="text-[#F58220]">*</span>
              </label>
              <div className="relative">
                <Car className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="vehicleId"
                  name="vehicleId"
                  value={formData.vehicleId}
                  onChange={(e) => {
                    setFormData({ ...formData, vehicleId: e.target.value });
                    if (errors.vehicleId) setErrors({ ...errors, vehicleId: undefined });
                  }}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#111111] focus:outline-none transition-colors appearance-none ${
                    errors.vehicleId ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                  }`}
                  required
                >
                  <option value="" disabled className="text-[#9CA3AF]">
                    -- Choose one of our 26 vehicles --
                  </option>
                  <optgroup label="Saloon Cars (9 Available)" className="text-[#F58220] font-bold">
                    {VEHICLES.filter((v) => v.category === 'Saloon Cars').map((v) => (
                      <option key={v.id} value={v.id} className="text-[#111111] font-normal">
                        {getVehicleDropdownLabel(v)}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="SUVs (12 Available)" className="text-[#F58220] font-bold">
                    {VEHICLES.filter((v) => v.category === 'SUVs').map((v) => (
                      <option key={v.id} value={v.id} className="text-[#111111] font-normal">
                        {getVehicleDropdownLabel(v)}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Luxury Vehicles (2 Available)" className="text-[#F58220] font-bold">
                    {VEHICLES.filter((v) => v.category === 'Luxury Vehicles').map((v) => (
                      <option key={v.id} value={v.id} className="text-[#111111] font-normal">
                        {getVehicleDropdownLabel(v)}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Buses (3 Available)" className="text-[#F58220] font-bold">
                    {VEHICLES.filter((v) => v.category === 'Buses').map((v) => (
                      <option key={v.id} value={v.id} className="text-[#111111] font-normal">
                        {getVehicleDropdownLabel(v)}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
              {errors.vehicleId && (
                <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.vehicleId}</span>
                </p>
              )}
            </div>

            {/* Row 4: Rental Duration */}
            <div>
              <label htmlFor="duration" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                How Long Would You Like to Rent the Car? <span className="text-[#F58220]">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={(e) => {
                    setFormData({ ...formData, duration: e.target.value });
                    if (errors.duration) setErrors({ ...errors, duration: undefined });
                  }}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#111111] focus:outline-none transition-colors appearance-none ${
                    errors.duration ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                  }`}
                  required
                >
                  <option value="" disabled className="text-[#9CA3AF]">
                    -- Select rental duration --
                  </option>
                  {DURATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-[#111111]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              {errors.duration && (
                <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.duration}</span>
                </p>
              )}

              {/* Conditional custom duration input when "Other / Specify" is selected */}
              {formData.duration === 'Other / Specify' && (
                <div className="mt-3">
                  <label htmlFor="customDuration" className="block text-xs font-semibold text-[#111111] mb-1">
                    Please Specify Rental Period <span className="text-[#F58220]">*</span>
                  </label>
                  <input
                    type="text"
                    id="customDuration"
                    name="customDuration"
                    value={formData.customDuration}
                    onChange={(e) => {
                      setFormData({ ...formData, customDuration: e.target.value });
                      if (errors.customDuration) setErrors({ ...errors, customDuration: undefined });
                    }}
                    placeholder="e.g. 10 Days or 6 Weeks"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none ${
                      errors.customDuration ? 'border-red-500' : 'border-[#E5E7EB] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]'
                    }`}
                    required
                  />
                  {errors.customDuration && (
                    <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.customDuration}</span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Row 5: Preferred Pickup Date (Optional) */}
            <div>
              <label htmlFor="preferredPickupDate" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                Preferred Pickup Date <span className="text-[#6B7280] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  id="preferredPickupDate"
                  name="preferredPickupDate"
                  value={formData.preferredPickupDate}
                  onChange={(e) => setFormData({ ...formData, preferredPickupDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-colors"
                />
              </div>
            </div>

            {/* Row 6: Additional Information (Optional) */}
            <div>
              <label htmlFor="additionalInfo" className="block text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
                Additional Information <span className="text-[#6B7280] font-normal">(Optional)</span>
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Mention any specific pickup location in Ghana, itinerary notes, or travel preferences..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-colors"
              />
            </div>

            {/* Information Notice */}
            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E7EB] flex items-start space-x-3 text-xs text-[#6B7280]">
              <Info className="w-4 h-4 text-[#F58220] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> Clicking the button below prepares your enquiry directly in WhatsApp with the recipient set to <strong>+233548009285</strong>. You will be able to review and confirm the message before sending.
              </span>
            </div>

            {/* Submit Button: MUST REMAIN GREEN FOR WHATSAPP RECOGNITION */}
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-[#25D366] hover:bg-[#1EA952] shadow-xl shadow-[#25D366]/25 transition-all duration-200 flex items-center justify-center space-x-2 transform active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Booking via WhatsApp</span>
              </button>
            </div>
          </form>

          {/* Success / Fallback Modal / Drawer if triggered */}
          {submittedWhatsAppUrl && (
            <div className="mt-8 p-6 rounded-2xl bg-[#F5F5F5] border border-[#25D366]/40 space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center space-x-3 text-[#25D366]">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <h4 className="text-base font-bold text-[#111111]">
                  WhatsApp Enquiry Prepared
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Your enquiry message has been formatted for Premium Car Rentals. If WhatsApp did not open automatically on your device, tap the button below:
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EA952] shadow-md shadow-[#25D366]/20"
                >
                  <span>Open WhatsApp Directly</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmittedWhatsAppUrl(null)}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#6B7280] hover:text-[#111111] bg-white border border-[#E5E7EB]"
                >
                  Dismiss
                </button>
              </div>

              {preparedMessage && (
                <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wide block mb-1">
                    Prepared Message Preview
                  </span>
                  <pre className="p-3 bg-white rounded-lg text-xs text-[#111111] font-mono whitespace-pre-wrap border border-[#E5E7EB]">
                    {preparedMessage}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
