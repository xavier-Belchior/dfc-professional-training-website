import { Bookmark, BookOpen, Clock, Download, Star, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

export const ModalCardCourse = ({ course, isOpen, onClose }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen || !course) {
    return null;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Inscrições Abertas":
        return "bg-green-50 text-green-700 border border-green-200";
      case "Encerradas":
        return "bg-red-50 text-red-700 border border-red-200";
      case "Em Breve":
        return "bg-yellow-50 text-yellow-700 border border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border border-gray-200";
    }
  };
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return (
          <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
            PDF
          </div>
        );
      case "excel":
        return (
          <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">
            XLS
          </div>
        );
      case "word":
        return (
          <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
            DOC
          </div>
        );
      case "video":
        return (
          <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600">
            <span className="text-lg">▶</span>
          </div>
        );
      case "zip":
        return (
          <div className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xs">
            ZIP
          </div>
        );
      default:
        return <FileText className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
        onClick={handleBackDropClick}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="alertdialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <div
          ref={modalRef}
          className="relative max-h-[90vh] w-full max-w-5xl animate-in fade-in zoom-in-95 overflow-y-auto rounded-2xl bg-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Column - Course Image */}
            <div className="lg:col-span-2 relative h-96 lg:h-auto min-h-100 bg-linear-to-br from-blue-600 to-blue-800">
              <img
                src={course?.imageUrl}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

              {/* Course Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-4xl">{course.icon}</div>
                </div>
                <h2 id="modal-title" className="text-3xl font-bold mb-2">
                  {course.title}
                </h2>
                <p className="text-blue-100">{course.category}</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3 p-8 overflow-y-auto max-h-[90vh]">
              {/* Status Badge */}
              <div className="mb-6 flex gap-2">
                <span
                  className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${getStatusColor(course.enrollmentStatus)}`}
                >
                  {course.enrollmentStatus}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-600">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{course.hours} horas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>{course.assignments} Tarefas</span>
                </div>
                <div className="text-sm text-gray-600">
                  Atualizado em {course.lastUpdate}
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200" />

              {/* Instructor Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Instrutor
                </h3>
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {course.instructorInfo.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {course.instructorInfo.name}
                      </h4>
                      <p className="text-sm text-blue-700 font-medium mb-2">
                        {course.instructorInfo.title}
                      </p>
                      <p className="text-sm text-gray-700">
                        {course.instructorInfo.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200" />

              {/* Course Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Detalhes do Curso
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                    <div className="text-xs text-gray-600 font-medium mb-1">
                      Duração
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {course.duration}
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                    <div className="text-xs text-gray-600 font-medium mb-1">
                      Preço
                    </div>
                    <div className="text-lg font-semibold text-blue-600">
                      {course.price}
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                    <div className="text-xs text-gray-600 font-medium mb-1">
                      Modalidade
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {course.modality}
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                    <div className="text-xs text-gray-600 font-medium mb-1">
                      Vagas Disponíveis
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {course.availableSpots}
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-gray-50 col-span-2">
                    <div className="text-xs text-gray-600 font-medium mb-1">
                      Certificação
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      {course.certification}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200" />

              {/* Learning Points */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  O que irá aprender:
                </h3>
                <ul className="space-y-2">
                  {course.learningPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-1 text-green-500 font-bold">✓</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200" />

              {/* Download Resources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recursos para Download
                </h3>
                <div className="space-y-2">
                  {course.resources?.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {getFileIcon(resource.type)}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm truncate">
                            {resource.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {resource.size} • {resource.uploadedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <button
                          className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Download"
                        >
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Bookmark"
                        >
                          <Bookmark className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200" />

              {/* Action Buttons */}
              <div className="flex gap-3 sticky bottom-0 bg-white pt-4">
                <button
                  className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
                  aria-label={`Inscrever-se em ${course.title}`}
                >
                  Enroll Agora
                </button>
                <button
                  className="flex-1 rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 transition-colors hover:bg-green-50 active:bg-green-100"
                  aria-label={`Falar no WhatsApp sobre ${course.title}`}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
