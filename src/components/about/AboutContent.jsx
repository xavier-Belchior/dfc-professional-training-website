import React, { useContext } from "react";
import { Card } from "../ui/Card";
import { aboutFeatures, keyFeatures, stats } from "../ui/aboutDataCard";

import CountUp from "../ui/CountUp";
import { Heart } from "lucide-react";
import { useReveal } from "../userContext/useReveal";

export const AboutContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div className="py-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-row-1 gap-12 items-center">
        {/*Content left */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView
              ? " opacity-100 translate-x-0 "
              : "opacity-0 -translate-x-10"
          } relative z-10 rounded-2xl overflow-hidden shadow-2xl`}
        >
          <img
            src="/images/aboutRemove.png"
            width={500}
            height={600}
            alt="Equipe Ukwasi - Consultores de Finanças"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent " />
        </div>
        {/*Content Right */}
        <div
          className={`${
            isInView
              ? " opacity-100 translate-x-0 "
              : "opacity-0 translate-x-10"
          }
              transition-all duration-700 delay-100
          flex flex-col  w-full  justify-center items-start gap-4`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10  px-4 py-2 rounded-full mb-6 ">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <h2 className="text-primary uppercase text-sm font-bold leading-tight">
              Sobre DFC
            </h2>
          </div>

          <h3 className="text-4xl sm:text-5xl  text-foreground text-balance font-bold leading-13 ">
            Centro de Formação Profissional de Excelência
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A DFC é um centro de formação profissional dedicado a preparar
            jovens e adultos para o mercado de trabalho através de cursos
            práticos e qualificação profissional.
          </p>

          {/*key Features*/}
          <div className="space-y-4">
            {keyFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 pb-4 border-b last:border-none border-slate-200 "
                >
                  <div className="shrink-0 mt-1">
                    <div className="h-10 w-10 flex justify-center items-center rounded-lg bg-primary/10 text-primary ">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className=" text-medium text-slate-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* States Grids */}
      <div
        className={`transition-all  duration-700 delay-200 ${
          isInView ? " opacity-100 translate-y-0 " : "opacity-0 translate-y-40"
        }`}
      >
        <div
          className={`mt-8  grid sm:grid-col-2 lg:grid-cols-4 gap-6 
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.id}
                className={`group relative p-2 border-2 border-primary/10 hover:border-primary/50 hover:shadow-lg 
               transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{
                  transitionDelay: `${0.3 + index * 0.1}s`,
                }}
              >
                <div className="shrink-0 mt-1 mb-6">
                  <div className="h-10 w-10 flex justify-center items-center rounded-lg bg-primary/10 text-primary ">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl font-bold  text-primary mb-2">
                    <CountUp
                      from={0}
                      to={parseInt(stat.number)}
                      separator=","
                      direction="up"
                      duration={2}
                      className="count-up-text"
                      delay={0}
                    />
                    {stat.suprex}
                  </h2>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {stat.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
