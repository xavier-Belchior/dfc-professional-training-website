import React from "react";
import { Card } from "../ui/Card";

import { Heart } from "lucide-react";
import { useReveal } from "../userContext/useReveal";
import { missionContent } from "../ui/aboutDataCard";

export const QuemSomos = () => {
  const { ref, isInView } = useReveal();
  return (
    <article
      className="flex flex-col items-center justify-center gap-4 lg:py-20"
      ref={ref}
    >
      <div
        className={`transition-all  duration-700  ${
          isInView ? " opacity-100 translate-y-0 " : "opacity-0 translate-y-10"
        } text-center mb-16 lg:mb-24`}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Quem somos
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Missão, Visão e Valores
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Os pilares que guiam nossa atuação e definem nosso compromisso com
          excelência
        </p>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20  transition-all duration-500
          ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        {[
          missionContent.mission,
          missionContent.vision,
          missionContent.values,
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className={`p-8 lg:10 rounded-2xl bg-linear-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-primary transition-all duration-500
               ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
             `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex  items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 pt-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </article>
  );
};
