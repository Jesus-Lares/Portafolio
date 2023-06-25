import { BigProject, Link, Product, Project, Quote, Skill } from "@interface";

const skills: Skill[] = [
  {
    name: "React",
    icon: "react.svg",
    url: "https://es.reactjs.org/",
  },
  {
    name: "Typescript",
    icon: "typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Node",
    icon: "node.svg",
    url: "https://nodejs.dev/",
  },
  {
    name: "Python",
    icon: "python.svg",
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: "java.svg",
    url: "https://www.java.com/",
  },
  {
    name: "C++",
    icon: "cpp.svg",
    url: "https://visualstudio.microsoft.com/es/vs/features/cplusplus/",
  },
  {
    name: "Matlab",
    icon: "matlab.svg",
    url: "https://www.mathworks.com/?s_tid=gn_logo",
  },
  {
    name: "Git",
    icon: "git.svg",
    url: "https://git-scm.com/",
  },
  {
    name: "Figma",
    icon: "figma.webp",
    url: "https://www.figma.com/",
  },
  {
    name: "Solidworks",
    icon: "solidworks.svg",
    url: "https://www.solidworks.com",
  },
];

const links: Link[] = [
  {
    link: "https://codepen.io/jesus-lares",
    name: "Codepen",
  },
  {
    link: "https://www.linkedin.com/in/jesus-lares-5411b6189",
    name: "Linkedin",
  },
  {
    link: "https://github.com/Jesus-Lares",
    name: "Github",
  },
];

export const bigProjects: BigProject[] = [
  {
    image: "maladt.webp",
    title: "Maladt",
    paragraph:
      "Sitio web para una empresa de desarrollo de tecnologías aplicadas al día a día para llevar las ideas al siguiente nivel.",
    tools: ["Wordpress", "Divi", "Php"],
    redirects: [
      {
        url: "https://maladt.com/",
        image: "share.svg",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    image: "movie.webp",
    title: "Movie recommendation",
    paragraph:
      "Sitio web desarrollado para brindarte una recomendación de peliculas segun tu selección, ademas de proporcionarte secciones de lo mas visto, mas gustado y entre otras cosas.",
    tools: ["React", "Sass", "Typescript", "Api TMDB"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/movie_recommendation_react",
        image: "github.svg",
        alt: "Repositorio en github",
      },
      {
        url: "https://recommendationMovie.jesuslares.com/",
        image: "share.svg",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    image: "quotes.webp",
    title: "Api Quotes",
    paragraph:
      "Api rest-full creada con la finalidad para que cada día te de una cita aleatoria que se el usuario proporcione o de las citas globales con la finalidad de el usuario pueda darle un sentido a la cita durante el día.",
    tools: ["Node", "Typescript", "Planet Scale", "Mysql"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/apiQuotes",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Algoritmos Basicos ",
    paragraph:
      "Algoritmos basicos en donde se busca ampliar la logica del programador.",
    tools: ["Python", "Grafos", "Busqueda"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Algoritmos-Basicos",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "CloneDrive",
    paragraph:
      "Clone de google drive con las funciones basicas que este genera",
    tools: ["React", "Sass", "React router dom"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/CloneDrive",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "Api para subir archivos ",
    paragraph:
      "Api que busca generar un Crud basico con los archivos en tu computadora.",
    tools: ["Node", "MongoDB"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/BackendUploadFiles",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "Detector de cubrebocas ",
    paragraph:
      "Programa capaz de detectar si la persona cuenta con un cubrebocas o no usando visión artificial y te da la respuesta a esta incognita .",
    tools: ["Python", "Visión artificial", "OpenCV"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Detector_de_Cubrebocas",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "Juego Clue",
    paragraph:
      "Este es un proyecto escolar. Es una simulación del juego de mesa Clue con unas historias distintas con la finalidad de diseñar un sistema experto en menor escala.",
    tools: ["Pyrhon", "PyQt5"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Juego_Clue",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "8 Reinas",
    paragraph:
      "Solución del problema de las 8 reinas que se basa en posicionar 8 reinas en un tablero de ajedrez sin que se ataquen entre ellas.",
    tools: ["Python", ""],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Soluciones-Reinas",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },

  {
    title: "Algoritmo prim  ",
    paragraph:
      "Este es un algoritmo para encontrar un subconjunto de las aristas que formen un árbol que incluya todos los vértices del grafo inicial, donde el peso total de las aristas del árbol es el mínimo posible.",
    tools: ["Python", "Grafos"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Algoritmo-Prim",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "Regresion lineal multiple ",
    paragraph:
      "Algoritmo de machine learning enfocado en la predicción de datos en donde se intenta dar explicación de la relación que existe entre la variable de respuesta y multiples variable explicativas.",
    tools: ["react", "sass", "wordpress"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Regresion-Lineal-Multiple",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
  {
    title: "Regresion lineal",
    paragraph:
      "Algoritmo de machine learning enfocado en la predicción de datos en donde se intenta dar explicación de la relación que existe entre la variable respuesta Y y una única variable explicativa X.",
    tools: ["Python", "Machine Learning", "wordpress", "Sklearn"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Regresion-Lineal",
        image: "github.svg",
        alt: "Repositorio en github",
      },
    ],
  },
];

export const product: Product = {
  skills,
  links,
  bigProjects,
  projects,
};

export const quote: Quote = {
  quote:
    "No conozco ningún otro hecho más estimulante que la incuestionable habilidad del hombre para elevar su vida mediante un esfuerzo consciente.",
  writer: "Henry David Thoreau",
};
