import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailComponent from "../components/projects/ProjectDetail";
import { trackProjectView } from "../utils/analytics";
import { useFetch } from "../hooks/useFetch";

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>() || { slug: "riverside-villa" };

  const query = `
    *[_type == "projects"]{
      ...,
      "slug": slug.current
    }
  `;

  const { data, isLoading, error } = useFetch(query);

  useEffect(() => {
    if (data && data.length > 0) {
      const project = data.find((p: any) => p.slug === slug);
      if (project) {
        trackProjectView(project.title, project.type);
      }
    }
  }, [data, slug]);

  if (isLoading) return null;
  if (error) return <div>Error</div>;

  const project = data.find((p: any) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">
          Sorry, the project you're looking for does not exist.
        </p>
      </div>
    );
  }

  const currentIndex = data.findIndex(
    (p: any) => Number(p.id) === Number(project.id)
  );
  const prevProject = currentIndex > 0 ? data[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < data.length - 1 ? data[currentIndex + 1] : undefined;

  return (
    <div className="pt-16">
      <ProjectDetailComponent
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default ProjectDetailPage;
