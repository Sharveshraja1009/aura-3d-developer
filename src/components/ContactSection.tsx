
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '📱', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology and development.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <span>john@developer.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-xl hover:bg-neon-cyan/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-morphism p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/30 border border-secondary rounded-lg focus:border-neon-cyan focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/30 border border-secondary rounded-lg focus:border-neon-cyan focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/30 border border-secondary rounded-lg focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold rounded-lg disabled:opacity-50 transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
