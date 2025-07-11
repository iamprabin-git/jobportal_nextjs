import Image from 'next/image';
import React from 'react'
import placeholder from '@/assets/job-search.jpg';
import bg from '@/assets/bg.jpg'


function AuthLayout({children}) {
  return (
    <section className='flex justify-center py-20 max-w-screen mx-auto'>
      <Image  src={bg} alt='image' 
      height={2000} 
      width={2000} 
      className='h-auto w-full fixed top-0 left-0 -z-1 opacity-50'/>
      
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 shadow-blue-100 rounded-lg p-2 bg-white min-h-[50vh] dark:bg-gray-700 dark:border dark:border-gray-600'>
      <div className='py-8 px-5'>
        {children}</div>
        
        <Image  src={placeholder} alt='image' height={1200} width={1200} className='h-full object-cover w-auto rounded-r-xl hidden md:block'/>
      </div>
      
    </section>
  )
}

export default AuthLayout;