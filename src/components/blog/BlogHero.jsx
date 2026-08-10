import { Search } from "lucide-react";
import React, { useState } from "react";

export const BlogHero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <section className="py-16  md:py-24 bg-white *:">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Conhecimentos e Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Blog $ Artigos
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-balance ">
            Descubra dicas práticas, oportunidades de crescimento e conteúdos
            que o ajudarão a desenvolver novas competências profissiona
          </p>

          {/* Search Bar */}

          <div className="max-w-md mx-auto">
            <div className="relative ">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar artigos "
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
