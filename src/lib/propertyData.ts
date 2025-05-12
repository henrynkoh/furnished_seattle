// This is mock data for development purposes
// In a real application, this would be fetched from an API

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  priceUnit: 'day' | 'week' | 'month';
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  availableFrom: string;
  amenities: string[];
  images: string[];
  isFeatured: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
  nearbyHospitals?: string[];
}

// Sample property data focused on Seattle area
export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Condo in Capitol Hill',
    description: 'Beautifully furnished modern condo in the heart of Capitol Hill. Walking distance to restaurants, shops, and nightlife. Perfect for travel nurses at Swedish Medical Center.',
    location: 'Capitol Hill, Seattle, WA',
    price: 2800,
    priceUnit: 'month',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    availableFrom: '2023-08-15',
    amenities: ['Wi-Fi', 'In-unit laundry', 'Dishwasher', 'Parking', 'Gym', 'Rooftop deck'],
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3'],
    isFeatured: true,
    coordinates: {
      lat: 47.623184,
      lng: -122.312668
    },
    nearbyHospitals: ['Swedish Medical Center', 'Harborview Medical Center']
  },
  {
    id: '2',
    title: 'Spacious Townhouse in Ballard',
    description: 'Fully furnished townhouse in the popular Ballard neighborhood. Close to shops, restaurants, and the famous Ballard Locks. Easy commute to UW Medical Center.',
    location: 'Ballard, Seattle, WA',
    price: 3500,
    priceUnit: 'month',
    bedrooms: 2,
    bathrooms: 2.5,
    squareFeet: 1200,
    availableFrom: '2023-09-01',
    amenities: ['Wi-Fi', 'In-unit laundry', 'Dishwasher', 'Parking', 'Patio', 'Fireplace'],
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3'],
    isFeatured: true,
    coordinates: {
      lat: 47.668693,
      lng: -122.386398
    },
    nearbyHospitals: ['UW Medical Center - Northwest', 'Swedish Ballard']
  },
  {
    id: '3',
    title: 'Downtown Luxury Apartment',
    description: 'High-rise luxury apartment with stunning views of Puget Sound. Full amenities including gym, pool, and concierge. Perfect location for healthcare professionals at Virginia Mason.',
    location: 'Downtown, Seattle, WA',
    price: 3200,
    priceUnit: 'month',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    availableFrom: '2023-08-01',
    amenities: ['Wi-Fi', 'In-unit laundry', 'Dishwasher', 'Parking', 'Gym', 'Pool', 'Concierge'],
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3'],
    isFeatured: false,
    coordinates: {
      lat: 47.610789,
      lng: -122.339447
    },
    nearbyHospitals: ['Virginia Mason Medical Center', 'Swedish Medical Center']
  },
  {
    id: '4',
    title: 'Cozy Queen Anne Studio',
    description: 'Charming studio apartment in Lower Queen Anne. Fully furnished with modern amenities. Close to Seattle Center and walkable to multiple hospitals.',
    location: 'Queen Anne, Seattle, WA',
    price: 1900,
    priceUnit: 'month',
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 450,
    availableFrom: '2023-07-15',
    amenities: ['Wi-Fi', 'Laundry in building', 'Dishwasher', 'Rooftop access'],
    images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3'],
    isFeatured: false,
    coordinates: {
      lat: 47.623957,
      lng: -122.356631
    },
    nearbyHospitals: ['Seattle Children\'s Hospital', 'UW Medical Center']
  },
  {
    id: '5',
    title: 'Bellevue Luxury Condo',
    description: 'Modern luxury condo in downtown Bellevue with high-end finishes. Walking distance to Bellevue Square and easy access to Seattle. Great for medical professionals at Overlake.',
    location: 'Downtown Bellevue, WA',
    price: 3800,
    priceUnit: 'month',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1050,
    availableFrom: '2023-08-01',
    amenities: ['Wi-Fi', 'In-unit laundry', 'Dishwasher', 'Parking', 'Gym', 'Pool', 'Concierge'],
    images: ['https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3'],
    isFeatured: true,
    coordinates: {
      lat: 47.615035,
      lng: -122.201068
    },
    nearbyHospitals: ['Overlake Medical Center', 'Kaiser Permanente Bellevue']
  },
  {
    id: '6',
    title: 'Fremont Craftsman Home',
    description: 'Character-filled craftsman home in the heart of Fremont. Fully furnished with a beautiful garden. Easy commute to UW Medical and other hospitals.',
    location: 'Fremont, Seattle, WA',
    price: 4000,
    priceUnit: 'month',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    availableFrom: '2023-09-15',
    amenities: ['Wi-Fi', 'In-unit laundry', 'Dishwasher', 'Parking', 'Garden', 'Deck'],
    images: ['https://images.unsplash.com/photo-1633505892078-9ca23e53857e?ixlib=rb-4.0.3'],
    isFeatured: false,
    coordinates: {
      lat: 47.651445,
      lng: -122.350309
    },
    nearbyHospitals: ['UW Medical Center', 'Northwest Hospital']
  }
];

// Get all properties
export function getAllProperties(): Property[] {
  return properties;
}

// Get featured properties
export function getFeaturedProperties(): Property[] {
  return properties.filter(property => property.isFeatured);
}

// Get property by ID
export function getPropertyById(id: string): Property | undefined {
  return properties.find(property => property.id === id);
}

// Search properties with filters
export function searchProperties(filters: {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  baths?: number;
  dateAvailable?: string;
}): Property[] {
  return properties.filter(property => {
    // Location filter
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Price range filter
    if (filters.priceMin && property.price < filters.priceMin) {
      return false;
    }
    if (filters.priceMax && property.price > filters.priceMax) {
      return false;
    }
    
    // Bedrooms filter
    if (filters.beds && property.bedrooms < filters.beds) {
      return false;
    }
    
    // Bathrooms filter
    if (filters.baths && property.bathrooms < filters.baths) {
      return false;
    }
    
    // Date available filter
    if (filters.dateAvailable && new Date(property.availableFrom) > new Date(filters.dateAvailable)) {
      return false;
    }
    
    return true;
  });
} 