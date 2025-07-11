import { FOOTER_LINKS } from "@/constants/footerLinks";
import FooterSection from "./FooterSection";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              JobPortal
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Connecting talented professionals with top companies worldwide.
            </p>
          </div>
          
          <FooterSection 
            title={FOOTER_LINKS.jobSeekers.title} 
            links={FOOTER_LINKS.jobSeekers.links} 
          />
          
          <FooterSection 
            title={FOOTER_LINKS.employers.title} 
            links={FOOTER_LINKS.employers.links} 
          />
          
          <FooterSection 
            title={FOOTER_LINKS.company.title} 
            links={FOOTER_LINKS.company.links} 
          />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
          <p>© {currentYear} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}