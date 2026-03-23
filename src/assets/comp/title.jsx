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
      { threshold: 0.5 }, // 50% visible = section active
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const titles = {
    hero: null,
    concept: "Concept",
  };

  const title = titles[currentSection] || "";

  if (window.innerWidth < 1024) return null;

  return (
    <div className="fixed top-1/2 left-[-3%] w-auto z-10 transform origin-center rotate-270 ">
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}
