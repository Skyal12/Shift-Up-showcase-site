import { useState, useEffect } from "react";
import challengeImg from "../img/challenge.png";
import carbonTrendImg from "../img/carbon-trend.png";
import badgeImg from "../img/badge.png";
import levelImg from "../img/level.png";
import dashboardImg from "../img/dashboard.png";
import dashboardChallengeImg from "../img/dashboard-challenge.png";

export default function ShiftUpDeck() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const cards = [
    {
      id: 1,
      type: "title",
      title: "UTILISATEUR",
    },
    {
      id: 2,
      type: "content",
      tag: "Bloc 1 – Engagement individuel",
      title: "Une expérience pensée pour engager chaque collaborateur",
      text: "Chaque utilisateur accède à des missions concrètes à réaliser dans son quotidien professionnel : écogestes, actions collaboratives, défis internes.\n\nGrâce à une interface simple et intuitive, les collaborateurs progressent à leur rythme et visualisent leur impact en temps réel.",
      layout: "text-left",
      images: [challengeImg, carbonTrendImg],
    },
    {
      id: 3,
      type: "content",
      tag: "Bloc 2 – Gamification & motivation",
      title: "Transformer les bonnes pratiques en réflexes",
      text: "Système de niveaux, badges, défis… Shift’Up transforme la RSE en expérience engageante.\n\nLes collaborateurs ne subissent plus la démarche : ils y participent activement, avec motivation et régularité.",
      layout: "text-left",
      images: [badgeImg, levelImg],
    },
    {
      id: 4,
      type: "title",
      title: "ADMIN",
    },
    {
      id: 5,
      type: "content",
      tag: "Bloc 3 – Pilotage simplifié",
      title: "Un tableau de bord pour piloter votre stratégie RSE",
      text: "Les équipes RH et les dirigeants accèdent à un tableau de bord centralisé permettant de suivre les performances, l’engagement et les actions réalisées.\n\nTout est automatisé pour gagner du temps et structurer la démarche.",
      layout: "text-right",
      images: [dashboardImg],
    },
    {
      id: 6,
      type: "content",
      tag: "Bloc 4 – Données concrètes",
      title: "Des indicateurs fiables pour décider",
      text: "Suivez vos KPI RSE : taux d’engagement, actions réalisées, impact environnemental.\n\nShift’Up transforme les initiatives en données mesurables, utiles pour vos reportings, certifications ou appels d’offres.",
      layout: "text-right",
      images: [dashboardChallengeImg],
    },
  ];

  return (
    <>
      <section
        id="experience"
        className="relative w-full max-w-6xl mx-auto py-24 px-4 flex flex-col gap-24"
        style={{ perspective: "1200px" }}
      >
        {cards.map((card, index) => {
          const topOffset = `calc(8vh + ${index * 28}px)`;
          const rotationX = `${Math.max(0, 2.5 - index * 0.5)}deg`;

          return (
            <article
              key={card.id}
              className="sticky w-full"
              style={{
                top: topOffset,
                transformOrigin: "50% 0%",
                transform: `rotateX(${rotationX})`,
                zIndex: index,
              }}
            >
              <div className="bg-[#ff4800] rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,72,0,0.3)] p-8 md:p-14 min-h-[65vh] flex flex-col justify-center border border-white/10 transition-all duration-500">
                {/* CARTES TITRES */}
                {card.type === "title" && (
                  <div className="flex items-center justify-center h-full w-full">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white text-center">
                      {card.title}
                    </h2>
                  </div>
                )}

                {/* CARTES CONTENU */}
                {card.type === "content" && (
                  <div
                    className={`flex flex-col md:flex-row h-full gap-10 md:gap-16 items-center ${
                      card.layout === "text-right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Colonne Texte */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 z-10">
                      <div>
                        <span className="inline-block px-5 py-2 rounded-full bg-[#1ee494] text-[#009378] text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
                          {card.tag}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1]">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed whitespace-pre-line">
                        {card.text}
                      </p>
                    </div>

                    {/*Images*/}
                    <div className="w-full md:w-1/2 h-full min-h-[350px] flex items-center justify-center relative">
                      {card.images && (
                        <div
                          className={`w-full h-full flex ${card.images.length > 1 ? "flex-row gap-6 md:gap-8 justify-center items-center" : "justify-center items-center"}`}
                        >
                          {card.images.map((imgSrc, i) => (
                            <img
                              key={i}
                              src={imgSrc}
                              alt={`Illustration ${card.tag}`}
                              // Ouverture de la modale au clic + curseur adapté
                              onClick={() => setSelectedImage(imgSrc)}
                              className={`${card.images.length > 1 ? "max-w-[45%] md:max-w-[50%]" : "max-w-full"} max-h-[350px] object-contain drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105 rounded-xl cursor-zoom-in`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>

      {/* MODALE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-screen w-full flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              className="absolute -top-12 right-0 sm:-right-4 text-white/70 hover:text-[#1ee494] transition-colors p-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Fermer
            </button>

            {/* Big image comme le goat que je suis */}
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
