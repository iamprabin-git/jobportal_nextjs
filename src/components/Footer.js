// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">JobPortal</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Connecting talented professionals with top companies worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Career Resources</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Resume Builder</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Job Alerts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Browse Candidates</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Employer Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
          <p>© {currentYear} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}