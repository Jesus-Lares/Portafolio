import styles from "./ScrollDown.module.scss";

const ScrollDown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <div className={styles.arrow}></div>
      <div className={styles.arrow}></div>
      <div className={styles.text}>Scroll down</div>
    </div>
  );
};

export default ScrollDown;
