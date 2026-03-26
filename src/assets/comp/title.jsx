import { useEffect, useState } from "react";

export default function Title() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const titles = {
    hero: null,
    concept: "Concept",
    experience: "Expérience",
    faq: "FAQ",
    tarif: "Tarif",
    contact: "Contact",
  };

  const title = titles[currentSection];

  // Pas de titre sur mobile
  if (window.innerWidth < 1024) return null;

  // Si le titre est null ou n'existe pas → ne rien afficher
  if (!title) return null;

  return (
    <div className="fixed bg-gray-800 text-white top-1/2 w-[15%] h-12 flex justify-center rounded-md items-center z-20 transform origin-center left-[-5.5%] rotate-270">
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}
