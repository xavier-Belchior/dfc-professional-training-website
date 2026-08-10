import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { testimonials } from "../ui/testemonialsData";
import { useReveal } from "../userContext/useReveal";

const ITEM_COUNT = testimonials.length;

export const TestemonialsContent = () => {
  const { ref, isInView } = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ITEM_COUNT);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % ITEM_COUNT);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + ITEM_COUNT) % ITEM_COUNT);
    setAutoPlay(false);
  };

  return (
    <div>
      <div
        ref={ref}
        className={`transition-all duration-600 ${isInView ? "opacity-100 tranlate-y-0" : "opacity-0 translate-7.5"} flex flex-col items-center justify-center text-center`}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-8">
          Testemunhos dos Formandos
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Histórias de Sucesso que Inspiram
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Conheça as experiências de alunos que desenvolveram novas
          competências, concluíram a sua formação e deram passos importantes
          rumo ao sucesso profissional.
        </p>
      </div>

      {/* Circular carousel Container */}
      <div className="relative w-full  flex items-center justify-center">
        {/* Centarl Badge */}

        {/* Testimonial Cards Orbiting */}
        <div className="relative w-full h-125 overflow-hidden flex items-center justify-center">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out  py-4"
            style={{
              transform: `translateX(calc(50% - ${activeIndex * 344}px - 172px))`,
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={testimonial.author}
                  className={`
              w-80 shrink-0 cursor-pointer
              transition-all duration-500 
              ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}
            `}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  <div className="w-full ">
                    <div
                      className={`relative bg-white rounded-2xl p-8 border-2  transition-all duration-300 group  shadow-xl ${isActive ? "border-primary/10 shadow-primary/20 " : "border-slate-100"}`}
                    >
                      {/* Quote Icon */}

                      <div className="absolute -top-4  -left-2 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Quote className="h-5 w-5 text-white" />
                      </div>

                      {/* Stars */}

                      <div className="flex gap-1 mb-6 pt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400 "
                          />
                        ))}
                      </div>
                      {/* Quote */}
                      <blockquote className="text-slate-900 leading-relaxed mb-8 text-sm lg:text-base">
                        &ldquo;{testimonial.quote.replace(/&apos;/g, "'")}
                        &rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900 text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-slate-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      {/*Active indicator  */}
                      <div
                        style={{
                          opacity: isActive ? 1 : 0,
                        }}
                        className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r  from-primary to-secondary rounded-t"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-16">
        <button
          style={{}}
          onClick={prevSlide}
          className="h-12 w-12 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors flex items-center justify-center group"
        >
          <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform " />
        </button>

        {/* Indicators */}

        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setAutoPlay(false);
              }}
              style={{
                width: activeIndex === index ? 32 : 12,
                backgroundColor:
                  activeIndex === index
                    ? "rgb(21, 92, 199)"
                    : "rgb(226, 232, 240)",
              }}
              className="h-2 rounded-full transition-all"
            />
          ))}
        </div>
        <button
          style={{ hoverScale: 1.1 }}
          onClick={nextSlide}
          className="h-12 w-12 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors flex items-center justify-center group"
        >
          <ChevronRight className="h-5 w-5  group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Auto-rotate Timer indicator  */}

      {/* <div className="flex justify-center mt-8">
        <div
          key={activeIndex}
          className={`${activeIndex ? "w-full" : "w-0"} h-1 transition-transform  duration-600  ease-linear   bg-linear-to-r from-primary to-primary rounded-full max-w-xs`}
        />
      </div> */}
    </div>
  );
};
