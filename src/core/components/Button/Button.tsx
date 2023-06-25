import { FC, memo } from "react";

import S from "./Button.module.scss";

interface Props {
  onClick?: () => void;
  text: string;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={S.container}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default memo(Button);
