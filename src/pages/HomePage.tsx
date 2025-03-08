import { Button } from "@/components/ui/button";
import Resume from "../assets/image/Resume-pana.png";
const Homepage = () => {
  return (
    <div className="px-4 md:px-0 flex flex-wrap flex-col-reverse md:flex-row  py-32 md:py-0 items-center justify-evenly min-h-screen ">
      <div className="w-full sm:w-sm md:w-2xl flex flex-wrap justify-center md:justify-start  md:flex-row items-center px-2 ">
        <h1 className="text-EggShell w-sm md:w-md font-bold text-2xl md:text-4xl my-3 font-Erode">
          Land Your Dream Job with a Stunning CV
        </h1>
        <p className="text-white text-sm md:text-2xl font-Satoshi font-normal">
          Your resume is more than just a document – it's your first impression.
          Make it count with our easy-to-use CV Builder! Whether you're a fresh
          graduate or a seasoned pro, create a CV that stands out in minutes.
        </p>
        <Button className="text-xl  py-3 mt-3 cursor-pointer bg-[#3E5C76] text-EggShell hover:text-[#3E5C76] hover:bg-EggShell font-Erode font-semibold hover:scale-105 transition duration-300">
          Get Started
        </Button>
      </div>
      <img src={Resume} className="w-3xl" alt="" />
    </div>
  );
};
export default Homepage;
