import React from "react";
import { Container } from "../layout/container";
import StatisticsContent from "../statistics/StatisticsContent";

export const Statistics = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary via-primary/80 to-secondary">
      <Container>
        <StatisticsContent />
      </Container>
    </section>
  );
};
