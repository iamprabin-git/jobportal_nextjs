import React from 'react';
import CourseCard from './CourseCard';

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden shadow-lg rounded-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl dark:bg-indigo-900"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl dark:bg-purple-900"></div>
      </div>
      
      <div className="container mx-auto px-4 py-22 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Unlock Your <span className="text-indigo-600 dark:text-indigo-400">Potential</span> Through Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Discover expert-led courses and training programs to advance your career. Learn in-demand skills at your own pace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Browse Courses
              </button>
              <button 
                className="bg-white dark:bg-slate-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg border border-gray-300 dark:border-slate-600 shadow hover:shadow-md transition-all duration-300"
              >
                Free Trial
              </button>
            </div>
            
            {/* Stats section */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5K+</div>
                <div className="text-gray-600 dark:text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Expert Instructors</div>
              </div>
            </div>
          </div>
          
          {/* Course Card Illustration */}
         <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;