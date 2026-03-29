import { useState } from 'react';
import React from 'react';
import { X, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ProofPage: React.FC = () => {

  // ALL state and data must be INSIDE the component
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const paymentScreenshots = [
    '/assets/images/1.jpeg',
    '/assets/images/2.jpeg',
    '/assets/images/3.jpeg',
    '/assets/images/4.jpeg',
    '/assets/images/5.jpeg',
    '/assets/images/6.jpeg',
    '/assets/images/7.jpeg',
    '/assets/images/8.jpeg',
    '/assets/images/9.jpeg',
    '/assets/images/10.jpeg',
    '/assets/images/11.jpeg',
    '/assets/images/12.jpeg',
  ];

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % paymentScreenshots.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + paymentScreenshots.length) % paymentScreenshots.length);
  };

  const withdrawalSteps = [
    {
      step: 1,
      title: 'Go to your dashboard',
      desc: 'Log in at lexiquickconnect.com/dashboard/user. Your account balance, withdrawals, deposit balance, and yields are displayed at the top.',
      image: '/assets/images/image1.png',
    },
    {
      step: 2,
      title: 'Click the "Withdraw" button',
      desc: 'Below the stats cards you will find two action buttons. Click the red Withdraw button to open the withdrawal form.',
      image: '/assets/images/image2.png',
    },
    {
      step: 3,
      title: 'Fill in the withdrawal form',
      desc: 'Enter the amount, your M-Pesa phone number, and select your wallet from the dropdown. Then press Submit.',
      image: '/assets/images/image3.png',
    },
    {
      step: 4,
      title: 'Check your notifications',
      desc: 'Your request starts as Pending, then becomes Successful once approved. You will receive an M-Pesa payment directly to your phone.',
      image: '/assets/images/image4.png',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Here are some of the Successful Transactions from Lexiquick
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Payments are done via Mpesa or Bank account transfer for large sums of money.
            To be eligible for a successful withdraw the account should be verified.
          </p>
        </div>

        {/* Withdrawal Steps */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">How to request a withdrawal</h2>

          <div className="flex flex-col">
            {withdrawalSteps.map((item, index, arr) => (
              <div key={item.step}>
                <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm flex flex-col gap-5">

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-semibold mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <img
                    src={item.image}
                    alt={`Step ${item.step} - ${item.title}`}
                    className="w-full rounded-xl border border-neutral-100 object-cover"
                  />
                </div>

                {index < arr.length - 1 && (
                  <div className="flex justify-start pl-9">
                    <div className="w-px h-5 bg-neutral-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <h2 className="text-lg font-semibold text-gray-800">Payment Screenshots</h2>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Click any screenshot to view it in full size.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {paymentScreenshots.map((src, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-xl overflow-hidden border border-neutral-100 hover:border-blue-300 transition-all duration-200 hover:shadow-md group"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={src}
                  alt={`Payment proof ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="px-3 py-2 bg-neutral-50 border-t border-neutral-100">
                  <p className="text-xs text-neutral-400">Proof #{i + 1} — tap to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <button
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={paymentScreenshots[lightboxIndex]}
              alt={`Payment proof ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {paymentScreenshots.length}
            </div>
          </div>
        )}

        <p className="text-center text-gray-400 text-sm">
          All transactions are verified. Member names are partially hidden to protect privacy.
        </p>
      </div>
    </div>
  );
};

export default ProofPage;