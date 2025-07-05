// components/GraphicDesignSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import BlurryCirclesBackground from '@/components/BlurryCirclesBackround';


const GraphicDesignSection = ({ type, description, price, duration, image }) => {
  // Framer Motion variants (can reuse or create new ones for graphic design)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // New variant for the image card itself
  const imageCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-8 lg:p-16 relative overflow-hidden snap-center">
      {/* Background circles for visual interest */}
      <BlurryCirclesBackground />
      {/* Optional background element for visual interest (can be animated) */}
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Side: Title, Description, Price, Duration */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            {type}
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-gray-400 mb-6 max-w-prose mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-baseline gap-4 mb-8"
            variants={itemVariants}
          >
            <p className="text-5xl lg:text-6xl font-bold text-orange-500">{price}</p> {/* New color for Graphic Design */}
            <p className="text-xl lg:text-2xl text-gray-400">/{duration}</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Card */}
        <motion.div
          className="flex-1 w-full bg-white/10 rounded-xl shadow-2xl p-6 lg:p-10 flex items-center justify-center border-orange-500 border backdrop-blur-md" // New styles for the image card
          variants={imageCardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Inner container for the Next.js Image */}
          {/* Set a fixed height and max-width for the image container */}
          <div className="relative w-full h-72 sm:h-80 lg:h-96 max-w-xl overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill // This makes the image fill its parent container
              sizes="(max-width: 1024px) 100vw, 50vw" // Helps Next.js optimize image loading
              style={{ objectFit: 'contain' }} // KEY: Ensures image fits within bounds without cropping
              quality={80} // Adjust image quality for performance vs. fidelity
              className="object-contain" // Tailwind equivalent of objectFit
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;