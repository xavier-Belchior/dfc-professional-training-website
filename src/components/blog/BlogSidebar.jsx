import React from "react";
import { NewsletterCard } from "./NewsletterCard";
import { PopularArcticles } from "./PopularArcticles";

export const BlogSidebar = () => {
  return (
    <aside className="hidden lg:block  col-span-2.8">
      <NewsletterCard />
      <PopularArcticles />
    </aside>
  );
};
