import React from "react";
import { Container } from "../layout/container";
import { TestemonialsContent } from "../testiminials/TestemonialsContent";

export const Testemonials = () => {
  return (
    <section className="bg-white overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20 ">
      <Container>
        <TestemonialsContent />
      </Container>
    </section>
  );
};
