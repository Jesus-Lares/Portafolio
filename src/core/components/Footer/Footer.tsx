import { FC, memo } from "react";
import Image from "next/image";
import Link from "next/link";

import envs from "@core/config/env";
import { myLoader } from "@core/helpers";

import { product } from "src/data";

import S from "./Footer.module.scss";

const { links } = product;

const Footer: FC = () => {
  return (
    <footer className={S.footer}>
      <Link href={`${envs.url}/#home`}>
        <a>
          <Image
            src={`${envs.url}/logo.webp`}
            alt="Jesus Lares Logo"
            width={72}
            height={72}
            quality={50}
            priority
            loader={myLoader}
            unoptimized
          />
        </a>
      </Link>
      <div className={S.links}>
        {links.map(({ link, name }) => (
          <a href={link} key={name} target="_blank" rel="noreferrer">
            {name}
          </a>
        ))}
      </div>
      &copy;2023 Jesús Lares Contreras
    </footer>
  );
};

export default memo(Footer);
