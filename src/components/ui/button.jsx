import { Slot } from "@radix-ui/react-slot";
import React from "react";

export const Button = ({
  asChild = false,
  className = "",
  onClick,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      onClick={onClick}
      className={`px-4 py-2 font-medium rounded-md  text-primary-foreground   active:scale-[0.98] transition cursor-pointer ${className}`}
      {...props}
    />
  );
};
