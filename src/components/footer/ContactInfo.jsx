import React from "react";

export const ContactInfo = ({ label, icon: Icon }) => {
  return (
    <div className={`flex items-center gap-3 text-sm text-slate-300 `}>
      <Icon className="h-4 w-4 text-primary" />
      <span>{label}</span>
    </div>
  );
};
