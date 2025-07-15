import Link from 'next/link';

export default function FooterSection({ title, links }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {title}
      </h4>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}