import React, { useState } from "react";
import imgProbleme from "../img/img-probleme.jpg";
import imgSolution from "../img/img-solution.jpg";
import imgSoutien from "../img/img-resultat.jpg";

export default function Concept() {
  const [active, setActive] = useState("probleme");

  const content = {
    probleme: {
      title: "Une RSE souvent théorique",
      text: "Malgré les engagements, de nombreuses entreprises peinent à mobiliser leurs équipes. Manque d’adhésion, absence d’indicateurs concrets, actions peu visibles : la RSE reste souvent déconnectée du terrain.",
    },
    solution: {
      title: "Une approche concrète et engageante",
      text: "Shift’Up transforme la RSE en actions quotidiennes grâce à la gamification. Chaque collaborateur participe via des missions simples, mesurées et valorisées dans une logique collective.",
    },
    soutien: {
      title: "Un impact mesurable et durable",
      text: "Résultat : une meilleure cohésion interne, une performance optimisée et des indicateurs clairs pour piloter votre stratégie RSE. La transition devient visible, mesurable et engageante.",
    },
  };

  return (
    <section
      id="concept"
      className="concept snap-center h-screen bg-black text-white flex flex-col justify-center items-center w-full p-20"
    >
      <div className="container-img flex flex-row gap-12 w-full p-8 justify-center items-center mb-16">
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "probleme" ? "scale-109" : "hover:scale-105"
          }`}
          onClick={() => setActive("probleme")}
        >
          <img src={imgProbleme} alt="Image du problème" />
        </div>
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "solution" ? "scale-109" : "hover:scale-105"
          }`}
          onClick={() => setActive("solution")}
        >
          <img src={imgSolution} alt="Image de la solution" />
        </div>
        <div
          className={`w-1/3 transition-transform duration-300 cursor-none ${
            active === "soutien" ? "scale-109" : "hover:scale-105"
          }`}
          onClick={() => setActive("soutien")}
        >
          <img src={imgSoutien} alt="Image du resultat avec notre aide" />
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
