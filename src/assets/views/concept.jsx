import React, { useState } from "react";
import imgProbleme from "../img/img-probleme.webp";
import imgSolution from "../img/img-solution.webp";
import imgSoutien from "../img/img-aide.jpg";

export default function Concept() {
  const [active, setActive] = useState("probleme");

  const content = {
    probleme: {
      title: "Le problème",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    solution: {
      title: "La solution",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    soutien: {
      title: "Notre aide / soutien",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  };

  return (
    <section
      id="concept"
      className="concept bg-black text-white flex flex-col justify-center items-center w-full p-20"
    >
      <div className="container-img flex flex-row gap-12 w-full p-8 justify-center items-center mb-16">
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "probleme" ? "scale-y-125" : "hover:scale-y-105"
          }`}
          onClick={() => setActive("probleme")}
        >
          <img src={imgProbleme} alt="Image du problème" />
        </div>
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "solution" ? "scale-y-125" : "hover:scale-y-105"
          }`}
          onClick={() => setActive("solution")}
        >
          <img src={imgSolution} alt="Image de la solution" />
        </div>
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "soutien" ? "scale-y-125" : "hover:scale-y-105"
          }`}
          onClick={() => setActive("soutien")}
        >
          <img src={imgSoutien} alt="Image de notre aide/soutien" />
        </div>
      </div>

      <div className="container-text flex flex-col gap-6 w-full">
        <h2 className="text-start pl-8 font-bold underline underline-offset-4 text-4xl">
          {content[active].title}
        </h2>
        <p className="text-lg leading-relaxed">{content[active].text}</p>
      </div>
    </section>
  );
}
