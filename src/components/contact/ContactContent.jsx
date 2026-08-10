import React from "react";
import { contactInfo } from "../ui/contactInfo";
import { Button } from "../ui/button";
import { MessageCircle, Send } from "lucide-react";
import { useReveal } from "../userContext/useReveal";

export const ContactContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div>
      <div
        ref={ref}
        className={`transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"} text-center mb-20`}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Entre em Contacto
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Contacto
        </h2>
        <p className="text-xl text-slate-600 mac-w-2xl mx-auto leading-relaxed">
          Tem dúvidas? Entre em contato conosco e tire todas as suas dúvidas
          sobre nossos cursos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 lg:gap-12 ">
        <div className="grid grid-cols-1  gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={contact.title}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`hover:-translate-y-1.25 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"}flex items-start gap-4 transition-all duration-500`}
            >
              <div className="shrink-0 p-3 bg-primary/10 rounded-lg">
                <contact.icon className="h-6 w-6 text-primary " />
              </div>

              <div>
                <p className="font-semibold text-foreground">{contact.title}</p>
                {contact.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground mt-1">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <div
            className={`pt-6 transition-all duration-600 delay-400 ${isInView ? "opacity-100" : "opacity-0"} `}
          >
            <a
              href="https://wa.me/244244921725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>

        {/* Contact form  */}
        <div
          className={`transition-all duration-600 delay-300 ${isInView ? "opacity-100 translate-y-0" : " opacity-0 translate-y-10"} bg-white rounded-3xl  p-8 md:p-12 border border-border shadow-lg`}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Enviar Mensagem
          </h3>

          <form action="" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name=""
                  placeholder="João Xavier"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="joao@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block  text-sm font-medium text-slate-700 mb-2 ">
                Assunto
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 rounded-lg border border-slate-200  focus:border-primary focus:outline-none   focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mensagem
              </label>
              <textarea
                name=""
                id=""
                placeholder="Conte-nos mais sobre sua necessidade..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-200  focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              />
            </div>

            <Button className="mx-auto bg-primary hover:bg-secondary text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group object-contain">
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform " />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
