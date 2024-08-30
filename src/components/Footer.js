import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer 
    className="bg-gray-900 text-white py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="mb-4 md:mb-0"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Nishit Patel. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;