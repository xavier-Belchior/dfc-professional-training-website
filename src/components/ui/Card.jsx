import React from "react";

export const Card = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`bg-card p-6 rounded-xl   shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
