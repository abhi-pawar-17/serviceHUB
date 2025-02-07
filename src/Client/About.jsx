import React from "react";
import about1 from '../assets/1.webp';
import about2 from '../assets/2.webp';
import about3 from '../assets/3.webp';
import about4 from '../assets/4.webp';
import star from '../assets/s1.webp';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#ffffff] relative">
      {/* Diagonal Border and Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7e7dfe] via-[#fed3fe] to-transparent -z-10"></div>

      <div className="container mx-auto px-6 w-full sm:w-11/12 md:w-9/12 lg:w-[90%]">
        {/* Main Content Grid with Creative Borders */}
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 rounded-xl border-4 border-transparent bg-gradient-to-r from-[#fed3fe] via-[#7c7aff] to-transparent shadow-xl relative overflow-hidden">
          {/* Left Section (Text Content) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10">
            <h6 className="font-semibold text-[#FF6F00] mb-4 uppercase tracking-wider">
              About Uclean
            </h6>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2E3A45] mb-6 leading-tight"
              style={{ fontFamily: "'Gabriela Stencil', cursive" }}
            >
              Bringing Clean, Comfort, and Care Together.
              <img
                src={star}
                alt="Star Icon"
                className="w-8 inline-block ml-3 blink"
              />
            </h1>
            <p className="text-[#2E3A45] mb-8 text-lg sm:text-xl leading-relaxed">
              We are a team of passionate cleaning experts who take pride in
              delivering the highest standard of service. With years of
              experience in the industry, we’ve perfected our cleaning methods
              to ensure every job is done right.
            </p>
            <button className="bg-[#0f1e4c] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#D0D0D0] transition-all transform hover:scale-105">
              Book Service Now{" "}
              <img
                src={star}
                alt="Star Icon"
                className="w-6 inline-block ml-2 blink"
              />
            </button>
          </div>

          {/* Right Section (Image Grid with Overlapping Effect) */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {/* Image 1 */}
            <div className="relative group overflow-hidden rounded-lg hover:shadow-2xl transform transition-all duration-300">
              <img
                src={about1}
                alt="Cleaning"
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-semibold">
                  Deep Cleaning
                </span>
              </div>
            </div>
            {/* Image 2 */}
            <div className="relative group overflow-hidden rounded-lg hover:shadow-2xl transform transition-all duration-300">
              <img
                src={about2}
                alt="Cleaning"
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-semibold">
                  Eco-Friendly
                </span>
              </div>
            </div>
            {/* Image 3 */}
            <div className="relative group overflow-hidden rounded-lg hover:shadow-2xl transform transition-all duration-300">
              <img
                src={about3}
                alt="Cleaning"
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-semibold">
                  Office Cleaning
                </span>
              </div>
            </div>
            {/* Image 4 */}
            <div className="relative group overflow-hidden rounded-lg hover:shadow-2xl transform transition-all duration-300">
              <img
                src={about4}
                alt="Cleaning"
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-semibold">
                  Home Cleaning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blinking Effect */}
      <style>
        {`
          .blink {
            animation: blink-animation 1.5s infinite;
          }
          @keyframes blink-animation {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default About;
