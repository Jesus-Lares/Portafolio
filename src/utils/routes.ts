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
    path: "#home",
    name: "Inicio",
    icon: faHouse,
  },
  {
    path: "#about",
    name: "Acerca",
    icon: faUserAlt,
  },
  {
    path: "#projects",
    name: "Proyectos",
    icon: faBriefcase,
  },
  {
    path: "#contact",
    name: "Contacto",
    icon: faPaperPlane,
  },
];
