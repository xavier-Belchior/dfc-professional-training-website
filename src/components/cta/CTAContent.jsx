import { Calendar, Phone } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useReveal } from "../userContext/useReveal";

export const CTAContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"} relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 p-12 lg:p-20`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-o w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className={`transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} text-sm font-medium text-accent  tracking-wide uppercase mb-6`}
        >
          Comece Agora
        </p>
        <h2
          className={`transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight`}
        >
          Pronto Para Transformar Seu Negócio?
        </h2>
        <p
          className={`transition-all duration-500 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} mt-6 text-lg text-slate-300 leading-relaxed `}
        >
          Descubra o que nos diferencia e por que escolher DFC para sua formação
          profissional
        </p>
        <div
          className={`transition-all duration-500 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} mt-10 flex flex-col sm:flex-row items-center justify-center gap-4`}
        >
          <Button className=" bg-primary text-white hover:bg-secondary px-8 h-14 text-base font-medium group w-full sm:w-auto flex justify-center items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Agender inscrição
          </Button>
          <Button className="border-slate-400 text-white hover:bg-white/10 px-8 h-14 text-base flex justify-center items-center  font-medium w-full sm:w-auto">
            <Phone className="mr-2 h-5 w-5" />
            Ligar Agora
          </Button>
        </div>
        <p
          className={`transition-all duration-500 delay-500 ${isInView ? "opacity-100 " : "opacity-0 "} mt-8 text-sm text-slate-400`}
        >
          Sem compromisso. Consulta confidencial com nossos especialistas.
        </p>
      </div>
    </div>
  );
};
