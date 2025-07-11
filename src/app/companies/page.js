// src/app/companies/page.jsx

import { companies } from "@/data";
import Image from "next/image";

export default function CompaniesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Companies</h1>
            <p className="text-xl max-w-3xl">
              Discover leading organizations actively hiring for various roles across industries.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="md:w-1/4">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Filters</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Industry</h3>
                    <div className="space-y-2">
                      {['Technology', 'Finance', 'Healthcare', 'Design', 'Education'].map(industry => (
                        <label key={industry} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="rounded text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                          />
                          <span className="ml-2 text-slate-700 dark:text-slate-300">{industry}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Company Size</h3>
                    <div className="space-y-2">
                      {['Startup (1-50)', 'Small (51-200)', 'Medium (201-1000)', 'Large (1000+)'].map(size => (
                        <label key={size} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="rounded text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                          />
                          <span className="ml-2 text-slate-700 dark:text-slate-300">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Jobs Posted</h3>
                    <select className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700">
                      <option>All Companies</option>
                      <option>10+ Jobs</option>
                      <option>20+ Jobs</option>
                      <option>50+ Jobs</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Company Listings */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-700 dark:text-slate-300">{companies.length} companies found</p>
                <select className="px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700">
                  <option>Most Relevant</option>
                  <option>Most Jobs Posted</option>
                  <option>Alphabetical: A-Z</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map(company => (
                  <div 
                    key={company.id} 
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-slate-700 transition-all hover:shadow-lg"
                  >
                    <div className="p-6 flex items-start space-x-4">
                           <div className="flex-shrink-0 bg-gray-100 dark:bg-slate-700 rounded-lg p-2 w-20 h-20 flex items-center justify-center">
                        <Image 
                          src={company.logo.src}
                          alt={company.logo.alt}
                          width={64}
                          height={64}
                          className="rounded-lg object-contain w-16 h-16"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{company.name}</h3>
                        <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                          {company.jobsPosted} jobs
                        </span>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 dark:text-slate-300">{company.description}</p>
                    </div>
                    
                    <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700/50 flex justify-end">
                      <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                        View Jobs
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex space-x-1">
                  <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
                  <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">2</button>
                  <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">3</button>
                  <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">Next</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}