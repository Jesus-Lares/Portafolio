import { FC, memo } from "react";

import { ScrollDown, SpecialButton } from "@e/home/components";

import S from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <section id="home" className={S.hero}>
      <div className={S.container}>
        <div className={S.info}>
          <hgroup>
            <h1>Jesús Lares</h1>
            <h2>Ingeniero Mecatronico y Desarrollador Full stack</h2>
          </hgroup>
          <SpecialButton />
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default memo(Hero);
