import { FC, memo } from "react";
import Link from "next/link";

import envs from "@core/config/env";

import S from "./SpecialButton.module.scss";

const SpecialButton: FC = () => {
  return (
    <Link href={`${envs.url}/#about`}>
      <a>
        <button className={S.container}>
          <span className={S.circle}>
            <span className={`${S.arrow} ${S.icon}`}></span>
          </span>
          <span className={S.btn_text}>Ver mas</span>
        </button>
      </a>
    </Link>
  );
};

export default memo(SpecialButton);
