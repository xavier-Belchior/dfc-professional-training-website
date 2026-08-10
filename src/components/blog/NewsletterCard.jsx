import { Mail } from "lucide-react";
import React, { useState } from "react";

export const NewsletterCard = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  return (
    <div className=" w-full bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md  top-32 ">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Receba Novos Conteúdo
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Subscreva para receber novos artigos e oportunidades de formação.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 " />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg kborder border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors
        "
        >
          Subescrever
        </button>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-sm text-green-700 bg-green-50 p-2 rounded text-center">
          Obrigado! Verifique o seu email.
        </p>
      )}
    </div>
  );
};
