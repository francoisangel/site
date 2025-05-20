import React from "react";
import ProjectGrid from "../components/projects/ProjectGrid";
import QuoteSection from "../components/shared/QuoteSection";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "../components/ui/Link";
import { useTranslation } from "../translations";
import { useFetch } from "../hooks/useFetch";

const Projects: React.FC = () => {
  const { t, language } = useTranslation();
  const currentLanguage = language;

  const query = `
    *[_type == "projectsPage"]{
      ...,
      projects[]->{
        id,
        title,
        slug,
        location,
        type,
        year,
        area,
        imageUrl,
        gallery,
        description,
        client,
        status,
        team,
        isFeatured
      }
    }
  `;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return null;
  if (error) return <div>Error</div>;

  const projectsPageContent = data[0];

  return (
    <div className="pt-14">
      <div className="bg-[#1F2937] text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${projectsPageContent.heroImgUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {projectsPageContent.heroTitle[currentLanguage]}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {projectsPageContent.heroSubtitle[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

      <ProjectGrid projects={projectsPageContent.projects} lng={language} />

      <section className="py-16 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 tracking-tight text-center">
              {t("projects.testimonials.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectsPageContent.testimonials.map(
                (testimonial: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-6 relative group hover:shadow-lg transition-shadow duration-300"
                  >
                    <Quote
                      size={24}
                      className="text-gray-200 absolute top-4 right-4 transform transition-transform duration-300 group-hover:scale-110"
                    />

                    <p className="text-gray-700 text-sm mb-6 relative z-10">
                      "{testimonial.text[currentLanguage]}"
                    </p>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role[currentLanguage]}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company[currentLanguage]}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                )
              )}
            </div>

            <div className="mt-16 bg-[#EDEADE] p-16 relative group">
              <div className="absolute inset-4 border border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center max-w-2xl mx-auto relative">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  {t("projects.testimonials.cta.title")}
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {t("projects.testimonials.cta.description")}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {t("projects.testimonials.cta.button")}
                  </span>
                  <ArrowRight
                    size={20}
                    className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quote={projectsPageContent?.quote[language]} />
    </div>
  );
};

export default Projects;
