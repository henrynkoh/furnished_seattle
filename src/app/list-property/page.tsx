'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { 
  CheckCircleIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  UserGroupIcon,
  BanknotesIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';

export default function ListPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <Layout>
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            List Your Furnished Property in Seattle
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Connect with travel nurses, medical professionals, and short-term visitors 
            looking for quality furnished accommodations in the greater Seattle area.
          </p>
        </div>
      </div>
      
      {/* Step progress */}
      <div className="bg-primary-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    step === currentStep
                      ? 'bg-primary-600 text-white'
                      : step < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step < currentStep ? <CheckCircleIcon className="h-5 w-5" /> : step}
                </div>
                
                {step < totalSteps && (
                  <div 
                    className={`h-1 w-16 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">
              {currentStep === 1 && 'Property Details'}
              {currentStep === 2 && 'Amenities & Photos'}
              {currentStep === 3 && 'Pricing & Availability'}
            </h2>
            <p className="text-secondary-600 mt-1">
              {currentStep === 1 && 'Tell us about your property'}
              {currentStep === 2 && 'What makes your property special'}
              {currentStep === 3 && 'Set your price and availability'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {currentStep === 1 && (
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">
                  Property Title *
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., Spacious 2BR Condo in Capitol Hill"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe your property, highlighting its best features and what makes it special..."
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-secondary-700 mb-1">
                    Property Type *
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="studio">Studio</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-1">
                    Location/Neighborhood *
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Capitol Hill, Seattle, WA"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-secondary-700 mb-1">
                    Bedrooms *
                  </label>
                  <select
                    id="bedrooms"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="0">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-secondary-700 mb-1">
                    Bathrooms *
                  </label>
                  <select
                    id="bathrooms"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1">1 Bathroom</option>
                    <option value="1.5">1.5 Bathrooms</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="2.5">2.5 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="3.5">3.5+ Bathrooms</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="squareFeet" className="block text-sm font-medium text-secondary-700 mb-1">
                    Square Feet
                  </label>
                  <input
                    id="squareFeet"
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., 850"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="nearbyHospitals" className="block text-sm font-medium text-secondary-700 mb-1">
                  Nearby Hospitals
                </label>
                <p className="text-xs text-secondary-500 mb-2">
                  Select hospitals within commuting distance - this helps medical professionals find your property
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'UW Medical Center',
                    'Harborview Medical Center',
                    'Swedish Medical Center',
                    'Virginia Mason',
                    'Seattle Children\'s Hospital',
                    'Overlake Medical Center',
                    'Northwest Hospital',
                    'Kaiser Permanente'
                  ].map((hospital) => (
                    <div key={hospital} className="flex items-center">
                      <input
                        id={`hospital-${hospital}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor={`hospital-${hospital}`} className="ml-2 text-sm text-secondary-700">
                        {hospital}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </form>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={nextStep}
                className="btn btn-primary"
              >
                Next: Amenities & Photos
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Amenities</h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Select all amenities that are included with your property
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  {[
                    'Wi-Fi',
                    'TV/Cable',
                    'Air Conditioning',
                    'Heating',
                    'Washer/Dryer In Unit',
                    'Laundry In Building',
                    'Dishwasher',
                    'Microwave',
                    'Refrigerator',
                    'Stove/Oven',
                    'Coffee Maker',
                    'Dishes/Silverware',
                    'Pots/Pans',
                    'Bed Linens',
                    'Towels',
                    'Iron/Ironing Board',
                    'Hair Dryer',
                    'Parking',
                    'Elevator',
                    'Gym',
                    'Pool',
                    'Hot Tub',
                    'Balcony/Patio',
                    'Garden/Yard'
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <input
                        id={`amenity-${amenity}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-secondary-700">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <label htmlFor="other-amenities" className="block text-sm font-medium text-secondary-700 mb-1">
                    Other Amenities
                  </label>
                  <input
                    id="other-amenities"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter any additional amenities, separated by commas"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Photos</h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Upload high-quality photos of your property (minimum 3 photos recommended)
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <PlusCircleIcon className="h-12 w-12 text-secondary-400" />
                  </div>
                  <p className="text-secondary-700 mb-2">
                    Drag and drop photos here, or click to browse
                  </p>
                  <p className="text-xs text-secondary-500">
                    JPG, PNG or WEBP, max 10MB each
                  </p>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    accept="image/jpeg,image/png,image/webp"
                  />
                  <button className="mt-4 btn btn-secondary">
                    Upload Photos
                  </button>
                </div>
              </div>
            </form>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="btn btn-secondary"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="btn btn-primary"
              >
                Next: Pricing & Availability
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Pricing</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-secondary-700 mb-1">
                      Monthly Rate *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-secondary-500">$</span>
                      </div>
                      <input
                        id="price"
                        type="number"
                        className="w-full pl-7 p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g., 2500"
                        required
                      />
                    </div>
                    <p className="text-xs text-secondary-500 mt-1">
                      This is the monthly rate for your property
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="cleaningFee" className="block text-sm font-medium text-secondary-700 mb-1">
                      Cleaning Fee
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-secondary-500">$</span>
                      </div>
                      <input
                        id="cleaningFee"
                        type="number"
                        className="w-full pl-7 p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g., 150"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      id="utilities-included"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="utilities-included" className="ml-2 text-sm text-secondary-700">
                      Utilities included in price
                    </label>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <input
                      id="negotiable"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="negotiable" className="ml-2 text-sm text-secondary-700">
                      Price is negotiable
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Availability</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="availableFrom" className="block text-sm font-medium text-secondary-700 mb-1">
                      Available From *
                    </label>
                    <input
                      id="availableFrom"
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="minimumStay" className="block text-sm font-medium text-secondary-700 mb-1">
                      Minimum Stay *
                    </label>
                    <select
                      id="minimumStay"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Select</option>
                      <option value="1">1 month</option>
                      <option value="2">2 months</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="leaseTerms" className="block text-sm font-medium text-secondary-700 mb-1">
                      Lease Terms
                    </label>
                    <select
                      id="leaseTerms"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select</option>
                      <option value="month-to-month">Month-to-month</option>
                      <option value="3-month">3-month lease</option>
                      <option value="6-month">6-month lease</option>
                      <option value="12-month">12-month lease</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTenants" className="block text-sm font-medium text-secondary-700 mb-1">
                      Preferred Tenants
                    </label>
                    <select
                      id="preferredTenants"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      multiple
                      size={4}
                    >
                      <option value="travel-nurses">Travel Nurses</option>
                      <option value="medical-professionals">Medical Professionals</option>
                      <option value="students">Students</option>
                      <option value="corporate">Corporate</option>
                      <option value="relocating">Relocating</option>
                      <option value="any">Any</option>
                    </select>
                    <p className="text-xs text-secondary-500 mt-1">
                      Hold Ctrl/Cmd to select multiple options
                    </p>
                  </div>
                </div>
              </div>
            </form>
            
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center mb-6">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-secondary-700">
                  I agree to the <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="btn btn-secondary"
                >
                  Back
                </button>
                <button
                  className="btn btn-primary"
                >
                  Submit Property Listing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why List Your Property with Furnished Seattle?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BuildingOfficeIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">High-Quality Tenants</h3>
              <p className="text-secondary-600">
                Connect with travel nurses, medical professionals, and responsible tenants.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HomeModernIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Showcase Your Property</h3>
              <p className="text-secondary-600">
                Our platform highlights what makes your furnished rental special.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UserGroupIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Seattle-Focused</h3>
              <p className="text-secondary-600">
                We specialize in the greater Seattle area, connecting you with local renters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BanknotesIcon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Maximize Your Income</h3>
              <p className="text-secondary-600">
                Furnished rentals often command higher rates than unfurnished ones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 