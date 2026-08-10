import React from "react";
import { teamMembers } from "../ui/teamMembers";
import { useReveal } from "../userContext/useReveal";

export const TeamContent = () => {
  const { ref, isInView } = useReveal();
  return (
    <div>
      <div
        ref={ref}
        className={`transition-all duration-600 ${isInView ? "opacity-100 tranlate-y-0" : "opacity-0 translate-7.5"}  text-center mb-20 `}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Talento & Expertise
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          A Nossa Equipa
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto  leading-relaxed ">
          Uma equipa multidisciplinar, dedicada a fornecer soluções inovadoras
          em educação, consultoria e formação profissional.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} group`}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-slate-100 ">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay with social Icons */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ">
                  {/* Social Icons  */}
                  <div className="flex items-center gap-3 ">
                    {member.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10  rounded-full bg-primary hover:bg-secondary text-white flex items-center justify-center shadow-lg transition-all   hover:scale-110 hover:rotate-6 hover:-translate-y-1"
                      >
                        <social.icon className="h-5 w-5" />
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 px-2 py-1 bg-slate-900 text-white text-xs  rounded whitespace-nowrap pointer-events-none hover:opacity-1 hover:-translate-y-8 transition-transform duration-[0.2] ">
                          {social.label}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/*  Content*/}
              <div className="p-6">
                <h3 className="tex-lg font-bold text-slate-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm  font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {member.bio}
                </p>

                {/* Bottom Border Accent */}
                <div className="mt-4 h-1 bg-linear-to-r from-primary to-secondary rounded origin-left scale-x-0  group-hover:scale-x-100 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
