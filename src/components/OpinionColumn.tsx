import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, User } from 'lucide-react';
import { opinionColumnData } from '../data/forestryContent';

export const OpinionColumn: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleParagraphs = isExpanded ? opinionColumnData.paragraphs : opinionColumnData.paragraphs.slice(0, 2);
  const hasMoreContent = opinionColumnData.paragraphs.length > 2;

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
            <BookOpen className="w-4 h-4 mr-2" />
            Columna de Opinión • {opinionColumnData.date}
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {opinionColumnData.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <User className="w-4 h-4 mr-1 text-emerald-600" />
            <span className="font-medium text-emerald-700">{opinionColumnData.author}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span>Curso {opinionColumnData.course}</span>
          </div>
        </div>
        
        <div className="space-y-5 text-gray-700 leading-relaxed">
          {visibleParagraphs.map((paragraph, index) => (
            <div key={index} className="relative group">
              <p className="relative z-10 transition-all duration-300 hover:pl-2 hover:border-l-4 hover:border-emerald-300">
                {paragraph}
                <span className="absolute -left-4 -top-1 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  ¶
                </span>
              </p>
            </div>
          ))}
          
          {hasMoreContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center text-emerald-600 hover:text-emerald-800 text-sm font-medium transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Mostrar menos contenido' : 'Mostrar más contenido'}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Mostrar menos
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Leer más
                </>
              )}
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src="/alejandra.jpg" 
                alt={`Fotografía de ${opinionColumnData.author}`}
                className="w-full h-full object-cover"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{opinionColumnData.author}</p>
            <p className="text-sm text-gray-500">Estudiante • {opinionColumnData.course}</p>
          </div>
          <div className="ml-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              {opinionColumnData.paragraphs.length} párrafos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};