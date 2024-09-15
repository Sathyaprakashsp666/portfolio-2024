import Navbar from "../navbar/Navbar";
import Showcase from "./Showcase";

const HeroSection = () => {
  return (
    <section className="bg-slate-800 w-full hero">
      <Navbar />
      <Showcase />
    </section>
  );
};

export default HeroSection;
