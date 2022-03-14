import { useEffect, useState } from "react";

import styles from "./Quote.module.scss";

interface quote {
  quote: { quote: string; writer: string };
  status: boolean;
}

const Quote = () => {
  const [quote, setQuote] = useState<quote | null>(null);
  const data = async () => {
    try {
      const response = await fetch(
        `https://api-quotes2022.herokuapp.com/api/v1/apiQuotes/${process.env.QUOTES}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result: quote = await response.json();

      if (result.status) {
        setQuote(result);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    data();
  }, []);
  if (quote === null) return <></>;
  return (
    <blockquote className={styles.quote}>
      <q>{quote.quote.quote}</q>
      <h6>{quote.quote.writer}</h6>
    </blockquote>
  );
};

export default Quote;
