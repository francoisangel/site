import React from "react";
import {
  Lightbulb,
  PencilRuler,
  Building,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "../ui/Link";
import { useTranslation } from "../../translations";

const allSteps = {
  en: {
    steps: [
      {
        icon: <Lightbulb size={28} />,
        title: "Vision & Concept",
        description:
          "We transform your aspirations into bold and innovative architectural concepts.",
      },
      {
        icon: <PencilRuler size={28} />,
        title: "Design & Planning",
        description:
          "Every detail is carefully studied to create spaces that inspire and endure.",
      },
      {
        icon: <Building size={28} />,
        title: "Realization",
        description:
          "Our expertise ensures precise execution that stays true to your initial vision.",
      },
      {
        icon: <CheckCircle size={28} />,
        title: "Excellence",
        description:
          "The final result exceeds expectations, creating spaces that enrich life.",
      },
    ],
  },
  pt: {
    steps: [
      {
        icon: <Lightbulb size={28} />,
        title: "Visão & Conceito",
        description:
          "Transformamos suas aspirações em conceitos arquitetônicos ousados e inovadores.",
      },
      {
        icon: <PencilRuler size={28} />,
        title: "Design & Planejamento",
        description:
          "Cada detalhe é cuidadosamente estudado para criar espaços que inspiram e duram.",
      },
      {
        icon: <Building size={28} />,
        title: "Realização",
        description:
          "Nossa expertise garante uma execução precisa que permanece fiel à sua visão inicial.",
      },
      {
        icon: <CheckCircle size={28} />,
        title: "Excelência",
        description:
          "O resultado final supera as expectativas, criando espaços que enriquecem a vida.",
      },
    ],
  },
  fr: {
    steps: [
      {
        icon: <Lightbulb size={28} />,
        title: "Vision & Concept",
        description:
          "Nous transformons vos aspirations en concepts architecturaux audacieux et innovants.",
      },
      {
        icon: <PencilRuler size={28} />,
        title: "Design & Planification",
        description:
          "Chaque détail est soigneusement étudié pour créer des espaces inspirants et durables.",
      },
      {
        icon: <Building size={28} />,
        title: "Réalisation",
        description:
          "Notre expertise garantit une exécution précise qui reste fidèle à votre vision initiale.",
      },
      {
        icon: <CheckCircle size={28} />,
        title: "Excellence",
        description:
          "Le résultat final dépasse les attentes, créant des espaces qui enrichissent la vie.",
      },
    ],
  },
};

const translations = {
  beginLabel: {
    en: "Begin Your Journey",
    pt: "Comece Sua Jornada",
    fr: "Commencez Votre Voyage",
  },
  title: {
    en: "Crafting excellence through process",
    pt: "Criando excelência através do processo",
    fr: "Façonner l'excellence à travers le processus",
  },
  subtitle: {
    en: "Our meticulous process ensures that each project embodies architectural excellence, from initial concept to final realization.",
    pt: "Nosso processo meticuloso garante que cada projeto incorpore excelência arquitetônica, desde o conceito inicial até a realização final.",
    fr: "Notre processus méticuleux garantit que chaque projet incarne l'excellence architecturale, du concept initial à la réalisation finale.",
  },
};
const ProcessSection: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section className="py-16 bg-[#F8F7F4]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-[2.8rem] font-bold mb-7 tracking-tight text-gray-900 leading-tight">
                {translations?.title[language]}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                {translations?.subtitle[language]}
              </p>
            </div>

            <div className="relative h-56">
              <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-7 translate-y-7"></div>
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczP-S2bKgAXW3z_pKJBv83JZ9xhkd6MuesHW_4UazQp9GKowxGTgvkda3VmH3HxW234BFr7c9D1bFvvlNxXQzZVn2t6dLjmJlV3W7xXE2uQob6uG7TSQs1sGL9wlxKJ2Lxer_fEmorspx525nR3dWmi2=w2634-h1756-s-no-gm?authuser=1"
                alt="Architectural Process"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
              <div className="absolute inset-4 bg-[#EDEADE] opacity-10"></div>
            </div>
          </div>

          <div className="space-y-14">
            {allSteps[language]?.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-7 group">
                <div className="w-16 h-16 flex-shrink-0 bg-white border-2 border-gray-900 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-gray-900 transform group-hover:-rotate-12 transition-transform duration-500">
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 bg-gray-900 text-white group relative overflow-hidden"
            >
              <span className="relative z-10">
                {" "}
                {translations?.beginLabel[language]}
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
    </section>
  );
};

export default ProcessSection;
