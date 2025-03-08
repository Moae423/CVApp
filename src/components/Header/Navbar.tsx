import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  // const [isScroll, setisScroll] = useState(true);

  return (
    <nav>
      <div className="w-full  px-8 py-4 bg-DarkBlue  flex items-center justify-between">
        <h1 className="text-EggShell font-Erode text-4xl font-bold">Cv App</h1>
        {/* Desktop View */}
        <ul className="md:flex flex-wrap space-x-5 hidden">
          <li>
            <Link to="/">
              <Button
                variant="link"
                className="text-xl font-Erode font-medium text-EggShell cursor-pointer transition duration-300 "
              >
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link"
                  className="text-xl font-Erode font-medium text-EggShell cursor-pointer transition duration-300"
                >
                  Services <CircleChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="bg-RichBlack border-none"
              >
                <div className="flex flex-col ">
                  <Link to="/Resume">
                    <Button
                      variant={"link"}
                      className="text-md text-EggShell  cursor-pointer transition duration-300"
                    >
                      Resume Builder
                    </Button>
                  </Link>
                  <p className="text-muted">Coming Soon</p>
                </div>
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <Button
              variant="link"
              className="text-xl font-Erode font-medium text-EggShell cursor-pointer transition duration-300"
            >
              Templates
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className="text-xl font-Erode font-medium text-EggShell cursor-pointer transition duration-300"
            >
              Contact
            </Button>
          </li>
        </ul>
        {/* Desktop View */}
        {/* Mobile View Start */}
        <div className="flex md:hidden ">
          <Popover open={IsOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button className="bg-EggShell text-RichBlack rounded-sm">
                {IsOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="m-3">
              <div className="flex flex-col space-y-4">
                <ul className="md:flex flex-wrap ">
                  <li>
                    <Button
                      variant="link"
                      className="text-xl font-Erode font-medium  cursor-pointer transition duration-300 "
                    >
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="text-xl font-Erode font-medium  cursor-pointer transition duration-300"
                    >
                      Services
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="text-xl font-Erode font-medium  cursor-pointer transition duration-300"
                    >
                      Templates
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="text-xl font-Erode font-medium  cursor-pointer transition duration-300"
                    >
                      Contact
                    </Button>
                  </li>
                </ul>
                <Button className="text-xl py-3 cursor-pointer border-2 outline bg-transparent text-[#3E5C76] hover:text-[#3E5C76] hover:bg-EggShell font-Erode font-semibold hover:scale-105 transition duration-300">
                  Login
                </Button>
                <Button className="text-xl py-3 cursor-pointer bg-[#3E5C76] text-EggShell  hover:bg-[#051923] font-Erode font-semibold hover:scale-105 transition duration-300">
                  Get Started
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* Mobile View End */}
        <div className="hidden md:flex gap-3">
          <Button className="text-xl py-3 cursor-pointer border-2 outline bg-transparent text-EggShell hover:text-RichBlack hover:bg-EggShell font-Erode font-semibold hover:scale-105 transition duration-300">
            Login
          </Button>
          <Button className="text-xl py-3 cursor-pointer bg-[#3E5C76] text-EggShell hover:text-[#3E5C76] hover:bg-EggShell font-Erode font-semibold hover:scale-105 transition duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
