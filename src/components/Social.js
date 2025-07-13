import SOCIAL_MEDIA from '@/data/socialMedia';
import Link from 'next/link';
import React from 'react';

function Social() {
  return (
    <div className="mt-12 pt-8 border-t border-blue-500 border-opacity-30">
      <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
      <div className="flex flex-wrap gap-3">
        {SOCIAL_MEDIA.map((social, index) => (
          <Link 
            key={index}
            href={social.url}
            className="bg-white dark:bg-slate-800 hover:bg-green-600 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 text-blue-700 dark:text-white text-xl"
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Social;