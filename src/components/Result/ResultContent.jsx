import React, { useEffect, useState } from "react";
import { caseStudies } from "./resultDatas";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { useReveal } from "../userContext/useReveal";

export const ResultContent = ({
  sectionRef,
  showAll,
  visibleItems,
  handleToggle,
}) => {
  const { ref, isInView } = useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const y = Math.min((scrollY / 1000) * 100, 100);
  return (
    <div
      className="relative
    "
    >
      {/* BACKGROUND PARALLAX */}
      <div
        className="absolute inset-0 bg-linear-to-br from-slate-50 to-primary/5 opacity-60"
        style={{
          transform: `translateY(${y}px)`,
        }}
      />

      {/* FLOATING BLOB 1 */}
      <div
        className="
          absolute top-20 left-10
          w-32 h-32 rounded-full
          bg-card blur-3xl opacity-20
          animate-[float1_4s_ease-in-out_infinite]
        "
      />

      {/* FLOATING BLOB 2 */}
      <div
        className="
          absolute bottom-20 right-10
          w-40 h-40 rounded-full
          bg-card blur-3xl opacity-20
          animate-[spinReverse_25s_linear_infinite]
        "
      />
      <div
        ref={ref}
        className={`transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"} relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center `}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Casos de Sucesso
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
          Formando Profissionais para o Futuro
        </h2>

        <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed text-center">
          Descubra como a DFC tem contribuído para a qualificação profissional e
          preparação de jovens e adultos para os desafios do mercado de
          trabalho.
        </p>
      </div>

      <div className="grid lg:grid-cols-1 gap-8 mb-16 mt-4">
        {visibleItems.map((study, index) => (
          <div className={`group relative`}>
            <div
              key={index}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              className={`${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"} bg-white  rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100
           `}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left side - story focus */}
                <div
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  className={`flex flex-col justify-between transition-all duration-600 ${isInView ? " opacity-100 translate-x-0 " : "opacity-0 -translate-x-30"}`}
                >
                  <div>
                    <div className="mb-8">
                      <div
                        style={{ transitionDelay: `${index * 200 + 200}ms` }}
                        className={`transition-all duration-400 ${isInView ? "scale-100 opacity-100 " : " scale-90 opacity-0"} text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4  `}
                      >
                        {study.category}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {study.title}
                      </h3>
                      <p className="text-slate-500 text-sm">{study.company}</p>
                    </div>
                    {/* challenge */}
                    <div className="space-y-8">
                      <div
                        className={`flex items-start gap-4 space-y-8 transition-all duration-300  hover:translate-x-2.5`}
                      >
                        <div className="shrink-0 mt-1 ">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100">
                            <span className="text-red-600 font-bold text-lg">
                              !
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            Desafio
                          </h4>
                          <p className="text-primary/600 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                      </div>

                      {/* soluction */}

                      <div className="flex items-center gap-4 transition-all duration-300 delay-100 hover:translate-x-2.5">
                        <div className="shrink-0 mt-1">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            Solução
                          </h4>
                          <p className="text-primary/600 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Quote */}
                    <div
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                      className={`mt-8 pt-6 border-t border-border transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} `}
                    >
                      <p className="text-primary/700 italic mb-3">
                        "{study.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side */}

                <div
                  style={{ transitionDelay: `${index * 200 + 150}ms` }}
                  className={`transition-all duration-600 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"}`}
                >
                  <div className="mb-10">
                    <div className="bg-linear-to-br from-emerald-50 to-primary/50  rounded-2xl p-6 border-primary-200 mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-centers gap-2">
                        <div>
                          <TrendingUp className="h-5 w-5 text-primary rotate-[360dg] duration-3 animate-spin" />
                        </div>
                        Impacto Transformador
                      </h4>
                      <p className="text-foreground leading-relaxed">
                        {study.impact}
                      </p>
                    </div>

                    {/* Befenefits */}

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Benefícios Alcançados
                      </h4>

                      <div className="space-y-3">
                        {study.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            style={{
                              transitionDelay: `${index * 200 + 400 + i * 100}ms`,
                            }}
                            className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                          >
                            <div className="shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center rotate-3 animate-pulse">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                            <span className="text-foreground font-medium hover:text-primary transition-colors">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}

                  <div
                    className="  bg-slate-900 rounded-2xl p-6 border
                 text-white"
                  >
                    <div className="flex items-center justify-between ">
                      <div>
                        <p className="text-slate-400 text-sm mb-1">
                          duração do Projecto
                        </p>
                        <p className="text-3xl font-bold">{study.timeline}</p>
                      </div>
                      <div className="animate-float">
                        <ArrowRight className="h-8 w-8 text-primary rotate-90 animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`text-center relative transition-all duration-600 delay-800 ${isInView ? "opacity-100 translate-y-0" : "translate-y-30"}`}
      >
        <p className="text-muted-foreground mb-6">
          Quer conhecer como podemos transformar seu negocios?
        </p>
        {caseStudies.length > 2 && (
          <Button
            onClick={handleToggle}
            className=" mx-auto flex items-center bg-primary text-white hover:bg-secondary px-8 h-12 text-base font-medium group"
          >
            {showAll
              ? "Ver Menos Casos de Sucesso"
              : "Ver Mais Casos de Sucesso"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </div>
  );
};
