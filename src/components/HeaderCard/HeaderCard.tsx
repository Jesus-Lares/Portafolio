import Icon from "../Icon";
import { redirects } from "../../utils/bigProjects";
import styles from "./HeaderCard.module.scss";

interface props {
  title: string;
  redirects: redirects[];
}

const HeaderCard = ({ title, redirects }: props) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <ul>
        {redirects.map((redirect: redirects, index: number) => (
          <Icon
            key={`${index}_${redirect.image}`}
            alt={redirect.alt}
            image={redirect.image}
            size={24}
            url={redirect.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeaderCard;
