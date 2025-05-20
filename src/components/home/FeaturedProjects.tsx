import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../ui/Link";
import { useTranslation } from "../../translations";

const FeaturedProjects: React.FC = ({ projects }: any) => {
  const { language } = useTranslation();
  const { imageUrl, title, subtitle, projects: projectsData } = projects;
  const firstProject = projectsData[0];
  const filtredArray = projectsData.filter((_, index) => index !== 0);
  const viewAllLabel =
    language === "pt"
      ? "Ver todos os projetos"
      : language === "fr"
      ? "Voir tous les projets"
      : "View All Projects";

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900 leading-tight">
                {title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="aspect-square bg-[#EDEADE] p-8 relative">
              <img
                src={imageUrl}
                alt="Architectural Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-gray-900"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group">
              <Link to={`/projects/${firstProject?.slug}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={firstProject?.imageUrl}
                    alt={firstProject?.title}
                    className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {firstProject?.title}
                    </h3>
                    <p className="text-white/80">{firstProject?.location}</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="md:col-span-4 space-y-8">
              {filtredArray?.map(({ slug, title, imageUrl, location }) => (
                <div className="group">
                  <Link to={`/projects/${slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[280px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-xl font-bold mb-1">{title}</h3>
                        <p className="text-white/80">{location}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors group"
            >
              <span className="border-b-2 border-gray-900 group-hover:border-gray-700">
                {viewAllLabel}
              </span>
              <ArrowRight
                size={20}
                className="ml-2 transform group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
