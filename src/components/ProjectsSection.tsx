
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js and advanced animations",
      image: "🌐",
      tech: ["React", "Three.js", "Framer Motion"],
      category: "Frontend",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration and modern UI",
      image: "💬",
      tech: ["React", "Socket.io", "OpenAI", "Express"],
      category: "Full Stack",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading dashboard with advanced charts",
      image: "📈",
      tech: ["React", "Chart.js", "WebSocket", "Redux"],
      category: "Frontend",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="glass-morphism rounded-2xl overflow-hidden cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                <div className="text-6xl mb-6 text-center group-hover:animate-float">
                  {project.image}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-neon-cyan/10 text-neon-cyan rounded-full border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg font-medium hover:bg-neon-cyan/30 transition-colors"
                  >
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-neon-purple/20 text-neon-purple rounded-lg font-medium hover:bg-neon-purple/30 transition-colors"
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-morphism rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-6 text-center">
                {selectedProject.image}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg font-medium"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
