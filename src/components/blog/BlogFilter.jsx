import React from "react";
import { CATEGORIES } from "../../lib/blog-data";

export const BlogFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <section className="py-8 border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
