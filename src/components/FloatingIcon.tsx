
import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcon = () => {
  const icons = [
    { emoji: '⚛️', name: 'React', delay: 0 },
    { emoji: '📱', name: 'JavaScript', delay: 0.2 },
    { emoji: '🟢', name: 'Node.js', delay: 0.4 },
    { emoji: '🔷', name: 'TypeScript', delay: 0.6 },
    { emoji: '🎨', name: 'CSS', delay: 0.8 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full h-96 flex items-center justify-center"
    >
      {/* Central glowing orb */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-20 h-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full opacity-60 blur-sm"
      />

      {/* Floating icons around the center */}
      {icons.map((icon, index) => {
        const angle = (index * 360) / icons.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={icon.name}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: x,
              y: y,
              rotate: [0, 360]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: icon.delay },
              scale: { duration: 0.6, delay: icon.delay },
              x: { duration: 0.8, delay: icon.delay },
              y: { duration: 0.8, delay: icon.delay },
              rotate: { 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear",
                delay: icon.delay
              }
            }}
            whileHover={{ 
              scale: 1.5,
              zIndex: 10
            }}
            className="absolute w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-2xl cursor-pointer hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
          >
            {icon.emoji}
          </motion.div>
        );
      })}

      {/* Orbital rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 border border-neon-cyan/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-neon-purple/20 rounded-full"
      />
    </motion.div>
  );
};

export default FloatingIcon;
