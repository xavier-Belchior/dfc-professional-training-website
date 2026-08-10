// hooks/useShowMore.js

import { useRef, useState } from "react";

export const useShowMore = (items, initialCount = 3) => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleItems = showAll
    ? items
    : items.slice(0, initialCount);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setShowAll(false);
      }, 300);

      return;
    }

    setShowAll(true);
  };

  return {
    showAll,
    visibleItems,
    handleToggle,
    sectionRef,
  };
};