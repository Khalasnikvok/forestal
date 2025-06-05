import React from 'react';
import { BookOpen } from 'lucide-react';
import { referencesData } from '../data/forestryContent';

export const References: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-serif text-emerald-900 mb-6 flex items-center">
        <BookOpen className="mr-2" /> Referencias Bibliográficas
      </h2>
      
      <div className="space-y-4">
        {referencesData.map((ref, index) => (
          <div key={index} className="border-l-4 border-emerald-700 pl-4 py-2">
            <h3 className="text-lg font-medium text-emerald-800">{ref.title}</h3>
            <p className="text-sm text-gray-600">
              {ref.author} ({ref.year})
            </p>
            <a 
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              Ver publicación →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};