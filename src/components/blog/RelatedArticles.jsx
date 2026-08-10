import React from "react";
import { Link } from "react-router-dom";

export default function RelatedArticles({ articles }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Artigos Relacionados
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <a key={article.id} href={`/blog-page/${article.id}`}>
            <div className="group h-full border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer">
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{article.date}</span>
                  <span>{article.views} views</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
