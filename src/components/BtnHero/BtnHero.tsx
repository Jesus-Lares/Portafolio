import Link from "next/link";
import styles from "./BtnHero.module.scss";

const BtnHero = () => {
  return (
    <Link href="#about">
      <button className={styles.container}>
        <span className={styles.circle}>
          <span className={`${styles.arrow} ${styles.icon}`}></span>
        </span>
        <span className={styles.btn_text}>Ver mas</span>
      </button>
    </Link>
  );
};

export default BtnHero;
