import { LOGIN_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

function CTA() {
  return (
   <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-slate-800 dark:to-gray-400 text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join millions of professionals who have found their dream jobs through CareerConnect
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Create your profile"
            >
              Create Your Profile
            </button>
            <Link 
              href={LOGIN_ROUTE}
              className="bg-transparent border-2 border-white hover:bg-white/20 px-6 py-3 md:px-8 md:py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Post a job"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA
