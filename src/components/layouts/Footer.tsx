import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About Us', path: '/about' },
    ],
    support: [
      { name: 'Help Center', path: '/contact' },
      { name: 'Contact Us', path: '/contact' },
    ],
  };

  const countries = ['Kenya', 'Uganda', 'Ghana', 'Nigeria', 'Tanzania', 'Rwanda'];

  return (
    <footer className="bg-secondary-900 text-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LexiQuick</h3>
            <p className="text-neutral-400">
              Your gateway to multiple online earning opportunities across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary-400 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary-400 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Available In</h4>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country} className="text-neutral-400">
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} LexiQuick Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;