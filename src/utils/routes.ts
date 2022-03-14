import {
  faBriefcase,
  faHouse,
  faPaperPlane,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface routeInterface {
  path: string;
  name: string;
  icon: IconDefinition;
}
export const routes: routeInterface[] = [
  {
    path: `${process.env.URL}#home`,
    name: "Inicio",
    icon: faHouse,
  },
  {
    path: `${process.env.URL}#about`,
    name: "Acerca",
    icon: faUserAlt,
  },
  {
    path: `${process.env.URL}#projects`,
    name: "Proyectos",
    icon: faBriefcase,
  },
  {
    path: `${process.env.URL}#contact`,
    name: "Contacto",
    icon: faPaperPlane,
  },
];
