import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routeInterface, routes } from "../../utils/routes";

import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      if (document.getElementById("toggle-navbar")) {
        if (!document.getElementById("nav")?.contains(e.target as Node)) {
          if (
            !document.getElementById("toggle")?.contains(e.target as Node) &&
            !document
              .getElementById("toggle-navbar")
              ?.contains(e.target as Node)
          ) {
            setCheck(false);
          }
        }
      }
    });
    return window.removeEventListener("click", () => {});
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Jesus Lares Logo"
              width={72}
              height={35}
              quality={50}
            />
          </a>
        </Link>
        <input
          className={styles.nav_toggle}
          onChange={() => setCheck((e) => !e)}
          checked={check}
          type="checkbox"
          id="toggle-navbar"
        />
        <label
          htmlFor="toggle-navbar"
          id="toggle"
          className={styles.nav_toggle_label}
        >
          <span />
        </label>
        <nav className={styles.nav}>
          <ul className={`grid ${styles.nav__list}`}>
            {routes.map((route: routeInterface, index: number) => (
              <li key={index}>
                <Link href={route.path}>
                  <a className={styles.nav__link}>
                    <FontAwesomeIcon icon={route.icon} />
                    {route.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
