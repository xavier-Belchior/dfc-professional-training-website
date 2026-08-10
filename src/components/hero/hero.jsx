import React, { useContext, useEffect, useState } from "react";
import { Container } from "../layout/container";
import { HeroContent } from "./heroContent";
import { RevenueChart } from "../charts/RevenueChart";
import { Kpi } from "../ui/Kpi.jsx";
import CountUp from "react-countup";
import { kpiData } from "../ui/kpiData.js";
import { div } from "motion/react-client";
import { Shield, TrendingUp, Users } from "lucide-react";
import { UserContext } from "../userContext/UseContext.jsx";

export const Hero = () => {
  const { show, setShow } = useContext(UserContext);
  const badges = [
    { icon: Shield, label: "100% Confidencial" },
    { icon: TrendingUp, label: "Crescimento Comprovado" },
    { icon: Users, label: "500+ Empresas" },
  ];
  return (
    <section
      id="home"
      className="relative overflow-hidden  pt-38 pb-30    scroll-mt-28  px-6 lg:px-8 gap-6 "
    >
       {/* Background gradient elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className=" grid  md:grid-cols-2 gap-12 items-center">
        {/* Content */}
          <HeroContent />
          <div className={`transition-all duration-800 ${show ? "opacity-100 translate-x-0": " opacity-0 translate-x-7.5"} relative`}>
            <div
              className="relative"
            >
              <div classNam="absolute inset-0 bg-linear-t0-r from-primary/20 to-primary/10 rounded-2xl blur-2xl "/>
             <img
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260519-WA0001-gwznQSaVoJjSgcJ589E6tP3m6ChTHK.jpg"
                }
                alt="Profissional DFC"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/banner.jpg";
                }}
              /> 
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
