export interface Project {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: string;
  year: string;
  area: string;
  imageUrl: string;
  gallery?: string[];
  description?: string;
  client?: string;
  status?: string;
  team?: string[];
}