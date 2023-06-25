import {
  faBriefcase,
  faHouse,
  faPaperPlane,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import envs from "@core/config/env";
import { Route } from "@interface";

export const routes: Route[] = [
  {
    path: `${envs.url}/#home`,
    name: "Inicio",
    icon: faHouse,
  },
  {
    path: `${envs.url}/#about`,
    name: "Acerca",
    icon: faUserAlt,
  },
  {
    path: `${envs.url}/#projects`,
    name: "Proyectos",
    icon: faBriefcase,
  },
  {
    path: `${envs.url}/#contact`,
    name: "Contacto",
    icon: faPaperPlane,
  },
];
