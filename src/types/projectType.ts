export type ProjectType = {
  project?: Project[];
};

type Project = {
  id?: string;
  title?: string;
  description?: string;
  budget?: number;
  specialty?: number;
};
