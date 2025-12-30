import React from 'react';
import { ExternalLink, TrendingUp, DollarSign, Gift } from 'lucide-react';
import Card from '../ui/Card';
import type { SuggestedWebsite } from '../../types';


const SuggestedWebsites: React.FC = () => {
  const websites: SuggestedWebsite[] = [
    {
      id: '1',
      name: 'FreeCash',
      description: 'Complete surveys, watch videos, and play games to earn rewards',
      url: 'https://freecash.com',
      category: 'Rewards'
    },
    {
      id: '2',
      name: 'Swagbucks',
      description: 'Earn points for shopping, surveys, and watching videos',
      url: 'https://swagbucks.com',
      category: 'Cashback'
    },
    {
      id: '3',
      name: 'Honeygain',
      description: 'Earn passive income by sharing your internet connection',
      url: 'https://honeygain.com',
      category: 'Passive Income'
    },
    {
      id: '4',
      name: 'Fiverr',
      description: 'Freelance marketplace for digital services',
      url: 'https://fiverr.com',
      category: 'Freelancing'
    },
    {
      id: '5',
      name: 'Binance',
      description: 'Cryptocurrency trading platform with earning opportunities',
      url: 'https://binance.com',
      category: 'Crypto'
    },
    {
      id: '6',
      name: 'Amazon Associates',
      description: 'Affiliate program to earn commissions promoting products',
      url: 'https://affiliate-program.amazon.com',
      category: 'Affiliate'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Rewards':
        return <Gift className="w-5 h-5" />;
      case 'Cashback':
        return <DollarSign className="w-5 h-5" />;
      case 'Passive Income':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Other Earning Opportunities
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Discover additional platforms to diversify your online income streams
          </p>
        </div>

        {/* Websites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((website) => (
            <Card key={website.id} className="p-6 group">
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {getCategoryIcon(website.category)}
                  <span className="ml-2">{website.category}</span>
                </span>
              </div>

              {/* Website Info */}
              <h3 className="text-xl font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition">
                {website.name}
              </h3>
              <p className="text-secondary-500 mb-4">
                {website.description}
              </p>

              {/* Visit Link */}
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary-500">
            These are external platforms. HelaLink is not responsible for their services or policies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuggestedWebsites;