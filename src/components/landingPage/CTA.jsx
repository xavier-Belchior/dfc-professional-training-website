import React from "react";
import { CTAContent } from "../cta/CTAContent";
import { Container } from "../layout/container";

export const CTA = () => {
  return (
    <article className="py-24 lg:py-32">
      <Container>
        <CTAContent />
      </Container>
    </article>
  );
};
