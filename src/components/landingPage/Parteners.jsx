import React from "react";
import { Container } from "../layout/container";
import { PartenersContent } from "../pateners/PartenersContent";

export const Parteners = () => {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white relative overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className=" absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-10" />
      </div>
      <Container>
        <PartenersContent />
      </Container>
    </section>
  );
};
