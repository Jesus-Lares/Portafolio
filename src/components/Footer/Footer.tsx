import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="#home">
        <Image
          src="/logo.svg"
          alt="Jesus Lares Logo"
          width={72}
          height={65}
          quality={50}
        />
      </Link>
      <div className={styles.links}>
        <a
          href="https://codepen.io/jesus-lares"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codepens
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-lares-5411b6189/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/Jesus-Lares"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      &copy;2022 Jesús Lares Contreras
    </footer>
  );
};

export default Footer;
