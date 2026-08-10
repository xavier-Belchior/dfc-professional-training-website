import React from "react";
import { FooterContent } from "../footer/FooterContent";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-linear-to-br from-slate-900 to-slate-800">
      <Container className="px-6 lg:px-0.5 ">
        <FooterContent />
      </Container>
    </footer>
  );
};
