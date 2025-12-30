// feature type by earning methods
export interface Feature {
    id?: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

// stat type for statistics display
export interface Stat{
    value: string;
    label: string;
}

// Earning method type
export interface EarningMethod{
    title: string;
    amount: string;
}

// Testimonial type
export interface Testimonial {
    name: string;
    location: string;
    text: string;
    rating: number;
    avatar?: string;
}

// step type for guide pages
export interface Step {
    stepNumber: number;
    title: string;
    description: string;
    image?: string;
}

// Video type 
export interface Video {
    id: string;
    title: string;
    thumbnail?: string;
    url: string;
    duration?: string;
}

// Suggested website type
export interface SuggestedWebsite {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  image?: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Enquiry form data
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
}