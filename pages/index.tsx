import type { NextPage } from "next";
import About from "../src/sections/About";
import Contact from "../src/sections/Contact";
import Hero from "../src/sections/Hero";
import Projects from "../src/sections/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
