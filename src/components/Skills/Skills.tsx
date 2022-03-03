import Image from "next/image";

import { skills, skillsInterface } from "../../utils/icons";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.containerSkills}>
        {skills.map((skill: skillsInterface) => (
          <a key={skill.name} data-tooltip={skill.name} data-placement="top">
            <Image
              src={`/icons/${skill.icon}.svg`}
              alt={skill.name}
              width={40}
              height={40}
              quality={30}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
