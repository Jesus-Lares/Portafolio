import type { GetStaticPropsContext } from "next";
import About from "../src/sections/About";
import Contact from "../src/sections/Contact";
import Hero from "../src/sections/Hero";
import Projects from "../src/sections/Projects";
import {
  bigProjectInterface,
  projectInterface,
  bigProjects,
  smallProjects,
} from "../src/utils/bigProjects";

interface props {
  bigProjects: bigProjectInterface[];
  projects: projectInterface[];
}

const Home = ({ bigProjects, projects }: props) => {
  return (
    <>
      <Hero />
      <About />
      <Projects bigProjects={bigProjects} projects={projects} />
      <Contact />
    </>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      bigProjects,
      projects: smallProjects,
    },
  };
}
