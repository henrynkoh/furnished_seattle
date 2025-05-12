import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Furnished Seattle
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Connecting medical professionals and short-term visitors with quality furnished 
            rentals in the greater Seattle area
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3"
                  alt="Seattle skyline"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-secondary-700 mb-4">
                Furnished Seattle was founded with a clear mission: to simplify the process of finding
                high-quality furnished accommodations in the greater Seattle area, especially for
                healthcare professionals on temporary assignments.
              </p>
              <p className="text-secondary-700 mb-4">
                We recognized the challenges faced by travel nurses, medical professionals, and other
                short-term visitors in finding comfortable, convenient housing without the hassle of
                furnishing a temporary home. At the same time, we saw property owners seeking reliable
                tenants for their furnished rentals.
              </p>
              <p className="text-secondary-700">
                Our platform brings these two groups together, creating a specialized marketplace that
                meets the unique needs of both renters and property owners in the Seattle area.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Seattle Focused</h3>
              <p className="text-secondary-600">
                Unlike national platforms, we focus exclusively on the Greater Seattle area, 
                giving us deep local knowledge and connections with property owners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Professional Oriented</h3>
              <p className="text-secondary-600">
                We understand the specific needs of healthcare professionals and have
                tailored our platform to make it easy to find rentals near hospitals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Focused</h3>
              <p className="text-secondary-600">
                We carefully vet each property listing to ensure all our rentals 
                meet our high standards for comfort, cleanliness, and amenities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                title: 'Founder & CEO',
                bio: 'With 15+ years in Seattle real estate and a background in healthcare administration, Sarah founded Furnished Seattle to solve the housing challenges faced by medical professionals.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3'
              },
              {
                name: 'Michael Chen',
                title: 'Chief Operating Officer',
                bio: 'Michael brings extensive experience in property management and technology. He oversees day-to-day operations and is committed to creating a seamless experience for our users.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
              },
              {
                name: 'Jessica Patel',
                title: 'Director of Housing',
                bio: 'A former travel nurse, Jessica understands firsthand the importance of finding quality housing during assignments. She leads our property vetting and curation process.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3'
              }
            ].map((member) => (
              <div key={member.name} className="card overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.title}</p>
                  <p className="text-secondary-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Whether you're looking for a furnished rental or have a property to list,
            we're here to connect you with the perfect match.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rentals" className="btn btn-primary">
              Find a Rental
            </Link>
            <Link href="/list-property" className="btn btn-secondary">
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 