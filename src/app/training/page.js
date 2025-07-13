
import CategoryTabs from '@/components/training/Category'
import Courses from '@/components/training/Courses'
import Hero from '@/components/training/Hero'
import React from 'react'

function TrainingPage() {
  return (
    <div className='container mx-auto px-4 py-28'>
      <Hero />
      <Courses />
      <CategoryTabs />
     
    </div>
  )
}

export default TrainingPage;
