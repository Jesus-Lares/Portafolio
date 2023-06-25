import { FC, memo, useMemo } from "react";
import Image from "next/image";

import { HeaderCard } from "../HeaderCard";
import { myLoader } from "@core/helpers";
import { Tools } from "@components";
import { BigProject } from "@interface";

import S from "./BigProjects.module.scss";

interface Props {
  bigProjects: BigProject[];
}

const BigProjects: FC<Props> = ({ bigProjects }) => {
  const showBigProjects = useMemo(() => {
    return bigProjects.map((bigProject: BigProject, index: number) => {
      const { image, title, redirects, paragraph, tools } = bigProject;
      return (
        <li key={index}>
          <article className={S.bigProjects}>
            <div className={S.image_container}>
              <Image
                priority
                loader={myLoader}
                src={`/${image}`}
                alt={title}
                width={310}
                height={165}
                sizes="100%"
                quality={30}
                loading="eager"
                layout="responsive"
                className={S.image}
                unoptimized
              />
            </div>
            <div className={S.info}>
              <HeaderCard redirects={redirects} title={title} />
              <p>{paragraph}</p>
              <Tools tools={tools} />
            </div>
          </article>
        </li>
      );
    });
  }, [bigProjects]);

  return <ul className={S.container}>{showBigProjects}</ul>;
};

export default memo(BigProjects);
