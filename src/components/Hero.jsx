// components/Hero.js
import React from 'react';
import studentImg from '../assets/student.png'; // replace with your uploaded image path

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Highest-Rated</span> SAT <br />
              Course to reach <span className="text-blue-600">1500+</span> score
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-8">
              <div className="flex text-green-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 ml-2">Rated 4.7 on TrustPilot</span>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300">
              Book Free SAT Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 relative flex justify-center">
            <img src={studentImg} alt="Student" className="w-80 md:w-full rounded-lg z-10" />

            {/* Score Card Overlay */}
          
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
