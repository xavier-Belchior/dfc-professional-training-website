import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Bar } from "recharts";
import { UserContext } from "../userContext/UseContext";

export const Header = () => {
  const { show, setShow } = useContext(UserContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Iniçio", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cursos", href: "#cursos" },
    { label: "Resultados", href: "#result" },
    { label: "Blog", href: "/blog-page" },
    { label: "Contactos", href: "#contactos" },
  ];
  return (
    <div
      className={`transition-all duration-500 ease-out
        ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"
        } fixed top-0 left-0  w-full h-24  z-20 px-6 lg:px-20  bg-white/95 isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20  mx-auto  max-w-7xl    ">
        <a href="">
          <img src="/images/logo-bg.png" alt="DFC" width={100} height={100} />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className="bg-transparent border border-primary text-slate-800 hover:text-white hover:bg-primary  transition-colors "
          >
            Entrar
          </Button>
        </div>

        {/* Mobile Menu Button */}

        <button
          className="flex  lg:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden flex justify-center border-t gap-2 py-6 px-6 lg:px-20 flex-col border-b border-slate-200  br top-24 absolute  left-0 w-full bg-white/95 backdrop-blur ">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors leading-relaxed "
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-transparent w-full border border-primary text-slate-800 hover:text-white hover:bg-primary  transition-colors ">
            Entrar
          </Button>
        </nav>
      )}
    </div>
  );
};
