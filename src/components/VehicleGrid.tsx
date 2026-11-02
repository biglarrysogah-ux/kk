import React, { useState, useMemo } from 'react';
import { VEHICLES, VehicleCategory } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';
import { Search, Layers, CheckCircle2 } from 'lucide-react';

interface VehicleGridProps {
  title?: string;
  subtitle?: string;
  showCategoryHeaders?: boolean;
}

export const VehicleGrid: React.FC<VehicleGridProps> = ({
  title = 'Our Complete Vehicle Fleet',
  subtitle = 'Browse our full inventory of 26 vehicles. Select any vehicle to enquire via WhatsApp.',
  showCategoryHeaders = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { label: string; count: number; value: string }[] = [
    { label: 'All Fleet', count: VEHICLES.length, value: 'All' },
    { label: 'Saloon Cars', count: VEHICLES.filter((v) => v.category === 'Saloon Cars').length, value: 'Saloon Cars' },
    { label: 'SUVs', count: VEHICLES.filter((v) => v.category === 'SUVs').length, value: 'SUVs' },
    { label: 'Luxury Vehicles', count: VEHICLES.filter((v) => v.category === 'Luxury Vehicles').length, value: 'Luxury Vehicles' },
    { label: 'Buses', count: VEHICLES.filter((v) => v.category === 'Buses').length, value: 'Buses' },
  ];

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      const matchesCategory = selectedCategory === 'All' || vehicle.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (vehicle.badge && vehicle.badge.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoriesOrder: VehicleCategory[] = ['Saloon Cars', 'SUVs', 'Luxury Vehicles', 'Buses'];

  return (
    <section id="fleet" className="py-16 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E7EB] text-xs font-semibold text-[#F58220] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Inventory • 26 Vehicles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by vehicle name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-[#F58220] text-white shadow-sm'
                    : 'bg-[#F5F5F5] text-[#111111] hover:text-[#F58220] border border-[#E5E7EB] hover:border-[#F58220]/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#6B7280] border border-[#E5E7EB]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Information */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#6B7280]">
          <span>Showing <strong className="text-[#111111]">{filteredVehicles.length}</strong> of <strong className="text-[#111111]">{VEHICLES.length}</strong> vehicles</span>
          <span className="flex items-center space-x-1.5 text-[#F58220] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>All vehicles available for WhatsApp enquiry</span>
          </span>
        </div>

        {/* Vehicle Cards Grid */}
        {selectedCategory === 'All' && searchQuery === '' && showCategoryHeaders ? (
          // Grouped by the 4 required categories
          <div className="mt-10 space-y-14">
            {categoriesOrder.map((catName) => {
              const catVehicles = VEHICLES.filter((v) => v.category === catName);
              return (
                <div key={catName} className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                        {catName}
                      </h3>
                      <span className="bg-[#F5F5F5] border border-[#E5E7EB] text-xs font-bold px-2.5 py-0.5 rounded-full text-[#F58220]">
                        {catVehicles.length} Vehicles
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {catVehicles.map((vehicle) => (
                      <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Filtered list
          <div className="mt-8">
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-16 bg-[#F5F5F5] rounded-2xl border border-[#E5E7EB] p-8">
                <p className="text-[#6B7280] font-medium">No vehicles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 bg-[#F58220] text-white text-xs font-semibold rounded-lg hover:bg-[#FF6A00] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
