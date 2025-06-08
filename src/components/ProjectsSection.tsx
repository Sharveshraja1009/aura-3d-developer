
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
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "📝",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with data visualization",
      image: "🌤️",
      tech: ["React", "D3.js", "API Integration"],
      category: "Frontend"
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
            My <span className="neon-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass-morphism p-6 rounded-2xl cursor-pointer group"
            >
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="glass-morphism p-8 rounded-2xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-6xl mb-4 text-center">{selectedProject.image}</div>
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full px-4 py-2 bg-neon-cyan text-black rounded-lg font-semibold"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
