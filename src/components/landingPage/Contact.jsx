import React from "react";
import { Container } from "../layout/container";
import { ContactContent } from "../contact/ContactContent";

export const Contact = () => {
  return (
    <section
      id="contactos"
      className="relative bg-background overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20 scroll-mt-24 "
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96  bg-emerald-100 rounded-full blur-3xl opacity-10" />
      </div>
      <Container>
        <ContactContent />
      </Container>
    </section>
  );
};
