import Image from "next/image";
import { bigProjectInterface } from "../../utils/bigProjects";
import HeaderCard from "../HeaderCard";
import Icon from "../Icon";
import styles from "./BigProjects.module.scss";

interface props extends bigProjectInterface {
  index: number;
}

const BigProjects = ({
  image,
  title,
  paragraph,
  tools,
  redirects,
  index,
}: props) => {
  return (
    <article
      className={`${styles.bigProjects} ${
        index % 2 != 0 ? styles.reverse : ""
      }`}
    >
      <div className={styles.image_container}>
        <Image
          src="/NotImage.webp"
          alt={title}
          width={310}
          height={165}
          quality={30}
          loading="eager"
          layout="responsive"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <HeaderCard redirects={redirects} title={title} />
        <p>{paragraph}</p>
        <ul className="tools">
          {tools.map((value: string) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default BigProjects;
