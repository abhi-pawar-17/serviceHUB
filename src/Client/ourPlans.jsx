import React from 'react';
import { FaCheckCircle, FaStar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OurPlans = () => {
  const containerVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section id="plans" className="py-16 bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#354259] mb-16 tracking-tight font-family-poppins">
          Choose Your Plan
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {['Basic', 'Standard', 'Premium'].map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-10 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 overflow-hidden"
            >
              <h3 className="text-3xl font-bold text-[#354259] mb-6 tracking-wide font-family-poppins">
                {plan} Plan
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Perfect for your service needs with enhanced features.
              </p>
              <p className="text-4xl font-extrabold text-[#4AA3D5] mb-8">
                ₹{index === 0 ? '799' : index === 1 ? '1499' : '2499'}/month
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg text-gray-600">
                  <FaCheckCircle className="text-[#4AA3D5] mr-3" /> {index + 1} Service per month
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <FaClock className="text-[#4AA3D5] mr-3" /> Up to {(index + 1) * 2} hours
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <FaStar className="text-[#4AA3D5] mr-3" /> {index === 2 ? '24x7' : 'Priority'} Support
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#4AA3D5] to-[#356CAC] text-white px-8 py-4 rounded-full font-bold text-lg transition-shadow duration-300 hover:shadow-lg"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPlans;
