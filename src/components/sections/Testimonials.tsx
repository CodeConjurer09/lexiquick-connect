import React from 'react';
import { Star } from 'lucide-react';
import Card from '../ui/Card';
import type { Testimonial } from '../../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "James Ochieng",
      location: "Nairobi, Kenya",
      text: "Helalink has transformed my online income. The affiliate program alone has helped me earn consistently every month.",
      rating: 5
    },
    {
      name: "Aisha Nakato",
      location: "Kampala, Uganda",
      text: "I started with the welcome bonus and now I'm earning from multiple streams. The platform is reliable and payments are fast.",
      rating: 5
    },
    {
      name: "Samuel Mensah",
      location: "Accra, Ghana",
      text: "The trivia quizzes are fun and rewarding. I've earned more than I expected just by testing my knowledge.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-secondary-500">
            See what our members are saying about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-md">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-secondary-600 mb-4 italic">"{testimonial.text}"</p>
              
              {/* Author Info */}
              <div>
                <div className="font-semibold text-secondary-800">{testimonial.name}</div>
                <div className="text-sm text-secondary-500">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;