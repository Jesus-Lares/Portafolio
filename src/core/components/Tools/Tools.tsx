import { FC, memo } from "react";

interface Props {
  tools: string[];
}
const Tools: FC<Props> = ({ tools }) => {
  return (
    <ul className="tools">
      {tools.map((value: string) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};

export default memo(Tools);
