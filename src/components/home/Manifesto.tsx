import React from "react";
import { useTranslation } from "../../translations";

const Manifesto: React.FC = ({ manifesto }: any) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-28 bg-[#F8F7F4]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-[2.8rem] font-bold mb-5 sm:mb-7 tracking-tight text-gray-900 leading-tight">
                {manifesto.title}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-5 sm:mb-7">
                {manifesto.description1}
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                {manifesto.description2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 px-4 sm:px-0">
              <div className="space-y-5 sm:space-y-7">
                <div className="border-l-2 border-gray-900 pl-4 sm:pl-5">
                  <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {manifesto.metrics.yearsOfExp}+
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    {t("home.manifesto.stats.experience")}
                  </span>
                </div>

                <div className="border-l-2 border-gray-900 pl-4 sm:pl-5">
                  <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {manifesto.metrics.completedProjects}+
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    {t("home.manifesto.stats.projects")}
                  </span>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-7 mt-8 sm:mt-10">
                <div className="border-l-2 border-gray-900 pl-4 sm:pl-5">
                  <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {manifesto.metrics.numberOfCountries}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    {t("home.manifesto.stats.countries")}
                  </span>
                </div>

                <div className="border-l-2 border-gray-900 pl-4 sm:pl-5">
                  <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {manifesto.metrics.awards}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    {t("home.manifesto.stats.awards")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
