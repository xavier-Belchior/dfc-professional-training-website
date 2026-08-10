import React from "react";
import { popularArticles } from "../../lib/blog-data";
import { Calendar, Eye } from "lucide-react";

export const PopularArcticles = () => {
  const articleInfo = [
    {
      icon: Calendar,
      value: "date",
    },
    {
      icon: Eye,
      value: "views",
    },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-xl  font-bold text-gray-900 mb-6">
        Artigos Populares
      </h3>
      <div className="space-y-4">
        {popularArticles.slice(0, 5).map((article) => (
          <a
            href="#"
            key={article.id}
            className="group flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0 hover:opacity-75 transition-opacity"
          >
            {/* Thumbnail */}
            <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hodden bg-gray-200">
              <img
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform "
              />
            </div>

            {/* Content */}
            <div className="grow min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                {articleInfo.map((article, index) => {
                  const Icon = article.icon;
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <Icon className="w-3 h-3" />
                      <span>{article.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
