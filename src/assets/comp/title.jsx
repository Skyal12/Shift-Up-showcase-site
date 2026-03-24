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
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const titles = {
    hero: null,
    concept: "Concept",
    faq: "FAQ",
    tarif: "Tarif",
    contact: "Contact",
  };

  const title = titles[currentSection];

  // Pas de titre sur mobile
  if (window.innerWidth < 1024) return null;

  // Si le titre est null → ne rien afficher
  if (!title) return null;

  return (
    <div
      className={`fixed bg-gray-800 text-white top-1/2 w-[10%] h-12 flex justify-center rounded-md items-center z-20 transform origin-center
      ${title === "Tarif" ? "right-[-3%] rotate-90" : "left-[-3%] rotate-270"}
      `}
    >
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}
