import { FC, memo, useCallback, useState } from "react";

import { BasicProjects, BigProjects } from "@e/home/components";
import { Button, SectionTitle } from "@components";
import { BigProject as IBigProject, Project } from "@interface";

import S from "./Projects.module.scss";

interface Props {
  bigProjects: IBigProject[];
  projects: Project[];
}

const LIMIT_SHOW_PROJECTS = 6;

const Projects: FC<Props> = ({ bigProjects, projects }) => {
  const [moreProjects, setMoreProjects] = useState(false);

  const handleButton = useCallback(() => setMoreProjects((e) => !e), []);

  return (
    <section id="projects" className={S.projects}>
      <SectionTitle title="Ultimos Proyectos" />
      <BigProjects bigProjects={bigProjects} />
      <SectionTitle title="Otros Proyectos" />
      <BasicProjects
        projects={projects}
        moreProjects={moreProjects}
        limit={LIMIT_SHOW_PROJECTS}
      />
      {projects.length > LIMIT_SHOW_PROJECTS ? (
        <div className={S.btnContainer}>
          <Button
            text={moreProjects ? "Ver menos" : "Ver mas"}
            onClick={handleButton}
          />
        </div>
      ) : null}
    </section>
  );
};

export default memo(Projects);
