import React from "react";

import { blogArticles, featuredArticle } from "../../../lib/blog-data";
import { Link, useParams } from "react-router-dom";
import RelatedArticles from "../RelatedArticles";

export const ArticleDetailPage = ({ params }) => {
  const { id } = useParams(params);
  console.log(id);
  const article =
    id === "featured-1"
      ? featuredArticle
      : blogArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Artigo não encontrado
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2);
  console.log(relatedArticles);
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center ">
          <a
            href="/blog-page"
            className="text-blue-400 hover:text-blue-700 font-semibold flex items-center gap-2"
          >
            <span>←</span>Voltar ao Blog
          </a>
        </div>
      </nav>

      {/* Featured Image */}
      <div className="h-96 overflow-hidden bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 ">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {article.category}
            </span>
            <time className="text-gray-600 text-sm ">{article.date}</time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold  ">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {article.author.name}
              </p>
              <p className="text-gray-600 text-sm">
                {article.readingTime} • {article.views} visualizações{" "}
              </p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-12">
          {" "}
          <div
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: article.content || article.excerpt,
            }}
          ></div>
          {/* Article Footer */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-semibold ">Tags:</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                {article.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                Professional
              </span>
            </div>
          </div>
        </div>
        {/*   CTA section  */}

        <div className="bg-blue-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900  mb-4">
            Quer melhorar suas competências?
          </h2>
          <p className="text-gray-700 mb-6">
            Explore nossos cursos profissionais especializados e acelere seu
            desenvolvimento.
          </p>
          <Link
            href="/cursos"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold roundeed hover:bg-blue-700 transition-colors"
          >
            Ver Cursos
          </Link>
        </div>
      </article>

      {/* Related  Articles*/}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6  lg:px-8">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      )}

      {/* Footer CTA */}

      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center ">
          <a
            href="/blog-page"
            className=" inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Voltar ao Blog
          </a>
        </div>
      </footer>
    </main>
  );
};
