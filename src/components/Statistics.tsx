import React, { useState } from 'react';
import { BarChart3, TreePine, ArrowRight, Info } from 'lucide-react';
import { statisticsData } from '../data/forestryContent';

const StatCard = ({ stat, isEconomic }: { stat: any, isEconomic: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = "p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer";
  const economicClasses = `${baseClasses} bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-md`;
  const envClasses = `${baseClasses} bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-md`;
  
  return (
    <div 
      className={isEconomic ? economicClasses : envClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-2xl font-bold text-emerald-800">{stat.value}</div>
          <div className="text-sm font-medium text-gray-800 mt-1">{stat.label}</div>
        </div>
        <Info className={`w-4 h-4 text-gray-400 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className={`text-xs text-gray-600 mt-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        {stat.description}
      </div>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-emerald-900 mb-2">Impacto de la Industria Forestal</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Datos clave que ilustran la importancia económica y ambiental del sector forestal en Chile, con proyecciones al 2025.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-emerald-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-800">Impacto Económico</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {statisticsData.economicStats.map((stat, index) => (
              <StatCard key={`eco-${index}`} stat={stat} isEconomic={true} />
            ))}
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-center mb-4">
            <TreePine className="w-6 h-6 text-amber-600 mr-2" />
            <h3 className="text-xl font-semibold text-amber-800">Impacto Ambiental</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {statisticsData.environmentalStats.map((stat, index) => (
              <StatCard key={`env-${index}`} stat={stat} isEconomic={false} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Datos actualizados a junio 2025 | Fuente: Informes sectoriales y proyecciones oficiales
        </p>
      </div>
    </div>
  );
};