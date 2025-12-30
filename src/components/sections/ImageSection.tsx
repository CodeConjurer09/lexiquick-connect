import React from 'react';

interface ImageSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  features?: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({
  title,
  description,
  imageUrl,
  imagePosition = 'right',
  features = []
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={isImageLeft ? 'md:order-2' : ''}>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-6">
              {title}
            </h2>
            <p className="text-lg text-secondary-500 mb-8">
              {description}
            </p>

            {/* Features List */}
            {features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <span className="text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className={isImageLeft ? 'md:order-1' : ''}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 aspect-video flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500"></div>
                  </div>
                  <p className="text-primary-700 font-medium">Image Placeholder</p>
                  <p className="text-primary-600 text-sm mt-2">Replace with your image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;