import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.bar} />
    </div>
  );
};

export default SectionTitle;
