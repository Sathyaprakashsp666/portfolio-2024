import Image from "next/image";
import Container from "../ui/Container";
import GradientText from "../ui/GradientText";

import HeroImage from "../../../../public/dp.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  const links = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/sathya-prakasha-p-2990b412b",
      label: "Go to Sathya's LinkedIn Profile",
    },
    // {
    //   icon: FaInstagram,
    //   link: "",
    //   label: "Go to Sathya's Instagram Profile",
    // },
    {
      icon: FaGithub,
      link: "https://github.com/Sathyaprakashsp666",
      label: "Go to Sathya's GitHub Profile",
    },
  ];

  return (
    <div className="flex gap-5">
      {links?.map((Item, i) => (
        <a
          key={i}
          href={Item.link}
          aria-label={Item.label}
          className="group relative rounded-full border border-[#aa82faa6] p-4 before:absolute before:inset-0 before:h-full before:w-full before:scale-0 before:rounded-full before:bg-cyan-500 before:transition-all before:duration-300 hover:before:scale-100"
          target="_blank"
        >
          <Item.icon className="relative h-5 w-5 text-cyan-200 group-hover:text-white" />
        </a>
      ))}
    </div>
  );
};

const Showcase = () => {
  return (
    <Container
      as="div"
      className="flex w-full select-none flex-col gap-8 px-6 py-10 pb-[8rem] sm:select-auto lg:flex-row lg:items-center lg:px-10"
    >
      <div className="hero-text flex w-full flex-col gap-4 lg:w-1/2">
        <h2 className="w-full text-2xl font-bold text-white transition-all duration-200 sm:text-3xl">
          I am Sathya Prakasha P
        </h2>

        <GradientText
          className="w-full bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] text-3xl sm:text-5xl md:text-6xl md:[line-height:1.2]"
          as="h1"
        >
          Frontend / MERN Software Engineer
        </GradientText>
        <div className="hero-image mx-auto my-8 inline-flex max-h-[600px] max-w-[max(250px,60vw)] lg:hidden">
          <Image
            src={HeroImage}
            alt="hero-avatar"
            className="hero-avatar relative z-10 w-full rotate-[4deg] select-none rounded-[20px] border-2 border-[#1e3773bf] border-opacity-75 transition-all duration-200 hover:rotate-[2deg] hover:scale-95 hover:border-blue-600 hover:border-opacity-100"
            priority
          />
        </div>
        <p className="text font-medium text-[#d2cdd5] transition-all duration-200 sm:text-lg">
          Results-driven Full Stack Web Developer with 3 years of hands-on
          experience building scalable and robust web applications using
          JavaScript frameworks like React and Next.js. Adept at translating
          client requirements into user-friendly interfaces with an unwavering
          commitment to delivering high quality and efficient code.
        </p>
        <div className="my-4 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href="https://drive.google.com/file/d/1ujQqDRMPtekHF2-b-VQtJEkOPkjeODOq/view?usp=sharing"
            className="rounded-full border border-[#aa82faa6] px-5 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-purple-600 sm:px-7"
            target="_blank"
          >
            Download Resume
          </a>
          <SocialIcons />
        </div>
      </div>

      <div className="flex w-full justify-end lg:w-1/2">
        <div className="hero-image hidden max-h-[500px] w-[80%] lg:inline-flex">
          <Image
            src={HeroImage}
            alt="hero-avatar"
            height={300}
            width={300}
            className="hero-avatar relative z-10 w-full rotate-[7deg] select-none rounded-[32px] border-2 border-[#1e3773bf] border-opacity-75 transition-all duration-200 hover:rotate-[2deg] hover:scale-95 hover:border-blue-600 hover:border-opacity-100"
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
