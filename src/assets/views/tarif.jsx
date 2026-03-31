import { useState } from "react";

export default function Tarif() {
  const [active, setActive] = useState("pro");

  const content = {
    pro: {
      title: "Start",
      utilisateur: "50 utilisateurs",
      description: `- Accès à l’application utilisateur
      - Missions et défis standards
      - Suivi des actions de base
      - Support en ligne
      - Accès aux statistiques et indicateurs
      - Accès aux outils de gestion de missions et de suivi des actions`,
      prix: "500€",
    },
    proPlus: {
      title: "Pro",
      utilisateur: "150 utilisateurs",
      description: `
      - Accès à l’application utilisateur
      - Missions et défis standards
      - Suivi des actions de base
      - Support en ligne
      - Accès aux statistiques et indicateurs
      - Accès aux outils de gestion de missions et de suivi des actions
      - Tableau de bord RH avancé
      - Suivi des KPI RSE (engagement, impact, participation)
      - Gestion des équipes et départements
      - Personnalisation des missions
      - Support prioritaire`,
      prix: "1000€",
    },
    business: {
      title: "Entreprise",
      utilisateur: "Sur Mesure",
      description: `- Accès à l’application utilisateur
      - Missions et défis standards
      - Suivi des actions de base
      - Support en ligne
      - Accès aux statistiques et indicateurs
      - Accès aux outils de gestion de missions et de suivi des actions
      - Tableau de bord RH avancé
      - Suivi des KPI RSE (engagement, impact, participation)
      - Gestion des équipes et départements
      - Personnalisation des missions
      - Support prioritaire
      - Accompagnement dédié (onboarding & stratégie)
      - Création de programmes RSE personnalisés
      - Intégration avec vos outils internes
      - Reporting avancé (appels d’offres, certifications)
      - Suivi et optimisation continue
      `,
      prix: "2000€",
    },
  };

  return (
    <section
      id="tarif"
      className="tarif snap-center w-full flex bg-[#ff4800] flex-row justify-center items-center p-8 md:p-20 pt-32 pb-32 h-screen"
    >
      <div className="container-offers w-1/2 flex flex-col md:flex-col justify-center items-center">
        <div
          className={`offer1 mb-12 w-4/5 h-50 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
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
              Une offre adaptée à la taille et aux enjeux de votre entreprise.
            </p>
          </div>
        </div>

        <div
          className={`offer2 mb-12 w-4/5 h-50 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
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
          className={`offer3 mb-12 w-4/5 h-50 md:h-32 shadow-lg rounded-xl flex flex-col justify-center items-center bg-[#FFF] text-black transition-transform duration-300 ${
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

      <div className="container-info bg-[#FFF] shadow-lg text-black w-full h-4/4 md:w-1/2 md:h-4/4 rounded-xl p-4 flex flex-col justify-center">
        <div className="topLine flex flex-row  justify-around">
          <h3
            className={`title font-primary underline text-5xl font-bold ${active === "business" ? "relative top-2" : ""}`}
          >
            {content[active].title}
          </h3>
          <h3
            className={`utilisateur text-xl ${active === "business" ? "relative top-3" : ""}`}
          >
            {content[active].utilisateur}
          </h3>
        </div>

        <div className="description flex flex-col h-3/4 justify-center mt-8">
          <p className="text-justify text-sm pl-4 pr-4 pt-2 whitespace-pre-line">
            {content[active].description}
          </p>
        </div>

        <div
          className={`bottomLine flex flex-row justify-end pr-8 mb-4 ${active === "business" ? "mt-0" : "mt-16"}`}
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
