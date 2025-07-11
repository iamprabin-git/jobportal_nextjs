"use client";
import React from 'react';
import Image from 'next/image';
import sponsors from '@/constants/sponser';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import { SIGNUP_ROUTE } from '@/constants/routes';

const Sponsors = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our growing network of partners
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="py-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            className="swiper-container"
          >
            {sponsors.map((sponsor) => (
              <SwiperSlide key={sponsor.id}>
                <div className="bg-white rounded-xl p-5 flex items-center justify-center shadow-sm transition-all duration-300 border border-gray-100 h-32 mx-auto max-w-[250px]">
                  <div className="relative w-full h-30 transition-transform duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      height={500}
                      width={500}
                      className="h-30 w-full object-fill opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA for sponsors */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to become a partner?
          </p>
          <Link
            href={SIGNUP_ROUTE}
            className="inline-block bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      </div>
      
      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper-container .swiper-slide {
          transition: opacity 0.5s ease;
        }
        .swiper-container .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.5 !important;
        }
        .swiper-container .swiper-slide:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;