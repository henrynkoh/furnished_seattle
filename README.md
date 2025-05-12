# Furnished Seattle

A Next.js application for finding and listing furnished rentals in the greater Seattle area, targeting medical professionals, travel nurses, and short-term visitors.

<p align="center">
  <img src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3" alt="Seattle Skyline" width="600" />
</p>

## Overview

Furnished Seattle is a platform inspired by FurnishedFinder, focused on the greater Seattle area. The application connects property owners with individuals seeking short-term furnished rentals, with a special focus on accommodating medical professionals.

## Features

- **Property Search & Filtering**: Find properties based on location, price, amenities, and more
- **Hospital-Based Search**: Find rentals near specific Seattle area hospitals
- **Property Listing**: Multi-step form for property owners to list their furnished rentals
- **Medical Professional Focus**: Dedicated features for travel nurses and healthcare workers
- **Responsive Design**: Fully responsive web application that works on all devices

## Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Heroicons
- **Forms**: React Hook Form
- **State Management**: React Context + SWR for data fetching
- **Authentication**: Next-Auth (implementation planned)
- **Integration**: Supports integration with n8n workflows and MCP (Model Context Platform)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/furnished_seattle.git
cd furnished_seattle
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages
│   │   ├── page.tsx     # Homepage
│   │   ├── rentals/     # Property listings
│   │   ├── about/       # About page
│   │   └── for-medical/ # Medical professionals page
│   ├── components/      # Reusable React components
│   ├── lib/             # Utility functions and data services
│   └── styles/          # Global styles
├── package.json         # Project dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Key Pages

- `/` - Homepage with featured properties and search
- `/rentals` - Property listing page with filters
- `/rentals/[id]` - Individual property details page
- `/list-property` - Multi-step form for property owners
- `/for-medical` - Specialized page for medical professionals
- `/about` - About page explaining the platform's mission

## Development Roadmap

- **Phase 1**: ✅ Core functionality and UI components
- **Phase 2**: User authentication and profiles
- **Phase 3**: Advanced search and filtering
- **Phase 4**: Messaging system between property owners and potential renters
- **Phase 5**: Integration with payment processing
- **Phase 6**: Integration with n8n for workflow automation

## Integration Capabilities

The application is designed to integrate with:

- **n8n**: For workflow automation (property approval, notifications, etc.)
- **MCP (Model Context Platform)**: For incorporating AI/ML capabilities
- **External APIs**: For additional data sources or services

## Scripts

```bash
# Development
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Deployment

The application can be deployed to various platforms including:

- Vercel
- Netlify
- AWS Amplify
- Self-hosted environments

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by FurnishedFinder.com
- Seattle's vibrant healthcare community
- The Next.js and React teams for their excellent frameworks

## Contact

For questions or inquiries, please contact us at [support@furnishedseattle.com](mailto:support@furnishedseattle.com) 