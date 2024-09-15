import React from "react";
import Container from "../ui/Container";
import GradientText from "../ui/GradientText";

import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 px-12 py-16">
      <Container className="flex w-full flex-col items-center">
        <p className="mx-auto flex items-center gap-2 text-sm font-light text-cyan-200">
          Made with <BsHeartFill className="h-4 w-4 text-red-700" /> by
          <GradientText
            as="span"
            className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] text-sm"
          >
            Sathya Prakash P
          </GradientText>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
