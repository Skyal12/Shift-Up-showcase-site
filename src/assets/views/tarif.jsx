import { useState } from "react";

export default function Tarif() {
  const [active, setActive] = useState("pro");

  const content = {
    pro: {
      title: "Starter",
      utilisateur: "50 utilisateurs",
      description: `
      - Accès à l’application utilisateur
      - Missions et défis standards
      - Suivi des actions de base
      - Support en ligne
      - Accès aux statistiques et indicateurs
      - Accès aux outils de gestion de missions`,
      prix: "500€/mois",
    },
    proPlus: {
      title: "Pro",
      utilisateur: "150 utilisateurs",
      description: `
      - Actions Starter
      - Tableau de bord RH avancé
      - Suivi des KPI RSE
      - Gestion des équipes et départements
      - Personnalisation des missions
      - Support prioritaire`,
      prix: "1000€/mois",
    },
    business: {
      title: "Entreprise",
      utilisateur: "Sur Mesure",
      description: `
      - Actions Pro 
      - Accompagnement dédié
      - Création de programmes RSE personnalisés
      - Intégration avec vos outils internes
      - Reporting avancé
      - Suivi et optimisation continue
      `,
      prix: "2000€/mois",
    },
  };

  return (
    <section
      id="tarif"
      className="tarif snap-center w-full h-auto flex bg-[#ff4800] flex-col md:flex-row justify-center items-center p-8 md:p-20 py-12 md:py-28 h-screen"
    >
      <div className="container-offers w-full h-auto md:w-1/2 flex flex-col gap-4 justify-center items-center mb-12 md:mb-0">
        <div
          className={`offer1 mx-4 md:mb-12 w-full md:w-4/5 h-auto py-4 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
            active === "pro" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("pro")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="font-primary underline text-2xl offset-2 font-bold">
              {content.pro.title}
            </h3>
            <p>{content.pro.prix}</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-center pl-4 pr-4 pt-2">
              Une offre adaptée à votre entreprise.
            </p>
          </div>
        </div>

        <div
          className={`offer2 mx-4 md:mb-12 w-full md:w-4/5 h-auto py-4 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
            active === "proPlus" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("proPlus")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="font-primary underline text-2xl offset-2 font-bold">
              {content.proPlus.title}
            </h3>
            <p>{content.proPlus.prix}</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-center pl-4 pr-4 pt-2">
              Conçue pour les entreprises en developpement
            </p>
          </div>
        </div>

        <div
          className={`offer3 mx-4 md:mb-12 w-full md:w-4/5 h-auto py-4 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
            active === "business" ? "scale-110" : "hover:scale-105"
          }`}
          onClick={() => setActive("business")}
        >
          <div className="title w-full flex flex-row justify-around items-center">
            <h3 className="font-primary underline text-2xl offset-2 font-bold">
              {content.business.title}
            </h3>
            <p>{content.business.prix}</p>
          </div>
          <div className="details w-full flex flex-row justify-around items-center">
            <p className="text-center pl-4 pr-4 pt-4">
              Solution sur-mesure pour organisations structurées
            </p>
          </div>
        </div>
      </div>

      <div className="container-info bg-[#FFF] shadow-lg text-black w-full h-auto md:h-2/3 md:w-1/2 rounded-xl p-4 md:px-4 md:py-12 flex flex-col justify-center">
        <div className="topLine flex flex-row  justify-around">
          <h3
            className={`title font-primary underline text-3xl md:text-5xl font-bold`}
          >
            {content[active].title}
          </h3>
          <h3 className={`utilisateur text-md md:text-xl`}>
            {content[active].utilisateur}
          </h3>
        </div>

        <div className="description flex flex-col h-1/4 justify-center mt-4 md:mt-8">
          <p className="text-justify text-xs md:text-sm pl-4 pr-4 pt-2 whitespace-pre-line">
            {content[active].description}
          </p>
        </div>

        <div
          className={`bottomLine flex flex-row justify-end pr-8 mb-4 md:mb-8 mt-8`}
        >
          <h3 className={`prix text-2xl`}>{content[active].prix}</h3>
        </div>
        <div className={`cta flex flex-row justify-center items-center mt-4`}>
          <a href="#contact">
            <button className="bg-[#1ee494] shadow-md shadow-green-500/50 text-white w-32 p-4 rounded-full cursor-none transform hover:scale-110 duration-300 hover:bg-[#1ee494]/80">
              Contact
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
