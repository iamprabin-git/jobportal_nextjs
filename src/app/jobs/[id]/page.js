// src/app/jobs/[id]/page.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jobs } from '@/data';
import { notFound } from 'next/navigation';

export default function JobDetailPage({ params }) {
  const job = jobs.find(j => j.id === parseInt(params.id));
  
  if (!job) {
    return notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <p className="text-xl">{job.company}</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full">{job.location}</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">{job.type}</span>
                </div>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Job Description</h2>
                <div className="prose max-w-none dark:prose-invert">
                  <p>{job.description}</p>
                  
                  <h3>Responsibilities</h3>
                  <ul>
                    <li>Develop and maintain high-quality web applications using React and Next.js</li>
                    <li>Collaborate with designers to implement responsive UI components</li>
                    <li>Optimize applications for maximum speed and scalability</li>
                    <li>Write unit and integration tests to ensure code quality</li>
                    <li>Participate in code reviews and provide constructive feedback</li>
                  </ul>
                  
                  <h3>Requirements</h3>
                  <ul>
                    <li>3+ years of experience with React and modern JavaScript</li>
                    <li>Experience with state management libraries (Redux, MobX, or Context API)</li>
                    <li>Familiarity with Next.js framework</li>
                    <li>Understanding of RESTful APIs and GraphQL</li>
                    <li>Experience with version control systems (Git)</li>
                  </ul>
                  
                  <h3>Nice to Have</h3>
                  <ul>
                    <li>Experience with TypeScript</li>
                    <li>Knowledge of testing frameworks (Jest, React Testing Library)</li>
                    <li>Familiarity with CI/CD pipelines</li>
                    <li>Contributions to open-source projects</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card p-6 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Job Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Salary</span>
                        <span className="text-slate-900 dark:text-white font-medium">{job.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Job Type</span>
                        <span className="text-slate-900 dark:text-white font-medium">{job.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Experience</span>
                        <span className="text-slate-900 dark:text-white font-medium">Mid-Senior Level</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Location</span>
                        <span className="text-slate-900 dark:text-white font-medium">{job.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Posted</span>
                        <span className="text-slate-900 dark:text-white font-medium">{job.posted}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full">Apply Now</button>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Share This Job</h3>
                    <div className="flex space-x-3">
                      <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}