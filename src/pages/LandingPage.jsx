import React from "react";
import { Header } from "../components/layout/Header";
import { Home } from "../components/landingPage/Home";
import { About } from "../components/landingPage/About";
import { Services } from "../components/landingPage/Services";
import { Statistics } from "../components/landingPage/Statistics";
import { Results } from "../components/landingPage/Results";
import { Blog } from "../components/landingPage/Blog";
import { Parteners } from "../components/landingPage/Parteners";
import { Team } from "../components/landingPage/Team";
import { Testemonials } from "../components/landingPage/Testemonials";
import { Fag } from "../components/landingPage/Fag";
import { Contact } from "../components/landingPage/Contact";
import { CTA } from "../components/landingPage/CTA";
import { Footer } from "../components/layout/Footer";

export const LandingPage = () => {
  return (
    <main className="relative w-full min-h-screen  text-foreground  ">
      <Header />
      <Home />
      <About />
      <Services />
      <Statistics />
      <Results />

      {/* THIS IS NOT A main  blog page  */}
      {/* <Blog /> this is temporally closed */}
      <Parteners />
      <Team />
      <Testemonials />
      <Fag />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};
