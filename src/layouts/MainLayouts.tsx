import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  bg-radial-[at_0%_100%] from-RichBlack to-DarkBlue from-30% ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayouts;
