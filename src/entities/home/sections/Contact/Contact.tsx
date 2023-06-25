import { FC, memo } from "react";

import { Button, SectionTitle, ViewQuote } from "@components";

import S from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <section id="contact" className={S.contact}>
      <SectionTitle title="¿Interesado en investigar o colaborar?" />
      <div className={S.container}>
        <p>
          Nunca es demasiado tarde o demasiado temprano para empezar. Estoy
          abierto para discutir acerca del desarrollo de programas o para
          colaboraciones.
        </p>
        <a
          href="mailto:contacto@jesuslares.com"
          rel="noreferrer"
          target="_blank"
        >
          <Button text="Iniciar conversación" />
        </a>
      </div>
      <ViewQuote />
    </section>
  );
};

export default memo(Contact);
