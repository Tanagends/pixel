// components/ServicesSection.jsx

"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      width: `${Math.random() * 3 + 1}px`, // Made particles slightly larger
      height: `${Math.random() * 3 + 1}px`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 20 + 15}s`,
      animationDelay: `${Math.random() * 10}s`, // Increased max delay for more variation
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(generatedParticles);
  }, []);

  // ... (Framer Motion variants remain the same)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } },
  };
  const iconHoverVariant = {
    scale: 1.15,
    rotate: -5,
    transition: { type: 'spring', stiffness: 300 }
  };


  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            // The class "animate-rise" is now the key
            className="absolute bg-orange-500 rounded-full animate-rise"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              opacity: p.opacity,
              boxShadow: '0 0 10px rgba(249, 115, 22, 0.6)',
            }}
          />
        ))}
      </div>

      {/* The rest of your component's JSX remains exactly the same... */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... Title and Description ... */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            From responsive web design to captivating brand identities, we build digital solutions that drive growth and engage your audience.
          </p>
        </motion.div>
        
        {/* ... Service Cards Grid ... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
           {/* ... Service Cards ... */}
           <motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl ring-1 ring-gray-900/5 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-orange-500 text-white p-4 rounded-xl inline-block mb-6 shadow-md shadow-orange-500/30"
              whileHover={iconHoverVariant}
            >
              <Code size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Web Development</h3>
            <p className="text-gray-600 mb-6">
              We build high-performance, responsive websites and e-commerce platforms. Our focus on clean code and intuitive UI/UX ensures a seamless experience for your users.
            </p>
            <a href="/website-development" className="font-bold text-orange-600 hover:text-orange-500 transition flex items-center group">
              Explore Our Process <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl ring-1 ring-gray-900/5 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gray-800 text-white p-4 rounded-xl inline-block mb-6 shadow-md shadow-gray-800/30"
              whileHover={iconHoverVariant}
            >
              <PenTool size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Brand & Graphic Design</h3>
            <p className="text-gray-600 mb-6">
              Your brand is your story. We craft memorable logos, color palettes, and marketing materials that create a cohesive and compelling brand identity.
            </p>
            <a href="/graphic-design" className="font-bold text-orange-600 hover:text-orange-500 transition flex items-center group">
              View Our Portfolio <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
