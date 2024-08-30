import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { src: "https://www.svgrepo.com/show/303205/html-5-logo.svg" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu3cJKr2tQBSjHSVSmKSN3r6Vr-5jCNZ6qeOxEdBi0ICoAnI7c5w0-ivWPgRAD3WI1Mg&usqp=CAU" },
  { src: "https://www.svgrepo.com/show/184143/java.svg" },
  { src: "https://www.svgrepo.com/show/303206/javascript-logo.svg" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s" },
  { src: "https://www.svgrepo.com/show/452092/react.svg" },
  { src: "https://www.svgrepo.com/show/353735/firebase.svg" },
  { src: "https://neon.tech/favicon/favicon.png" },
  { src: "https://i.namu.wiki/i/vkGpBcmks1_NcJW0HUFa6jlwlM6h11B-8nxRRX4bYC703H4nLo7j4dQdRCC32gz8Q-BqRcAnQgFSXMjB8jPohg.svg" },
  { src: "https://i.namu.wiki/i/cXrwOT1vAT4rPnPlmIWNm2pAbdi0ZCB0TpegonRBwvR-FzS8iBgOexI07QO9V-faslFGib0G0NFgUjwrjTJj_w.svg" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-IfTA58NONTORVfigb72pKqp8hHiEm7SA&s" },
  { src: "https://static-00.iconduck.com/assets.00/docker-icon-1024x739-rivf80b4.png" },
  { src: "https://cdn.worldvectorlogo.com/logos/git-bash.svg" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" },
  { src: "https://www.svgrepo.com/show/376369/dotnet.svg" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6IR3EKgALq0lEUvpW3GmPH8rpAv1cK0_w&s" },
  { src: "https://www.svgrepo.com/show/452184/csharp.svg" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { src: "https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png" }
];

const Skills = () => (
    <motion.section 
      id="skills" 
      className="py-20 bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-400"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="group perspective"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              <motion.div 
                className="relative w-24 h-24 mx-auto"

              >
                <motion.div className="absolute inset-0 flex items-center justify-center bg-gray-700 rounded-xl shadow-lg">
                  <img src={skill.src} alt="Tech Stack Logo" className="w-16 h-16 object-contain filter invert" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-lg"
                  style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                >
                  <span className="text-white font-semibold text-lg">Skilled</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
  
  export default Skills;