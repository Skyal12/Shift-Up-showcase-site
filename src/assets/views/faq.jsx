import React from "react";

export default function faq() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How to use this component?",
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
    },
    {
      question: "Are there any other components available?",
      answer:
        "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
    },
    {
      question: "Are components responsive?",
      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
    },
  ];

  return (
    <section
      id="faq"
      className="faq bg-white text-black flex justify-center items-center w-full p-16 pt-32 pb-32 gap-12"
    >
      <div className="title w-1/3">
        <h3>FAQ</h3>
        <h4>Questions fréquente</h4>
      </div>
      <div className="question w-1/2">
        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
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
