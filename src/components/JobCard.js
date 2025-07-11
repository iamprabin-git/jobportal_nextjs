// src/components/JobCard.jsx
import Link from "next/link";
import Image from "next/image";

export default function JobCard({ job }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {job.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              {job.company}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {job.location}
            </p>
          </div>

          {/* Company Logo */}
          <div className="flex-shrink-0 ml-4">
            {job.logo ? (
  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
    <Image
      src={job.logo.src}  // Pass only the src string
      alt={`${job.company} logo`}
      width={64}
      height={64}
      placeholder="blur"
      blurDataURL={job.logo.blurDataURL}
      className="object-contain"
    />
  </div>
            ) : (
              <div className="bg-gray-200 dark:bg-slate-700 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                <span className="text-gray-400 dark:text-slate-500 text-xs">
                  Logo
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="tag">{job.type}</span>
          {job.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-slate-900 dark:text-white font-medium">
            {job.salary}
          </span>
          <Link
            href={`/jobs/${job.id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
