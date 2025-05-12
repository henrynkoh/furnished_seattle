import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import PropertyCard from '@/components/PropertyCard';
import { getFeaturedProperties } from '@/lib/propertyData';
import { BuildingOffice2Icon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  
  return (
    <Layout>
      <HeroSection />
      
      <FeaturedSection
        title="Featured Properties in Seattle"
        description="Discover our handpicked selection of premium furnished rentals in the greater Seattle area."
        viewAllLink="/rentals"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
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
      </FeaturedSection>
      
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Furnished Seattle?</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We specialize in connecting medical professionals and short-term visitors with 
              high-quality furnished rentals in the Seattle area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <BuildingOffice2Icon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Rentals</h3>
              <p className="text-secondary-600">
                All our listings are carefully vetted to ensure they meet our high standards for comfort and convenience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <UserGroupIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Professional Focused</h3>
              <p className="text-secondary-600">
                We understand the unique needs of travel nurses and medical professionals in Seattle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simplified Process</h3>
              <p className="text-secondary-600">
                Our streamlined platform makes it easy to find, book, and manage your furnished rental.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-secondary-900 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">List Your Property with Us</h2>
                <p className="text-secondary-300 mb-6">
                  Own a property in the Seattle area? List it with us to reach medical professionals 
                  and others seeking quality furnished accommodations.
                </p>
                <div>
                  <Link href="/list-property" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <Image 
                  src="https://images.unsplash.com/photo-1600607687644-c7531e456065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Property listing" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Seattle Hospitals We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'UW Medical Center',
              'Harborview Medical Center',
              'Swedish Medical Center',
              'Virginia Mason Medical Center',
              'Seattle Children\'s Hospital',
              'Overlake Medical Center',
              'Northwest Hospital',
              'Kaiser Permanente'
            ].map((hospital) => (
              <div key={hospital} className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium">{hospital}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/rentals/by-hospital" className="text-primary-600 hover:text-primary-700 font-medium">
              Search rentals by hospital →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 