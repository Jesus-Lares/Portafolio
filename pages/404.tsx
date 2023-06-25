import Link from "next/link";

import S from "../styles/Error.module.scss";

const Error404 = () => {
  return (
    <div className={S.error}>
      <div className={S.error_content}>
        <h1>404</h1>
        <h4>Pagina no encontrada</h4>
        <p>
          Lo siento, la pagina que estas buscando no existe. Si piensas que algo
          esta roto, reporta el problema
        </p>
        <div className={S.error_btns}>
          <Link href="/">Ir a Home </Link>
          <a href="mailto:contacto@jesuslares.com?subject=Problemas en tu portafolio">
            Reportar problema
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
