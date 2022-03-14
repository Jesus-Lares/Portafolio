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
    image: "maladt.png",
    title: "Maladt",
    paragraph:
      "Sitio web para una empresa de desarrollo de tecnologías aplicadas al día a día para llevar las ideas al siguiente nivel.",
    tools: ["Wordpress", "Divi", "Php"],
    redirects: [
      {
        url: "https://maladt.com/",
        image: "share",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    image: "movie.png",
    title: "Movie recommendation",
    paragraph:
      "Sitio web desarrollado para brindarte una recomendación de peliculas segun tu selección, ademas de proporcionarte secciones de lo mas visto, mas gustado y entre otras cosas.",
    tools: ["React", "Sass", "Typescript", "Api TMDB"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/movie_recommendation_react",
        image: "github",
        alt: "Repositorio en github",
      },
      {
        url: "https://moviereco.jesuslares.com/#/",
        image: "share",
        alt: "Ir al sitio web",
      },
    ],
  },
  {
    image: "quotes.png",
    title: "Api Quotes",
    paragraph:
      "Api rest-full creada con la finalidad para que cada día te de una cita aleatoria que se el usuario proporcione o de las citas globales con la finalidad de el usuario pueda darle un sentido a la cita durante el día.",
    tools: ["Node", "Typescript", "Planet Scale", "Mysql"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/apiQuotes",
        image: "github",
        alt: "Repositorio en github",
      },
    ],
  },
];

export const smallProjects: projectInterface[] = [
  {
    title: "Algoritmos Basicos ",
    paragraph:
      "Algoritmos basicos en donde se busca ampliar la logica del programador.",
    tools: ["Python", "Grafos", "Busqueda"],
    redirects: [
      {
        url: "https://github.com/Jesus-Lares/Algoritmos-Basicos",
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
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
        image: "github",
        alt: "Repositorio en github",
      },
    ],
  },
];
