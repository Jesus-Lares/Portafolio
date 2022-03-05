import type { NextPage } from "next";
import About from "../src/sections/About";
import Hero from "../src/sections/Hero";
import Projects from "../src/sections/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
