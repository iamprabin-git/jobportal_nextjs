import React from 'react'

function Hero() {
  return (
    <div className="relative bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Find Your Dream Job</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore thousands of job listings and find the perfect fit for your skills and interests.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Get Started
          </button>
          <button className="bg-white dark:bg-slate-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg border border-gray-300 dark:border-slate-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
