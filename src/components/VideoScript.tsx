import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Film, PlayCircle } from 'lucide-react';
import { videoScriptData } from '../data/forestryContent';

export const VideoScript: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentScene, setCurrentScene] = useState<number | null>(null);
  
  const toggleScene = (index: number) => {
    setCurrentScene(currentScene === index ? null : index);
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="prose prose-emerald max-w-none flex-1">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full mb-3">
            <Film className="w-4 h-4 mr-2" />
            Guión para Video Documental • 2 min
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {videoScriptData.title}
          </h3>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
            <h4 className="text-amber-800 font-medium flex items-center mb-1">
              <PlayCircle className="w-4 h-4 mr-2" />
              Indicaciones técnicas
            </h4>
            <p className="text-sm text-amber-700">{videoScriptData.technicalNotes}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {!expanded ? (
            <>
              <div key={0} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleScene(0)}
                >
                  <h4 className="font-medium text-amber-700">
                    Introducción
                  </h4>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${currentScene === 0 ? 'transform rotate-180' : ''}`} />
                </div>
                {currentScene === 0 && (
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {videoScriptData.script[0]}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => setExpanded(true)}
                className="w-full py-2 px-4 bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-700 font-medium rounded-lg transition-all flex items-center justify-center text-sm mt-2"
              >
                Ver guión completo <ChevronDown size={16} className="ml-2" />
              </button>
            </>
          ) : (
            videoScriptData.script.map((paragraph, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => toggleScene(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-amber-700">
                    {index === 0 ? 'Introducción' : 
                     index === videoScriptData.script.length - 1 ? 'Cierre' : 
                     `Escena ${index}`}
                  </h4>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${currentScene === index ? 'transform rotate-180' : ''}`} />
                </div>
                
                {currentScene === index && (
                  <div className="mt-3">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {paragraph}
                    </p>
                    <div className="flex items-center text-xs text-amber-600">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      Duración: {index === 0 ? '30 seg' : index === videoScriptData.script.length - 1 ? '20 seg' : '20-30 seg'}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        {expanded && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1.5" />
                Duración total: ~2 minutos
              </div>
              <button 
                onClick={() => setExpanded(false)}
                className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center"
              >
                <ChevronUp className="w-4 h-4 mr-1" />
                Contraer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};