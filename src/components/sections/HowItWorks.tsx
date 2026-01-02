import { useState, useEffect, useRef } from 'react';
import { UserPlus, CreditCard, Monitor, DollarSign, Wallet, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Your Account",
      description: "Sign up on our website in seconds with your email and basic information"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Choose Your Plan",
      description: "Select a plan that fits your earning goals and activate your account"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Access Content",
      description: "Browse movies and apps available for review directly from your dashboard"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Watch & Earn",
      description: "Review content, give ratings, and watch your earnings grow instantly"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Withdraw Funds",
      description: "Cash out your earnings anytime via mobile money or bank transfer"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-secondary-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Start earning in minutes with our simple process
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary-200 via-accent-200 to-secondary-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-neutral-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-secondary-100 group">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center text-neutral-50 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    {step.icon}
                  </div>

                  <div className="mt-10 text-center">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-accent-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://www.lexiquickconnect.com/sign-up?ref=lexiquick.helpline@gmail.com"
            className="inline-flex items-center gap-3 bg-accent-500 text-neutral-50 px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          <p className="mt-4 text-sm text-primary-600">
            Join 30,000+ users already earning
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;