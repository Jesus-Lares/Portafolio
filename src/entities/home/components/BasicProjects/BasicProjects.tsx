import { FC, memo, useMemo } from "react";

import { HeaderCard } from "..";
import { Project } from "@interface";
import { Tools } from "@components";

import S from "./BasicProjects.module.scss";

interface Props {
  projects: Project[];
  moreProjects: boolean;
  limit: number;
}

const BasicProject: FC<Props> = ({ projects, moreProjects, limit }) => {
  const showBasicProjects = useMemo(() => {
    return projects.map((project: Project, index: number) => {
      const showProject = moreProjects || index < limit;
      if (!showProject) return null;

      const { title, paragraph, tools, redirects } = project;
      return (
        <li key={title}>
          <div className={S.info}>
            <HeaderCard redirects={redirects} title={title} />
            <p>{paragraph}</p>
            <Tools tools={tools} />
          </div>
        </li>
      );
    });
  }, [projects, moreProjects, limit]);

  return <ul className={S.container}>{showBasicProjects}</ul>;
};

export default memo(BasicProject);
