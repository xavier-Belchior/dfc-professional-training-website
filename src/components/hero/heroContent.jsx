import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { UserContext } from "../userContext/UseContext";

export const HeroContent = () => {
  const { show, setShow } = useContext(UserContext);
  return (
    <div
      className={`transition-all duration-800 ${show ? "opacity-100 translate-x-0":"opacity-0 -translate-x-7.5"} space-y-8 `}
    >
      
      <div className="space-y-4">
        <div className={`transition-all duration-600 ${show ? "opacity-100":"opacity-0"}  inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full`}> ✨ Transforme sua carreira com DFC</div>
      <h1
        className={`transition-ll duration-800  delay-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} text-5xl lg:text-6xl   font-bold text-balance leading-tight text-foreground`}
      >
         Formação Profissional para o Mercado de{" "}
         <span className="text-primary">Trabalho</span>
      </h1>
      <p
        className={`transition-ll duration-800  delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}  text-lg text-muted-foreground  max-w-lg text-balance `}
      >
         Aprenda com profissionais qualificados e prepare-se para uma
                carreira de sucesso em diversas áreas de formação.
      </p>
</div>

{/* CTA Buttons */}
      <div
        className={`transition-ll duration-800  delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}  flex flex-col sm:flex-row gap-4 pt-6`}
      >
        <Button className="duration-300 transition-alltext-white hover:bg-secondary font-semibold flex items-center group text-white bg-primary">
        Inscrever-se
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Button>

        <Button
          variant="outline"
          className="border-primary border-2 duration-300  hover:bg-primary/5 text-primary font-semibold transition-colors bg-background text-slate-700 "
        >
          Ver Cursos
        </Button>
      </div>
    </div>

  
  );
};
