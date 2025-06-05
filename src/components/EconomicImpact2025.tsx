import React from 'react';
import { TrendingUp, MapPin, Leaf, BarChart2 } from 'lucide-react';

const EconomicImpact2025: React.FC = () => {
  const stats = [
    {
      icon: <BarChart2 className="w-8 h-8 text-emerald-600" />,
      title: "1.3% del PIB Nacional",
      description: "Proyección de contribución de la industria forestal al PIB de Chile en 2025"
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
      title: "14% en Regiones Clave",
      description: "Contribución al PIB en regiones como Ñuble y La Araucanía"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Crecimiento Moderado",
      description: "Proyección de crecimiento en mercados internacionales clave como China"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Bioeconomía Circular",
      description: "Potencial de desarrollo sostenible y resiliente con sentido territorial"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 my-12 border border-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-gray-900 mb-3">Impacto Económico 2025</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proyecciones y oportunidades para la industria forestal chilena en el corto plazo
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-opacity-20 flex items-center justify-center mb-4"
                 style={{ backgroundColor: stat.icon.props.className.includes('text-emerald') ? 'rgba(5, 150, 105, 0.1)' : 
                                           stat.icon.props.className.includes('text-amber') ? 'rgba(217, 119, 6, 0.1)' :
                                           stat.icon.props.className.includes('text-blue') ? 'rgba(37, 99, 235, 0.1)' :
                                           'rgba(22, 163, 74, 0.1)' }}
            >
              {React.cloneElement(stat.icon, { className: stat.icon.props.className.replace('w-8 h-8', 'w-6 h-6') })}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
            <p className="text-gray-600 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                La industria forestal chilena se proyecta como un pilar fundamental para la economía nacional, con un enfoque creciente en la sostenibilidad y la bioeconomía circular.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicImpact2025;
