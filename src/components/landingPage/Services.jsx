import React from "react";
import { Container } from "../layout/container";
import { ServicesContent } from "../services/ServicesContent";
import { useShowMore } from "../userContext/ShowMore";
import { services } from "../ui/servicesDatas";
import { ModalCardCourse } from "../ui/ModalCardCourse";

export const Services = () => {
  const { sectionRef, showAll, visibleItems, handleToggle } = useShowMore(
    services,
    3,
  );

  return (
    <section
      ref={sectionRef}
      id="cursos"
      className="min-h-[85%]  px-6 lg:px-16  py-20 lg:pt-20 scroll-mt-24  bg-muted/30"
    >
      <Container>
        <ServicesContent
          sectionRef={sectionRef}
          showAll={showAll}
          visibleItems={visibleItems}
          handleToggle={handleToggle}
        />

        {/* <ModalCardCourse /> */}
      </Container>
    </section>
  );
};
