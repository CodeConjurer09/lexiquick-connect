import React from 'react';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import type { Step } from '../types';

const StepByStepGuide: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: 1,
      title: "Create Your Account",
      description: "Visit the HelaLink website and click on the 'Register' button. Fill in your details including name, email, phone number, and create a secure password."
    },
    {
      stepNumber: 2,
      title: "Verify Your Email",
      description: "Check your email inbox for a verification link. Click the link to verify your email address and activate your account."
    },
    {
      stepNumber: 3,
      title: "Pay Activation Fee",
      description: "Pay the small one-time activation fee via mobile money (M-Pesa, Airtel Money, etc.) or bank transfer. This fee helps maintain the platform and prevent spam accounts."
    },
    {
      stepNumber: 4,
      title: "Complete Your Profile",
      description: "Log in to your dashboard and complete your profile by adding your payment details (mobile money number or bank account) for withdrawals."
    },
    {
      stepNumber: 5,
      title: "Choose Your Earning Methods",
      description: "Explore the different earning opportunities available: affiliate marketing, watching videos, trivia quizzes, spin & win, ad clicks, and more."
    },
    {
      stepNumber: 6,
      title: "Start Earning",
      description: "Begin with the earning method that interests you most. Complete tasks, watch videos, answer quizzes, or refer friends to start accumulating earnings."
    },
    {
      stepNumber: 7,
      title: "Track Your Progress",
      description: "Monitor your earnings in real-time through your dashboard. See detailed breakdowns of earnings from each activity."
    },
    {
      stepNumber: 8,
      title: "Withdraw Your Earnings",
      description: "Once you reach the minimum withdrawal amount, request a payout. Funds are typically processed within 24-48 hours to your mobile money or bank account."
    }
  ];

  const tips = [
    "Start with the welcome bonus to familiarize yourself with the platform",
    "Focus on 2-3 earning methods initially rather than trying everything at once",
    "Refer friends to unlock the three-level affiliate commission structure",
    "Check the platform daily for new opportunities and bonus tasks",
    "Join our community groups for tips and support from other members",
    "Keep your payment details updated to avoid withdrawal delays"
  ];

  const faqs = [
    {
      question: "How much can I earn?",
      answer: "Earnings vary based on the methods you choose and time invested. Some members earn $50-$200+ monthly by combining multiple earning streams."
    },
    {
      question: "What's the minimum withdrawal amount?",
      answer: "The minimum withdrawal varies by country, typically ranging from $5 to $10 equivalent in local currency."
    },
    {
      question: "How long does withdrawal take?",
      answer: "Withdrawals are processed within 24-48 hours. Mobile money transfers are usually instant once processed."
    },
    {
      question: "Is there a referral program?",
      answer: "Yes! Our three-level affiliate program lets you earn commissions from your direct referrals and their referrals too."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-neutral-100 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-6">
            Step-by-Step <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Guide</span>
          </h1>
          <p className="text-xl text-secondary-500 mb-8">
            Follow this comprehensive guide to get started with HelaLink and begin your earning journey today.
          </p>
          <Button size="lg">
            Create Account Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-lg text-secondary-500">
              Follow these 8 simple steps to start earning
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.stepNumber} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.stepNumber}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary-200 mx-auto mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <Card className="flex-1 p-6 mb-4">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-500">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
              Pro Tips for Success
            </h2>
            <p className="text-lg text-secondary-500">
              Maximize your earnings with these expert tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-2xl border border-neutral-200">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-secondary-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-500">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start mb-3">
                  <AlertCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-secondary-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-secondary-500 ml-8">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of members already earning with HelaLink
          </p>
          <Button size="lg" variant="secondary">
            Create Your Account Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StepByStepGuide;