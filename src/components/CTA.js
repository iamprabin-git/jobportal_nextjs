import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cta from '@/assets/CTA.jpg'; // Adjust the path as necessary

function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={cta}
          alt="Career transformation"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Career?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have advanced their careers with our training programs. 
            Start learning today!
          </p>
          
          <div className="mt-10">
            <Link
              href="/signup" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-emerald-500/30"
            >
              Get Started for Free
            </Link>
            <p className="mt-4 text-white/80 text-sm">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;