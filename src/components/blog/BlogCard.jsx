import { ArrowRight, Calendar, Eye } from "lucide-react";
import React from "react";

export const BlogCard = ({ article }) => {
  const articleInfo = [
    {
      icon: Calendar,
      value: article.date,
    },
    {
      icon: Eye,
      value: article.views,
    },
  ];
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadpw-lg transition-all duration-300 h-full flex flex-col">
      {/* image container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={article.image}
          alt={article.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          {article.category}
        </span>
      </div>
      {/* content */}
      <div className="p-6 flex flex-col grow">
        <h3 classname="text-xl font-bold text-gray-900 mb-3 line-clamb-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 grow">
          {article.excerpt}
        </p>

        {/* Meta info */}

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-100">
          {articleInfo.map((article, idx) => {
            const Icon = article.icon;
            return (
              <div key={idx} className="flex items-center gap-1">
                <Icon className="w-4 h-4" />
                <span>{article.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer */}{" "}
      <footer className="flex items-center justify-between border-t border-gray-100 p-4">
        <span className="text-sm font-medium text-gray-700">
          {article.readingTime}
        </span>
        <a
          href={`/blog-page/${article.id}`}
          className="text-blue-600 font-semibolod text-sm flex items-center gap-2 group/link"
        >
          Ler Mais{" "}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </footer>
    </article>
  );
};
