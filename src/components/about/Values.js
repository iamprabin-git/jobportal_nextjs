import coreValues from '@/constants/value';
import React, { useState, useEffect } from 'react';

function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-slate-900 dark:to-gray-400"
      aria-labelledby="values-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 text-white text-3xl">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;