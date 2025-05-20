import React, { useEffect, useRef } from "react";
import {
  Building2,
  Ruler,
  Home,
  TreePine,
  Clock,
  Shield,
  Target,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Link } from "../ui/Link";
import { useTranslation } from "../../translations";

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: ServiceDetail[];
}

const ServicesGrid: React.FC = ({ servicesGrid }: any) => {
  const { t, language } = useTranslation();
  const startYourVisionLabel =
    language === "pt"
      ? "Comece a sua visão"
      : language === "fr"
      ? "Commencez votre vision"
      : "Start Your Vision";
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      icon: <Building2 size={32} className="text-gray-800" />,
      title: t("home.services.architecture.title"),
      description: t("home.services.architecture.description"),
      details: [
        {
          icon: <Ruler size={20} />,
          title: t("home.services.architecture.details.design"),
          description:
            language === "pt"
              ? "Arquitetura inovadora"
              : language === "fr"
              ? "Architecture innovante"
              : "Innovative Architecture",
        },
        {
          icon: <TreePine size={20} />,
          title: t("home.services.architecture.details.sustainability"),
          description:
            language === "pt"
              ? "Abordagem ecológica"
              : language === "fr"
              ? "Approche écologique"
              : "Eco-friendly approach",
        },
        {
          icon: <Clock size={20} />,
          title: t("home.services.architecture.details.timeless"),
          description:
            language === "pt"
              ? "Qualidade duradoura"
              : language === "fr"
              ? "Qualité durable"
              : "Lasting quality",
        },
      ],
    },
    {
      icon: <Ruler size={32} className="text-gray-800" />,
      title: t("home.services.supervision.title"),
      description: t("home.services.supervision.description"),
      details: [
        {
          icon: <Shield size={20} />,
          title: t("home.services.supervision.details.quality"),
          description:
            language === "pt"
              ? "Padrões rigorosos"
              : language === "fr"
              ? "Normes rigoureuses"
              : "Rigorous standards",
        },
        {
          icon: <Target size={20} />,
          title: t("home.services.supervision.details.planning"),
          description:
            language === "pt"
              ? "Supervisão especializada"
              : language === "fr"
              ? "Supervision experte"
              : "Expert supervision",
        },
        {
          icon: <Calculator size={20} />,
          title: t("home.services.supervision.details.tracking"),
          description:
            language === "pt"
              ? "Controle de custos"
              : language === "fr"
              ? "Contrôle des coûts"
              : "Cost control",
        },
      ],
    },
    {
      icon: <Home size={32} className="text-gray-800" />,
      title: t("home.services.realEstate.title"),
      description: t("home.services.realEstate.description"),
      details: [
        {
          icon: <Shield size={20} />,
          title: t("home.services.realEstate.details.analysis"),
          description:
            language === "pt"
              ? "Avaliação especializada"
              : language === "fr"
              ? "Évaluation experte"
              : "Expert evaluation",
        },
        {
          icon: <Calculator size={20} />,
          title: t("home.services.realEstate.details.investment"),
          description:
            language === "pt"
              ? "Planejamento estratégico"
              : language === "fr"
              ? "Planification stratégique"
              : "Strategic planning",
        },
        {
          icon: <Target size={20} />,
          title: t("home.services.realEstate.details.surveys"),
          description:
            language === "pt"
              ? "Relatórios de consultoria"
              : language === "fr"
              ? "Rapports de conseil"
              : "Consulting Reports",
        },
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-details");
        }
      });
    }, options);

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center mb-14">
            <div className="aspect-square bg-[#EDEADE] p-7 relative">
              <img
                src={servicesGrid?.imageUrl}
                alt="Architectural Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-gray-900"></div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[2.8rem] font-bold mb-5 sm:mb-7 tracking-tight text-gray-900 leading-tight">
                {servicesGrid?.title}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-7">
                {servicesGrid?.subtitle}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-7 py-3 bg-gray-900 text-white group relative overflow-hidden"
              >
                <span className="relative z-10">{startYourVisionLabel}</span>
                <ArrowRight
                  size={18}
                  className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="group relative p-5 sm:p-7 bg-[#F8F7F4] transition-transform duration-500 hover:-translate-y-2 opacity-0 translate-y-10 min-h-[320px] flex flex-col"
                style={{
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <div className="mb-4 sm:mb-5">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {service.details && (
                  <div className="absolute inset-0 bg-white p-5 sm:p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-gray-900">
                      {service.title}
                    </h3>
                    <div className="space-y-4">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="text-gray-800 flex-shrink-0">
                            {detail.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {detail.title}
                            </h4>
                            <p className="text-base text-gray-600">
                              {detail.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="absolute top-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-t-2 border-r-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-b-2 border-l-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .show-details {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
