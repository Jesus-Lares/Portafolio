import styles from "./Btn.module.scss";

interface props {
  onClick: any;
  text: string;
}

const Btn = ({ text, onClick }: props) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {text}
    </button>
  );
};

export default Btn;
