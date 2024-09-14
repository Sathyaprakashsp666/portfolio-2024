import { Project } from "@/types/project";
import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      tabIndex={0}
      className="relative flex w-full before:absolute before:-inset-0 before:z-10 before:h-full before:w-full before:animate-none before:rounded-xl before:bg-gradient-to-br before:from-red-800 before:to-purple-500 before:opacity-0 before:blur-[5px] before:transition-all before:duration-500 hover:before:opacity-100 focus:focus-within:focus-visible:outline-none focus:focus-within:focus-visible:before:opacity-100"
    >
      <div className="z-20 flex min-h-72 w-full flex-col rounded-xl border border-[#2a1454] bg-darkBlue p-4 shadow-2xl shadow-[#04030b] md:p-6 lg:flex-row lg:gap-3 lg:p-8">
        <article className="flex w-full select-none flex-col gap-3 sm:select-auto lg:w-[40%]">
          <span className="text-md font-light text-[#8750f7] hover:opacity-85">
            {project.category}
          </span>
          <h2 className="cursor-pointer text-2xl font-semibold text-white transition-colors duration-200 hover:text-purple-700">
            {project.name}
          </h2>

          <Image
            src={project.image}
            alt={project.name}
            className="my-6 inline h-full w-full rounded-lg object-contain lg:hidden"
          />

          <p className="text-sm font-light text-white">{project.description}</p>

          <ul className="my-6 flex flex-col gap-2.5 text-sm font-light text-white">
            {project.points?.map((point) => (
              <li className="gap-4" key={point}>
                ✅ {point}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center gap-3 text-xs text-white sm:text-sm">
            {project.tags?.map((tag) => (
              <li
                className="gap-4 rounded-full bg-[#2a1454] px-3 py-2 transition-all duration-500 hover:bg-cyan-500"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="my-4 ml-2 flex items-center gap-6 lg:ml-1">
            {project.link && (
              <a
                target="_blank"
                href={project.link}
                className="flex items-center gap-2 text-sm text-white transition-colors hover:text-cyan-500"
              >
                Live <BiLinkExternal />
              </a>
            )}
            {project.repo && (
              <a
                target="_blank"
                href={project.repo}
                className="flex items-center gap-2 text-sm text-white transition-colors hover:text-cyan-500"
              >
                GitHub <BiLinkExternal />
              </a>
            )}
          </div>
        </article>
        <div className="hidden rounded-lg bg-black px-4 py-4 lg:block lg:w-[60%] lg:px-6">
          <Image
            src={project.image}
            alt={project.name}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
