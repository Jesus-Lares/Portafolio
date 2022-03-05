import { skills, skillsInterface } from "../../utils/icons";
import Icon from "../Icon";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.containerSkills}>
        {skills.map((skill: skillsInterface) => (
          <Icon
            alt={skill.name}
            key={skill.name}
            image={skill.icon}
            size={40}
            url={skill.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
