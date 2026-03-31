import React from "react";

export default function faq() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "Comment éviter la triche ?",
      answer:
        "Les défis sont limitées à des cycle journaliers et hebdomadaires afin de garantir la fiabilité des données.",
    },
    {
      question: "Est-ce conforme au RGPD ?",
      answer:
        "Oui, toutes les données sont hébergées en Europe et respectent les normes RGPD.",
    },
    {
      question: "Est-ce adapté aux grandes entreprises ?",
      answer:
        "Oui, la solution est conçue pour des structures de 100 à 2000+ collaborateurs.",
    },
    {
      question: "Est-ce une certification RSE ?",
      answer:
        "Non, Shift’Up est un outil d’accompagnement qui vous aide à structurer et piloter votre démarche RSE.",
    },
    {
      question: "Combien de temps pour déployer ?",
      answer:
        "Quelques jours suffisent pour lancer les premières missions et engager vos équipes.",
    },
  ];

  return (
    <section
      id="faq"
      className="faq snap-center bg-white text-black flex justify-center items-center w-full h-screen p-16 pt-32 pb-32 gap-12"
    >
      <div className="title w-1/3">
        <h3 className="font-primary text-4xl mb-4">FAQ</h3>
        <h4 className="font-secondary text-2xl">Question frequente</h4>
      </div>
      <div className="question w-1/2">
        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 w-full"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
