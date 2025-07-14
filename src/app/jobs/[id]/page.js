// src/app/jobs/[id]/page.jsx
"use client";
import { use } from 'react'; // Import the use hook

import { jobs } from '@/data';
import { notFound } from 'next/navigation';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import Image from 'next/image';

export default function JobDetailPage({ params }) {
  // Unwrap params promise with React.use()
  const { id } = use(params);
  
  // Find job using the unwrapped id
  const job = jobs.find(j => j.id === parseInt(id));
  
  if (!job) {
    return notFound();
  }

  // Function to handle social sharing
  const handleSocialShare = (platform) => {
    if (typeof window === 'undefined') return; // Ensure we're on client-side
    
    const jobUrl = window.location.href;
    const shareText = `Check out this ${job.title} position at ${job.company}: ${jobUrl}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`, '_blank', 'width=600,height=400');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`, '_blank', 'width=600,height=500');
        break;
      case 'instagram':
        navigator.clipboard.writeText(jobUrl).then(() => {
          alert('Link copied to clipboard! Paste it on Instagram');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank', 'width=800,height=600');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-26">
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
              {/* Company Logo */}
              {job.logo ? (
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                  <Image
                    src={job.logo.src}
                    alt={`${job.company} logo`}
                    width={80}
                    height={80}
                    className="object-contain max-h-full"
                  />
                </div>
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20 flex items-center justify-center text-gray-400">
                  No Logo
                </div>
              )}
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
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full cursor-pointer">Apply Now</button>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Share This Job</h3>
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleSocialShare('facebook')}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <FaFacebook className="w-5 h-5"/>
                      </button>
                      <button 
                        onClick={() => handleSocialShare('linkedin')}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <IoLogoLinkedin className='w-5 h-5'/>
                      </button>
                      <button 
                        onClick={() => handleSocialShare('instagram')}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
                        aria-label="Share on Instagram"
                      >
                        <FaSquareInstagram className="w-5 h-5"/>
                      </button>
                      <button 
                        onClick={() => handleSocialShare('whatsapp')}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                        aria-label="Share on WhatsApp"
                      >
                        <RiWhatsappFill className="w-5 h-5"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      

    </div>
  );
}