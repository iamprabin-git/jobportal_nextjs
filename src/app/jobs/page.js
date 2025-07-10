// src/app/jobs/page.jsx
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import Footer from '@/components/Footer';
import { jobs } from '@/data';

export default function JobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Job Listings</h1>
            <p className="text-xl max-w-3xl">
              Browse through thousands of job opportunities from top companies around the world.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="md:w-1/4">
              <div className="card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Filters</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Job Type</h3>
                    <div className="space-y-2">
                      {['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'].map(type => (
                        <label key={type} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="rounded text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                          />
                          <span className="ml-2 text-slate-700 dark:text-slate-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Experience Level</h3>
                    <div className="space-y-2">
                      {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map(level => (
                        <label key={level} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="rounded text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                          />
                          <span className="ml-2 text-slate-700 dark:text-slate-300">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Salary Range</h3>
                    <select className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700">
                      <option>All Ranges</option>
                      <option>$30k - $50k</option>
                      <option>$50k - $80k</option>
                      <option>$80k - $100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                  
                  <button className="btn-primary w-full">Apply Filters</button>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-700 dark:text-slate-300">{jobs.length} jobs found</p>
                <select className="px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>
              
              <div className="space-y-6">
                {jobs.map(job => (
                  <JobCard key={job.id} job={job} />
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
      
      <Footer />
    </div>
  );
}