import { FC, memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { routes } from "@core/routes";
import { myLoader } from "@core/helpers";
import envs from "@core/config/env";
import { Route } from "@interface";

import { hiddenNavbar } from "./utils";
import S from "./Navbar.module.scss";

const Navbar: FC = () => {
  const [check, setCheck] = useState<boolean>(false);
  const handleCheck = () => setCheck((e) => !e);

  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      const hidden = hiddenNavbar(e);
      if (hidden) return;
      setCheck(false);
    });
    return window.removeEventListener("click", () => {});
  }, []);

  return (
    <header className={S.header}>
      <div className={S.container}>
        <Link href="/">
          <a className={S.logo}>
            <Image
              src={`${envs.url}/logo.webp`}
              alt="Jesus Lares Logo"
              width={35}
              height={35}
              quality={50}
              priority
              loader={myLoader}
              unoptimized
            />
          </a>
        </Link>
        <input
          className={S.nav_toggle}
          onChange={handleCheck}
          checked={check}
          type="checkbox"
          id="toggle-navbar"
        />
        <label
          htmlFor="toggle-navbar"
          id="toggle"
          className={S.nav_toggle_label}
        >
          <span />
        </label>
        <nav className={S.nav}>
          <ul className={`grid ${S.nav__list}`}>
            {routes.map((route: Route, index: number) => (
              <li key={index}>
                <Link href={route.path}>
                  <a className={S.nav__link}>
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

export default memo(Navbar);
