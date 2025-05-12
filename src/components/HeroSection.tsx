import PropertySearchForm from './PropertySearchForm';

export default function HeroSection() {
  return (
    <div className="relative bg-primary-700">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600 to-primary-800 opacity-75" />
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center mb-6">
          Find Your Perfect Furnished Rental in Seattle
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-200 text-center mb-12">
          The best furnished rentals in the greater Seattle area for travel nurses, professionals, 
          and anyone looking for a comfortable temporary home.
        </p>
        
        <PropertySearchForm className="max-w-5xl mx-auto" />
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center justify-center">
              <span className="text-white font-medium">Perfect for Travel Nurses</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center justify-center">
              <span className="text-white font-medium">No Long-Term Commitments</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center justify-center">
              <span className="text-white font-medium">Fully Furnished With Utilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 