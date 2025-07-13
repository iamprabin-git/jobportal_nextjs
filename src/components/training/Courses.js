import COURSES_DATA from '@/data/courseData';
import React from 'react';



// CourseCard Component
const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
    <div className={`bg-gradient-to-r ${course.gradient} p-8 flex justify-center`}>
      <i className={`${course.iconClass} text-white text-6xl`}></i>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-3">{course.title}</h3>
      <p className="text-slate-600 mb-5">{course.description}</p>
      
      <div className="flex justify-between text-slate-600 mb-6">
        <span className="flex items-center gap-2">
          <i className="far fa-clock"></i> {course.hours}
        </span>
        <span className="flex items-center gap-2 text-amber-500">
          <i className="fas fa-star"></i> {course.rating}
        </span>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-700">
          <i className="fas fa-user"></i> {course.instructor}
        </div>
        <div className="text-lg font-bold text-indigo-600">{course.price}</div>
      </div>
    </div>
  </div>
);

// SectionHeader Component
const SectionHeader = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Courses</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      Hand-picked courses to help you develop the most in-demand skills
    </p>
  </div>
);

// ViewAllButton Component
const ViewAllButton = () => (
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
    View All Courses
  </button>
);

// Main Courses Component
function Courses() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <ViewAllButton />
        </div>
      </div>
    </section>
  );
}

export default Courses;