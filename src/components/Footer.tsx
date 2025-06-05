import React from 'react';
import { TreePine } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <TreePine size={20} className="text-amber-300 mr-2" />
            <span className="font-serif">Alejandra Paine © 2025</span>
          </div>
          <div className="text-sm text-emerald-200">
            <p>Análisis de la industria forestal chilena</p>
          </div>
        </div>
      </div>
    </footer>
  );
};