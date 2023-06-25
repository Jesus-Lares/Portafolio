import { FC, ReactNode, memo, useEffect } from "react";

import { Footer, Navbar } from "@components";

import S from "./CommonLayout.module.scss";

type Props = {
  children: ReactNode;
};

const logoString =
  "Designed and Developed By Jesus Lares.\n        %   %%%%                 \n       %%%   %%%%%%.              \n     (%%%%%   %%%%%%%%#            \n     %%%%%%%%   %%%% *%%%%%.         \n   %%%%%,%%%%   %%%%    %%%%%%       \n       %%%%   %%%%      *%%%%%.    \n       %%%%   %%%%                 \n       %%%%%%%%%%%%%%%%%%%%%%%%%%%%%\\ \n       %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/\n       %%%%   %%%%                 \n%%%%%%    %%%%   %%%%       *%%%%%.   \n ,%%%%%. %%%%   %%%%     %%%%%#      \n    %%%%%%%%%   %%%%  ,%%%%%,        \n     #%%%%%%   %%%%%%%%%%           \n      ,%%%%   %%%%%%%*             \n        %%   %%%%%                \n";

const CommonLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    console.log(logoString);
  }, []);
  return (
    <div className={S.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default memo(CommonLayout);
