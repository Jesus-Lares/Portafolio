import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";
import Btn from "../../components/Btn";
import Skills from "../../components/Skills";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <SectionTitle title="Acerca de" />
      <div className={styles.container}>
        <div className={styles.info}>
          <p>
            Soy Jesús Lares, un <strong>ingeniero mecatrónico</strong> y
            apasionado por la programación. Mi interés en el desarrollo web
            comenzó en 2018 cuando decidí intentar desarrollar una aplicación
            web el cual tiene como objetivo ayudar a los estudiantes de medicina
            a pasar su examen de titulación.
          </p>
          <p>
            Soy una persona capaz de
            <strong> adaptarse</strong> a cualquier circunstancia para poder dar
            los mejores resultados. Me gusta trabajar en equipo en la
            <strong> gestión de resolución de problemas</strong> y en el
            <strong> cumplimiento de metas</strong>. Mi objetivo principal en
            estos días es <strong>crear y diseñar</strong> productos accesibles
            e inclusivos así como experiencias digitales para una variedad de
            clientes.
          </p>
          <Btn text="Descargar CV" onClick={() => {}} />
        </div>
        <div className={styles.image_skills}>
          <picture className={styles.image}>
            <Image
              src="/fotoPerfil.webp"
              width={230}
              height={230}
              quality={100}
            />
          </picture>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
