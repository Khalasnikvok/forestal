import React from 'react';
import { Layout } from './components/Layout';
import { OpinionColumn } from './components/OpinionColumn';
import { VideoScript } from './components/VideoScript';
import { Statistics } from './components/Statistics';
import EconomicImpact2025 from './components/EconomicImpact2025';
import { References } from './components/References';
import './styles/animations.css';

function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            La Industria Forestal en Chile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un análisis profundo sobre su impacto económico, social y ambiental en el contexto actual y sus proyecciones al 2025
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full"></div>
        </div>
        
        <Statistics />
        
        <EconomicImpact2025 />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-500">
              <h2 className="text-2xl font-serif font-bold text-white">Columna de Opinión</h2>
            </div>
            <div className="p-6">
              <OpinionColumn />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-orange-500">
              <h2 className="text-2xl font-serif font-bold text-white">Guión para Video Documental</h2>
            </div>
            <div className="p-6">
              <VideoScript />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <References />
        </div>
      </div>
    </Layout>
  );
}

export default App;