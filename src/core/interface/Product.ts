export interface Skill {
  name: string;
  icon: string;
  url: string;
}

export interface Link {
  link: string;
  name: string;
}

export interface Redirect {
  url: string;
  image: string;
  alt: string;
}
export interface Project {
  title: string;
  paragraph: string;
  tools: string[];
  redirects: Redirect[];
}
export interface BigProject extends Project {
  image: string;
}

export interface Product {
  links: Link[];
  skills: Skill[];
  bigProjects: BigProject[];
  projects: Project[];
}
