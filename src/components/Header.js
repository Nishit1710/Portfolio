import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <header className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center space-x-4"
        >
          <div className="overflow-hidden" style={{ maxWidth: '300px', maxHeight: '300px' }}>
            <motion.img
              src="/Nishit.jpg"
              alt="Nishit Patel"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-yellow-400">Nishit Patel</h1>
            <p className="text-sm text-gray-300">Software Developer</p>
          </div>
        </motion.div>
        <nav className="hidden md:flex space-x-6 mt-6 md:mt-0">
          <a href="#skills" className="text-lg hover:text-yellow-400 transition duration-300">Skills</a>
          <a href="#projects" className="text-lg hover:text-yellow-400 transition duration-300">Works</a>
          <a href="#contact" className="text-lg hover:text-yellow-400 transition duration-300">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-20">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital <span className="text-yellow-400">Experiences</span> Through Code
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello! I'm a recently graduated Software Engineer with a burning passion for building modern web applications. Let's create something amazing together!
          </motion.p>
          <motion.div 
            className="flex space-x-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://linkedin.com/in/nishit-patel-425b59263" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/Nishit1710" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </motion.div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
              <a href="#projects">View Projects</a>
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-full h-96 bg-gradient-to-r from-gray-900 to-black-600 rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-2xl font-semibold">Code. Create. Innovate.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-500">
        {/* Footer content can remain here if needed */}
      </footer>
    </div>
  );
};

export default Header;