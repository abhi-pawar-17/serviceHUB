import React from "react"; 
import { motion } from "framer-motion";
import homebg from '../assets/bg.jpg'; // Adjust the path as needed

const Home = () => {
  return (
    <div id="home" className="bg-[#F4F4F4]">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${homebg})`,
        }}
      >
        <div className="absolute "></div>

        <div className="relative z-10 text-center text-[#2E3A45] px-4">
          <motion.h1
            className="text-5xl md:text-9xl font-extrabold mb-6"
            style={{ fontFamily: "'Gabriela Stencil', cursive" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ServiceHUB  
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 font-medium"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your Trusted Service Partner
          </motion.p>

          <motion.p
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We provide top-notch cleaning, plumbing, and electrician services
            to make your life easier. Reliable, professional, and affordable.
          </motion.p>

          <motion.a
            href="#services"
            className="bg-[#FF6F00] text-[#ffffff] px-10 py-3 rounded-full font-bold hover:bg-[#D0D0D0] transition-all duration-300 transform hover:scale-105 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Book Cleaning Services
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
