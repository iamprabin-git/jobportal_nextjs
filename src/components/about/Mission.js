import React, { useEffect, useRef, useState } from 'react';

function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const missionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={missionRef}
      className="py-16 bg-white dark:bg-slate-800" 
      aria-labelledby="mission-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 
              id="mission-heading" 
              className={`text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Our Mission
            </h2>
            <div 
              className={`w-20 h-1 bg-blue-600 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 w-20' : 'opacity-0 w-0'
              }`}
            ></div>
            <p 
              className={`text-lg text-gray-700 dark:text-slate-300 mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              At CareerConnect, we believe that finding the right career opportunity should be a transformative experience, not a frustrating chore. Our mission is to empower job seekers and employers with tools that make the hiring process efficient, transparent, and rewarding.
            </p>
            <p 
              className={`text-lg text-gray-700 dark:text-slate-300 mb-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Founded in 2015, we have grown from a small startup to a leading platform trusted by over 50,000 companies and millions of job seekers worldwide. Our AI-powered matching system and personalized career coaching have helped countless professionals find their dream jobs.
            </p>
            <p 
              className={`text-lg text-gray-700 dark:text-slate-300 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              We are committed to creating a job market where talent is recognized, opportunities are accessible, and careers are built on meaningful connections.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <div 
                className={`absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <i className="fas fa-briefcase text-7xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <div 
                className={`absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-blue-200 dark:bg-blue-800/40 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 rotate-12' : 'opacity-0 rotate-0'
                }`}
              ></div>
              <div 
                className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-indigo-200 dark:bg-indigo-800/40 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 -rotate-12' : 'opacity-0 rotate-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;