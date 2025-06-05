import React from 'react';
import { TreePine } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <TreePine size={28} className="text-amber-300" />
          <span className="text-xl font-serif">Forestry Perspectives</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-amber-300 transition-colors duration-200">
              <a href="#columna">Columna</a>
            </li>
            <li className="hover:text-amber-300 transition-colors duration-200">
              <a href="#guion">Guión de Video</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};