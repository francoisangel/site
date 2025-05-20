import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "../ui/Link";
import { useTranslation } from "../../translations";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
}

const ProjectSlider: React.FC = ({ featuredProjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const { t } = useTranslation();

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) =>
        prev === 0 ? featuredProjects.length - 1 : prev - 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[100vh] relative overflow-hidden bg-[#F8F7F4]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 flex">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
            }}
          >
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>

              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 sm:p-12 md:p-24 mb-32 sm:mb-0">
                  <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                      {project.title}
                    </h2>
                    <div className="flex items-center space-x-4 sm:space-x-6 text-white mb-6 sm:mb-8">
                      <span className="text-base sm:text-lg">
                        {project.location}
                      </span>
                      <span className="w-px h-4 bg-white opacity-50"></span>
                      <span className="text-base sm:text-lg">
                        {project.year}
                      </span>
                    </div>
                    <Link
                      to="/projects"
                      className="inline-block text-white hover:text-white/80 transition-colors text-base sm:text-lg"
                    >
                      {t("home.hero.discoverButton")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 sm:bottom-12 left-6 sm:left-12 md:left-24 flex space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
          disabled={isTransitioning}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
          disabled={isTransitioning}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-20 sm:bottom-12 right-6 sm:right-12 md:right-24 flex items-center space-x-2 sm:space-x-3">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            className={`w-8 sm:w-12 h-0.5 transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setActiveIndex(index);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
