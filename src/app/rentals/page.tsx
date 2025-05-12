'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';
import PropertySearchForm from '@/components/PropertySearchForm';
import PropertyCard from '@/components/PropertyCard';
import { Property, getAllProperties } from '@/lib/propertyData';
import { AdjustmentsHorizontalIcon, MapPinIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';

export default function RentalsPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get the query params
  const location = searchParams.get('location') || '';
  const priceMin = searchParams.get('priceMin') ? Number(searchParams.get('priceMin')) : undefined;
  const priceMax = searchParams.get('priceMax') ? Number(searchParams.get('priceMax')) : undefined;
  const beds = searchParams.get('beds') ? Number(searchParams.get('beds')) : undefined;
  const baths = searchParams.get('baths') ? Number(searchParams.get('baths')) : undefined;
  const dateAvailable = searchParams.get('dateAvailable') || '';
  
  useEffect(() => {
    // In a real app, this would be an API call
    const allProperties = getAllProperties();
    setProperties(allProperties);
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    if (properties.length === 0) return;
    
    // Filter properties based on search params
    let filtered = [...properties];
    
    if (location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (priceMin) {
      filtered = filtered.filter(property => property.price >= priceMin);
    }
    
    if (priceMax) {
      filtered = filtered.filter(property => property.price <= priceMax);
    }
    
    if (beds) {
      filtered = filtered.filter(property => property.bedrooms >= beds);
    }
    
    if (baths) {
      filtered = filtered.filter(property => property.bathrooms >= baths);
    }
    
    if (dateAvailable) {
      filtered = filtered.filter(property => 
        new Date(property.availableFrom) <= new Date(dateAvailable)
      );
    }
    
    setFilteredProperties(filtered);
  }, [properties, location, priceMin, priceMax, beds, baths, dateAvailable]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Furnished Rentals in Seattle</h1>
          
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-secondary-600 mb-4 sm:mb-0">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} available
            </p>
            
            <div className="flex space-x-2">
              <button
                onClick={toggleFilters}
                className="btn btn-secondary flex items-center"
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                Filters
              </button>
              
              <button
                onClick={() => setViewMode('grid')}
                className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-secondary'}`}
              >
                <ViewColumnsIcon className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setViewMode('list')}
                className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
              >
                <MapPinIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="mb-8">
              <PropertySearchForm />
            </div>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-secondary-600">Loading properties...</p>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">No properties found</h2>
            <p className="text-secondary-600 mb-8">Try adjusting your search filters to find more options.</p>
            <button
              onClick={() => window.location.href = '/rentals'}
              className="btn btn-primary"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-6"
          }>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                priceUnit={property.priceUnit}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                squareFeet={property.squareFeet}
                availableFrom={property.availableFrom}
                imageUrl={property.images[0]}
                isFeatured={property.isFeatured}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
} 