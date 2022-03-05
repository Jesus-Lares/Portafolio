import { useState } from "react";
import BigProjects from "../../components/BigProjects";
import Btn from "../../components/Btn";
import SectionTitle from "../../components/SectionTitle";
import SmallProjects from "../../components/SmallProjects/SmallProjects";
import {
  bigProjectInterface,
  bigProjects,
  projectInterface,
  smallProjects,
} from "../../utils/bigProjects";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [moreProjects, setMoreProjects] = useState(false);
  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle title="Ultimos Proyectos" />

      <ul className={styles.container}>
        {bigProjects.map((bigProject: bigProjectInterface, index: number) => (
          <li key={index}>
            <BigProjects {...bigProject} index={index} key={bigProject.title} />
          </li>
        ))}
      </ul>
      <SectionTitle title="Otros Proyectos" />
      <ul className={`${styles.container} ${styles.small}`}>
        {smallProjects.map((smallProject: projectInterface, index: number) => {
          if (moreProjects)
            return (
              <li key={index}>
                <SmallProjects {...smallProject} />
              </li>
            );
          if (index < 6)
            return (
              <li key={index}>
                <SmallProjects {...smallProject} />
              </li>
            );
        })}
      </ul>
      <div className={styles.btnContainer}>
        <Btn
          text={moreProjects ? "Ver menos" : "Ver mas"}
          onClick={() => setMoreProjects((e) => !e)}
        />
      </div>
    </section>
  );
};

export default Projects;
