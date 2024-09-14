import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ProjectList from "./ProjectList";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeader from "../ui/SectionHeader";

const meta = {
  title: "Projects",
  subtitle:
    "I enjoy building side projects and constantly challenge myself apart from my actual work :)",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[rgb(11_6_14)]">
      <Container
        as="div"
        className="projects relative flex w-full flex-col items-center gap-16 px-6 py-20 before:absolute before:left-0 before:top-1/4 before:h-3/4 before:w-2/4 before:-translate-y-1/4 after:absolute after:right-0 after:top-2/4 after:block after:h-1/4 after:w-2/4 after:translate-y-1/2 lg:px-10"
      >
        <SectionHeader meta={meta} />
        <ProjectList />
        <a
          target="_blank"
          href="https://www.crio.do/learn/portfolio/sathyaprakash-sp-6/"
          className="my-4 flex animate-bounce items-center gap-4 text-sm font-semibold text-cyan-300 sm:text-xl"
        >
          View more <BiLinkExternal />
        </a>
      </Container>
    </section>
  );
};

export default ProjectsSection;
