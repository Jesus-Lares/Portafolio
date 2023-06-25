import { Fragment } from "react";
import type { GetStaticPropsContext } from "next";

import { About, Contact, Hero, Projects } from "@e/home/sections";
import { BigProject, Project } from "@interface";
import { product } from "src/data";

const { projects, bigProjects } = product;

interface props {
  bigProjects: BigProject[];
  projects: Project[];
}

const Home = ({ bigProjects, projects }: props) => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Projects bigProjects={bigProjects} projects={projects} />
      <Contact />
    </Fragment>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      bigProjects,
      projects,
    },
  };
}
