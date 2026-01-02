import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft} from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: 'assets/images/hero11.jpg',
      title: 'Start Earning Today',
      subtitle: 'Watch and Review Movies and earn dollars',
      cta: 'Register Now'
    },
    {
      image: 'assets/images/dash15.jpg',
      title: 'Get Your Free Account',
      subtitle: 'Join 30,000+ active users',
      cta: 'Sign Up Free'
    },
    {
      image: 'assets/images/sc6.png',
      title: 'At Lexiquick every review counts',
      subtitle: 'Review the latest movies and apps',
      cta: 'Register now'
    }
  ];

  const stats = [
    { value: 30000, label: "Active Users", suffix: "+" },
    { value: 100, label: "Paid Out", prefix: "$", suffix: "K+" },
    { value: 2, label: "Ways to Earn", suffix: "+" },
    { value: 26, label: "African Countries", suffix: "" }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl text-center items-center justify-center">
          <h1 className={`text-5xl lg:text-7xl font-bold text-neutral-50 mb-6 leading-tight transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            {slides[currentSlide].title}
          </h1>

          <p className={`text-xl text-neutral-200 mb-8 transition-all duration-500 delay-100 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            {slides[currentSlide].subtitle}
          </p>

          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-500 delay-200 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <a
              href="https://www.lexiquickconnect.com/sign-up?ref=lexiquick.helpline@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-accent-500 text-neutral-50 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50 flex items-center"
            >
              {slides[currentSlide].cta}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCounter key={index} {...stat} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-50/10 backdrop-blur-sm border border-neutral-50/20 hover:bg-neutral-50/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-neutral-50" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-50/10 backdrop-blur-sm border border-neutral-50/20 hover:bg-neutral-50/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-neutral-50" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide
                ? 'w-12 bg-accent-500'
                : 'w-2 bg-neutral-50/50 hover:bg-neutral-50/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, prefix = '', suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    setTimeout(() => {
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, delay);
  }, [value, delay]);

  return (
    <div className="text-left backdrop-blur-sm bg-neutral-50/5 p-4 rounded-lg border border-neutral-50/10 hover:bg-neutral-50/10 transition-all duration-300 hover:scale-105 hover:border-accent-500/30">
      <div className="text-3xl font-bold text-neutral-50 mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-neutral-300">{label}</div>
    </div>
  );
};
export default Hero;