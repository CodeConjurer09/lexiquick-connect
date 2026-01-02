import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const refs = [storyRef, valuesRef, galleryRef, whyRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Hero animation on mount
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current?.classList.add('hero-visible');
      }, 100);
    }

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const values = [
    {
      title: "Making Money Accessible",
      description: "We believe everyone deserves a shot at earning online, no matter where they're from. That's why we've built a platform that's simple enough for anyone to use, whether you're tech-savvy or just getting started."
    },
    {
      title: "Real People, Real Earnings",
      description: "Every dollar you earn comes from real companies that need real feedback. We're the bridge between businesses looking for honest opinions and people looking for legitimate ways to make money online."
    },
    {
      title: "Keeping It Honest",
      description: "No gimmicks, no get-rich-quick schemes. We tell you exactly how much you can earn and how long it takes. What you see is what you get, and we think that's how it should be."
    },
    {
      title: "Building Something Better",
      description: "We're constantly improving based on what our users tell us. Your experience matters, and we're committed to making LexiQuick better every single day."
    }
  ];

  const imageGallery = [
    { id: 1, path: 'assets/images/sc9.png', alt: 'LexiQuick community' },
    { id: 2, path: 'assets/images/sc6.png', alt: 'Successful earnings' },
    { id: 3, path: 'assets/images/sc7.png', alt: 'App reviews' },
    { id: 4, path: 'assets/images/sc8.png', alt: 'Movie watching' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(assets/images/hero13.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-blue-800/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center hero-content">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">LexiQuick</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8">
            Turning your downtime into dollar time, one movie and app at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lexiquickconnect.com/sign-up?ref=lexiquick.helpline@gmail.com"
              className="px-8 py-4 bg-accent-500 text-gray-900 font-bold rounded-full hover:bg-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-center"
            >
              Start Earning Today
            </a>
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              We're a US-based company that partners directly with entertainment studios, app developers, and streaming platforms who desperately need genuine user feedback. These companies spend millions on traditional market research, but what they really want is honest opinions from real people who actually use their products.
            </p>

            <p className="text-lg leading-relaxed">
              Here's how it works: Movie studios want to know if their latest thriller keeps you on the edge of your seat. App developers need to understand if their new game is actually fun or frustrating. Streaming services want honest reviews before they invest millions in a series. Instead of hiring expensive focus groups, they pay us, and we pay you.
            </p>

            <p className="text-lg leading-relaxed">
              The logic is beautifully simple. You watch a movie you were probably going to watch anyway, share your thoughts in a quick review, and earn money. You download an app, test it out for a few minutes, rate your experience, and get paid. No special skills required, no complicated tasks just your honest opinion on content you're already consuming.
            </p>

            <p className="text-lg leading-relaxed">
              What started as a small platform has grown into a thriving community of over 50,000 active members across 8 African countries. We've paid out more than $100,000 to our users, and that number grows every single day. Some of our members earn enough for their daily expenses, others save up for something special, and many just enjoy having extra cash for doing what they love watching great content.
            </p>

            <p className="text-lg leading-relaxed">
              The significance of LexiQuick goes beyond just earning money. We're creating opportunities in regions where traditional online earning platforms often don't work or don't pay well. We've optimized our payment systems to work seamlessly with mobile money and local bank transfers, because we understand the unique challenges of getting paid in different countries.
            </p>

            <p className="text-lg leading-relaxed">
              Today, LexiQuick isn't just a platform it's a movement. We're proving that you don't need a college degree, expensive equipment, or technical skills to earn money online. All you need is a phone, an internet connection, and the willingness to share your honest opinions.
            </p>

            <div className="flex justify-center mt-10">
              <a
                href="https://chat.whatsapp.com/KBlUM1wL9X8Ak2nEhnczvS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Join Our WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600">
              The values that drive us every single day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 value-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            See LexiQuick in Action 
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gallery-grid">
            {imageGallery.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 gallery-item"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.path}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Why LexiQuick Works
          </h2>
          <div className="space-y-6 why-cards">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 why-card">
              <h3 className="text-2xl font-bold mb-3">
                Verified & Legitimate
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every task on our platform comes from real companies with real budgets. We've vetted each partner to ensure you're always getting paid fairly for your time and feedback.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 why-card">
              <h3 className="text-2xl font-bold mb-3">
                Lightning-Fast Payments
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We know you're working hard for your earnings. That's why we process withdrawals within 24-48 hours through mobile money and direct bank transfers. Your money, your timeline.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 why-card">
              <h3 className="text-2xl font-bold mb-3">
                Always Here to Help
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Got questions? Hit a snag? Our support team is available 24/7 because we understand that earning opportunities don't wait for business hours. Real people, real help, whenever you need it.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="https://www.lexiquickconnect.com/sign-up?ref=lexiquick.helpline@gmail.com"
              className="px-12 py-5 bg-accent-500 text-gray-900 font-bold rounded-full hover:bg-accent-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-xl"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .value-card,
        .gallery-item,
        .why-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-in .value-card,
        .animate-in .gallery-item,
        .animate-in .why-card {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default About;