import Image from "next/image";
interface props {
  url: string;
  image: string;
  alt: string;
  size: number;
}

const Icon = ({ url, image, alt, size }: props) => {
  return (
    <li className="icon" key={image} data-tooltip={alt} data-placement="top">
      <a href={url} target="_blank">
        <Image
          src={`/icons/${image}.svg`}
          alt={alt}
          width={size}
          height={size}
          quality={30}
        />
      </a>
    </li>
  );
};

export default Icon;
