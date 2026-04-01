import { useEffect, useState } from "react";
import logo from "../img/img-logo.png";

export default function NavBar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navBar font-secondary z-200 sticky top-4 left-0 h-16 backdrop-blur-md text-white flex flex-row items-center mx-auto transition-all duration400
        ${shrink ? "w-5/6 md:w-1/2 justify-center lg:justify-around rounded-full bg-[#ff480090]" : "w-full justify-between rounded-none bg-[#ff480099]"}
      `}
    >
      <div
        className={`logo flex justify-center items-center transition-all duration-300
        ${shrink ? "hidden md:block w-16" : "w-32"}
      `}
      >
        <a href="#">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </a>
      </div>
      <div
        className={`link flex px-2 md:px-4 md:mx-12text-sm justify-center items-center transition-all duration-300
        ${shrink ? "gap-4" : "gap-8"}
      `}
      >
        <a href="#concept">Concept</a>
        <a href="#experience">Experience</a>
        <a href="#tarif">Tarifs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
