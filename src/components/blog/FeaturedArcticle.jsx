import { ArrowBigRight, ArrowRight, Calendar, Clock } from "lucide-react";
import React from "react";

export const FeaturedArcticle = ({ article }) => {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center ">
        {/* Image */}
        <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            fill
            className="object-cover h-full"
          />
          <span className="absolute top-6 left-6 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
            {article.category}
          </span>
        </div>

        {/* Content  */}
        <div className="flex flex-col  justify-center">
          <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
            <div className="flex item-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md-4 leading-tight text-balance">
            {article.title}
          </h2>
          <p className="text-lg text-gray-600 md-6 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">
                {article.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {article.author.name}
              </p>
              <p className="text-sm text-gray-600">Autor</p>
            </div>
          </div>

          <a
            href={`/blog-page/${article.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:blue-700 transition-colors w-fit"
          >
            Ler Artigo Completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
