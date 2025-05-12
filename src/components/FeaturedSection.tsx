import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface FeaturedSectionProps {
  title: string;
  description?: string;
  viewAllLink?: string;
  children: ReactNode;
}

export default function FeaturedSection({
  title,
  description,
  viewAllLink,
  children,
}: FeaturedSectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">{title}</h2>
            {description && (
              <p className="mt-2 text-secondary-600 max-w-2xl">{description}</p>
            )}
          </div>
          
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="mt-4 sm:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View all
              <ArrowRightIcon className="ml-1 h-5 w-5" />
            </Link>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
} 