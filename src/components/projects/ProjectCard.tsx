import React from "react";
import { Link } from "../ui/Link";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lng }) => {
  return (
    <div className="group">
      <Link to={`/projects/${project.slug.current}`} className="block">
        <div className="relative overflow-hidden">
          <div
            className="aspect-w-4 aspect-h-3 bg-gray-200 transform transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingBottom: "85%",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-semibold mb-1">{project.title[lng]}</h3>
            <div className="flex items-center text-sm space-x-2 text-white/80">
              <span>{project.location}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
