
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neon-cyan">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              dynamic, user-centric applications that blend innovative design with robust functionality.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with a curiosity for how things work, and has evolved into a passion 
              for crafting digital solutions that make a real impact. I thrive on challenges and 
              continuously learn new technologies to stay at the forefront of development.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">John Developer</h4>
                <p className="text-neon-cyan mb-4">Full Stack Engineer</p>
                <p className="text-sm text-muted-foreground">
                  "Code is poetry written in logic"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
