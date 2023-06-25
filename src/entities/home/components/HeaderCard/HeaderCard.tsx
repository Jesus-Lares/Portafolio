import { FC, memo } from "react";

import { Icon } from "@components";
import { Redirect } from "@interface";

import S from "./HeaderCard.module.scss";

interface Props {
  title: string;
  redirects: Redirect[];
}

const HeaderCard: FC<Props> = ({ title, redirects }) => {
  return (
    <div className={S.header}>
      <h3>{title}</h3>
      <ul>
        {redirects.map((redirect: Redirect, index: number) => (
          <Icon
            key={`${index}_${redirect.image}`}
            alt={redirect.alt}
            image={redirect.image}
            size={24}
            url={redirect.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(HeaderCard);
