
import React from 'react';
import { motion } from 'framer-motion';
import FloatingIcon from './FloatingIcon';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan opacity-20 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple opacity-20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink opacity-15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neon-cyan text-lg font-medium mb-4"
          >
            Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="neon-text">Full Stack</span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Crafting immersive digital experiences with cutting-edge technologies. 
            Specialized in React, Node.js, and modern web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFFF" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/25"
            >
              Explore My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-morphism rounded-lg font-semibold text-foreground border border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D Icons */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <FloatingIcon />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
