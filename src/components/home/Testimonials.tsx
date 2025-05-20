import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "../../translations";

const Testimonials: React.FC = ({ testimonials }: any) => {
  const { language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const label = {
    en: "Trusted Voices",
    pt: "Vozes Confiáveis",
    fr: "Voix Fiables",
  };

  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[2.8rem] font-bold mb-14 tracking-tight text-gray-900 leading-tight text-center">
            {label[language]}
          </h2>

          <div className="relative">
            <div className="absolute -left-7 -top-7 w-14 h-14 bg-white flex items-center justify-center">
              <Quote size={28} className="text-gray-900" />
            </div>

            <div
              className={`bg-white p-10 transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-7 leading-relaxed italic">
                  {testimonials[currentIndex].text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                      disabled={isTransitioning}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                      disabled={isTransitioning}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
              <div className="flex justify-center -mb-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-5 h-1 mx-1 transition-all duration-300 ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
