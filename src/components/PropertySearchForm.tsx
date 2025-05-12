import { useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchFormProps {
  className?: string;
}

export default function PropertySearchForm({ className = '' }: SearchFormProps) {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [dateAvailable, setDateAvailable] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (priceMin) params.append('priceMin', priceMin);
    if (priceMax) params.append('priceMax', priceMax);
    if (beds) params.append('beds', beds);
    if (baths) params.append('baths', baths);
    if (dateAvailable) params.append('dateAvailable', dateAvailable);
    
    router.push(`/rentals?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-4 md:p-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Seattle, Bellevue, etc."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="price-range" className="block text-sm font-medium text-secondary-700 mb-1">
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              id="price-min"
              placeholder="Min"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
            <span className="text-secondary-500">—</span>
            <input
              type="number"
              id="price-max"
              placeholder="Max"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="beds" className="block text-sm font-medium text-secondary-700 mb-1">
            Bedrooms
          </label>
          <select
            id="beds"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="baths" className="block text-sm font-medium text-secondary-700 mb-1">
            Bathrooms
          </label>
          <select
            id="baths"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            value={baths}
            onChange={(e) => setBaths(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="date-available" className="block text-sm font-medium text-secondary-700 mb-1">
            Available From
          </label>
          <input
            type="date"
            id="date-available"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            value={dateAvailable}
            onChange={(e) => setDateAvailable(e.target.value)}
          />
        </div>
        
        <div className="flex items-end">
          <button 
            type="submit" 
            className="w-full btn btn-primary flex items-center justify-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
} 