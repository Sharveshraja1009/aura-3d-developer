
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Git", level: 95, icon: "📚" },
        { name: "Figma", level: 85, icon: "🎯" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-neon-cyan">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-neon-cyan font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full animate-glow"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
