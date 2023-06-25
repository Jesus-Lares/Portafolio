import { FC, memo } from "react";

import S from "./SectionTitle.module.scss";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className={S.container}>
      <h2 className={S.title}>{title}</h2>
      <div className={S.bar} />
    </div>
  );
};

export default memo(SectionTitle);
