import { FC, memo } from "react";
import Image from "next/image";

import { myLoader } from "@core/helpers";

interface Props {
  url: string;
  image: string;
  alt: string;
  size: number;
}

const Icon: FC<Props> = ({ url, image, alt, size }) => {
  return (
    <li className="icon" key={image} data-tooltip={alt} data-placement="top">
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          src={`/icons/${image}`}
          alt={alt}
          width={size}
          height={size}
          quality={30}
          priority
          loader={myLoader}
          unoptimized
        />
      </a>
    </li>
  );
};

export default memo(Icon);
