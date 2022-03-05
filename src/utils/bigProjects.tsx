export interface redirects {
  url: string;
  image: string;
  alt: string;
}
export interface projectInterface {
  title: string;
  paragraph: string;
  tools: string[];
  redirects: redirects[];
}
export interface bigProjectInterface extends projectInterface {
  image: string;
}

export const bigProjects: bigProjectInterface[] = [
  {
    image: "maladt",
    title: "Maladt",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga commodi dolorum at asperiores reiciendis quia facilis architecto doloremque ipsam iure fugit enim blanditiis, distinctio iste praesentium quos esse nihil.",
    tools: ["react", "sass", "wordpress"],
    redirects: [
      {
        url: "",
        image: "github",
        alt: "Repositorio en github",
      },
      {
        url: "",
        image: "share",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    image: "Rmovie",
    title: "Movie recommendation",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga commodi dolorum at asperiores reiciendis quia facilis architecto doloremque ipsam iure fugit enim blanditiis, distinctio iste praesentium quos esse nihil.",
    tools: ["react", "sass", "wordpress"],
    redirects: [],
  },
  {
    image: "quotes",
    title: "Api Quotes",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga commodi dolorum at asperiores reiciendis quia facilis architecto doloremque ipsam iure fugit enim blanditiis, distinctio iste praesentium quos esse nihil.",
    tools: ["react", "sass", "wordpress"],
    redirects: [],
  },
];

export const smallProjects: projectInterface[] = [
  {
    title: "Maladt",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga commodi dolorum at asperiores reiciendis quia facilis architecto doloremque ipsam iure fugit enim blanditiis, distinctio iste praesentium quos esse nihil.",
    tools: ["react", "sass", "wordpress"],
    redirects: [
      {
        url: "",
        image: "github",
        alt: "Repositorio en github",
      },
      {
        url: "",
        image: "share",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    title: "Movie recommendation",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fu.",
    tools: ["react", "sass", "wordpress"],
    redirects: [
      {
        url: "",
        image: "github",
        alt: "Repositorio en github",
      },
      {
        url: "",
        image: "share",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    title: "Api Quotes",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga commodi dolorum at asperiores reiciendis quia facilis architecto doloremque ipsam iure fugit enim blanditiis, distinctio iste praesentium quos esse nihil.",
    tools: ["react", "sass", "wordpress"],
    redirects: [],
  },
];
