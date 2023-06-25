import { memo } from "react";

import { quote } from "src/data";

import S from "./ViewQuote.module.scss";

const ViewQuote = () => {
  return (
    <blockquote className={S.quote}>
      <q>{quote.quote}</q>
      <h5>{quote.writer}</h5>
    </blockquote>
  );
};

export default memo(ViewQuote);
