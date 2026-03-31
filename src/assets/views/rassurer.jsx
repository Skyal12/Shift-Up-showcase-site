import React, { useState } from "react";
import "../utils/slider.css";

const testimonials = [
  {
    name: "Léa Martin",
    role: "Responsable RSE",
    company: "GreenPulse",
    stars: 5,
    text: "Une vraie dynamique interne autour du RSE.",
  },
  {
    name: "Julien Morel",
    role: "DRH",
    company: "EcoNova",
    stars: 4,
    text: "Les défis hebdos motivent toute l’équipe.",
  },
  {
    name: "Sofia Benali",
    role: "Office Manager",
    company: "BlueLeaf",
    stars: 5,
    text: "Simple, fun et super efficace.",
  },
  {
    name: "Marc Delcourt",
    role: "CEO",
    company: "Impactify",
    stars: 5,
    text: "Enfin un outil RSE qui engage vraiment.",
  },
  {
    name: "Nina Lopez",
    role: "Team Leader",
    company: "GreenHive",
    stars: 4,
    text: "Les badges motivent vraiment les équipes.",
  },
  {
    name: "Emma Roche",
    role: "Chargée de mission RSE",
    company: "TerraLink",
    stars: 5,
    text: "Les challenges mensuels ont vraiment créé une culture RSE dans l’entreprise.",
  },
  {
    name: "Louis Perrin",
    role: "Manager QHSE",
    company: "BioSphere",
    stars: 4,
    text: "Le système de points motive même les équipes les moins engagées.",
  },
  {
    name: "Chloé Bernard",
    role: "Assistante RH",
    company: "GreenWave",
    stars: 5,
    text: "Les employés adorent les badges et les classements, c’est devenu un rituel.",
  },
  {
    name: "Hugo Lambert",
    role: "Directeur Innovation",
    company: "EcoShift",
    stars: 5,
    text: "Une approche ludique qui rend le RSE beaucoup plus concret et mesurable.",
  },
  {
    name: "Maya Fontaine",
    role: "Team Leader",
    company: "EarthCore",
    stars: 4,
    text: "On voit clairement l’impact des actions grâce au dashboard.",
  },
  {
    name: "Nicolas Rey",
    role: "Responsable Opérations",
    company: "GreenHive",
    stars: 5,
    text: "Les missions quotidiennes créent une vraie dynamique d’équipe.",
  },
  {
    name: "Sarah Duval",
    role: "Office Manager",
    company: "EcoRise",
    stars: 4,
    text: "Simple à utiliser et super efficace pour impliquer tout le monde.",
  },
  {
    name: "Antoine Girard",
    role: "CEO",
    company: "ImpactFlow",
    stars: 5,
    text: "Enfin un outil RSE qui donne envie de participer au lieu de subir.",
  },
];

export default function Rassurer() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section
      id="rassurer"
      className="rassurer w-full bg-[#fff] py-20 flex flex-col items-center gap-12"
    >
      <h3 className="font-secondary text-3xl font-bold text-[#ff4800] text-left w-full pl-16">
        Ils nous font confiance
      </h3>
      <div className="slider-container mb-20">
        <div className="slider-track">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div className="card" key={i}>
              <div className="stars">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text">“{item.text}”</p>
              <p className="author">
                <strong>{item.name}</strong> · {item.role} · {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h3 className="font-secondary text-3xl font-bold text-[#ff4800] text-left w-full pl-16">
        Pourquoi Shift-Up ?
      </h3>
      <div className="flex flex-row justify-center items-start px-12 gap-16">
        <div className="flex flex-col items-center gap-4 bg-[#009378] py-12 px-4 rounded-2xl max-w-sm">
          <h3 className="text-xl font-semibold text-[#FFF]">Engagement</h3>
          <p className="text-center text-[#fff]">
            Impliquez vos équipes dans votre démarche RSE pour des résultats
            concrets.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 bg-[#009378] py-12 px-4 rounded-2xl max-w-sm">
          <h3 className="text-xl font-semibold text-[#FFF]">Impact</h3>
          <p className="text-center text-[#fff]">
            Transformez votre stratégie RSE en actions concrètes grâce à vos
            équipes.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 bg-[#009378] py-12 px-4 rounded-2xl max-w-sm">
          <h3 className="text-xl font-semibold text-[#FFF]">Simplicité</h3>
          <p className="text-center text-[#fff]">
            Une plateforme intuitive pour faciliter la gestion de votre RSE.
          </p>
        </div>
      </div>
    </section>
  );
}
