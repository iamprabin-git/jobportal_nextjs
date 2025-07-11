import { COMPANIES_ROUTE } from "@/constants/routes";
import { companies } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

export default function HiringCompanies() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Top Companies Hiring Now
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Discover opportunities at leading tech companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {companies.map(company => (
            <div 
              key={company.id}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-slate-600 rounded-xl overflow-hidden">
                    <Image 
                      src={company.logo.src} 
                      alt={company.logo.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 64px, 64px"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {company.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                        <FaPlusCircle className="h-4 w-4 mr-1"/>
                        
                        {company.jobsPosted} jobs
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-5">
                  {company.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-slate-600">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Active hiring
                    </span>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      View openings →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={COMPANIES_ROUTE} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center mx-auto">
            Browse All Companies
            <FaArrowRightLong className="h-5 w-5 ml-2"/>
            
          </Link>
        </div>
      </div>
    </section>
  );
}