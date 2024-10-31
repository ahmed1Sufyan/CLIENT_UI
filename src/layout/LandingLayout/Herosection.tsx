import { AnimatedButton } from "./AnimatedButton";
import { ShinyText } from "./ShinyText";

const HeroSection = () => {
  return (
    <section className="w-full pt-36">
      <div className="w-[85%] mx-auto h-[100vh]">
        <div className="text-center gap-y-2 font-inter flex justify-center items-center flex-col">
          <ShinyText />
          <p className=" pointer-events-none bg-gradient-to-b from-white to-gray-300 bg-clip-text text-6xl md:text-[5rem] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-4">
            Job Interviews Don’t Have to Be Stuck Anywhere
          </p>
          <p className="w-[60%] mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Seamless, Smart, and Bias-Free Interviewing Experiences – Empowering
            Every Step of Your Career Journey
          </p>

          <AnimatedButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
