// Make sure this is a client component
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// This is a placeholder component for your animated SVG.
// You can use a library like svganimate.js or create a CSS animation.
const AnimatedWireframe = () => {
  // A simple representation. Replace with your actual animated SVG.
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect 
        x="20" y="20" width="360" height="260" rx="12" 
        stroke="rgba(255, 255, 255, 0.2)" 
        strokeWidth="2"
      />
      <motion.path 
        d="M 20 80 H 400" 
        stroke="rgba(255, 255, 255, 0.2)" 
        strokeWidth="2" 
      />
      <motion.rect x="40" y="40" width="80" height="20" rx="4" fill="rgba(255, 193, 7, 0.5)" />
      
      {/* Example of an animated path */}
      <motion.path
        d="M50 120 C 100 120, 100 180, 150 180 S 200 120, 250 120"
        stroke="#F59E0B" // Amber color
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
        <motion.path
        d="M50 220 L 150 220 L 180 260"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
};


const ArchitectCtaSection = () => {
  return (
    <section className="bg-[#111827] text-gray-300"> {/* Dark background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Text & Button Column --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
              Let's Architect Your Digital Future.
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg">
              We move beyond templates. Our process involves deep collaboration to build a bespoke digital foundation that is robust, scalable, and engineered for success.
            </p>
            
            <motion.button
              className="inline-flex items-center px-8 py-3 text-base font-semibold text-white transition-colors bg-transparent border-2 border-amber-500 rounded-full group hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Begin the Blueprint</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </motion.button>
          </motion.div>

          {/* --- Animated Visual Column --- */}
          <motion.div
            className="w-full h-80 lg:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <AnimatedWireframe />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectCtaSection;
