"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import { cn } from "@/lib/util";

const FixedNav = () => {
  const [className, setClassName] = useState("translate-y-[-100vh]");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const listener = () => {
      setClassName("translate-y-[-100vh]");
      if (window.scrollY < 200) {
        setClassName("translate-y-[-100vh]");
      } else {
        clearTimeout(timerRef.current ?? 0);
        timerRef.current = setTimeout(() => {
          window.scrollY > 200 && setClassName("translate-y-0");
        }, 500);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-[99999] w-full bg-darkBlue px-8 py-5 transition-all duration-200 md:px-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between gap-3 px-2 sm:px-10">
        <div className="flex items-center gap-8 xl:basis-1/2">
          <h1
            className="cursor-pointer select-none text-5xl font-bold text-white"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            V
          </h1>
          <span className="bg-red text-me hidden cursor-pointer text-xs font-medium text-white transition-colors hover:text-cyan-300 md:inline-flex">
            <a href="mailto:sathyaprakash.sp.@gmail.com">
              {" "}
              sathyaprakash.sp.6@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center justify-end gap-6 lg:gap-0 xl:basis-1/2">
          <DesktopNavMenu />
          <a
            href="mailto:sathyaprakash.sp.6@gmail.com"
            className="ml-14 select-none rounded-full bg-[linear-gradient(to_right,#8750f7_0%,#2a1454_51%,#8750f7_100%)] px-3 py-2.5 text-[10px] font-bold text-white transition-all duration-500 [background-size:200%] hover:[background-position:-100%] focus:focus-visible:outline-none sm:px-7 sm:text-sm"
          >
            Contact Me!
          </a>
          <MobileNavMenu />
        </div>
      </Container>
    </nav>
  );
};

export default FixedNav;
