import Particles from "@/components/ui/particles";
import Herosection from "@/layout/LandingLayout/Herosection";
import Navbar from "@/layout/LandingLayout/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#140b00]">
      <Navbar />
      <Herosection />
      <Particles
        className="absolute inset-0 "
        quantity={50}
        ease={200}
        refresh={true}
      />
    </div>
  );
};

export default LandingPage;
