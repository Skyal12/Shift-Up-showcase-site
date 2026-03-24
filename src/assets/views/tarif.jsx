import { useState } from "react";

export default function Tarif() {
  const [active, setActive] = useState("pro");

  const content = {
    pro: {
      title: "Pro",
      utilisateur: "200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      prix: "500€",
    },
    proPlus: {
      title: "Pro +",
      utilisateur: "400",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      prix: "1000€",
    },
    business: {
      title: "Business",
      utilisateur: "1000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      prix: "2000€",
    },
  };

  return (
    <section
      id="tarif"
      className="tarif snap-center w-full flex flex-row justify-center items-center p-20 pt-32 pb-32 h-screen"
    >
      <div className="container-offers w-1/2 flex flex-col justify-center items-center">
        <div
          className={`offer1 mb-12 w-3/4 h-32 rounded-xl flex flex-col justify-center items-center bg-gray-600 transition-transform duration-300 ${
            active === "pro" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("pro")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="underline offset-2">Pro</h3>
            <p>500€</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-justify pl-4 pr-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div
          className={`offer2 mb-12 w-3/4 h-32 rounded-xl flex flex-col justify-center items-center bg-gray-600 transition-transform duration-300 ${
            active === "proPlus" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("proPlus")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="underline offset-2">Pro +</h3>
            <p>1000€</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-justify pl-4 pr-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div
          className={`offer3 mb-12 w-3/4 h-32 rounded-xl flex flex-col justify-center items-center bg-gray-600 transition-transform duration-300 ${
            active === "business" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("business")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="underline offset-2">Business</h3>
            <p>2000€</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-justify pl-4 pr-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="container-info w-1/2 h-3/4 rounded-xl bg-gray-600 p-4 flex flex-col justify-center">
        <div className="topLine flex flex-row justify-around">
          <h3 className="title text-3xl underline">{content[active].title}</h3>
          <h3 className="utilisateur text-xl">{content[active].utilisateur}</h3>
        </div>

        <div className="description flex flex-col justify-center mt-8">
          <p className="text-justify pl-4 pr-4 pt-2">
            {content[active].description}
          </p>
        </div>

        <div className="bottomLine mt-12 flex flex-row justify-end pr-8 mb-4">
          <h3 className="prix text-2xl">{content[active].prix}</h3>
        </div>
        <div className="cta flex flex-row justify-center items-center mt-4">
          <a href="#contact">
            <button className="bg-gray-800 text-white w-32 p-4 rounded-full cursor-none transform hover:scale-110 duration-300">
              Contact
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
