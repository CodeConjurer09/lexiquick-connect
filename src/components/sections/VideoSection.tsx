import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video Player */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-secondary-900 aspect-video">
          {videoUrl ? (
            <video
              controls
              poster={thumbnailUrl}
              className="w-full h-full"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-10 h-10 text-white fill-current" />
                </div>
                <p className="text-white font-semibold text-lg">Video Placeholder</p>
                <p className="text-primary-100 text-sm mt-2">Add your video URL</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;