import { Project } from "../types/project";

export const getProjectLocations = (projects, lng): string[] => {
  const locations = projects?.map((project) => project?.location[lng]);
  return [...new Set(locations)];
};

export const getProjectTypes = (projects): string[] => {
  const types = projects?.map((project) => project?.type);
  return [...new Set(types)];
};

export const filterProjects = (
  locationFilters: string[] = [],
  typeFilters: string[] = [],
  projects,
  lng
): Project[] => {
  if (locationFilters.length === 0 && typeFilters.length === 0) {
    return projects;
  }

  return projects.filter((project) => {
    const matchesLocation =
      locationFilters.length === 0 ||
      locationFilters.includes(project.location[lng]);
    const matchesType =
      typeFilters.length === 0 || typeFilters.includes(project.type);
    return matchesLocation && matchesType;
  });
};
