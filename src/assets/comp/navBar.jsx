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
<<<<<<< HEAD
      className={`navBar z-5 sticky top-4 left-0 h-16 backdrop-blur-md bg-[#00000070] text-white flex flex-row items-center mx-auto transition-all duration400
        ${shrink ? "w-1/2 justify-around rounded-full" : "w-full justify-between rounded-none "}
=======
      className={`navBar z-5 sticky top-4 left-0 h-16 bg-gray-800 text-white flex flex-row items-center mx-auto transition-all duration-300
        ${shrink ? "w-1/2 justify-around rounded-full" : "w-full justify-between rounded-none"}
>>>>>>> 400853a (amelioration et ajout de script pour contact faq a continuer)
      `}
    >
      <div
        className={`logo flex justify-center items-center transition-all duration-300
        ${shrink ? "w-16" : "w-32"}
      `}
      >
        <a href="#">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </a>
      </div>
      <div
<<<<<<< HEAD
        className={`link flex mx-12 text-sm justify-center items-center transition-all duration-300
        ${shrink ? "gap-4" : "gap-8"}
=======
        className={`link flex mx-12 text-xs justify-center items-center transition-all duration-300
        ${shrink ? "gap-4" : "gap-12"}
>>>>>>> 400853a (amelioration et ajout de script pour contact faq a continuer)
      `}
      >
        <a href="#concept">Concept</a>
        <a href="#">Experience</a>
<<<<<<< HEAD
        <a href="#tarif">Tarification</a>
=======
        <a href="#">Tarification</a>
>>>>>>> 400853a (amelioration et ajout de script pour contact faq a continuer)
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
