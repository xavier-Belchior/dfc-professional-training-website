import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={` relative max-w-7xl mx-auto ${className}`}>{children}</div>
  );
};
