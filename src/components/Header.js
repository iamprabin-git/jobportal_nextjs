import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          JobPortal
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/jobs" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            Jobs
          </Link>
          <Link href="/companies" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            Companies
          </Link>
          <ThemeToggle />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Post Job
          </button>
        </nav>
      </div>
    </header>
  );
}