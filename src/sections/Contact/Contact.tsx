import Btn from "../../components/Btn";
import Quote from "../../components/Quote";
import SectionTitle from "../../components/SectionTitle";
import styles from "./Contact.module.scss";
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <SectionTitle title="¿Interesado en investigar o colaborar?" />
      <div className={styles.container}>
        <p>
          Nunca es demasiado tarde o demasiado temprano para empezar. Estoy
          abierto para discutir acerca del desarrollo de programas o para
          colaboraciones.
        </p>
        <a
          href="mailto:contacto@jesuslares.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Btn text="Iniciar conversación" onClick={() => {}} />
        </a>
      </div>
      <Quote />
    </section>
  );
};

export default Contact;
