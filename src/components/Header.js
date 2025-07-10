// src/components/Header.jsx
'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            JobPortal
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/jobs" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
              Jobs
            </Link>
            <Link href="/companies" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
              Companies
            </Link>
            <Link href="/resources" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
              Resources
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-3 text-slate-400" />
            </div>
            <ThemeToggle />
            <Link 
              href="/post-job" 
              className="btn-primary"
            >
              Post Job
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-3 text-slate-400" />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <Link 
                href="/post-job" 
                className="btn-primary flex-1 mr-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Post Job
              </Link>
              <ThemeToggle />
            </div>
            
            <nav className="space-y-3">
              <Link 
                href="/jobs" 
                className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                href="/companies" 
                className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                href="/resources" 
                className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}