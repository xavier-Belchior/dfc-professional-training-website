import React from "react";

export const FooterDiv = ({ title, link }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {link.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm text-slate-300 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
