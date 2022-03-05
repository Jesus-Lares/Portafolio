import { projectInterface } from "../../utils/bigProjects";
import HeaderCard from "../HeaderCard";
import styles from "./SmallProjects.module.scss";

const SmallProjects = ({
  title,
  paragraph,
  tools,
  redirects,
}: projectInterface) => {
  return (
    <div className={styles.info}>
      <>
        <HeaderCard redirects={redirects} title={title} />
        <p>{paragraph}</p>
      </>
      <ul className="tools">
        {tools.map((value: string) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmallProjects;
