import type { NextPage } from "next";
import Head from "next/head";
import About from "../src/sections/About";
import Hero from "../src/sections/Hero";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
