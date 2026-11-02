export type VehicleCategory = 'Saloon Cars' | 'SUVs' | 'Luxury Vehicles' | 'Buses';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  bookingSelectionId: string;
  badge?: '2026 Registered' | 'Chauffeur Only';
  isChauffeurOnly?: boolean;
  description: string;
  pricingNotice: string;
  availabilityNotice: string;
  seats?: number;
  transmission?: 'Automatic' | 'Manual';
  airConditioning?: boolean;
}

export const VEHICLES: Vehicle[] = [
  // CATEGORY A: SALOON CARS (9 entries)
  {
    id: 'saloon-corolla-01',
    name: 'Toyota Corolla',
    category: 'Saloon Cars',
    image: '/images/cars/toyota-corolla-1.jpg',
    bookingSelectionId: 'saloon-corolla-01',
    description: 'Comfortable, fuel-efficient compact saloon well-suited for city driving and intercity travel in Ghana.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-vitz-02',
    name: 'Toyota Vitz',
    category: 'Saloon Cars',
    image: '/images/cars/toyota-vitz-1.jpg',
    bookingSelectionId: 'saloon-vitz-02',
    description: 'Agile and economical hatchback, easy to park and navigate through lively urban streets.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 4,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-mazda-03',
    name: 'Mazda Sedan',
    category: 'Saloon Cars',
    image: '/images/cars/mazda-sedan-1.jpg',
    bookingSelectionId: 'saloon-mazda-03',
    description: 'Sleek Japanese styling with responsive handling and comfortable passenger accommodation.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-corolla-04',
    name: 'Toyota Corolla',
    category: 'Saloon Cars',
    image: '/images/cars/toyota-corolla-2.jpg',
    bookingSelectionId: 'saloon-corolla-04',
    description: 'Dependable mid-size sedan offering smooth ride comfort and ample luggage space for daily errands.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-corolla-2026-05',
    name: 'Toyota Corolla 2026 Registered',
    category: 'Saloon Cars',
    badge: '2026 Registered',
    image: '/images/cars/toyota-corolla-2026-1.jpg',
    bookingSelectionId: 'saloon-corolla-2026-05',
    description: 'Modern 2026 registered edition with updated safety features and pristine interior comfort.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-corolla-06',
    name: 'Toyota Corolla',
    category: 'Saloon Cars',
    image: '/images/cars/toyota-corolla-3.jpg',
    bookingSelectionId: 'saloon-corolla-06',
    description: 'Practical and reliable executive commuter vehicle designed for hassle-free daily mobility.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-civic-07',
    name: 'Honda Civic',
    category: 'Saloon Cars',
    image: '/images/cars/honda-civic-1.jpg',
    bookingSelectionId: 'saloon-civic-07',
    description: 'Dynamic compact sedan with refined ergonomics and smooth road presence.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-vios-2026-08',
    name: 'Toyota Vios 2026 Registered',
    category: 'Saloon Cars',
    badge: '2026 Registered',
    image: '/images/cars/toyota-vios-2026-1.jpg',
    bookingSelectionId: 'saloon-vios-2026-08',
    description: '2026 registered subcompact saloon combining impressive economy with modern amenities.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'saloon-kia-09',
    name: 'Kia Forte',
    category: 'Saloon Cars',
    image: '/images/cars/kia-forte-1.jpg',
    bookingSelectionId: 'saloon-kia-09',
    description: 'Stylish contemporary saloon with supportive seating and intuitive driver controls.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },

  // CATEGORY B: SUVs (12 entries)
  {
    id: 'suv-prado-01',
    name: 'Land Cruiser Prado',
    category: 'SUVs',
    image: '/images/cars/land-cruiser-prado-1.jpg',
    bookingSelectionId: 'suv-prado-01',
    description: 'Commanding full-frame four-wheel drive SUV engineered to handle all terrain conditions comfortably.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-rav4-02',
    name: 'Toyota RAV4',
    category: 'SUVs',
    image: '/images/cars/toyota-rav4-1.jpg',
    bookingSelectionId: 'suv-rav4-02',
    description: 'Versatile crossover delivering elevated driving position, ample boot capacity, and refined road manners.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-prado-chauffeur-03',
    name: 'Toyota Land Cruiser Prado Chauffeur Only',
    category: 'SUVs',
    badge: 'Chauffeur Only',
    isChauffeurOnly: true,
    image: '/images/cars/prado-chauffeur-1.jpg',
    bookingSelectionId: 'suv-prado-chauffeur-03',
    description: 'Executive four-wheel drive SUV supplied exclusively with a professional, vetted chauffeur for your itinerary.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-lexus-lx570-chauffeur-04',
    name: 'Lexus LX570 Chauffeur Only',
    category: 'SUVs',
    badge: 'Chauffeur Only',
    isChauffeurOnly: true,
    image: '/images/cars/lexus-lx570-chauffeur-1.jpg',
    bookingSelectionId: 'suv-lexus-lx570-chauffeur-04',
    description: 'Flagship luxury SUV with supreme ride serenity and leather appointment, available exclusively with chauffeur service.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-outlander-05',
    name: 'Mitsubishi Outlander',
    category: 'SUVs',
    image: '/images/cars/mitsubishi-outlander-1.jpg',
    bookingSelectionId: 'suv-outlander-05',
    description: 'Spacious family crossover with flexible seating and reassuring highway composure.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-prado-06',
    name: 'Toyota Land Cruiser Prado',
    category: 'SUVs',
    image: '/images/cars/land-cruiser-prado-2.jpg',
    bookingSelectionId: 'suv-prado-06',
    description: 'Robust 4x4 built for endurance across city boulevards, highways, and rugged regional routes.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-crv-07',
    name: 'Honda CRV',
    category: 'SUVs',
    image: '/images/cars/honda-crv-1.jpg',
    bookingSelectionId: 'suv-crv-07',
    description: 'Popular lifestyle SUV with smooth suspension, generous legroom, and modern cabin comforts.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-highlander-08',
    name: 'Toyota Highlander',
    category: 'SUVs',
    image: '/images/cars/toyota-highlander-1.jpg',
    bookingSelectionId: 'suv-highlander-08',
    description: 'Premium three-row SUV offering plush seating for families, delegates, or group outings.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-rav4-09',
    name: 'Toyota RAV4',
    category: 'SUVs',
    image: '/images/cars/toyota-rav4-2.jpg',
    bookingSelectionId: 'suv-rav4-09',
    description: 'Balanced SUV engineered for safety, confident cornering, and effortless luggage loading.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-haval-10',
    name: 'Haval SUV',
    category: 'SUVs',
    image: '/images/cars/haval-suv-1.jpg',
    bookingSelectionId: 'suv-haval-10',
    description: 'Contemporary smart SUV with high ground clearance, commanding visibility, and intuitive tech.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-rx350-11',
    name: 'Lexus RX350',
    category: 'SUVs',
    image: '/images/cars/lexus-rx350-1.jpg',
    bookingSelectionId: 'suv-rx350-11',
    description: 'Prestige luxury crossover blending whisper-quiet cabin insulation with supreme travel comfort.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'suv-santafe-12',
    name: 'Hyundai Santa Fe',
    category: 'SUVs',
    image: '/images/cars/hyundai-santafe-1.jpg',
    bookingSelectionId: 'suv-santafe-12',
    description: 'Refined mid-size SUV with generous passenger proportions and smooth long-distance cruising ability.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 7,
    transmission: 'Automatic',
    airConditioning: true,
  },

  // CATEGORY C: LUXURY VEHICLES (2 entries)
  {
    id: 'luxury-mercedes-01',
    name: 'Mercedes Benz',
    category: 'Luxury Vehicles',
    image: '/images/cars/mercedes-benz-1.jpg',
    bookingSelectionId: 'luxury-mercedes-01',
    description: 'Iconic German prestige sedan delivering executive distinction, superior engineering, and dignified presence.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },
  {
    id: 'luxury-mercedes-02',
    name: 'Mercedes Benz',
    category: 'Luxury Vehicles',
    image: '/images/cars/mercedes-benz-2.jpg',
    bookingSelectionId: 'luxury-mercedes-02',
    description: 'Distinguished luxury automobile suitable for VIP reception, corporate transportation, and milestone events.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 5,
    transmission: 'Automatic',
    airConditioning: true,
  },

  // CATEGORY D: BUSES (3 entries)
  {
    id: 'bus-toyota-30-01',
    name: 'Toyota 30 Seater Bus',
    category: 'Buses',
    image: '/images/cars/toyota-30-bus-1.jpg',
    bookingSelectionId: 'bus-toyota-30-01',
    description: 'Spacious 30-passenger high-capacity coach ideal for corporate groups, weddings, tours, and organizational transfers.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 30,
    transmission: 'Manual',
    airConditioning: true,
  },
  {
    id: 'bus-hyundai-mini-02',
    name: 'Hyundai Minibus',
    category: 'Buses',
    image: '/images/cars/hyundai-minibus-1.jpg',
    bookingSelectionId: 'bus-hyundai-mini-02',
    description: 'Medium passenger bus offering generous luggage bays, high head clearance, and dependable transit comfort.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 26,
    transmission: 'Manual',
    airConditioning: true,
  },
  {
    id: 'bus-toyota-hiace-03',
    name: 'Toyota Hiace',
    category: 'Buses',
    image: '/images/cars/toyota-hiace-1.jpg',
    bookingSelectionId: 'bus-toyota-hiace-03',
    description: 'Renowned passenger carrier known for bulletproof durability, comfortable seating, and exceptional group utility.',
    pricingNotice: 'Contact us for rental rates.',
    availabilityNotice: 'Contact us to enquire about availability.',
    seats: 15,
    transmission: 'Manual',
    airConditioning: true,
  },
];

export interface InventoryValidationResult {
  isValid: boolean;
  totalCount: number;
  expectedTotal: number;
  categoryCounts: Record<VehicleCategory, number>;
  expectedCategoryCounts: Record<VehicleCategory, number>;
  duplicateIds: string[];
  missingFields: Array<{ id: string; field: string }>;
  errors: string[];
}

export function validateVehicleInventory(): InventoryValidationResult {
  const errors: string[] = [];
  const expectedTotal = 26;
  const expectedCategoryCounts: Record<VehicleCategory, number> = {
    'Saloon Cars': 9,
    'SUVs': 12,
    'Luxury Vehicles': 2,
    'Buses': 3,
  };

  const categoryCounts: Record<VehicleCategory, number> = {
    'Saloon Cars': 0,
    'SUVs': 0,
    'Luxury Vehicles': 0,
    'Buses': 0,
  };

  const idSet = new Set<string>();
  const duplicateIds: string[] = [];
  const missingFields: Array<{ id: string; field: string }> = [];

  for (const v of VEHICLES) {
    // Check unique ID
    if (idSet.has(v.id)) {
      duplicateIds.push(v.id);
      errors.push(`Duplicate vehicle ID: "${v.id}"`);
    } else {
      idSet.add(v.id);
    }

    // Check category
    if (v.category in categoryCounts) {
      categoryCounts[v.category]++;
    } else {
      errors.push(`Invalid category "${v.category}" for vehicle ${v.id}`);
    }

    // Check non-empty display name
    if (!v.name || !v.name.trim()) {
      missingFields.push({ id: v.id, field: 'name' });
      errors.push(`Vehicle ${v.id} has empty name`);
    }

    // Check image path
    if (!v.image || !v.image.trim()) {
      missingFields.push({ id: v.id, field: 'image' });
      errors.push(`Vehicle ${v.id} has empty image path`);
    }

    // Check booking selection ID
    if (!v.bookingSelectionId || !v.bookingSelectionId.trim()) {
      missingFields.push({ id: v.id, field: 'bookingSelectionId' });
      errors.push(`Vehicle ${v.id} has empty bookingSelectionId`);
    }
  }

  if (VEHICLES.length !== expectedTotal) {
    errors.push(`Expected total of ${expectedTotal} vehicles, got ${VEHICLES.length}`);
  }

  for (const [cat, expected] of Object.entries(expectedCategoryCounts) as [VehicleCategory, number][]) {
    if (categoryCounts[cat] !== expected) {
      errors.push(`Category "${cat}" expected ${expected} records, found ${categoryCounts[cat]}`);
    }
  }

  return {
    isValid: errors.length === 0,
    totalCount: VEHICLES.length,
    expectedTotal,
    categoryCounts,
    expectedCategoryCounts,
    duplicateIds,
    missingFields,
    errors,
  };
}

export function getVehicleById(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id);
}

export function getVehicleDropdownLabel(vehicle: Vehicle): string {
  let label = vehicle.name;
  if (vehicle.badge) {
    label += ` (${vehicle.badge})`;
  } else {
    // For repeated models without badge, add unique listing tag for clarity
    const duplicates = VEHICLES.filter((v) => v.name === vehicle.name && !v.badge);
    if (duplicates.length > 1) {
      const idx = duplicates.findIndex((v) => v.id === vehicle.id) + 1;
      label += ` [Option ${idx}]`;
    }
  }
  return `${label} — ${vehicle.category}`;
}
