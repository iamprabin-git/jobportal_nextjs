// src/app/page.jsx
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import CompanyCard from '@/components/CompanyCard';
import Footer from '@/components/Footer';
import { jobs, companies } from '@/data';
import Link from 'next/link';

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);
  const featuredCompanies = companies.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job Today</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover thousands of job opportunities tailored to your skills and career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/jobs" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg shadow-lg"
              >
                Browse Jobs
              </Link>
              <Link
                href="/post-job" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-lg"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Jobs</h2>
              <Link href="/jobs" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all jobs
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="py-16 bg-gray-100 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Top Companies Hiring
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Ready to take the next step?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
              Create an account to save jobs and get personalized recommendations.
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}