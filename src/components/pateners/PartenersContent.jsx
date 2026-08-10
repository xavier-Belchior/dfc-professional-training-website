import React from "react";
import { clients, partners } from "../ui/ClientsData";
import { useReveal } from "../userContext/useReveal";

export const PartenersContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div>
      <div
        ref={ref}
        className={`transition-opacity duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"} text-center mb-16`}
      >
        <p className="text-sm font-medium text-primary  tracking-wide uppercase mb-4">
          Parcerias Estratégicas
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          Empresas e Instituições Parceiras
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Confiadas pelas principais organizações do país
        </p>
      </div>
      {/* Clients Grid */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 ">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:scale-[1.08px] hover:-translate-y-1.25 flex items-center justify-center p-6 mb:p-8 rounded-xl bg-muted border border-border hover:border-primary  min-h-24 hover:shadow-md transition-all duration-500 group cursor-pointer `}
          >
            {/* <img
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain group-hover:opacity-80 transition-opacity "
            /> */}

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold text-sm">
                  {partner.initials}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground text-balance">
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
