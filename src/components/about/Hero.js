import React, { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay animation for smoother rendering
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative bg-gradient-to-r from-blue-600 to-blue-400 dark:from-slate-800 dark:to-slate-900 text-white py-16 md:py-24"
      aria-label="Hero section"
    >
      {/* Background image with optimized loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: 'center 30%' 
        }}
        aria-hidden="true"
      >
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-blue-400/30 dark:from-slate-900/60 dark:to-slate-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-3xl transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'  // Reduced initial translate
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We are revolutionizing the job market by connecting top talent with world-class employers through innovative technology and personalized career services.
          </p>
          
          {/* CTA Button */}
          <button 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
            aria-label="Get started"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;