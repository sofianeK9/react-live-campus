import React, { useState } from "react";
import Footer from "./Footer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quels types d'articles puis-je trouver sur ce blog ?",
      answer:
        "Ce blog couvre une variété de sujets, y compris la technologie, le développement personnel, la cuisine, etc. Nous publions des articles sur des tendances actuelles, des guides pratiques, et des réflexions approfondies.",
    },
    {
      question: "Comment puis-je proposer un sujet ou une idée d'article ?",
      answer:
        "Nous sommes toujours ravis de recevoir des suggestions de nos lecteurs ! Vous pouvez nous envoyer vos idées via notre page Contact ou en utilisant le formulaire de suggestion disponible ici.",
    },
    {
      question: "Puis-je soumettre un article invité pour ce blog ?",
      answer:
        "Oui, nous acceptons les contributions d'auteurs invités ! Pour en savoir plus sur les conditions de soumission, veuillez consulter notre page Contributeurs ou nous contacter directement via notre page Contact.",
    },
    {
      question: "Comment puis-je m'abonner à la newsletter ?",
      answer:
        "Pour vous abonner à notre newsletter, il vous suffit de remplir le formulaire d'inscription disponible sur notre page Newsletter. Vous recevrez régulièrement des mises à jour sur nos derniers articles et des contenus exclusifs.",
    },
    {
      question: "Je rencontre un problème technique avec le site. Que faire ?",
      answer:
        "Si vous rencontrez des problèmes techniques, veuillez nous en informer en utilisant le formulaire de contact sur notre page Contact. Nous ferons de notre mieux pour résoudre le problème rapidement.",
    },
    {
        question: "Comment puis-je m'abonner à la newsletter ?",
        answer:
          "Pour vous abonner à notre newsletter, il vous suffit de remplir le formulaire d'inscription disponible sur notre page Newsletter. Vous recevrez régulièrement des mises à jour sur nos derniers articles et des contenus exclusifs.",
      },
      {
        question: "Je rencontre un problème technique avec le site. Que faire ?",
        answer:
          "Si vous rencontrez des problèmes techniques, veuillez nous en informer en utilisant le formulaire de contact sur notre page Contact. Nous ferons de notre mieux pour résoudre le problème rapidement.",
      },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">
          Foire Aux Questions (FAQ)
        </h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span className="text-xl font-semibold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 px-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
