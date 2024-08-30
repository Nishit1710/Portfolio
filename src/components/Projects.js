import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "TacTical TicTacToe",
    description: "A Mobile Game Application that allows the user to play Tic Tac Toe with a twist. The game is played on a 3x3 grid, but the player can only win by getting 3 in a row on the 3x3 grid they are playing on.",
    image: "https://cache.desktopnexus.com/thumbseg/554/554834-bigthumbnail.jpg",
    link: "https://github.com/MeetGodad/TacTical-TicTacToe",
  },
  {
    title: "ToDo List App",
    description: "ToDo List App is your go-to task management tool designed to help you stay on top of your to-do's with ease and efficiency. Whether you're managing daily chores, work projects, or personal goals, ToDo List App provides a simple, intuitive interface to keep everything organized.",
    image: "https://img.freepik.com/premium-photo/paper-document-approved-application-favorable-written-report-with-copy-space_671359-141.jpg",
    link: "https://cprg306-finalproject-xi.vercel.app/",
  },
  {
    title: "TechTextile",
    description: "TechTextile is an innovative B2B and B2C e-commerce platform specializing in yarn and fabric products. Our mission is to bridge the gap between Indian textile manufacturers and North American buyers, leveraging the substantial import market and facilitating global trade.",
    image: "https://www.undp.org/sites/g/files/zskgke326/files/styles/image_with_credit_caption_1392_x_651_/public/2021-07/Photo%203%20-%20431089702.jpeg?itok=syx3uZqO",
    link: "https://techtextile.vercel.app/",
  },
  {
    title: ".Net Blazor MAUI App",
    description: "MAUI App allows user to update, add, remove existing/new events. Event Organizations can easily access this application to manage theor upcoming or existing events.",
    image: "https://www.innovect.com/wp-content/uploads/2023/02/1.png",
    link: "https://github.com/Nishit1710/.Net-Blazor-MAUI-App",
  },
];

const Projects = () => (
  <motion.section 
    id="projects" 
    className="py-20 bg-black text-white"
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
        My Projects
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-75"
              whileHover={{ opacity: 0.75 }}
            ></motion.div>
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              whileHover={{ scale: 1.1, filter: "blur(4px)" }}
            />
            <motion.div 
              className="absolute inset-0 flex flex-col justify-end p-6"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-400 text-black py-2 px-4 rounded-full font-semibold text-sm hover:bg-yellow-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Projects;