import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedCard = ({ card, index }) => {
  const trackerRef = useRef(null);

  // 1. On centre l'empilement verticalement (15vh = 15% du haut de l'écran)
  // On retire le "+ index * 30" pour quelles s'empilent parfaitement au même niveau
  const stickyTop = "15vh";

  const { scrollYProgress } = useScroll({
    target: trackerRef,
    // 2. On synchronise le début de l'animation avec la position sticky
    offset: ["start 15vh", "start -400px"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const blurValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(12px)"],
  );

  return (
    <>
      <div ref={trackerRef} className="w-full h-0 pointer-events-none" />

      <div
        className="sticky w-full mb-10"
        style={{
          top: stickyTop,
          zIndex: index,
        }}
      >
        <motion.div
          style={{
            scale,
            opacity,
            filter: blurValue,
            WebkitFilter: blurValue,
            transformOrigin: "top center", // L'échelle se fera proprement vers le haut
          }}
        >
          <article className="flex flex-col md:flex-row bg-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 overflow-hidden">
            {/* Moitié Texte */}
            <div className="flex flex-col justify-center p-10 lg:p-14 md:w-1/2">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {card.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  {card.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {card.vision}
                </p>
              </div>
            </div>

            {/* Moitié image */}
            <div className="md:w-1/2 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                alt={card.visualAlt}
                loading={index < 2 ? "eager" : "lazy"}
                src={card.visualUrl}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </article>
        </motion.div>
      </div>
    </>
  );
};

const FeaturedWorkSection = () => {
  const cardsData = Array(6).fill({
    category: "Lorem ipsum Category",
    title: "Sit amet consectetur, adipiscing elit",
    vision:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    visualUrl:
      "https://tse1.mm.bing.net/th/id/OIP.l5Hgjce3EixFXzuDu0T3uwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    visualAlt: "Lorem Ipsum",
  });

  return (
    <section
      id="experience"
      className="relative w-full max-w-7xl mx-auto px-4 py-32 md:px-8 bg-[#ededed]"
    >
      <div className="pb-32 block">
        {cardsData.map((card, index) => (
          <AnimatedCard key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
