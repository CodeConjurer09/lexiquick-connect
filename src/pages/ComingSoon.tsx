import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const launchDate = new Date('2026-01-06T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-50 mb-2 drop-shadow-lg">
              LexiQuick
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 font-light">
              Watch, Review & Get Rewarded
            </p>
          </div>

          <div className="mb-12 animate-fade-in-delay">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-secondary-100 max-w-2xl mx-auto">
              We're working hard to bring you an amazing platform to earn money by watching videos, reviewing apps, and enjoying movies.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 animate-fade-in-delay-2">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-50 bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-neutral-50 border-opacity-20">
                <div className="text-3xl md:text-5xl font-bold text-accent-500 mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-secondary-900 uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto animate-fade-in-delay-3">
            <div className="bg-neutral-50 bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-neutral-50 border-opacity-20">
              {!submitted ? (
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-900 mb-4 flex items-center justify-center gap-2">
                    <Mail className="w-6 h-6" />
                    Get Notified at Launch
                  </h3>
                  <p className="text-secondary-900 mb-6 text-sm md:text-base">
                    Be the first to know when we launch and get exclusive early access benefits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-neutral-600 bg-opacity-20 border border-neutral-50 border-opacity-30 text-primary-500 placeholder-secondary-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 transition"
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 bg-accent-500 text-neutral-50 font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                      Notify Me
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary-500 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-accent-500">
                    We'll notify you as soon as we launch.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-4">
            {[
              { icon: '🎬', title: 'Watch Videos', desc: 'Earn by watching engaging content' },
              { icon: '📱', title: 'Review Apps', desc: 'Get paid for honest app reviews' },
              { icon: '💰', title: 'Fast Payments', desc: 'Quick and reliable payouts' }
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-50 bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-neutral-50 border-opacity-20 transform hover:scale-105 transition-all duration-300 hover:border-accent-500 hover:border-opacity-50">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-accent-900 mb-2">{feature.title}</h4>
                <p className="text-secondary-900 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-secondary-200 text-sm">
            <p>Follow us for updates</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;