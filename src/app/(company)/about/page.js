"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';

import CoreValues from '@/components/about/Values';
import TeamMember from '@/components/about/TeamMember';
import CTA from '@/components/about/CTA';


const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <Mission />
      {/* Values Section */}
      <CoreValues />

      {/* Team Section */}
      <TeamMember />

      {/* Statistics Section */}
    

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default AboutPage;