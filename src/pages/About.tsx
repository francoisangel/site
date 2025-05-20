import React from "react";
import QuoteSection from "../components/shared/QuoteSection";
import { ArrowRight } from "lucide-react";
import { Link } from "../components/ui/Link";
import { useTranslation } from "../translations";
import { useFetch } from "../hooks/useFetch";

const About: React.FC = () => {
  const { t, language } = useTranslation();
  const currentLanguage = language;

  const query = `
    *[_type == "aboutPage"]
  `;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return null;
  if (error) return <div>Error</div>;

  const aboutPageContent = data[0];

  return (
    <div className="pt-14">
      <div className="bg-[#1F2937] text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${aboutPageContent.heroImg})` }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {aboutPageContent.heroTitle[currentLanguage]}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {aboutPageContent.heroSubtitle[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative w-[83%]">
                <div className="aspect-[3/4] relative z-10">
                  <img
                    src={aboutPageContent.founderImg}
                    alt="François Angel, Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-7 translate-y-7"></div>
              </div>

              <div className="lg:pt-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-7 tracking-tight text-gray-900 leading-tight">
                  {aboutPageContent.founderTitle[currentLanguage]}
                </h2>
                <p className="text-lg text-gray-600 mb-7">
                  {aboutPageContent.founderSubtitle[currentLanguage]}
                </p>

                <div className="space-y-5">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {aboutPageContent.founderParagraph1[currentLanguage]}
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed">
                    {aboutPageContent.founderParagraph2[currentLanguage]}
                  </p>

                  <div className="pt-7">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-7 py-3 bg-gray-900 text-white group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {t("about.founder.cta")}
                      </span>
                      <ArrowRight
                        size={18}
                        className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="lg:order-2">
                <div className="relative w-[63%] mx-auto">
                  <div className="aspect-[3/4] relative z-10">
                    <img
                      src={aboutPageContent.ourExpertiseImg}
                      alt="Architectural Vision"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-gray-900 transform -translate-x-7 translate-y-7"></div>
                </div>
              </div>

              <div className="lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-7 tracking-tight text-gray-900 leading-tight">
                  {aboutPageContent.ourExpertiseTitle[currentLanguage]}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-7">
                  {aboutPageContent.ourExpertiseSubtitle[currentLanguage]}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {aboutPageContent.expertiseElements.map(
                    (element: any, index: number) => (
                      <div key={index} className="p-4 bg-white">
                        <h3 className="text-lg font-bold mb-2">
                          {element.title[currentLanguage]}
                        </h3>
                        <p className="text-gray-700 text-sm">
                          {element.description[currentLanguage]}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-video w-full">
                    <iframe
                      src={aboutPageContent.trackRecordsYoutubeVideoUrl}
                      title="Square Way Architecture Showcase"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-7 translate-y-7 -z-10"></div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-7 tracking-tight text-gray-900 leading-tight">
                  {t("about.track.title")}
                </h2>
                <div className="space-y-5">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {aboutPageContent.trackRecordsParagraph[currentLanguage]}
                  </p>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="border-l-2 border-gray-900 pl-5">
                      <span className="block text-4xl font-bold text-gray-900 mb-2">
                        {aboutPageContent.trackRecordsYearOfExp}+
                      </span>
                      <span className="text-gray-600 text-sm">
                        {t("about.track.stats.experience")}
                      </span>
                    </div>

                    <div className="border-l-2 border-gray-900 pl-5">
                      <span className="block text-4xl font-bold text-gray-900 mb-2">
                        {aboutPageContent.trackRecordsCompletedProjects}+
                      </span>
                      <span className="text-gray-600 text-sm">
                        {t("about.track.stats.projects")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quote={aboutPageContent.quote[currentLanguage]} />
    </div>
  );
};

export default About;
