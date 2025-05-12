'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getPropertyById } from '@/lib/propertyData';
import Layout from '@/components/Layout';
import { 
  MapPinIcon, 
  CalendarDaysIcon, 
  HomeIcon, 
  CurrencyDollarIcon,
  CheckIcon,
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = getPropertyById(propertyId);
  
  const [activeImage, setActiveImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  
  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/rentals" className="btn btn-primary">
            View All Properties
          </Link>
        </div>
      </Layout>
    );
  }
  
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}/${property.priceUnit}`;
  };
  
  const handleContactToggle = () => {
    setShowContactForm(!showContactForm);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/rentals" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to search results
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Image gallery */}
            <div className="mb-8">
              <div className="relative h-[400px] w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={property.images[activeImage]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              
              {property.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative h-20 w-20 flex-shrink-0 rounded overflow-hidden ${
                        activeImage === index ? 'ring-2 ring-primary-600' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${property.title} - image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Property info */}
            <div>
              <div className="flex items-center text-sm text-secondary-600 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 text-primary-600 mr-1" />
                  <span className="text-xl font-semibold">{formatPrice(property.price)}</span>
                </div>
                
                <div className="flex items-center">
                  <HomeIcon className="h-5 w-5 text-primary-600 mr-1" />
                  <span>
                    {property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'} • {property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'} • {property.squareFeet} sq ft
                  </span>
                </div>
                
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-5 w-5 text-primary-600 mr-1" />
                  <span>Available from {new Date(property.availableFrom).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-secondary-700 whitespace-pre-line">{property.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {property.nearbyHospitals && property.nearbyHospitals.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Nearby Hospitals</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.nearbyHospitals.map((hospital) => (
                      <span 
                        key={hospital} 
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {hospital}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Interested in this property?</h2>
              
              {!showContactForm ? (
                <div>
                  <p className="text-secondary-600 mb-6">
                    Contact the property owner to learn more about availability, pricing, and more.
                  </p>
                  <button 
                    onClick={handleContactToggle}
                    className="btn btn-primary w-full mb-4"
                  >
                    Contact Owner
                  </button>
                  <div className="flex justify-center space-x-4">
                    <button className="flex items-center text-primary-600 hover:text-primary-700">
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Call
                    </button>
                    <button className="flex items-center text-primary-600 hover:text-primary-700">
                      <EnvelopeIcon className="h-5 w-5 mr-2" />
                      Email
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      defaultValue={`Hi, I'm interested in your property "${property.title}". Please contact me with more information.`}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-xs text-secondary-500 text-center">
                    By contacting the owner, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {property.coordinates && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
              <p className="text-secondary-600">Map view would be integrated here in a production app</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 