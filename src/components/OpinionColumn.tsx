import React from 'react';
import { opinionColumnData } from '../data/forestryContent';

export const OpinionColumn: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="prose prose-emerald max-w-none flex-1">
        <div className="mb-6">
          <div className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
            Columna de Opinión • {opinionColumnData.date}
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {opinionColumnData.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="font-medium text-emerald-700">{opinionColumnData.author}</span>
            <span className="mx-2">•</span>
            <span>Curso {opinionColumnData.course}</span>
          </div>
        </div>
        
        <div className="space-y-5 text-gray-700 leading-relaxed">
          {opinionColumnData.paragraphs.map((paragraph, index) => (
            <div key={index} className="relative group">
              <p className="relative z-10">
                {paragraph}
                <span className="absolute -left-4 -top-1 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  ¶
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src="/alejandra.jpg" 
                alt={opinionColumnData.author}
                className="w-full h-full object-cover"
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