import { useContext, useRef } from "react";
import { UserContext } from "./UseContext";
import { useInView } from "motion/react";

export function useReveal() {
  const { animationConfig } = useContext(UserContext);
  const ref = useRef(null);
  const sectionRef = useRef(null);

  const isInView = useInView(ref, animationConfig);
  return { ref, isInView, sectionRef };
}
