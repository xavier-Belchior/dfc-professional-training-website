import { ArrowRight } from "lucide-react";
import React from "react";

export const CTASection = () => {
  const links = [
    {
      title: "Ver Cursos",
      icons: "ArrowRight",
      href: "/#cursos",
      style:
        "inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors",
    },
    {
      title: "Falar Connosco",
      icons: "ArrowRight",
      href: "/#contacto",
      style:
        "inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors",
    },
  ];
  return (
    <div className="py-19 md:py-24 bg-linear-to-r from-blue-50 to-blue-100">
      <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className="text-3xl md:text-4xl lfont-bold text-gray-900 mb-4 text-balance ">
          Pronto para Desenvolver Novas Competências?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-balance">
          Explore os nossos cursos profissionais e acelere a sua carreira com
          formação de qualidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          {links.map((link, idx) => {
            const Icon = link.icons;
            return (
              <a key={idx} href={link.href} className={link.style}>
                {link.title}
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
