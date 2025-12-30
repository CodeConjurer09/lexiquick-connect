import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import EnquiryForm from '../components/sections/Enquiryform';
import YouTubeSection from '../components/sections/YoutubeSection';
import SuggestedWebsites from '../components/sections/SuggestedWebsites';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <YouTubeSection />
      <SuggestedWebsites />
      <EnquiryForm />
    </>
  );
};

export default Home;