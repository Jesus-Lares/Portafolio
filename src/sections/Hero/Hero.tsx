import BtnHero from "../../components/BtnHero";
import ScrollDown from "../../components/ScrollDown";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.info}>
          <hgroup>
            <h1>Jesús Lares</h1>
            <h2>Ingeniero Mecatronico y Desarrollador Full stack</h2>
          </hgroup>
          <BtnHero />
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Hero;
