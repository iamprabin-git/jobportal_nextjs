import { JOBS_ROUTE, LOGIN_ROUTE } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero from '@/assets/hero.jpg' // Adjust the path as necessary

function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={hero} alt="Career Transformation" layout="fill" objectFit="cover" quality={100} priority />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-900/90 dark:to-indigo-900/90 opacity-40"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job Today</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover thousands of job opportunities tailored to your skills and career goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={JOBS_ROUTE}
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg shadow-lg"
          >
            Browse Jobs
          </Link>
          <Link
            href={LOGIN_ROUTE} 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-lg"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection