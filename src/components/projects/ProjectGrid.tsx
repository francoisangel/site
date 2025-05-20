import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { Project } from "../../types/project";
import {
  getProjectLocations,
  getProjectTypes,
  filterProjects,
} from "../../data/projects";
import { useTranslation } from "../../translations";

const ProjectGrid: React.FC = ({ projects, lng }) => {
  console.log({ projects });
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  const locations = getProjectLocations(projects, lng);
  const types = getProjectTypes(projects, lng);

  useEffect(() => {
    setFilteredProjects(filterProjects([], [], projects, lng));
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-project");
        }
      });
    }, options);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const handleFilterChange = (filters: {
    locations: string[];
    types: string[];
  }) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilteredProjects(
        filterProjects(filters.locations, filters.types, projects, lng)
      );
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <ProjectFilters
        locations={locations}
        types={types}
        onFilterChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`opacity-0 translate-y-10 transition-all duration-700 delay-${Math.min(
              index * 100,
              500
            )}`}
          >
            <ProjectCard project={project} lng={lng} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-600">{t("common.noProjectsFound")}</p>
        </div>
      )}

      <style>{`
        .show-project {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;
