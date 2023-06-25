import { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { myLoader } from "@core/helpers";
import { Button, SectionTitle } from "@components";
import { Skills } from "@e/home/components";

import S from "./About.module.scss";
import envs from "@core/config/env";

const About: FC = () => {
  return (
    <section id="about" className={S.about}>
      <SectionTitle title="Acerca de" />
      <div className={S.container}>
        <div className={S.info}>
          <p>
            Soy Jesús Lares, <strong>ingeniero mecatrónico</strong> y{" "}
            <strong>desarrollador Full Stack</strong> con experiencia en
            tecnologías como MERN. Mi pasión radica en crear productos
            accesibles y ofrecer experiencias digitales de calidad.
          </p>
          <p>
            Destaco por mi capacidad de <strong> adaptación</strong> y mi
            enfoque en la <strong>resolución de problemas</strong>. Me
            desenvuelvo de manera efectiva en entornos de equipo, colaborando
            para <strong>superar desafíos</strong> y{" "}
            <strong>alcanzar metas</strong> de manera eficiente.
          </p>
          <Link href={`${envs.url}/cv/es.pdf`}>
            <a target="_blank" rel="noreferrer">
              <Button text="Descargar CV" />
            </a>
          </Link>
        </div>
        <div className={S.image_skills}>
          <picture className={S.image}>
            <Image
              src="/fotoPerfil.webp"
              alt="Imagen de Jesus Lares"
              width={180}
              height={180}
              quality={100}
              priority
              loader={myLoader}
              unoptimized
            />
          </picture>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
