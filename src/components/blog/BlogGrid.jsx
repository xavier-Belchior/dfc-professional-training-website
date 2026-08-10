import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";
import { blogArticles } from "../../lib/blog-data";
import { BlogCard } from "./BlogCard";

const ARTICLES_PER_PAGE = 6;
export const BlogGrid = ({ selectedCategory, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Todos" || article.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIdx = startIdx + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIdx, endIdx);
  return (
    <div>
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md-8">
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))
        ) : (
          <div className="col-span-kfull py-16 text-center ">
            <p className="text-xl text-gray-600 ">Nenhum artigo encontrado.</p>
            <p className="text-gray-500 mt-2">
              Tente ajustar seus filtros de busca.
            </p>
          </div>
        )}
      </div>
      {filteredArticles.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
