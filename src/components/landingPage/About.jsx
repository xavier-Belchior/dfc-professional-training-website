import { Container } from "../layout/container";
import { QuemSomos } from "../about/QuemSomos";
import { AboutContent } from "../about/AboutContent";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-[85%] px-6 lg:px-16  py-20 lg:pt-20 scroll-mt-24  bg-white"
    >
      <Container>
        <AboutContent />

        <QuemSomos />
      </Container>
    </section>
  );
};
