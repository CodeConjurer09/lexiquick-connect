import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';
import ImageSection from '../components/sections/ImageSection';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To empower Africans with legitimate online earning opportunities and financial independence"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      description: "Building a supportive community where members help each other succeed"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transparency",
      description: "Honest and clear communication about earnings, fees, and opportunities"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Providing the best platform experience with reliable payments and support"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "$100K+", label: "Total Paid Out" },
    { number: "8", label: "Countries" },
    { number: "15+", label: "Earning Methods" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-neutral-100 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-6">
            About <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">HelaLink</span>
          </h1>
          <p className="text-xl text-secondary-500 mb-8">
            We're on a mission to create financial opportunities for Africans through innovative online earning platforms.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <ImageSection
        title="Our Story"
        description="HelaLink was founded with a vision to bridge the gap between African talent and global online earning opportunities. We recognized that millions of Africans have internet access but lack legitimate platforms to monetize their time and skills online."
        features={[
          "Started in 2023 with a simple idea: make online earning accessible to everyone",
          "Grew to serve 8+ African countries with diverse earning methods",
          "Built a community of over 50,000 active members",
          "Paid out over $100,000 to our members"
        ]}
        imagePosition="right"
      />

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-500 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-6">
            Why Choose HelaLink?
          </h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                Verified & Legitimate
              </h3>
              <p className="text-secondary-500">
                All our earning methods are verified and legitimate. We partner with trusted brands and platforms to ensure you get paid for your time and effort.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                Fast & Reliable Payments
              </h3>
              <p className="text-secondary-500">
                We process withdrawals quickly through mobile money and bank transfers. Your earnings are always secure and accessible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-secondary-500">
                Our dedicated support team is always available to help you succeed. Whether you have questions or need assistance, we're here for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;