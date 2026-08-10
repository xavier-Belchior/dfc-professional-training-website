import React from "react";
import { Container } from "../layout/container";
import { TeamContent } from "../team/TeamContent";

export const Team = () => {
  return (
    <section className="relative overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20 ">
      <Container>
        <TeamContent />
      </Container>
    </section>
  );
};
