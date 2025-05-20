import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, X } from "lucide-react";
import { Link } from "../ui/Link";
import { Project } from "../../types/project";
import { useTranslation } from "../../translations";

const detailsLabel = {
  en: "Project Details",
  fr: "Détails du Projet",
  pt: "Detalhes do Projeto",
};

const projectTypes = {
  commercial: {
    en: "Commercial",
    pt: "Comercial",
    fr: "Commercial",
  },
  garden: {
    en: "Garden",
    pt: "Jardim",
    fr: "Jardin",
  },
  residential: {
    en: "Residential - Refurbishment",
    pt: "Residencial - Reforma",
    fr: "Résidentiel - Rénovation",
  },
  cultural: {
    en: "Cultural",
    pt: "Cultural",
    fr: "Culturel",
  },
  educational: {
    en: "Educational",
    pt: "Educacional",
    fr: "Éducatif",
  },
};

interface ProjectDetailProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { t, language } = useTranslation();
  const currentLanguage = language;

  const handleNextImage = () => {
    if (project.gallery) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (project.gallery) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="pb-20">
      {/* Main image */}
      <div
        className="w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.gallery?.[0] || project.imageUrl})`,
        }}
      >
        <div className="container mx-auto h-full flex items-end">
          <div className="bg-white p-6 mb-8 shadow-lg max-w-xl">
            <h1 className="text-3xl font-bold mb-2">
              {project.title[currentLanguage]}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">
                  {t("common.location")}:
                </span>
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{t("common.year")}:</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{t("common.area")}:</span>
                <span>{project.area}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{t("common.type")}:</span>
                <span>{projectTypes[project.type][currentLanguage]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-gray-200">
        <Link
          to="/projects"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>{t("common.backToProjects")}</span>
        </Link>

        <div className="flex items-center space-x-4">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft size={18} className="mr-1" />
              <span>{t("common.previous")}</span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <span>{t("common.next")}</span>
              <ChevronRight size={18} className="ml-1" />
            </Link>
          )}
        </div>
      </div>

      {/* Project content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {project.description[currentLanguage]}
            </p>

            {/* Image gallery */}
            {project.gallery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer relative aspect-w-4 aspect-h-3 overflow-hidden"
                    onClick={() => openLightbox(index)}
                  >
                    <div
                      className="w-full h-0 pb-[75%] bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="bg-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">
                {detailsLabel[currentLanguage]}
              </h3>

              <div className="space-y-4">
                {project.client && (
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {t("common.client")}
                    </h4>
                    <p className="text-gray-700">
                      {project.client[currentLanguage]}
                    </p>
                  </div>
                )}

                {project.status && (
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {t("common.status")}
                    </h4>
                    <p className="text-gray-700">
                      {project.status[currentLanguage]}
                    </p>
                  </div>
                )}

                {project.team && (
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {t("common.team")}
                    </h4>
                    <ul className="text-gray-700">
                      {project.team.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && project.gallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={project.gallery[currentImageIndex]}
            alt={project.title[currentLanguage]}
            className="max-h-[90vh] max-w-[90vw]"
          />

          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50"
            onClick={handleNextImage}
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
