import React from "react";
import { FagContent } from "../fag/FagContent";
import { Container } from "../layout/container";

export const Fag = () => {
  return (
    <section className="bg-background overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20">
      <Container>
        <FagContent />
      </Container>
    </section>
  );
};
