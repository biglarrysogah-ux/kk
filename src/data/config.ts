export const BUSINESS_CONFIG = {
  name: 'Premium Car Rentals',
  tagline: 'rent with trust Drive with Ease',
  supportingHeroText:
    'Discover the right vehicle for your journey. Explore our fleet and contact us directly to arrange your rental.',
  localPhone: '0548009285',
  internationalPhone: '+233548009285',
  phoneLink: 'tel:+233548009285',
  whatsappNumber: '233548009285',
  whatsappBaseUrl: 'https://wa.me/233548009285',
  market: 'Ghana',
  pricingNotice: 'Contact us for rental rates.',
  availabilityNotice: 'Contact us to enquire about availability.',
} as const;

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  vehicleId: string;
  duration: string;
  customDuration?: string;
  preferredPickupDate?: string;
  additionalInfo?: string;
}

export function createBookingMessage(
  data: BookingFormData,
  vehicleName: string
): string {
  const durationText =
    data.duration === 'Other / Specify' && data.customDuration
      ? `${data.duration} (${data.customDuration.trim()})`
      : data.duration;

  let message = `Hello Premium Car Rentals,\n\nI would like to make a car rental enquiry.\n\nFull Name: ${data.fullName.trim()}\nPhone Number: ${data.phoneNumber.trim()}\nWhatsApp Number: ${data.whatsappNumber.trim()}\nVehicle Requested: ${vehicleName}\nRental Duration: ${durationText}`;

  if (data.preferredPickupDate && data.preferredPickupDate.trim()) {
    message += `\nPreferred Pickup Date: ${data.preferredPickupDate.trim()}`;
  }

  if (data.additionalInfo && data.additionalInfo.trim()) {
    message += `\nAdditional Information: ${data.additionalInfo.trim()}`;
  }

  message += `\n\nPlease let me know the availability and rental price for my selected vehicle.\n\nThank you.`;

  return message;
}

export function generateWhatsAppUrl(
  data: BookingFormData,
  vehicleName: string
): string {
  const message = createBookingMessage(data, vehicleName);
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
