import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition ${
      fullWidth ? 'w-full' : ''
    }`}
  >
    {children}
  </button>
);

interface NavLink {
  name: string;
  path: string;
  external?: boolean;
  scrollTo?: string;
  icon?: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const navigate = useNavigate();

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/', scrollTo: 'testimonials' },
    { 
      name: 'WhatsApp Us', 
      path: 'https://wa.me/254750518501',
      external: true,
      icon: <MessageCircle className="w-4 h-4" />
    },
  ];

  const handleNavigation = (link: NavLink, e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    
    if (link.external) {
      window.open(link.path, '_blank');
    } else if (link.scrollTo) {

      const scrollId = link.scrollTo;

      // Check if we're already on the home page
      if (window.location.pathname === '/') {
        // Scroll to the section
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(scrollId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      // Use react-router navigation
      navigate(link.path);
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="text-center bg-red-500 text-white py-2">
        <p className="animate-pulse">
          Watch, review and get rewarded!
        </p>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/assets/images/lexiquick-logo2.png" 
              alt="lexiquick logo" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.path + (link.scrollTo || '')}
                href={link.external ? link.path : link.scrollTo ? `/#${link.scrollTo}` : link.path}
                onClick={(e) => handleNavigation(link, e)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group"
                style={{
                  transform: hoveredLink === index ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                {link.icon && <span className="group-hover:rotate-12 transition-transform duration-300">{link.icon}</span>}
                <span>{link.name}</span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300"
                  style={{
                    width: hoveredLink === index ? '100%' : '0%'
                  }}
                />
              </a>
            ))}
            <Button onClick={() => navigate('/guide')}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 animate-spin" style={{ animationDuration: '0.3s', animationIterationCount: '1' }} />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-neutral-200 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={link.path + (link.scrollTo || '')}
              href={link.external ? link.path : link.scrollTo ? `/#${link.scrollTo}` : link.path}
              onClick={(e) => handleNavigation(link, e)}
              className="block w-full text-left py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
          <Button fullWidth onClick={() => { navigate('/guide'); setMobileMenuOpen(false); }}>
            Get Started
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;