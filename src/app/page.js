// src/app/page.jsx

import JobCard from '@/components/JobCard';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Sponsors from '@/components/home/SponserShip';
import { JOBS_ROUTE, LOGIN_ROUTE } from '@/constants/routes';
import HiringCompanies from '@/components/home/CompanyLists';
import { companies, jobs } from '@/data';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);
  const featuredCompanies = companies.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Jobs</h2>
              <Link href={JOBS_ROUTE} className="text-blue-600 dark:text-blue-400 hover:underline">
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
        <HiringCompanies />

        {/* Call to Action */}
       <CTA />
       <Sponsors />
        <Testimonials />
      </main>
    </div>
  );
}