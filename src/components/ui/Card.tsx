import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverEffect = hover ? 'hover:shadow-lg hover:border-primary-300' : '';
  
  return (
    <div
      className={`bg-white rounded-2xl border border-neutral-200 transition ${hoverEffect} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;