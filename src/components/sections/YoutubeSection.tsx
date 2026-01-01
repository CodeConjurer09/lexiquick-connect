import { Youtube } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
}

const YouTubeSection = () => {
  const videos: YouTubeVideo[] = [
    {
      id: '1',
      title: 'Getting Started with LexiQuick Connect',
      videoId: 'dQw4w9WgXc'
    },
    {
      id: '2',
      title: 'How to Maximize Your Earnings',
      videoId: 'dQw4w9WgXc'
    },
    {
      id: '3',
      title: 'Success Stories from Our Users',
      videoId: 'dQw4w9WgXc'
    }
  ];

  const successfulTransactions = [
    {
      id: 1,
      src: 'assets/images/sc7.png',
      alt: 'Successful transaction preview 1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      alt: 'Successful transaction preview 2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      alt: 'Successful transaction preview 3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
      alt: 'Successful transaction preview 4'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden">
      {/* Background watermark */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: 'url(assets/images/dash17.jpg)',
          backgroundSize: '400px 400px',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Youtube className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Video Tutorials & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our video guides and learn from successful members
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-video bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
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
              
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Successful Transactions Preview */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Preview of Successful Transactions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {successfulTransactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={transaction.src}
                  alt={transaction.alt}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;