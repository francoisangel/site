import React from 'react';
import { Headphones } from 'lucide-react';

const Podcast: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#1F2937] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Architecture Insights Podcast</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Join François Angel for an in-depth exploration of sustainable urban design and the future of architecture.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/3">
            <div className="bg-[#EDEADE] p-3">
              <img 
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Architecture Insights Podcast Cover" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">About the Podcast</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Architecture Insights is a special podcast episode that explores the fascinating world of sustainable 
              urban design. Hosted by François Angel, this episode features an in-depth conversation about 
              the future of architecture and urban planning.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From innovative design solutions to climate adaptation strategies, we delve into the critical 
              topics that are shaping the future of our cities and built environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Headphones size={20} className="mr-2" />
                Listen on Spotify
              </a>
              
              <a 
                href="#" 
                className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Headphones size={20} className="mr-2" />
                Listen on Apple Podcasts
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="The Future of Sustainable Urban Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">May 15, 2023</span>
                <span className="text-sm text-gray-500">45 minutes</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Future of Sustainable Urban Design</h3>
              <p className="text-gray-700 mb-6">
                In this comprehensive episode, we discuss emerging trends in sustainable urban architecture 
                and how cities are adapting to climate change through innovative design solutions. We explore 
                the intersection of technology, sustainability, and human-centered design in creating the 
                cities of tomorrow.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Episode Highlights:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The role of architecture in creating sustainable cities</li>
                  <li>Innovative materials and construction techniques</li>
                  <li>Integrating nature into urban design</li>
                  <li>Future trends in sustainable architecture</li>
                </ul>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center text-gray-800 hover:text-gray-600 mt-6"
              >
                <Headphones size={18} className="mr-2" />
                <span>Listen to Episode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;