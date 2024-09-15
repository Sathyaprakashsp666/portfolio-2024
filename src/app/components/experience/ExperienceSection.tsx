import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ExperienceTree from "./ExperienceTree";
import data from "./data";
import SectionHeader from "../ui/SectionHeader";

const meta = {
    title:"My Experience",
    subtitle: "Delivering Results: A Tech Professional's Journey"
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full bg-slate-800">
      <Container
        as="div"
        className="experience relative flex w-full flex-col items-center gap-16 px-6 py-20 before:absolute before:left-0 before:top-1/4 before:h-3/4 before:w-1/2 before:-translate-y-1/4 after:absolute after:right-0 after:top-2/4 after:block after:h-1/4 after:w-2/4 after:translate-y-1/2 lg:px-10"
      >
        <SectionHeader meta={meta} />
        <ExperienceTree data={data} />
      </Container>
    </section>
  );
};

export default ExperienceSection;
