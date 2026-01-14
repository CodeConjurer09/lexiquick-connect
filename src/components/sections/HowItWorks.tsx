import { useState, useEffect, useRef } from 'react';
import { UserPlus, CreditCard, Monitor, DollarSign, Wallet, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create an Account",
      description: "Sign up using a verified link from our website in seconds with your email and basic information"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Choose a Plan",
      description: "Select a plan to work with. Choose either movies or apps to review or both. Deposit the capital for that plan, once your deposit has been approved, proceed to purchasing the plan"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Access Content",
      description: "Browse movies and apps available for review directly from your dashboard"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Watch and Earn",
      description: "Review content, submit your ratings and watch your earnings grow instantly"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Withdraw Funds",
      description: "Cash out your earnings via mobile money or via your bank"
    }
  ];

  const appPlans = [
    {
      name: "TRIAL PLAN",
      price: "Ksh 2,400",
      features: [
        "Ksh 4,800 cashback",
        "Earn daily",
        "Instant withdrawals",
        "24 hours customer care"
      ],
      note: "The lowest plan with least returns. A starter plan",
      popular: false
    },
    {
      name: "APPROVAL PLAN",
      price: "Ksh 6,500",
      features: [
        "Approved account",
        "Instant withdrawals",
        "Instant cashback",
        "Ksh 13,500 daily earnings"
      ],
      note: "Most preferred plan for starter ups. Good capital return ratio",
      popular: true
    },
    {
      name: "LEXI AGENT",
      price: "Ksh 18,000",
      features: [
        "Mentorship program",
        "Weekly bonuses",
        "Daily pay"
      ],
      note: "Most preferred for users who need mentorship programs. Become a Lexi agent and enjoy numerous bonuses",
      popular: false
    },
    {
      name: "SHAREHOLDER PLAN",
      price: "Ksh 50,000",
      features: [
        "Official group member",
        "Ksh 100,000 weekly pay",
        "First priority VVIP member"
      ],
      note: "Premium investment tier for serious earners. Double your capital weekly with exclusive VVIP benefits and priority support",
      popular: false
    }
  ];

  const moviePlans = [
    {
      name: "BASIC PLAN",
      price: "Ksh 1,550",
      features: [
        "Watch 45 movies",
        "Watch twice a week",
        "Earn up to Ksh 4,500 weekly"
      ],
      note: "Ideal for absolute beginners. Start small, earn steadily"
    },
    {
      name: "LEXI PLAN",
      price: "Ksh 3,600",
      features: [
        "Access to 70 paid ads",
        "Manage ads 3 times a week",
        "Earn up to Ksh 7,000 weekly"
      ],
      note: "For users ready to earn more with just a small upgrade. Balanced and worth it"
    },
    {
      name: "PRIME PLAN",
      price: "Ksh 5,500",
      features: [
        "Watch limited movies",
        "Manage ads 4 times a week",
        "Earn up to Ksh 11,500 weekly"
      ],
      note: "Best starter value! A small investment with bigger weekly returns"
    },
    {
      name: "QUICK PLAN",
      price: "Ksh 8,000",
      features: [
        "Watch movies daily",
        "Unlimited movies",
        "Get a Ksh 8,000 cashback"
      ],
      note: "Break even immediately with instant cashback! Unlimited access to movies with zero risk and pure profits from day one"
    },
    {
      name: "VERIFIED M PLAN",
      price: "Ksh 26,000",
      features: [
        "Earn daily",
        "Daily bonuses",
        "Multiple withdrawal times",
        "Earn Ksh 30,000 plus"
      ],
      note: "Elite movie reviewer status. Maximum flexibility with multiple daily withdrawals and earn above your capital every single week"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => Array.from(new Set([...prev, index])));
              }, index * 200);
            });
            // Animate app plans
            appPlans.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => Array.from(new Set([...prev, index + 5])));
              }, (index + steps.length) * 150);
            });
            // Animate movie plans
            moviePlans.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => Array.from(new Set([...prev, index + 9])));
              }, (index + steps.length + appPlans.length) * 150);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
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
                  visibleSteps.includes(index) || isMobile
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

        {/* Plans Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">
              Available Plans on Lexiquick
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Choose the plan that matches your earning goals
            </p>
          </div>

          {/* App Plans */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              App Plans
            </h3>
            <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
              Choose your preferred App plan, access the apps and earn once you review them
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 ${
                    plan.popular ? 'border-accent-500' : 'border-secondary-100'
                  } group ${
                    visibleSteps.includes(index + 5) || isMobile
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-neutral-50 px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-primary-900 mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-3xl font-bold text-accent-500">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-primary-700">
                        <ArrowRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="text-xs text-primary-600 italic border-t border-secondary-200 pt-4">
                      {plan.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Movie Plans */}
          <div>
            <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Movie Plans
            </h3>
            <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
              Begin your journey here! Affordable, simple and rewarding - perfect for new members
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {moviePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-secondary-100 group ${
                    visibleSteps.includes(index + 9) || isMobile
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-primary-900 mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-3xl font-bold text-accent-500">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-primary-700">
                        <ArrowRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="text-xs text-primary-600 italic border-t border-secondary-200 pt-4">
                      {plan.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;