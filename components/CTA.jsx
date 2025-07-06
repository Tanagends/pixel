// Make sure this is a client component for the animations and interactivity
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // npm install lucide-react

const VibrantCtaSection = () => {
  // Replace this with the actual URL of the image you want to use
  //const imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop";

  const imageUrl = "/images/ctaaaa.png";
  return (
    // The background is now a more subtle radial gradient
    <section className="text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
          
          {/* --- Image Column --- */}
          <motion.div
            className="w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // A smooth cubic bezier curve
          >
            <img 
              src={imageUrl} 
              alt="A team collaborating on a project" 
              className="w-full h-full object-cover" 
            />
          </motion.div>

          {/* --- Text & Button Column --- */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Have a project in mind?
            </h2>
            <p className="text-lg text-black mb-10 max-w-xl mx-auto lg:mx-0">
              Let's turn your ideas into a digital reality. We're ready to listen, collaborate, and build something extraordinary together.
            </p>
            
            <motion.button
              className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-orange-600 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Spotlight Effect */}
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center">
                Get in Touch <ArrowRight className="ml-2" size={22} />
              </span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VibrantCtaSection;
