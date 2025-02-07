import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaThumbsUp, FaStar } from 'react-icons/fa';

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#f9fbfa] to-[#e3f1f8]">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-5xl font-extrabold text-center text-[#2c3a47] mb-16 tracking-tight"
          data-aos="fade-up"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#4aa3d5] to-[#356cac] p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${300 * (i + 1)}`}
            >
              <p className="text-white text-lg mb-6 italic">
                "The service was prompt, efficient, and beyond my expectations. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg"
                  alt="User"
                  className="w-14 h-14 rounded-full border-4 border-[#ffffff] mr-5"
                />
                <div>
                  <p className="font-bold text-white">Anil Kumar</p>
                  <p className="text-sm text-gray-200">Bangalore</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-white hover:text-[#ffbc00] mr-1 transition-transform ${
                          index < 4 ? 'scale-110' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
