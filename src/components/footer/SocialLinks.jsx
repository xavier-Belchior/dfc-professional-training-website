import React from "react";

export const SocialLinks = ({ label, icon: Icon, href }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors group"
    >
      <Icon className="h-5 w-5 text-slate-300 group-hover:text-white" />
    </a>
  );
};
