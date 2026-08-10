import React, { useRef, useState } from "react";
import { Card } from "../ui/Card";
import { services } from "../ui/servicesDatas";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "../userContext/useReveal";
import { Button } from "../ui/button";
import { ModalCardCourse } from "../ui/ModalCardCourse";
import { coursesData } from "../ui/ModalDatas";

export const ServicesContent = ({
  sectionRef,
  showAll,
  visibleItems,
  handleToggle,
}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isInView } = useReveal();

  const handleOpenModal = (id) => {
    console.log("clicked id:", id);
    const course = coursesData.find((item) => item.id === id);
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };
  return (
    <div className="w-full  flex flex-col">
      <div
        ref={ref}
        className={`max-w-2xl mb-16 ${
          isInView ? " opacity-100 translate-y-0 " : "opacity-0 translate-y-30"
        }
              transition-all duration-600 `}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Nossos cursos
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground  tracking-tight">
          Formação em <span className="text-primary">Diversas Áreas</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Escolha entre mais de 12 cursos profissionais com foco no mercado de
          trabalho
        </p>
      </div>

      <div className="grid mb:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((service, index) => {
          return (
            <Card
              key={service.id}
              onClick={() => handleOpenModal(service.id)}
              className={`group relative rounded-2xl p-8 border border-muted/30 hover:border-primary/40 transition-all duraction-300 hover:shadow-lg
  duration-500
               ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}
             `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 text-white rounded-xl bg-primary/700 flex items-center justify-center">
                  <service.icon
                    key={service.icon}
                    className="w-7 h-7 text-black group-hover:text-primary"
                  />
                </div>
                <span className="tetx-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba Mais
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </div>
            </Card>
          );
        })}
      </div>

      {services.length > 3 && (
        <Button
          onClick={handleToggle}
          className=" space-y-4 mt-4 mx-auto flex items-center bg-primary text-white hover:bg-secondary px-8 h-12 text-base font-medium group"
        >
          {showAll ? "Show Less" : "Show More"}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      )}

      {selectedCourse && (
        <ModalCardCourse
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
