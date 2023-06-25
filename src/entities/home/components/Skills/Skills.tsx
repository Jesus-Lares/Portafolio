import { FC, memo } from "react";

import { Icon } from "@components";
import { product } from "src/data";

import S from "./Skills.module.scss";

const { skills } = product;

const Skills: FC = () => {
  return (
    <div className={S.skills}>
      <h2>Skills</h2>
      <ul className={S.containerSkills}>
        {skills.map(({ name, icon, url }) => (
          <Icon alt={name} key={name} image={icon} size={30} url={url} />
        ))}
      </ul>
    </div>
  );
};

export default memo(Skills);
