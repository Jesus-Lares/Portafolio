import { FC, memo } from "react";

import S from "./ScrollDown.module.scss";

const ScrollDown: FC = () => {
  return (
    <div className={S.container}>
      <div className={S.arrow}></div>
      <div className={S.arrow}></div>
      <div className={S.arrow}></div>
      <div className={S.text}>Scroll down</div>
    </div>
  );
};

export default memo(ScrollDown);
