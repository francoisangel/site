import React from 'react';
import { Headphones } from 'lucide-react';
import { Link } from '../ui/Link';

const PodcastSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                Our Podcast
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Join François Angel as he explores the fascinating world of architecture, design, and urban planning
                in this thought-provoking episode about the future of sustainable urban design.
              </p>
              
              <Link 
                to="/podcast" 
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                <Headphones size={20} />
                <span>Listen Now</span>
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="The Future of Sustainable Urban Design"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900">The Future of Sustainable Urban Design</h3>
              <p className="text-gray-700 mb-4">Exploring emerging trends in sustainable urban architecture and how cities are adapting to climate change through innovative design solutions.</p>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Episode #1</span>
                <span>45 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;