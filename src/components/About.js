import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section 
    id="about" 
    className="py-20 bg-gray-900 text-white relative overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* Background design elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-400"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 border border-gray-700">
            <motion.p 
              className="text-lg text-gray-300 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hello! I'm a recently graduated Software Engineer with a burning passion for building modern web applications. As a fresh face in the industry, I'm excited to bring my enthusiasm and up-to-date knowledge to create interactive and responsive websites using the latest technologies.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              My journey in software development is just beginning, and I'm eager to learn and grow. I believe in the power of continuous learning and am always on the lookout for new challenges that will push me to expand my skills and knowledge.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              While I may be new to the professional world, I'm armed with a solid foundation in software engineering principles and a toolkit of modern web technologies. I'm looking for an opportunity to apply my skills, learn from experienced professionals, and contribute to meaningful projects.
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contact" 
            className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect!
          </motion.a>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default About;