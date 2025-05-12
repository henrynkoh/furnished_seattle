import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, HomeIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: 'day' | 'week' | 'month';
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  availableFrom: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  priceUnit,
  bedrooms,
  bathrooms,
  squareFeet,
  availableFrom,
  imageUrl,
  isFeatured = false,
}: PropertyCardProps) {
  const priceText = `$${price.toLocaleString()}/${priceUnit}`;
  
  return (
    <div className={`card transition-all duration-300 hover:shadow-lg ${isFeatured ? 'ring-2 ring-primary-500' : ''}`}>
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isFeatured && (
          <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 text-xs font-semibold rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <MapPinIcon className="h-4 w-4 text-primary-600 mr-1" />
          <span className="text-sm text-secondary-600">{location}</span>
        </div>
        <Link href={`/rentals/${id}`}>
          <h3 className="text-lg font-medium hover:text-primary-600 transition-colors duration-300 mb-2">{title}</h3>
        </Link>
        <div className="flex items-center mb-2">
          <CurrencyDollarIcon className="h-4 w-4 text-primary-600 mr-1" />
          <span className="text-lg font-semibold text-secondary-900">{priceText}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 text-secondary-500 mr-1" />
            <span className="text-sm">
              {bedrooms} {bedrooms === 1 ? 'bed' : 'beds'} • {bathrooms} {bathrooms === 1 ? 'bath' : 'baths'}
            </span>
          </div>
          {squareFeet && (
            <span className="text-sm text-secondary-500">{squareFeet} sq ft</span>
          )}
        </div>
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 text-secondary-500 mr-1" />
          <span className="text-sm text-secondary-500">Available from {new Date(availableFrom).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
} 