import React from "react";
import { ResultContent } from "../Result/ResultContent";
import { Container } from "../layout/container";
import { useShowMore } from "../userContext/ShowMore";
import { caseStudies } from "../Result/resultDatas";

export const Results = () => {
  const { sectionRef, showAll, visibleItems, handleToggle } = useShowMore(
    caseStudies,
    2,
  );
  return (
    <section
      ref={sectionRef}
      id="result"
      className="bg-background overflow-hidden  px-6 lg:px-16  py-20 lg:pt-20 scroll-mt-24 "
    >
      <Container>
        <ResultContent
          sectionRef={sectionRef}
          showAll={showAll}
          visibleItems={visibleItems}
          handleToggle={handleToggle}
        />
      </Container>
    </section>
  );
};
