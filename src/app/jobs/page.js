import Header from '@/components/Header';

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Innovations",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    posted: "2 days ago",
    tags: ["React", "JavaScript", "CSS"]
  },
  // Add more job objects...
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Job Listings</h1>
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
            />
            <select className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
              <option>All Categories</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full-stack</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div 
              key={job.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{job.company} • {job.location}</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white mt-2">{job.salary}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-500 dark:text-gray-400 text-sm">{job.posted}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}