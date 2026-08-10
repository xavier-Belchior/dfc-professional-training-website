import React from "react";
import { useReveal } from "../userContext/useReveal";
import CountUp from "../ui/CountUp";
import { stats } from "../ui/stats";

export default function StatisticsContent() {
  const { ref, isInView } = useReveal();

  return (
    <div>
      <div
        ref={ref}
        className={`transition-all duration-800 ${isInView ? "opacity-100 tranlate-y-0" : "opacity-0 -translate-7.5"} text-center mb-16 space-y-4`}
      >
        <h2 className="text-sm font-bold text-white/80 uppercase tracking-wide ">
          Números{" "}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          Impacto DFC em Números
        </h3>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
            className={`transition-alll duration-300 ${isInView ? "scale-100" : "scale-0"} mb-4`}
          >
            <div className="text-5xl md:text-6xl font-bold text-white">
              <CountUp
                from={0}
                to={stat.number}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
                delay={0}
              />

              <span>{stat.suffix}</span>
            </div>
            <p className="text-white/80 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom message */}
      <div className="text-center mt-16">
        <p className="text-white/80 text-lg">
          Junte-se a centenas de profissionais que transformaram suas carreiras
          com DFC
        </p>
      </div>
    </div>
  );
}
