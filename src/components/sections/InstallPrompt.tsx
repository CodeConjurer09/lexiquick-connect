import React, { useState, useEffect } from 'react';
import { X, Download, Chrome } from 'lucide-react';

interface InstallPromptProps {
  extensionUrl?: string;
}

const InstallPrompt: React.FC<InstallPromptProps> = ({ 
  extensionUrl = 'https://chrome.google.com/webstore/detail/your-extension-id' 
}) => {
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already dismissed the prompt
    const hasSeenPrompt = localStorage.getItem('lexiquick-extension-prompt-dismissed');
    const dismissedDate = localStorage.getItem('lexiquick-extension-prompt-date');
    
    // Show prompt again after 7 days
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const shouldShowAgain = dismissedDate && parseInt(dismissedDate) < sevenDaysAgo;
    
    if (!hasSeenPrompt || shouldShowAgain) {
      // Show prompt after 2 seconds delay
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPrompt(false);
      // Remember that user dismissed the prompt
      localStorage.setItem('lexiquick-extension-prompt-dismissed', 'true');
      localStorage.setItem('lexiquick-extension-prompt-date', Date.now().toString());
    }, 300);
  };

  const handleInstall = () => {
    window.open(extensionUrl, '_blank');
    handleClose();
  };

  const handleRemindLater = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPrompt(false);
      // Set reminder for 1 day
      const oneDayFromNow = Date.now() - (6 * 24 * 60 * 60 * 1000); // Will show again in 1 day
      localStorage.setItem('lexiquick-extension-prompt-dismissed', 'true');
      localStorage.setItem('lexiquick-extension-prompt-date', oneDayFromNow.toString());
    }, 300);
  };

  if (!showPrompt) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-primary-900 bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`bg-neutral-50 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 pointer-events-auto transform transition-all duration-300 ${
            isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-primary-400 hover:text-primary-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-accent-500 rounded-full p-4 animate-bounce">
              <Download className="w-8 h-8 text-neutral-50" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-3">
              Get the LexiQuick Extension
            </h2>
            <p className="text-primary-600 mb-4">
              Earn more with our browser extension! Get instant access to video reviews, app testing, and exclusive earning opportunities.
            </p>
            
            {/* Features */}
            <div className="text-left space-y-3 mb-6">
              {[
                'Instant notifications for new tasks',
                'Quick access to earning opportunities',
                'Track your earnings in real-time',
                'Exclusive extension-only bonuses'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-neutral-50 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-primary-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Chrome Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-primary-500 mb-6">
              <Chrome className="w-5 h-5" />
              <span>Available for Chrome & Edge browsers</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleInstall}
              className="w-full bg-accent-500 hover:bg-accent-600 text-neutral-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Install Extension Now
            </button>
            
            <button
              onClick={handleRemindLater}
              className="w-full bg-neutral-200 hover:bg-neutral-300 text-primary-700 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Remind Me Later
            </button>
            
            <button
              onClick={handleClose}
              className="w-full text-primary-500 hover:text-primary-700 text-sm font-medium py-2 transition-colors"
            >
              No Thanks
            </button>
          </div>
        </div>
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

export default InstallPrompt;