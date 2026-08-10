import React, { useRef } from "react";
import { blogPosts } from "../ui/blogData";
import { ArrowRight, Calendar, Eye } from "lucide-react";
import { useReveal } from "../userContext/useReveal";

export const BlogContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div>
      {/* header */}
      <div
        ref={ref}
        className={` transition-all duration-600 ${isInView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-7.5"} text-center mb-20 `}
      >
        <p className="text-sm font-medium text-primary  tracking-wide  uppercase mb-4">
          Conhecimento e Insights
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          Blog & Artigos
        </h2>
        <p className="texl-xl text-slate-600 max-w-2xl mx-auto leadng-relaxed">
          Descubra dicas práticas, oportunidades de crescimento e conteúdos que
          o ajudarão a desenvolver novas competências profissionais.
        </p>
      </div>
      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`group transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}
          >
            {/*  */}
            <div
              className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-500
            h-full flex flex-col shadow-sm hover:shadow-xl "
            >
              {/* Image Container */}

              <div className="relative h-64 overflow-hidden bg-slate-100">
                <div
                  style={{ transition: "all 0.6  ease-in-out" }}
                  className="w-full h-full hover:scale-103 transition-transform duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Category badge */}
                <div
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  className={`transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2.5"} absolute top-4 left-4 inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                {/* Meta */}

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {[post.date]}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 " />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6  grow line-clamp-2">
                  {post.excerpt}
                </p>
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border ">
                  <span className="text-xs text-slate-500 font-medium">
                    {post.readTime} de leitura
                  </span>
                  <div className="hover:inset-x-5 flex items-center gap-1 text-primary font-semibold text-sm hover:text-secondary transition-colors group/btn">
                    <a href="/BlogPage">
                      Ler Mais
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View all Button */}

      <div
        className={`transition-all duration-600 delay-600 ${isInView ? "opacity-100   translate-y-0" : "opacity-0 translate-y-5"} flex justify-center mt-16`}
      >
        <button className="hover:scale-[1.05] peer-hover:scale-[0.95] inline-flex items-center gap-2 px-8  py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/20 transition-colors">
          <a href="/#blogPage"></a> Ver Todos os Artigos
          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
