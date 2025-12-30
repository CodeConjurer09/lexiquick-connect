import React from 'react';
import { Youtube } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
}

const YouTubeSection: React.FC = () => {
  // Example YouTube videos - replace with actual video IDs
  const videos: YouTubeVideo[] = [
    {
      id: '1',
      title: 'Getting Started with HelaLink',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    },
    {
      id: '2',
      title: 'How to Maximize Your Earnings',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    },
    {
      id: '3',
      title: 'Success Stories from Our Users',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Youtube className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Video Tutorials & Success Stories
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Watch our video guides and learn from successful members
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              {/* Video Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-video bg-secondary-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              {/* Video Title */}
              <h3 className="text-lg font-semibold text-secondary-800 group-hover:text-primary-600 transition">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;