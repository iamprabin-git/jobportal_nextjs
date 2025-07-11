"use client";
import testimonials from "@/data/testimonials";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials bg-gray-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300  max-w-3xl mx-auto">
            Hear from our learners who transformed their careers
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full p-6">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="relative flex-grow">
                      <IoIosArrowBack
                        className="absolute -top-6 left-0 text-gray-200 w-12 h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      />

                      <p className="text-gray-700 text-lg italic pl-8 pt-4">
                        {testimonial.text}
                      </p>

                      <div className="flex mt-6">
                        {[...Array(5)].map((_, i) => (
                          <IoIosArrowForward
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
             <IoIosArrowBack className="w-6 h-6 text-gray-700"/>
           
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <IoIosArrowForward className="w-6 h-6 text-gray-700"/>

          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
