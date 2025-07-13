import React from 'react'
import { FaStar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function CourseCard() {
  return (
    <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-indigo-200 rounded-full opacity-50 dark:opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 dark:opacity-20"></div>
              
              <div className="relative bg-white dark:bg-slate-700 rounded-2xl shadow-xl p-6 border-8 border-white dark:border-slate-600 transform transition-transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Web Development</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Advanced React Training</h3>
                  </div>
                  <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                    
                    <FaStar className="h-5 w-5 text-yellow-500 mr-1"/>
                    <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">4.9</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      
                      <CgProfile className="h-6 w-6 text-indigo-600 dark:text-indigo-400"/>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Alex Morgan</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Senior Developer & Instructor</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                    12 Modules
                  </span>
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                    Certificate
                  </span>
                  <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                    Hands-on Projects
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Rs. 1,500</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">Rs. 20,000</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">32 hours of content</div>
                </div>
                
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
  )
}

export default CourseCard
