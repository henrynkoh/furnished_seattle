import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import PropertySearchForm from '@/components/PropertySearchForm';

export default function ForMedicalPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Furnished Rentals for Seattle Medical Professionals
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Find the perfect short-term furnished rental near your hospital or medical facility.
              We specialize in helping travel nurses and medical professionals find comfortable accommodations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/rentals" className="btn btn-primary">
                Browse All Rentals
              </Link>
              <Link href="#hospital-search" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Search by Hospital
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Find Your Seattle Rental</h2>
            <PropertySearchForm />
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Medical Professionals Choose Furnished Seattle
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We understand the unique housing needs of travel nurses and healthcare professionals on assignment in Seattle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="h-12 w-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Furnished</h3>
              <p className="text-secondary-600">
                Our properties come completely furnished with everything you need, from linens to kitchenware,
                so you can focus on your work assignment without the hassle of moving furniture.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hospital Proximity</h3>
              <p className="text-secondary-600">
                Find rentals specifically located near Seattle's top hospitals and medical centers,
                making your commute easy and stress-free during your assignment.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Terms</h3>
              <p className="text-secondary-600">
                Our rentals offer flexible lease terms that align with typical 13-week travel contracts,
                with options to extend as needed for your assignment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="hospital-search" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Rentals by Hospital</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Select your hospital to see nearby furnished rentals
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'UW Medical Center',
                address: 'Montlake & Northwest Hospital',
                image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3'
              },
              {
                name: 'Harborview Medical Center',
                address: 'First Hill, Seattle',
                image: 'https://images.unsplash.com/photo-1629909615637-955eb1463743?ixlib=rb-4.0.3'
              },
              {
                name: 'Swedish Medical Center',
                address: 'First Hill, Cherry Hill, Ballard',
                image: 'https://images.unsplash.com/photo-1516549655669-df668a1d9cb0?ixlib=rb-4.0.3'
              },
              {
                name: 'Virginia Mason',
                address: 'First Hill, Seattle',
                image: 'https://images.unsplash.com/photo-1629909613748-32perb1e630e?ixlib=rb-4.0.3'
              },
              {
                name: 'Seattle Children\'s Hospital',
                address: 'Northeast Seattle',
                image: 'https://images.unsplash.com/photo-1629909615685-f2c3aa21f451?ixlib=rb-4.0.3'
              },
              {
                name: 'Overlake Medical Center',
                address: 'Bellevue',
                image: 'https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3'
              },
              {
                name: 'Kaiser Permanente',
                address: 'Capitol Hill, Seattle',
                image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3'
              },
              {
                name: 'All Hospitals',
                address: 'Greater Seattle Area',
                image: 'https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-4.0.3'
              }
            ].map((hospital) => (
              <Link key={hospital.name} href={`/rentals/by-hospital?hospital=${encodeURIComponent(hospital.name)}`}>
                <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src={hospital.image}
                      alt={hospital.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{hospital.name}</h3>
                    <p className="text-sm text-secondary-600">{hospital.address}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3" 
                  alt="Medical professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                  Travel Nurse Program
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Special Rates for Travel Healthcare Professionals
                </h2>
                <p className="text-secondary-600 mb-6">
                  We offer exclusive discounts for travel nurses and healthcare professionals.
                  Our property owners understand the specific needs of medical assignments.
                  Many offer special rates, flexible terms, and additional amenities for medical staff.
                </p>
                <div>
                  <Link href="/contact" className="btn btn-primary">
                    Contact Us About Special Rates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Seattle Rental?</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Browse our available furnished rentals or reach out to our team for personalized assistance with
            your housing search.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rentals" className="btn btn-primary">
              Browse All Rentals
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 