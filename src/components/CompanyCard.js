// src/components/CompanyCard.jsx
import Link from 'next/link';

export default function CompanyCard({ company }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{company.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{company.jobsPosted} jobs</p>
          </div>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 line-clamp-3 mb-4">
          {company.description}
        </p>
        
        <Link 
          href={`/companies/${company.id}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Company
        </Link>
      </div>
    </div>
  );
}