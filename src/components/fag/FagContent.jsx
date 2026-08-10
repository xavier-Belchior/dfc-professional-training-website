import React, { useRef, useState } from "react";
import { faqs } from "../ui/fagData";
import { ChevronDown } from "lucide-react";
import { useInView } from "motion/react";
import { useReveal } from "../userContext/useReveal";

export const FagContent = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isInView } = useReveal();
  return (
    <div>
      <div
        ref={ref}
        className={`transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"} text-center mb-16`}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Dúvidas Frequentes
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Perguntas e Respostas
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Esclarecemos as principais dúvidas sobre nossos serviços, processos e
          como podemos transformar sua gestão financeira.
        </p>
      </div>
      {/* FAG Item */}
      <div className="space-y-4">
        {faqs.map((fag, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 0.05}s` }}
            className={`${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-primary/20 transition-all duration-500`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full px-8 py-6  flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
            >
              <span className="text-lg font-semibold text-slate-900 pr-4">
                {fag.question}
              </span>
              <div
                style={{
                  transform: `rotate(${openIndex ? 180 : 0}deg)`,
                  transition: "transform 0.3s",
                }}
                className="shrink-0 duration-[0.3]"
              >
                <ChevronDown className="h-6 w-6 text-primary  " />
              </div>
            </button>

            {/* Answer */}

            <div
              style={{
                maxHeight: openIndex === index ? "200px" : 0,
                opacity: openIndex === index ? 1 : 0,

                transition: "all 0.3s ease-in-out",
              }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-border">
                {fag.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Below FAQ */}
      <div
        className={`transition-all duration-600 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"} mt-16 text-center p-8 bg-white rounded-2xl  border-2 border-primary/10 `}
      >
        <p className="text-slate-700 mb-4">
          Ainda tem dúvidas? Nossa equipe está pronta para conversar com você.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors"
        >
          Conversar com um especialista
        </a>
      </div>
    </div>
  );
};
