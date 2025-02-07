import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffffff] sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-[#2E3A45] text-3xl font-semibold hover:text-[#FF6F00] transition-all duration-300">
            <span className="font-bold">Service</span><span className="text-[#FF6F00]">Hub</span>
          </a>
        </div>
  
        {/* Hamburger Menu Icon (Mobile) */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-[#2E3A45] hover:text-[#FF6F00] focus:outline-none transition-all duration-300"
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
  
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a
            href="#home"
            className="text-[#2E3A45] hover:text-[#FF6F00] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#2E3A45] hover:text-[#FF6F00] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[#2E3A45] hover:text-[#FF6F00] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#plans"
            className="text-[#2E3A45] hover:text-[#FF6F00] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Plans
          </a>
          <a
            href="#contact"
            className="text-[#2E3A45] hover:text-[#FF6F00] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  
    {/* Mobile Menu (Sliding from the top animation) */}
    {isOpen && (
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden bg-[#F4F4F4] fixed inset-0 z-40 flex flex-col justify-center items-center"
      >
        {/* Close button (top-right position) */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-[#2E3A45] hover:text-[#FF6F00] text-3xl transition-all duration-300"
        >
          <FaTimes />
        </button>
  
        {/* Menu Items */}
        <div className="space-y-6 text-center">
          <motion.a
            href="#home"
            className="block text-[#2E3A45] hover:text-[#FF6F00] hover:bg-[#D0D0D0] px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            className="block text-[#2E3A45] hover:text-[#FF6F00] hover:bg-[#D0D0D0] px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a
            href="#services"
            className="block text-[#2E3A45] hover:text-[#FF6F00] hover:bg-[#D0D0D0] px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            Services
          </motion.a>
          <motion.a
            href="#plans"
            className="block text-[#2E3A45] hover:text-[#FF6F00] hover:bg-[#D0D0D0] px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            Plans
          </motion.a>
          <motion.a
            href="#contact"
            className="block text-[#2E3A45] hover:text-[#FF6F00] hover:bg-[#D0D0D0] px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    )}
  </nav>
  
  
  
  );
};

export default Navbar;
