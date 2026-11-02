export interface Review {
  id: string;
  authorLabel: string;
  roleOrContext: string;
  rating: number;
  dateText: string;
  comment: string;
  vehicleRented: string;
  serviceHighlight: string;
  isSample: true;
}

export const SAMPLE_REVIEWS_NOTICE =
  'Notice: The testimonials displayed below are representative sample entries illustrating how customer feedback regarding our fleet service quality will appear once collected. Authenticated customer testimonials will replace these samples.';

export const FLEET_SERVICE_PILLARS = [
  {
    title: 'Pre-Rental Inspection',
    description: 'Every vehicle undergoes mechanical and safety checks before handover.',
  },
  {
    title: 'Sanitized & Climate-Controlled',
    description: 'Immaculate interior detailing with fully serviced air conditioning.',
  },
  {
    title: 'Prompt WhatsApp Dispatch',
    description: 'Direct response times and clear itinerary coordination on +233548009285.',
  },
  {
    title: 'Executive Chauffeur Standard',
    description: 'Professional, courteous drivers for dedicated chauffeur-only vehicles.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    authorLabel: 'Sample Client A',
    roleOrContext: 'Corporate Assignment / Accra',
    rating: 5,
    dateText: 'Sample Review • October 2026',
    comment:
      'The Prado arrived in pristine mechanical condition. The air conditioning was flawless even in intense midday traffic, and the handover was prompt and professional. Top tier fleet quality.',
    vehicleRented: 'Toyota Land Cruiser Prado',
    serviceHighlight: 'Pristine Maintenance',
    isSample: true,
  },
  {
    id: 'rev-02',
    authorLabel: 'Sample Client B',
    roleOrContext: 'Executive Airport Transit',
    rating: 5,
    dateText: 'Sample Review • September 2026',
    comment:
      'Exceptional chauffeur service. The Lexus LX570 was immaculate inside and out, quiet, and supremely comfortable. Direct WhatsApp communication made pickup coordination completely stress-free.',
    vehicleRented: 'Lexus LX570 Chauffeur Only',
    serviceHighlight: 'Chauffeur Punctuality',
    isSample: true,
  },
  {
    id: 'rev-03',
    authorLabel: 'Sample Client C',
    roleOrContext: 'Intercity Business Trip',
    rating: 5,
    dateText: 'Sample Review • September 2026',
    comment:
      'We rented the 2026 registered Corolla for a Kumasi journey. Spotless interior, modern safety equipment, and outstanding fuel economy. You can tell their fleet is genuinely well maintained.',
    vehicleRented: 'Toyota Corolla 2026 Registered',
    serviceHighlight: 'Modern 2026 Fleet',
    isSample: true,
  },
  {
    id: 'rev-04',
    authorLabel: 'Sample Client D',
    roleOrContext: 'VIP Event & Protocol',
    rating: 5,
    dateText: 'Sample Review • August 2026',
    comment:
      'The Mercedes-Benz delivered the exact prestige look required for our high-profile delegates. Flawless bodywork, luxurious leather cabin, and smooth ride throughout the day.',
    vehicleRented: 'Mercedes Benz Luxury Series',
    serviceHighlight: 'VIP Detailing',
    isSample: true,
  },
  {
    id: 'rev-05',
    authorLabel: 'Sample Client E',
    roleOrContext: 'Organizational Conference',
    rating: 5,
    dateText: 'Sample Review • August 2026',
    comment:
      'Arranged the 30-seater bus for an organizational retreat. Ample luggage room, comfortable seating, and powerful air conditioning throughout. Punctual departure and return.',
    vehicleRented: 'Toyota 30 Seater Bus',
    serviceHighlight: 'Flawless Group Transit',
    isSample: true,
  },
  {
    id: 'rev-06',
    authorLabel: 'Sample Client F',
    roleOrContext: 'Regional Travel & Family Trip',
    rating: 5,
    dateText: 'Sample Review • July 2026',
    comment:
      'The RAV4 performed effortlessly on both paved highways and regional feeder roads. High ground clearance and responsive brakes gave total confidence for the entire journey.',
    vehicleRented: 'Toyota RAV4',
    serviceHighlight: 'Reliable Safety',
    isSample: true,
  },
];
