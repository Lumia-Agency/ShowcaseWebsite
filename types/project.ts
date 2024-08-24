export type ProjectType = "internal" | "client";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  caption: string;
  banner?: string;
}
