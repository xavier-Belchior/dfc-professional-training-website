import React from "react";
import { contacts, footerSections, socialLinks } from "../ui/footerlink";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { FooterDiv } from "./FooterDiv";

export const FooterContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-secondary">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-white ">
              FC
            </span>
          </a>
          <p className="text-slate-300 leading-relaxed mb-6 max-w-sm ">
            Centro de Formação Profissional dedicado a preparar profissionais
            para o mercado de trabalho.
          </p>

          {/* Contact info */}
          <div className="space-y-3 mb-6">
            {contacts.map((contact, index) => (
              <ContactInfo
                key={index}
                label={contact.text}
                icon={contact.icon}
              />
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((socialLink, index) => (
              <SocialLinks
                key={socialLink.id}
                href={socialLink.href}
                icon={socialLink.icon}
              />
            ))}
          </div>
        </div>
        {/* Company, legal, resource services */}
        {footerSections.map((footerSection, index) => (
          <FooterDiv
            key={footerSection.id}
            title={footerSection.title}
            link={footerSection.links}
          />
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8  border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} DFC. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-white">Formações Certificada</span>
            <span className="text-xs text-primary"> Conformidade Total</span>
          </div>
        </div>
      </div>
    </div>
  );
};
