import { useState } from 'react';
import { Star, ExternalLink, MousePointerClick } from 'lucide-react';

const Features = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '-2deg'
    },
    {
      id: 2,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '3deg'
    },
    {
      id: 3,
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '-3deg'
    },
    {
      id: 4,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '2deg'
    },
    {
      id: 5,
      title: "Pulp Fiction",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '4deg'
    },
    {
      id: 6,
      title: "Forrest Gump",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '-4deg'
    },
    {
      id: 7,
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '3deg'
    },
    {
      id: 8,
      title: "Gladiator",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
      rating: 5,
      earnings: "$1.50",
      reviewLink: "#",
      rotate: '-2deg'
    }
  ];

  const apps = [
    {
      id: 1,
      title: "Fitness Pro",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '2deg'
    },
    {
      id: 2,
      title: "Photo Editor",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '-3deg'
    },
    {
      id: 3,
      title: "Music Stream",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '4deg'
    },
    {
      id: 4,
      title: "Task Manager",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '-2deg'
    },
    {
      id: 5,
      title: "Budget Planner",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '3deg'
    },
    {
      id: 6,
      title: "Recipe Book",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
      rating: 5,
      earnings: "$0.50",
      reviewLink: "#",
      rotate: '-4deg'
    }
  ];

  interface ItemCardProps {
    item: {
      id: number;
      title: string;
      image: string;
      rating: number;
      earnings: string;
      reviewLink: string;
      rotate: string;
    };
    type: string;
  }

  const ItemCard = ({ item, type }: ItemCardProps) => {
    const isHovered = hoveredItem === `${type}-${item.id}`;

    return (
      <div
        className="cursor-pointer transition-all duration-500"
        style={{
          transform: isHovered ? 'scale(1.05) rotate(0deg)' : `rotate(${item.rotate})`
        }}
        onMouseEnter={() => setHoveredItem(`${type}-${item.id}`)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="relative rounded-xl shadow-lg hover:shadow-2xl overflow-hidden bg-neutral-50 transition-shadow duration-500">
          <div className="aspect-[2/3] relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-lg font-bold text-neutral-50 mb-2">{item.title}</h3>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent-500 text-accent-500" />
                ))}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-accent-500 font-bold text-base">{item.earnings}</span>
                <span className="text-neutral-300 text-xs">per review</span>
              </div>

              <a
                href={item.reviewLink}
                className="w-full bg-accent-500 text-neutral-50 py-2 px-3 rounded-lg font-semibold text-sm hover:bg-accent-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Review Now
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className={`absolute top-3 left-1/2 -translate-x-1/2 bg-accent-500/90 text-neutral-50 px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1 transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}>
              <MousePointerClick className="w-3 h-3" />
              Tap Here
            </div>
          </div>

          <a
            href={item.reviewLink}
            className="block w-full bg-accent-500 text-neutral-50 py-3 text-center font-semibold text-sm hover:bg-accent-600 transition-colors duration-300"
          >
            Review & Earn {item.earnings}
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574267432644-f75c6c462116?w=200&q=80')`,
          backgroundSize: '400px 400px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-3">
            Featured Movies and Apps
          </h2>
          <p className="text-lg text-primary-600">
            Tap to review
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-primary-900">Movies</h3>
            <span className="text-sm text-primary-600 bg-secondary-100 px-4 py-2 rounded-full">
              Watch & Review
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <ItemCard key={movie.id} item={movie} type="movie" />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-primary-900">Apps</h3>
            <span className="text-sm text-primary-600 bg-secondary-100 px-4 py-2 rounded-full">
              Download & Review
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {apps.map((app) => (
              <ItemCard key={app.id} item={app} type="app" />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="/register" 
            className="inline-block bg-accent-500 text-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;