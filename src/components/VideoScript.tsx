import React, { useState, useEffect } from 'react';
import { Clock, ChevronDown, ChevronUp, Film, PlayCircle, Video, ArrowUp } from 'lucide-react';
import { videoScriptData } from '../data/forestryContent';

export const VideoScript: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentScene, setCurrentScene] = useState<number | null>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Efecto para manejar el scroll y mostrar/ocultar el botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleScene = (index: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    setCurrentScene(currentScene === index ? null : index);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      // Al expandir, asegurarse de que la primera escena esté visible
      setCurrentScene(0);
    }
  };
  
  const getSceneDuration = (index: number): string => {
    if (index === 0) return '30 seg';
    if (index === videoScriptData.script.length - 1) return '20 seg';
    return '20-30 seg';
  };
  
  const totalDuration = "~2 minutos";
  
  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full mb-3">
            <Film className="w-4 h-4 mr-2" />
            Guión para Video Documental • {totalDuration}
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {videoScriptData.title}
          </h3>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
            <h4 className="text-amber-800 font-medium flex items-center mb-1">
              <PlayCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              Indicaciones técnicas
            </h4>
            <p className="text-sm text-amber-700 mt-1">{videoScriptData.technicalNotes}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {!expanded ? (
            /* Vista previa (solo introducción) */
            <div className="space-y-4">
              <div 
                className="bg-white rounded-lg border border-amber-100 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                onClick={(e) => toggleScene(0, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleScene(0)}
                aria-expanded={currentScene === 0}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-amber-700 flex items-center">
                    <Video className="w-4 h-4 mr-2 text-amber-500" />
                    Introducción
                  </h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-400 transition-transform ${currentScene === 0 ? 'transform rotate-180' : ''}`} 
                    aria-hidden="true"
                  />
                </div>
                {currentScene === 0 && (
                  <div className="mt-3">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {videoScriptData.script[0]}
                    </p>
                    <div className="flex items-center text-xs text-amber-600">
                      <Clock className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      Duración: {getSceneDuration(0)}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={toggleExpand}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-700 font-medium rounded-lg transition-all flex items-center justify-center text-sm mt-2 group"
                aria-expanded={expanded}
                aria-label="Ver guión completo"
              >
                <span className="group-hover:translate-y-[-1px] transition-transform">
                  Ver guión completo
                </span>
                <ChevronDown size={16} className="ml-2 group-hover:translate-y-[-1px] transition-transform" />
              </button>
            </div>
          ) : (
            /* Vista completa */
            <div className="space-y-4">
              {videoScriptData.script.map((paragraph, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg border ${
                    currentScene === index 
                      ? 'border-amber-200 shadow-md' 
                      : 'border-gray-100 hover:border-amber-100'
                  } p-4 transition-all cursor-pointer group`}
                  onClick={(e) => toggleScene(index, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleScene(index)}
                  aria-expanded={currentScene === index}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-amber-700 flex items-center">
                      <Video className={`w-4 h-4 mr-2 ${
                        currentScene === index ? 'text-amber-600' : 'text-amber-400'
                      }`} />
                      {index === 0 ? 'Introducción' : 
                       index === videoScriptData.script.length - 1 ? 'Cierre' : 
                       `Escena ${index}`}
                    </h4>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        currentScene === index 
                          ? 'text-amber-500 transform rotate-180' 
                          : 'text-amber-300 group-hover:text-amber-400'
                      }`} 
                      aria-hidden="true"
                    />
                  </div>
                  
                  {currentScene === index && (
                    <div className="mt-3 animate-fadeIn">
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {paragraph}
                      </p>
                      <div className="flex items-center text-xs text-amber-600">
                        <Clock className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                        Duración: {getSceneDuration(index)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <span>Duración total: {totalDuration}</span>
                </div>
                <button 
                  onClick={() => setExpanded(false)}
                  className="text-sm text-amber-600 hover:text-amber-800 flex items-center transition-colors"
                  aria-label="Mostrar menos"
                >
                  <ChevronUp size={16} className="mr-1" />
                  Mostrar menos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};