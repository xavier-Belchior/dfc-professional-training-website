import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export const footerLinks = {
  services: [
    { label: "Soldadura Industrial", href: "#" },
    { label: "Segurança no Trabal", href: "#" },
    { label: "Máquinas Pesadas", href: "#" },
    { label: "Operador de Caixa", href: "#" },
    { label: "Drywall", href: "#" },
  ],
  company: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Nossa Equipe", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#" },
  ],
  resources: [
    { label: "Estudos de Caso", href: "#" },
    { label: "Guias", href: "#" },
    { label: "Artigos", href: "#" },
    { label: "Eventos", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Serviço", href: "#" },
    { label: "Política de Cookies", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export const contacts = [
  {
    icon: MapPin,
    text: "Luanda, Benguela",
  },
  {
    icon: Phone,
    text: "+55 (11) 9999-9999",
  },
  {
    icon: Mail,
    text: "contato@dfc.com.ao",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    id: 3,
    icon: Mail,
    href: "#",
    label: "Email",
  },
];

export const footerSections = [
  {
    id: 1,
    title: "Serviços",
    links: footerLinks.services,
  },
  {
    id: 2,
    title: "Empresa",
    links: footerLinks.company,
  },
  {
    id: 3,
    title: "Recursos",
    links: footerLinks.resources,
  },
  {
    id: 4,
    title: "Legal",
    links: footerLinks.legal,
  },
];
