import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: 'left' | 'right';
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ 
  phoneNumber, 
  message = 'Hello! I would like to know more about your services.',
  position = 'right'
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-show tooltip after button appears
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 2000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const positionClasses = position === 'right' 
    ? 'right-6' 
    : 'left-6';

  const tooltipPositionClasses = position === 'right'
    ? 'right-20'
    : 'left-20';

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed bottom-6 ${positionClasses} z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div
            className={`absolute bottom-16 ${tooltipPositionClasses} bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg whitespace-nowrap animate-bounce`}
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium">Need help? Chat with us!</p>
            <div
              className={`absolute bottom-0 ${
                position === 'right' ? '-right-2' : '-left-2'
              } transform translate-y-1/2 rotate-45 w-3 h-3 bg-white`}
            />
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          
          {/* Icon */}
          <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Badge (optional - for unread messages) */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;