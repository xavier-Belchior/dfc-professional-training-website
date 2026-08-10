import React, { useState } from "react";
import { BlogHero } from "../components/blog/BlogHero";
import { BlogFilter } from "../components/blog/BlogFilter";
import { FeaturedArcticle } from "../components/blog/FeaturedArcticle";
import { featuredArticle } from "../lib/blog-data";
import { BlogGrid } from "../components/blog/BlogGrid";
import { BlogSidebar } from "../components/blog/BlogSidebar";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <BlogHero onSearch={setSearchQuery} />

      {/* Category  Filters */}
      <BlogFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Arcticle */}
          <FeaturedArcticle article={featuredArticle} />
          {/* Content Grid with Sidebar */}
          <div className="grid lg:grid-cols-3 gap-12 ">
            {/* Left: Blog Grid (takes 2 cols on lg) */}
            <div className="lg:col-span-2">
              <BlogGrid
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            </div>
            {/* Right: Sidebar (1 col on lg, hidden on smaller screens ) */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
